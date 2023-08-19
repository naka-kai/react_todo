import React from "react";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="titlle">未完了のTODO</p>
        <ul>
          <li className="list-wrapper">
            <div className="list-row">
              <p>ああああ</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li className="list-wrapper">
            <div className="list-row">
              <p>いいいい</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="titlle">完了のTODO</p>
        <ul>
          <li className="list-wrapper">
            <div className="list-row">
              <p>うううう</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
