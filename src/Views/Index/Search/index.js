import React, { Component } from 'react'
import { withRouter } from 'react-router'
import css from './inedx.module.scss'
import {Icon} from 'antd'

class Search extends Component {
  render() {
    return (
      <div className={css.search} onClick={()=> this.toSearchCity()} style={{zIndex: 99, position: 'relative'}}>
        <div className={css.s}>
          <Icon type="search" style={{
            color: '#999', 
            fontSize: '0.2rem',
            width: '0.25rem',
            paddingLeft: '0.15rem',
            paddingRight: '0.1rem',
            lineHeight: '0.45rem'
          }} />
          <span className={css.right}>搜索您想买房的城市</span>
        </div>
      </div>
    )
  }
  toSearchCity() {
    this.props.history.push('/searchcity')
  }
}

export default withRouter(Search)