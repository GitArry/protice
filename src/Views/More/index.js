import React, {Component} from 'react'
import {Route,Switch } from 'react-router-dom'
import MoreHeader from './MoreHeader'
import Housenews from './Housenews'
import LaterNews from './LaterNews'
import Story from './Story'
import MoreSwiper from './swiper/index'
import Axios from 'axios';
// import { memberExpression } from '@babel/types';
import css from './index.module.scss'


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

class More extends Component{
    state={
       list:null
    }

    componentDidMount(){
        Axios.get(`https://m.uhouzz.com/index.php/wechatapp/news/getNewsHome?src=webapp`).then(res=>{
            console.log(res.data.data.carousel_figure);
            this.setState({
              list:res.data.data.carousel_figure  
            })
            
        
        })
    }
    render(){
        return (
        <div>
            <div className={css.logo}>
                <img src="https://pcpic.uhouzz.com/webappask/images/c5bb017e4ee809c1e2f4f0bb5401e3d1.png" alt=""/>
                <input placeholder="请输入关键字搜索"/>
                <img className={css.logo2} src="https://pcpic.uhouzz.com/webappask/images/4587a9e8a6a77aa08da1df5a28ca0568.png" alt=""/>
            </div>
            {this.state.list?
               <MoreSwiper list={this.state.list}/> 
               :null  
            }
           
            <MoreHeader></MoreHeader>
             
            <Switch>
                 <Route path="/More/Housenews" component={Housenews} />
                <Route path="/More/LaterNews"  component={LaterNews}/>
                <Route path="/More/Story"  component={Story}/>
           
            </Switch>
        </div>
        )
    }
}




export default More