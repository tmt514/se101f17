import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import update from 'immutability-helper';

class ListItemBullet extends Component {
  render() {
    let cssClasses = `listbullet`;
    const bulletStyle = {
      border: `5px solid ${this.props.color}`,
      backgroundColor: 'white'
    };
    return (
      <div className={cssClasses} style={bulletStyle}></div>
    );
  }
};

class MyRouteMap extends Component {
  render() {
    const renderList = (list) => {
      const lis = list.map((data, index) => {
        return (<li key={index}><ListItemBullet color={this.props.color} />
        {
          data.url?
          (<a href={data.url}><span className='description'>{data.name}</span><div className='details'>This is a test.<br/>This is second line</div></a>)
          :
          (<span className='description'>{data.name}</span>)
        }
        </li>);
      })
      return lis;
    };

    const cssClasses = `App-routemap ${this.props.color}`;
    const ulStyle = {
      //color: this.props.color,
      marginTop: '30px'
    };
    const ulBeforeStyle = {
      content: " ",
      position: 'absolute',
      marginLeft: '8px',
      left: '0px',
      top: '20px',
      bottom: '40px',
      width: '12px',
      zIndex: -5,
      backgroundColor: this.props.color
    };

    return (
      <div className="App-routemap-div">
        <h2>{this.props.title}</h2>
      <ul className={cssClasses} style={ulStyle}>
        <div style={ulBeforeStyle}></div>
        { renderList(this.props.datalist) }
      </ul>
      </div>
    );
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      list_unix: [
        {
          name: "Git 使用與教學",
          url: "https://se101.mtsa.me/Slide/Git/#/"
        }
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
        
        <div className="App-contents">
        <MyRouteMap title='黑框框與開發者工具'datalist={this.state.list_unix} color='red' />
        <MyRouteMap title='系統架設與維運' datalist={this.state.list_system} color='darkgreen' />
        <MyRouteMap title='資料科學與技術' datalist={this.state.list_data} color='darkblue' />
        <MyRouteMap title='編程面試與程式語言' datalist={this.state.list_algo} color='orange' />
        </div>
      </div>
    );
    //<button onClick={() => this.handleClick()}>Add Item</button>
  }
}

export default App;
