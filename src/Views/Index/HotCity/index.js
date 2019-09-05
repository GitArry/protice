import React, { Component } from 'react'
import css from './index.module.scss'
import { withRouter } from 'react-router'

class HotCity extends Component {
  render() {
    return (
      <div className={css.hotcity + ' modules clear'}>
        {
          !this.props.list?null:
          this.props.list.list.map((item, index)=> {
            return (
              <div className={css.citys} key={item.rid} onClick={()=> 
                this.toSearch(item.country_unique_name, item.city_unique_name)
              }>
                {item.chinesecity}
              </div>
            )
          })
        }
      </div>
    )
  }
  toSearch(unique, city) {
    this.props.history.push(`/search/${city}&${unique}`)
  }
}

export default withRouter(HotCity)