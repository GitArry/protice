import React, { Component } from 'react'
import {Icon} from 'antd'
import css from './index.module.scss'
import { withRouter } from 'react-router'

class Navs extends Component {
  render() {
    let iconStyle = {
      fontSize: '0.3rem',
      color: '#ff5a5f',
      lineHeight: '0.5rem'
    }
    return (
      <ul className={css.navs}>
        <li onClick={()=> this.props.history.push('/goodhouse')}>
          <Icon type="home" style={iconStyle} />
          <div>精选好房</div>
        </li>
        <li onClick={()=> this.props.history.push('/helpme')}>
          <Icon type="bank" style={iconStyle} />
          <div>帮我找房</div>
        </li>
        <li onClick={()=> this.props.history.push('/calculator')}>
          <Icon type="dollar" style={iconStyle} />
          <div>房贷计算器</div>
        </li>
      </ul>
    )
  }
}

export default withRouter(Navs)