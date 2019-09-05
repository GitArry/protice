import React, { Component } from 'react'
import css from './index.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { withRouter } from 'react-router';

class Houses extends Component {
  render() {
    return(
      <div className={css.houses3 + ' modules'}>
        <div className={css.houseT}>
          <p className={css.hotT}>附近房源</p>
          {/* <p className={css.hotM}>更多></p> */}
        </div>
        <div className={"swiper-infoo"}  style={{overflow: 'hidden'}}>
          <div className={"swiper-wrapper"} key={this.props.list.length}>
            {
              !this.props.list?null:
              this.props.list.map((item, index)=> {
                return (
                  <div className={css.slide + " swiper-slide"} key={index} onClick={()=> this.props.history.push(`/detail/${item.id}`)}>
                    <img src={item.thumburl} alt="" />
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
      var swiper = new Swiper('.swiper-infoo', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
          clickable: true,
        },
      });
      swiper.allowClick = true
    }
  }
}

export default withRouter(Houses)