import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import React, { Component } from 'react'
import { withRouter } from 'react-router';

class SwiperAD extends Component {
  render() {
    return (
      <div className={'swiper-ad'} style={{overflow: 'hidden'}}>
        <div className={"swiper-wrapper"}>
          {
            this.props.list.map(item=> {
              return (
                <div className={'swiper-slide'} key={item.ad_id} onClick={()=> this.toDetail(item.adlink)} style={{height: '2.3rem'}}>
                  <img src={item.adpicture} alt='item.title' style={{width: '100%'}}/>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  componentDidUpdate() {
    if (this.props.list) {
      var swiper = new Swiper('.swiper-ad', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          clickable: true,
        },
      });
      swiper.allowClick = true
    }
  }
  toDetail(idLink) {
    let adReg = /-new-(.*)\?/
    adReg.test(idLink)
    this.props.history.push(`/detail/${RegExp.$1}`)
  }
}

export default withRouter(SwiperAD)