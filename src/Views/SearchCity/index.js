import React, {Component} from 'react'
import axios from 'axios'
import css from './index.module.scss'
import {Icon} from 'antd'

class SearchCity extends Component {
  state = {
    datalist: []
  }
  componentDidMount() {
    axios({
      url: '/index.php/wechatapp/region/popularItem?src=webapp'
    }).then(res=> {
      this.setState({
        datalist: [...res.data.data.hotSchools, ...res.data.data.hotCities]
      })
    })
  }

  render() {
    return (
      <div className={css.searchcity}>
        <header className='clear'>
          <div className={css.headerL + ' l'}>
            <Icon type='search' />
          </div>
          <div className={css.headerM + ' l'}>
            <input type='text' placeholder="搜索您想买房的城市" ref='input' />
          </div>
          <div className={css.headerR + ' r'} onClick={()=> this.props.history.push('/index')}>
            取消
          </div>
        </header>
        <main>
          <div className={css.hot}>热门搜索</div>
          <ul className={css.list}>
            {
              this.state.datalist.length === 0 ? null :
              this.state.datalist.map(item=> {
                return (
                  <li key={item.id || item.rid} onClick={()=> this.toSearchAll(item.englishcountry, item.region_unique_name, item.school_unique_name)}>
                    <div className={css.cn}>
                      {item.chinesecountry + '，' + item.chinesecity + '，' + (item.chinesename || item.chinesestate)}
                    </div>
                    <div className={css.en}>{(item.englishname || item.englishcountry + ',' + item.englishstate + ',' + item.englishcity)}</div>
                  </li>
                )
              })
            }
          </ul>
        </main>
      </div>
    )
  }

  toSearchAll(country, region, school) {
    this.props.history.push(`/searchall/country_unique_name=${country}&region_unique_name=${region}&school_unique_name=${school}&type_id=24`)
  }
}

export default SearchCity