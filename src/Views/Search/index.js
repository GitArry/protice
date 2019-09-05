import React, {Component} from 'react'
import axios from 'axios'
import HouseList from './../../Components/HouseList'
import SearchHeader from './Searchheader'

class Search extends Component {
  state = {
    cityNm: '',
    info: []
  }
  componentDidMount() {
    let pathReg = /^(.*)&(.*)$/
    pathReg.test(this.props.match.params.citynm)
    let country = RegExp.$2
    let region = RegExp.$1
    axios({
      url: `/index.php/bservice/HouseSaleSearchFilter/getHouseList?src=webapp&country_unique_name=${country}&region_unique_name=${region}&type_id=24`
    }).then(res=> {
      this.setState({
        cityNm: res.data.data.crumbs[0].name,
        info: res.data.data.result
      })
    })
  }
  render() {
    return (
      <div>
        <SearchHeader citynm={this.state.cityNm} />
        <HouseList info={this.state.info} />
      </div>
    )
  }
}

export default Search