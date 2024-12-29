import axios from 'axios';
import { createErrorElement, createElements } from './createElement.js';

// Ajax：「Asynchronous JavaScript + XML」の略。
// JavaScriptとXMLを使用して非同期にサーバーと通信する技術のことを指し、
// サーバーとの通信にはXMLHttpRequestを使用します。

// JSONは「JavaScript Object Notation」の略。
// JavaScriptのオブジェクトの書き方を元にしたデータの定義方法
// JSONのキーは必ず""(ダブルクォーテーション)で囲む必要がある。

// JSONがよく使用される理由：
// - フォーマットがシンプルでファイルサイズが小さい
// - JavaScriptのオブジェクトを元にしているので、JavaScriptとの相性が良い

// Ajaxの利点：
// 非同期にサーバーと通信することで、再読み込みを行うことなくページの一部を更新できる
// サーバーとの通信中もブラウザ操作を行える

window.addEventListener('DOMContentLoaded', () => {
  // HTMLのパース（解析）が完了したら実行される
  // formタグを取得
  const formElement = document.forms['search-form'];

  formElement.addEventListener('submit', (event) => {
    // 「検索」ボタンをクリックした後の処理
    // formのデフォルトの動作をキャンセル
    event.preventDefault();
    // console.log('click');

    // Nodeと図鑑番号の取得
    const characterElement = document.getElementById('character');
    const messageElement = document.getElementById('error-message');
    const pictureBookId = formElement.elements['id'].value;
    
    // 表示の初期化
    if (messageElement !== null) messageElement.remove();
    while (characterElement.lastChild) {
      characterElement.removeChild(characterElement.lastChild);
    }

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pictureBookId}`).then(({ data }) => {
      // API通信が成功した時の処理
      // console.log(data);

      // ポケモンの画像url
      const imgPath = data.sprites.other['official-artwork'].front_default;
      // 日本語訳のリクエスト先url
      const jaRequestUrl = data.species.url;

      // ポケモン名の日本語訳を取得するためにAPIリクエスト
      axios.get(jaRequestUrl).then(({ data }) => {
        // ポケモン名の日本語訳
        const characterName = data.names[0].name;

        //取得したポケモンの情報をもとに表示するHTML要素を作成
        const imgElement = `<img src="${imgPath}" width="475" height="475" alt="" class="character__img">`;
        const nameElement = `<p class="character__name">${characterName}</p>`;
        const fragment = createElements(imgElement + nameElement);

        // 作成したHTML要素をDOMに反映
        characterElement.appendChild(fragment);
      }).catch(() => {
        // リクエストに失敗した場合はエラーメッセージを表示
        formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
        
      });
    }).catch(error => {
      // API通信が失敗した時の処理
      // リクエストに失敗した場合はエラーメッセージを表示
      switch (error.response && error.response.status) {
        case 404:
          formElement.after(createErrorElement(error.message));
          break;
        default:
          formElement.after(createErrorElement('エラーが発生しました。時間をおいて再度お試しください。'));
          break;
      }
    
    });
  });
});