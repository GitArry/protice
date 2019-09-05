import React, {Component} from 'react'
import axios from 'axios'
import css from './index.module.scss'
import InfoList from './../../Components/InfoList'
class Guide extends Component {
  state = {
      info:[],
      list:[],
    }
  componentDidMount(){
    axios({
      url:`/index.php/wechatapp/pcNews/getNewsList?src=webapp&type_id=${this.props.match.params.cityid}`
    }).then(res=>{
      this.setState({
        info:res.data.data.result.info.top,
        list:res.data.data.result.list
      })
    })
  }
  changePage=(id)=>{
    this.props.history.push(`/information/${id}`)
  }
  render() {
    var myinfo = this.state.info;
    return (
      <div>  
      <header className={css.header}>
        <div className={css.hasT}>
          <div className={css.user}>
            <span className={'iconfont icon-fanhui'} onClick={()=> this.props.history.goBack()}></span>
          </div>
          <div className={css.selectType}>
            <p>{myinfo.title}</p>
          </div>
        </div>
      </header>
     
      <div className={css.banner}>
          <img src={myinfo.litpic} alt='' />
          <p>{myinfo.title}</p>
      </div>
      
      <InfoList info={this.state.list}></InfoList>
      
      </div>
    )
  } 

}

export default Guide