import React, {Component} from 'react'
import css from './index.module.scss'

class Talk extends Component {
  state = {
    talkList: [{value: '本店所有商品都十块，挑啥都十块，买啥都十块，原价五百万八百万的都十块，十块钱你买不了吃亏，你买不了上当，真正的清仓，真正的甩货，全场都十块，走过路过千万不要错过！', isMe: false}],
    replyList: ['你知道吗，你成功了！', '你成功了！', '你就要成功了！']
  }

  render() {
    return(
      <div className={css.talk}>
        <header className={'clear'}>
          <div className={css.nm + ' l'}>Arry</div>
          <div className={css.close + ' r'} onClick={()=> this.props.ev(false)}>关闭</div>
        </header>
        <main ref="main">
          {
            this.state.talkList.map((item, index)=> {
              return(
                <div key={index} className={css.container}>
                  <div className={item.isMe ? css.myhead : css.youhead}>
                    <img src={item.isMe ? process.env.PUBLIC_URL + '/img/jiang.png' : process.env.PUBLIC_URL + '/img/arry.png'} alt="" />
                  </div>
                  <div className={css.text}>
                    {item.value}
                  </div>
                </div>
              )
            })
          }
        </main>
        <footer className={'clear'}>
          <input type='text' placeholder="请输入" ref="myinput" />
          <div className={css.right + ' r'} onClick={()=> this.send()}>发送</div>
        </footer>
      </div>
    )
  }
  componentDidMount() {
    this.refs.myinput.addEventListener('keydown', (ev)=> {
      if(ev.keyCode === 13 && this.value !== '') {
        this.send()
      }
    })
  }

  componentDidUpdate() {
    this.refs.main.scrollTop = this.refs.main.scrollHeight
  }

  send() {
    if (this.refs.myinput.value === '') {
      return false
    }
    let replyIndex = Math.floor(Math.random() * this.state.replyList.length)
    this.setState({
      talkList: [...this.state.talkList, {value: this.refs.myinput.value, isMe: true}]
    })
    setTimeout(()=> {
      this.setState({
        talkList: [...this.state.talkList, {value: this.state.replyList[replyIndex], isMe: false}]
      })
    }, 200)
    this.refs.myinput.value = ''
    return true;
  }
}

export default Talk