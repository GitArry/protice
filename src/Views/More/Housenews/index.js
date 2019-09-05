import React,{Component} from 'react'
import axios from 'axios'
import css from './index.module.scss'
// import Swiper from 'swiper'

class Housenews extends Component{
    state={
        arr1:[]
    }

    componentDidMount(){
        axios.get(`https://m.uhouzz.com/index.php/wechatapp/news/getNewsList?type_id=all&page=1&src=webapp`).then(res=>{
            console.log(res.data.data.page.pageSize) 
            this.setState({
             arr1:res.data.data.result

    })
            
        })
        
    }

   
    render(){
        return (
        <div>
            <ul>
            {this.state.arr1.map(item=>
             <li key={item.id} className={css.box}>
            <img src={item.litpic} alt="" className={css.pic}/>
            <div className={css.text}>
            <div className={css.title}>{item.title}</div>
            <div className={css.numbox}>
            <div className={css.num}>{item.click_num}</div>
            <div className={css.time}>{item.create_time}</div>
            </div>
            </div>
            </li>
            )
           
        
            

            }
        </ul>


        </div>
        )
    }
}

 export default Housenews

// class Houses extends Component {
//     render() {
//       return(
//         <div className={css.houses + ' modules'}>
//           <div className={css.houseT}>
//             <p className={css.hotT}>精选房源</p>
//             <p className={css.hotM}>更多></p>
//           </div>
//           <div className={"swiper-info"}  style={{overflow: 'hidden'}}>
//             <div className={"swiper-wrapper"} key={this.props.list.length}>
//               {
//                 !this.props.list?null:
//                 this.props.list.map((item, index)=> {
//                   return (
//                     <div className={css.slide + " swiper-slide"} key={index}>
//                       <img src={item.thumburl} alt="" />
//                       <p className={css.housetitl}>
//                         <span className={css.spanA}>{item.city_name}</span>
//                         <span className={css.spanB}>{item.title}</span>
//                       </p>
//                       <p className={css.houseprice} dangerouslySetInnerHTML={{ __html: item.price_string}}></p>
//                     </div>
//                   )
//                 })
//               }
//             </div>
//           </div>
//         </div>
//       )
//     }
//     componentDidMount() {
//       if (this.props.list) {
//         var swiper = new Swiper('.swiper-info', {
//           slidesPerView: 1.2,
//           spaceBetween: 10,
//           pagination: {
//             clickable: true,
//           },
//         });
//         swiper.allowClick = true
//       }
//     }
//   }
  
//   export default withRouter(Houses)