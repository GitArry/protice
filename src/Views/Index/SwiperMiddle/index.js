import React, { Component } from 'react'
import css from './index.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { withRouter } from 'react-router';

class SwiperMiddle extends Component {
  render() {
    return(
      <div className={css.swipermiddle + ' modules'}>
        <h2>置业指南</h2>
        <div className={"swiper-middle"}  style={{overflow: 'hidden'}}>
          <div className={"swiper-wrapper"}>
            {
              !this.props.list?null:
              this.props.list.list.map(item=> {
                return (
                  <div className={css.slide + " swiper-slide"} key={item.id} onClick={()=> this.toGuide(item.id)}>
                    <img src={item.litpic} alt={item.title} />
                    <div className={css.title}>{item.title}</div>
                    <div className={css.keyword}>{item.keyword}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
  componentDidUpdate() {
    if (this.props.list) {
      var swiper = new Swiper('.swiper-middle', {
        slidesPerView: 2,
        spaceBetween: 15,
        pagination: {
          clickable: true,
        },
      });
      swiper.allowClick = true
    }
  }
  toGuide(id) {
    this.props.history.push(`/guide/${id}`)
  }
}

export default withRouter(SwiperMiddle)