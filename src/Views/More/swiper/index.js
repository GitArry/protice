import React, { Component } from 'react'
import css from './index.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { withRouter } from 'react-router';

class MoreSwiper extends Component {
  render() {
    return(
      <div className={css.houses + ' modules'}>
        <div className={css.houseT}>
          {/* <p className={css.hotT}>精选房源</p> */}
          {/* <p className={css.hotM}>更多></p> */}
        </div>
        <div className={"swiper-info"}  style={{overflow: 'hidden'}}>
          <div className={"swiper-wrapper"} key={this.props.list.length}>
            {
              !this.props.list?null:
              this.props.list.map((item,index)=> {
                return (
                  <div className={css.slide + " swiper-slide"} key={index}>
                    <img src={item.litpic} alt="" />
                    <p className={css.housetitl}>
                      <span className={css.spanA}>{item.city_name}</span>
                      <span className={css.spanB}>{item.title}</span>
                    </p>
                    <p className={css.houseprice} dangerouslySetInnerHTML={{ __html: item.price_string}}></p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    if (this.props.list) {
      var swiper = new Swiper('.swiper-info', {
        slidesPerView: 1,
        // spaceBetween: 10,
        pagination: {
          clickable: true,
        },
      });
      swiper.allowClick = true;
      console.log(this.props.list,'1')
    }
  }
}

export default withRouter(MoreSwiper)