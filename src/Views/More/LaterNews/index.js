import React,{Component} from 'react'
import axios from 'axios'
import css from './index.module.scss'

class LaterNews extends Component{
    state={
        arr1:[]
    }

    componentDidMount(){
        axios.get(`https://m.uhouzz.com/index.php/wechatapp/news/getNewsList?type_id=7&page=1&src=webapp`).then(res=>{
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


export default LaterNews