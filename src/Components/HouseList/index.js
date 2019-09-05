import React, {Component} from 'react'

import css from './index.module.scss'
import {withRouter} from 'react-router';


class HouseList extends Component {
  render() {
    return (
      <ul className={css.houselist}>
        {
          this.props.length === 0 ?
          null:
          this.props.info.map(item => {
            return (
              <li key={item.id || item.house_id} onClick={()=> this.toDetail(item.id || item.house_id)}>
                <div className={css.img}>
                  <img src={item.thumburl} alt="" />
                  <div className={css.roi + ' clear'}>
                    <div className={css.roiL + ' l'}>近一年涨幅</div>
                    <div className={css.roiR + ' l'}>{item.roi + '%'}</div>
                  </div>
                </div>
                <div className={css.bottom}>
                  <div className={css.title + ' clear'}>
                    <span className={css.titL + ''}>{item.chinesecity || item.region.city_lang}</span>
                    <span className={css.titR + ''}>{item.title}</span>
                  </div>
                  {
                    item.price_rmb_string? 
                    <div className={css.price}>{item.price_rmb_string}</div>:
                    <div className={css.price} dangerouslySetInnerHTML={{ __html: item.cost.price_string}}></div>
                  }
                  <div className={css.rent}>{item.rent || item.desc_string}</div>
                  <div className={css.tag + ' clear'}>
                    {
                      item.housetag ?
                      item.housetag.map(tagitem => {
                        return (
                          <div style={{background: tagitem.tag_color}} key={tagitem.tagname}>{tagitem.tagname}</div>
                        )
                      }):
                      item.tags.map((tagitem, index) => {
                        return (
                          <div style={{background: tagitem.color}} key={index}>{tagitem.name_lang}</div>
                        )
                      })
                    }
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  toDetail = (id)=> {
    this.props.history.push(`/detail/${id}`)
  }
}

export default withRouter(HouseList)