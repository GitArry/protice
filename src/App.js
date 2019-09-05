import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    console.log('　　　　　　　 ┏┓       ┏┓+ +')
    console.log('　　　　　　　┏┛┻━━━━━━━┛┻━━┓ + +')
    console.log('　　　　　　　┃　　　　　　  ┃')
    console.log('　　　　　　　┃　　　━　　　 ┃ ++ + + +')
    console.log('　　　　　　 █████━█████    ┃+')
    console.log('　　　　　　　┃　　　　　　  ┃ +')
    console.log('　　　　　　　┃　　　┻　　 　┃')
    console.log('　　　　　　　┃　　　　　 　 ┃ + +')
    console.log('　　　　　　　┗━━━┓　　  ┏━━┛')
    console.log('　　　　　　　　　┃　　  ┃')
    console.log('　　　　　　　　　┃　　  ┃ + + + +')
    console.log('　　　　　　　　　┃　　　┃　Code is far away from     bug with the animal protecting')
    console.log('　　　　　　　　　┃　　　┃ + 　　　　         神兽保佑,代码无bug')
    console.log('　　　　　　　　　┃　　　┃')
    console.log('　　　　　　　　　┃　　　┃　　+')
    console.log('　　　　　　　　　┃　 　 ┗━━━┓ + +')
    console.log('　　　　　　　　　┃ 　　　 　 ┣┓')
    console.log('　　　　　　　　　┃ 　　　　 ┏┛')
    console.log('　　　　　　　　　┗┓┓┏━━━┳┓┏┛ + + + +')
    console.log('　　　　　　　　　 ┃┫┫　 ┃┫┫')
    console.log('　　　　　　　　　 ┗┻┛　 ┗┻┛+ + + +')
    return (
      <div style={{width: '100%', height: '100%'}}>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default App
