import React, {Component} from 'react'
import axios from 'axios'
import HouseList from './../../Components/HouseList'
import css from './index.module.scss'
import SearchHeader from './../Search/Searchheader'

class SearchAll extends Component {
  state = {
    datalist: [],
    isEmpty: false,
    citynm: ''
  }
  render() {
    return (
      <div className={css.searchall}>
        <SearchHeader citynm={this.state.citynm} />
        {
          this.state.isEmpty === false ?
          <HouseList info={this.state.datalist} /> :
          <div className={css.empty}>
            <img src="https://pcpic.uhouzz.com/webappsaleonline/images/d42bb0edfc63bc123d7d84e4209185d4.png" alt="" />
            <p className={css.center}>没有找到相关房源</p>
            <div className={css.btm}>为您推荐</div>
            <HouseList info={this.state.datalist} />
          </div>
        }
      </div>
    )
  }
  componentDidMount() {
    axios({
      url: `/index.php/bservice/HouseSaleSearchFilter/getHouseList?src=webapp&${this.props.match.params.cityinfo}`
    }).then(res=> {
      if (res.data.data.is_empty === 1) {
        // 无数据
        this.setState({
          isEmpty: true
        })
      } else {
        this.setState({
          isEmpty: false
        })
      }
      this.setState({
        citynm: res.data.data.crumbs[0].name,
        datalist: res.data.data.result
      })
    })
  }
}

export default SearchAll