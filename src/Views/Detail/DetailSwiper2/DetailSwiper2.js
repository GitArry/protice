import React, { Component } from 'react'
import css from './index.module.scss'
import Swiper from 'swiper'
// import '_swiper@4.5.0@swiper/dist/css/swiper.css'
import { withRouter } from 'react-router';

class DetailSwiper2 extends Component {
  render() {
    return(
      <div className={css.houses + ' modules'}>
        {/* <div className={css.houseT}>
          <p className={css.hotT}>精选房源</p>
          <p className={css.hotM}>更多></p>
        </div> */}
        <div className={"swiper-container"}  style={{overflow: 'hidden'}}>
          <div className={"swiper-wrapper"} key={this.props.list.length}>
            {
              !this.props.list?null:
              this.props.list.map((item,index)=> {
                return (
                  <div className={css.slide + " swiper-slide"} key={index}>
                    {/* <img src={item} alt="" /> */}
                    <div className={css.box}>
                    <div className={css.boxtitle}>{item.title}</div>
                    <div className={css.boxsize}>总面积{item.size}平</div>
                    <div className={css.boxprice} dangerouslySetInnerHTML={{ __html:item.price_rmb_string}}></div>
                    </div>

                    {/* <p className={css.housetitl}> */}
                      {/* <span className={css.spanA}>{item.city_name}</span>
                      <span className={css.spanB}>{item.title}</span>
                    </p> */}
                    {/* <div className={css.pagination +" swiper-pagination"}></div> */}
                    {/* <p className={css.houseprice} dangerouslySetInnerHTML={{ __html: item.price_string}}></p> */}
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
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1.6,
        // slidesPerView: 2,
        //  spaceBetween: 10,
        
        pagination: {
          clickable: true,
          
            el: '.swiper-pagination',
            type: 'fraction',
          
        },
      });
      swiper.allowClick = true
    }
  }
}

export default withRouter(DetailSwiper2)