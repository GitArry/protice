import React, {Component} from 'react'
import css from './index.module.scss'
import {NavLink} from 'react-router-dom'



// class Index extends Component {
//     render() {
//       return (
//          <div className={"headInput"}>  
//          <i class="iconfont"></i> 
//          <input type="text" placeholder="请输入搜索关键字"></input>  
//          </div> 
//       )     
//     }
//   }

class MoreHeader extends Component{
    render(){
        return <div className={css.newstitle}>
                 <span><NavLink to="/More/Housenews"  replace activeClassName={css.active}>最新资讯</NavLink></span>
                <span><NavLink to="/More/LaterNews"   replace activeClassName={css.active}>置业资讯</NavLink></span>
                <span><NavLink to="/More/Story"   replace activeClassName={css.active}>租房故事</NavLink></span>
               </div>
           
     
    }
}




export default MoreHeader