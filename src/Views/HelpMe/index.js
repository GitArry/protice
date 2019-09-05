import React, {Component} from 'react'
import axios from'axios'
import css from './index.module.scss'
// import MyTag from './Tag/tag'
// import { Tag } from 'antd';


class HelpMe extends Component {

  state={
    arr1:[],
    arr2:[],
    arr3:[],
    arr4:[],

  }

  componentDidMount(){
    
    axios.get(`https://m.uhouzz.com/index.php/wechatapp/saleHouse/houseConfig?src=webapp`).then(res=>{

      var arr00=[];
      var arr01=[];
        for (var i=1;i<9;i++){
           arr00.push(i)
      }
        for(var j = 0 ;j<arr00.length;j++){
           arr01.push(res.data.data.amount[arr00[j]])
      }
      var arr02=[];
      var arr03=[];
        for (var k=1;k<9;k++){
          arr02.push(k)
      }
        for(var l = 0 ;l<arr02.length;l++){
          arr03.push(res.data.data.purpose[arr02[l]])
      }
      var arr04=[];
      var arr05=[];
        for (var a=1;a<9;a++){
          arr04.push(a)
      }
        for(var b = 0 ;b<arr04.length;b++){
          arr05.push(res.data.data.property_type[arr04[b]])
      }

      this.setState({
        arr1:arr01, 
        arr2:res.data.data.country,
        arr3:arr05,
        arr4:arr03,
      })

    }
      )

}  
render() {
    return (
      <div className={css.all}>
        <div className={css.title}>免费帮您找房</div>
          <img src="https://pic.uhouzz.com/Avatar/20180827/f68854c1a85a4b958609f7a1a1266234oss.jpg" alt="" />
          <h2>意向国家或地区（可多选）</h2>

          <div className={css.country}>
            { this.state.arr2.increase_percent === null?
              this.state.arr2.map(item=>
                
              <div  key={item.country_id}>{item.chinesecountry}</div>
             
             
              )
              :this.state.arr2.map(item=>
                
                <div key={item.country_id}>{item.chinesecountry}</div>
               
                
                )
              }
          </div>

          <h2>意向总价（单选）</h2>

          <div className={css.price}>
          {this.state.arr1.map((item,index)=>
              <div  key={index}>{item}</div>
              )
              }
          </div>

          <h2>置业目的（单选）</h2>

          <div className={css.want}>
          {this.state.arr4.map((item,index)=>
              <div  key={index}>{item}</div>
              )
              }
          </div>
        
          <h2>物业类型（可多选）</h2>

          <div className={css.single}>
          {this.state.arr3.map((item,index)=>
              <div  key={index}>{item}</div>
              )
              }
          </div>

          <div className={css.own}>个人信息</div>
          {/* <MyTag/> */}
          <div className={css.form}>
            
            <div className={css.put}>
            <span>姓名</span>
            <input placeholder="请输入姓名"/>
            </div>

            <div className={css.put}>
            <span>手机</span><span className={css.ssp}>中国+86</span>
            <input placeholder="请输入手机号"/>
            </div>
            <div className={css.put}>
            <span>邮箱</span>
            <input placeholder="请输入邮箱"/>
            </div>

            <div className={css.ttt}>提交申请</div>
            
            

        
          </div>


      </div>
    )
  }
}

export default HelpMe