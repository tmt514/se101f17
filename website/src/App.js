import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import update from 'immutability-helper';

class ListItemBullet extends Component {
  render() {
    let cssClasses = `listbullet ${this.props.color} empty`;
    return (
      <div className={cssClasses}></div>
    );
  }
};

class MyRouteMap extends Component {
  render() {
    const renderList = (list) => {
      const lis = list.map((str, index) => {
        return (<li key={index}><ListItemBullet color={this.props.color} /><span className='description'>{str}</span></li>);
      })
      return lis;
    };

    let cssClasses = `App-routemap ${this.props.color}`;

    return (
      <ul className={cssClasses} style={{ marginTop: '50px' }}>
        { renderList(this.props.datalist) }
      </ul>
    );
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      list_unix: [
        "一些 Terminal 常用小工具",
        "Unix* 檔案系統",
        "vi 教學",
        "git 教學",
        "test item 4",
        "test item 5"
      ],
      'list_system': [
        "作業系統概述",
        "分散式系統架構",
        "Scaling Up"
      ],
      'list_data': [
        "大數據分析簡介",
        "TensorFlow 簡介",
      ],
      'list_algo': [
        "Python3 語法介紹",
        "演算法簡介",
        "基礎資料結構",
        "字串處理",
        "動態規劃",
        "圖論演算法"
      ]
    };
  }

  handleClick(e) {
    var p = this.state.list_data;
    p.push("Test Item");
    var newState = update(this.state, {'list_data': {$set: p}});
    this.setState(newState);
  }

  render() {
  
    return (
      <div className="App">
        <div className="App-header">
          <h1>SE101: 我想成為軟體工程師！</h1>
          <span className="App-intro">UMich Taiwanese Software Engineers Reading Group - Fall 2017</span>
        </div>
        <button onClick={() => this.handleClick()}>Add Item</button>
        
        <MyRouteMap datalist={this.state.list_unix} color='red' />
        <MyRouteMap datalist={this.state.list_system} color='green' />
        <MyRouteMap datalist={this.state.list_data} color='blue' />
        <MyRouteMap datalist={this.state.list_algo} color='yellow' />
      </div>
    );
  }
}

export default App;
