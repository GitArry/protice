import React, { Component } from 'react';
import { withRouter } from 'react-router'
import css from './index.module.scss'
import {Icon} from 'antd'

class SearchHeader extends Component {
  render() {
    return(
      <div className={css.searchheader}>
        <div className={css.left} onClick={()=> this.props.history.goBack()}>
          <Icon type="left" />
        </div>
        <div className={css.input} onClick={()=> this.props.history.push('/SearchCity')}>
          <Icon type="search" style={{
            fontSize: '0.16rem',
            paddingRight: '0.05rem'
          }}/>
          <span>{this.props.citynm + '买房'}</span>
        </div>
      </div>
    )
  }
}

export default withRouter(SearchHeader)