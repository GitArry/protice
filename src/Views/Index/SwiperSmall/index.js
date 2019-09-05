import React, { Component } from 'react'
import css from './index.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { withRouter } from 'react-router';

class Houses extends Component {
  render() {
    return(
      <div className={css.houses + ' modules'}>
        <h2>甄选全球优质好房</h2>
        <div className={"swiper-container"}>
          <div className={"swiper-wrapper"}>
            {
              !this.props.list?null:
              this.props.list.list.map(item=> {
                return (
                  <div className={css.slide + " swiper-slide"} key={item.id} onClick={()=>this.toSearch(item.englishcountry, item.unique_name)}>
                    <img src={item.img_url} alt={item.chinesecountry} />
                    <div className={css.cn}>{item.chinesecountry}</div>
                    <div className={css.en}>{item.englishcountry}</div>
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
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2.5,
        spaceBetween: 15,
        pagination: {
          clickable: true,
        },
      });
      swiper.allowClick = true
    }
  }
  toSearch(country, city) {
    this.props.history.push(`/search/${country}&${city}`)
  }
}

export default withRouter(Houses)