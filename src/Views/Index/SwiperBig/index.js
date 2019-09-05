import React, { Component } from 'react'
import css from './index.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { withRouter } from 'react-router';

class SwiperBig extends Component {
  render() {
    return(
      <div className={css.swiperbig + ' modules'}>
        <h2>热门房产推荐</h2>
        <div className={css.myswiper + " swiper-Big"}>
          <div className={"swiper-wrapper"}>
            {
              !this.props.list?null:
              this.props.list.list.map(item=> {
                return (
                  <div className={css.slide + " swiper-slide"} key={item.id} onClick={()=> this.toDetail(item.id)}>
                    <div className={css.img}>
                      <img src={item.thumburl} alt={item.title} />
                      <div className={css.roi + ' clear'}>
                        <div className={css.roiL + ' l'}>近一年涨幅</div>
                        <div className={css.roiR + ' l'}>{item.roi + '%'}</div>
                      </div>
                    </div>
                    <div className={css.bottom}>
                      <div className={css.title + ' clear'}>
                        <span className={css.titL + ''}>{item.chinesecity}</span>
                        <span className={css.titR + ''}>{item.title}</span>
                      </div>
                      <div className={css.price}>{item.price_rmb_string}</div>
                      <div className={css.rent}>{item.rent}</div>
                      <div className={css.tag + ' clear'}>
                        {
                          item.housetag.map(tagitem => {
                            return (
                             <div style={{background: tagitem.tag_color}} key={tagitem.tagname}>{tagitem.tagname}</div>
                            )
                          })
                        }
                      </div>
                    </div>
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
      var swiper = new Swiper('.swiper-Big', {
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
          clickable: true,
        },
      });
      swiper.allowClick = true
    }
  }
  toDetail(id) {
    this.props.history.push(`/detail/${id}`)
  }
}

export default withRouter(SwiperBig)