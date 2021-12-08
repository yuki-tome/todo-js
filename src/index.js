import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了から指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");
  li.className = "list-row";

  //p生成
  const p = document.createElement("p");
  p.innerText = text;
  p.className = "todo";

  //button（完了）タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下の初期化
    addTarget.textContent = null;

    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを(div)を完了リストから削除
      const deleteButton = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteButton);

      //テキストを取得
      const text = addTarget.firstElementChild.innerText;

      //div以下の初期化
      addTarget.textContent = null;

      //pタグを生成
      const p = document.createElement("p");
      p.innerText = text;
      createIncompleteList(text);
    });

    //liタグに子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //button（削除）タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを（li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //liuタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
