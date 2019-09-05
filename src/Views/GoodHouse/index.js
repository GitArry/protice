import React, {Component} from 'react'
import HouseList from './../../Components/HouseList'
import css from './index.module.scss'

import GHHeader from './GHHeader'
import NavImg from './NavImg';
import {getListData} from './actionCreator'
import {connect} from 'react-redux'

class GoodHouse extends Component {
  state = {
    datalist: [],
    clickIndex: 0
  }
  unsubscribe = null
  componentDidMount() {
    if(this.props.list.length === 0) {
      this.props.getListData()
    } else {
      window.addEventListener('scroll', this.MyScroll)
    }
  }
  componentDidUpdate() {
    window.addEventListener('scroll', this.MyScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.MyScroll)
    this.unsubscribe && this.unsubscribe()
  }
  render() {
    return (
      <div className={css.goodhouse}>
        <GHHeader />
        {
          this.props.list.length === 0 ? null : 
          <div>
            <nav ref='nav'>
              <NavImg data={this.props.list[0]} />
              <ul ref='navUl'>
              {
                this.props.list.map((item, index)=> {
                  return (
                    <li className={this.state.clickIndex === index ? css.clicked : ''} key={index} onClick={()=> this.Clicked(index)}>{item.title}</li>
                  )
                })
              }
              </ul>
            </nav>
            <HouseList info={this.props.list[this.state.clickIndex].houses} />
          </div>
        }
      </div>
    )
  }
  MyScroll = ()=> {
    if (window.scrollY > 200) {
      this.refs.navUl.style = 'position: fixed;top: 0;left: 0;'
      this.refs.nav.style = 'margin-bottom: 0.64rem'
    } else {
      this.refs.navUl.style = ''
      this.refs.nav.style = ''
    }
  }
  Clicked(index) {
    this.setState({
      clickIndex: index
    })
  }
}

const mapStateToProps = (state)=> {
  return {
    list: state.list
  }
}
const mapDispatchToProps = {
  getListData
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodHouse)