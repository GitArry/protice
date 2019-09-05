import React, {Component} from 'react'
import {Icon} from 'antd';
import css from './index.module.scss'
import {withRouter} from 'react-router'

class GHHeader extends Component {
  render() {
    return (
      <header className={css.header}>
        精选好房
        <Icon type="left" style={{
          fontSize: '0.2rem',
          position: 'absolute',
          top: '0',
          left: '0.1rem',
          color: '#ccc'
        }} onClick={()=> this.props.history.goBack()}/>
      </header>
    )
  }
}

export default withRouter(GHHeader)