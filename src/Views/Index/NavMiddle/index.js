import React, { Component } from 'react'
import css from './index.module.scss'
import { withRouter } from 'react-router';

class NavMiddle extends Component {
  render() {
    return(
      <div className={css.navmiddle + ' modules clear'}>
        <div className={css.left + ' l clear'} onClick={()=> this.props.ev(true)}>
          <img src="https://pcpic.uhouzz.com/webappsaleonline/images/c49f2dfdba283496e01623e229b0d4aa.png" alt="" />
          <div className={css.leftR + ' l'}>
            <div>买房小助手</div>
            <div className={css.btm}>海外置业就找我吧</div>
          </div>
          <div className={css.hot}>热门</div>
        </div>
        <div className={css.right + ' l'} onClick={()=> this.toCalculator()}>
          <div className={css.rightdiv}>房贷计算器</div>
          <div className={css.free}>免费</div>
        </div>
      </div>
    )
  }
  toCalculator() {
    this.props.history.push('/calculator')
  }
}

export default withRouter(NavMiddle)