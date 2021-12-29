const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  // onclickAddが実行されたらinputエリアを初期化する
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// 未完了リストからタスクを消す
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストにテキストを追加する
const createIncompleteList = (text) => {
  //div生成 タグの生成
  const div = document.createElement("div");
  // クラスの生成
  div.className = "list-row";

  // liタグの作成
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)の生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    // 完了ボタンをクリックした時に未完了リストから削除する
    deleteFromIncompleteList(completeButton.parentNode);
    //　完了ボタンを押すと完了リストの方に移動する

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode; //上の<div>タグの塊
    const text = addTarget.firstElementChild.innerText; // テキスト情報を取得

    // 完了ボタンをクリックした時に完了リストに追加する要素を作成する

    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    //　button（戻る）ボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      //　完了リストから削除する
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // 未完了リストに追加する

      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text); //　自分のメソッドをメソッド内でも使用することができる
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンを押された場合に親のdivタグ(list-row)を削除する
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了リストに追加する
  document.getElementById("incomplete-list").appendChild(div);
};
