import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';
import css from './index.module.scss'
import './index.css'

import SwiperAD from './SwiperAD';
import Search from './Search'
import Navs from './Navs'
import SwiperSmall from './SwiperSmall'
import HotCity from './HotCity'
import NavMiddle from './NavMiddle'
import SearchMiddle from './SwiperMiddle'
import SwiperBig from './SwiperBig'
import Talk from './../Talk'

import {getIndexListData} from './actionCreator'
import {connect} from 'react-redux'

class Index extends Component {
  state = {
    adList: [],
    dataList: [],
    isTalkShow: false,
    windowHeight: 0
  }
  unsubscribe = null
  componentDidMount() {
    axios({
      url: '/index.php/wechatapp/SaleHouse/getAdsList?src=webapp'
    }).then(res=> {
      this.setState({
        adList: res.data.data
      })
    })
    if (this.props.indexList.length === 0) {
      this.props.getIndexListData()
    }
  }
  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }
  render() {
    return (
      <div className={css.header + ' indexheader'}>
        <header>异乡置业</header>
        <SwiperAD list={this.state.adList} />
        <Search />
        <Navs />
        <SwiperSmall list={this.props.indexList[1]} />
        <HotCity list={this.props.indexList[2]} />
        <NavMiddle ev={(e)=> this.setTalk(e)} />
        <SearchMiddle list={this.props.indexList[3]} />
        <SwiperBig list={this.props.indexList[4]} />
        <div className={css.talk} style={this.state.isTalkShow?{zIndex: 999, left: 0} : {zIndex: -1, left: '-4rem'}}>
          <Talk ev={(e)=> this.setTalk(e)} />
        </div>
      </div>
    )
  }
  setTalk(e) {
    if(e) {
      document.body.style.overflow = 'hidden'
      this.setState({
        isTalkShow: e
      })
    } else {
      this.setState({
        isTalkShow: e
      }, ()=> {
        document.body.style.overflow = 'auto'
      })
    }
  }
}

const mapStateToProps = (state)=> {
  return {
    indexList: state.indexList
  }
}
const mapDispatchToProps = {
  getIndexListData
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))