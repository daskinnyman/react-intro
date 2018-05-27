import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    input: "",
    posts: []
  };

  /**
   *處理輸入事件，並且setState
   * @param {any} e:輸入事件
   */
  _handleChange = e => {
    //藉由desturctor取得事件的來源名稱及內容
    const { name, value } = e.target;
    //重新設定狀態
    this.setState({ [name]: value });
  };
  
  _handleClick = () => {
    //複製一份新的內容陣列
    let postsFromState =[ ...this.state.posts];
    let input = this.state.input;
    //把新的值推入陣列
    postsFromState.push({ input });
    //重新設定狀態
    this.setState({ posts: postsFromState }, () => console.log(this.state));
  };
  render() {
    return (
      <div className="wrapper">
        <div className="input">
          <div className="input-container">
            <div className="avatar" />
            <input
              name="input"
              onChange={this._handleChange}
              placeholder="陳寶桁，在想什麼？"
            />
          </div>
          <div className="button-wrapper">
            <button onClick={this._handleClick}>下一步</button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
