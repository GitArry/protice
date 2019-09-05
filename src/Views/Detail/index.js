import React, {Component} from 'react'
import axios from 'axios' 
import ccss from './index.module.scss'
import DetailSwiper from './DetailSwiper/DetailSwiper';
import DetailSwiper2 from './DetailSwiper2/DetailSwiper2';
import DetailSwiper3 from './DetailSwiper3/DetailSwiper3';
import { withRouter } from 'react-router';
class Detail extends Component {

      state = {
        abouthouse:null,
        aaa:["123123"],
        housetag:[],
        webapp:[],
        headpic:[],
        morehouse:[]
      }
      componentDidMount(){
         var headpiclist = [];
         var headpiclist1 = [];
          axios.get(`https://m.uhouzz.com/index.php/wechatapp/SaleHouseDetail/getSaleHouseData?hid=${this.props.match.params.id}}&src=webapp`)
          // axios.get(`https://m.uhouzz.com/index.php/wechatapp/SaleHouseDetail/getSaleHouseData?hid=742467&src=webapp`)
          .then(res=>{

          for(var i=0;i<res.data.data.pc_house_detail.data.headimglist.length;i++){
            headpiclist.push(res.data.data.pc_house_detail.data.headimglist[i])
             for(var j=0;j<headpiclist[i].list.length;j++){
              headpiclist1.push(headpiclist[i].list[j])
             }
          }
          this.setState({
            abouthouse: res.data.data.pc_house_detail,
            housetag: res.data.data.pc_house_detail.data.housetag,
            webapp:res.data.data.webapp_news_list,
            // headpic: res.data.data.pc_house_detail.data.headimglist.list,
            headpic:headpiclist1,
            morehouse:res.data.data.pc_similar_houses_list,

          })
        })
      }
      componentWillReceiveProps(newProps) {
        var headpiclist = [];
        var headpiclist1 = [];
         axios.get(`https://m.uhouzz.com/index.php/wechatapp/SaleHouseDetail/getSaleHouseData?hid=${newProps.match.params.id}}&src=webapp`)
         // axios.get(`https://m.uhouzz.com/index.php/wechatapp/SaleHouseDetail/getSaleHouseData?hid=742467&src=webapp`)
         .then(res=>{

         for(var i=0;i<res.data.data.pc_house_detail.data.headimglist.length;i++){
           headpiclist.push(res.data.data.pc_house_detail.data.headimglist[i])
            for(var j=0;j<headpiclist[i].list.length;j++){
             headpiclist1.push(headpiclist[i].list[j])
            }
         }
         this.setState({
           abouthouse: res.data.data.pc_house_detail,
           housetag: res.data.data.pc_house_detail.data.housetag,
           webapp:res.data.data.webapp_news_list,
           // headpic: res.data.data.pc_house_detail.data.headimglist.list,
           headpic:headpiclist1,
           morehouse:res.data.data.pc_similar_houses_list,

         })
         setTimeout(()=> {
          window.scrollTo(0, 0)
         }, 500)
       })
      }

      render() {
        return (
          <div kay={this.props.match.params.id}>
              {<div className={ccss.head}><span onClick={()=>{
               this.props.history.push('/index')
              }} style={{position:'absolute', top: '0', left: '0.2rem'}}>&lt;</span>房源详情</div>}
              {this.state.headpic.length === 0 ? null :
                <DetailSwiper list={this.state.headpic}></DetailSwiper>
              }
              {
              this.state.abouthouse?
              <div className={ccss.item}>
              <div className={ccss.title}>{this.state.abouthouse.data.title}</div>
              <div className={ccss.wan}> 
              <div className={ccss.wan1}  dangerouslySetInnerHTML={{ __html:this.state.abouthouse.data.price_string_rmb_wan}}></div>
              <div className={ccss.wan2} dangerouslySetInnerHTML={{ __html:this.state.abouthouse.data.price_string_wan}}></div>
              </div>
              <div className={ccss.tid}> 
                {
                this.state.housetag.map(item=>
                    <div key={item.tid} 
                    // onClick = {()=>this.changePage(item)}
                    >{item.tagname}</div>  
                  )
                }
              </div>
              <ul className={ccss.prices} >
              <li>
              <div className={ccss.th}>每平米单价</div>
              <div className={ccss.price1} dangerouslySetInnerHTML={{ __html:this.state.abouthouse.data.unitprice_string_rmb_wan}}></div>
              </li>
              <li className={ccss.bood}>
              <div className={ccss.th}>首付比例</div>
              <div className={ccss.price1}><span>{this.state.abouthouse.data.rid}</span>%</div>
              </li>
              <li>
              <div className={ccss.th}>近一年涨幅</div>
              <div className={ccss.price1}><span>{this.state.abouthouse.data.roi}</span>%</div> 
              </li>
              </ul>

              <div className={ccss.pink}>
                <div className={ccss.pink1}>
                <div className={ccss.pink11}>
                  <img className={ccss.pink11} src="https://pcpic.uhouzz.com/webappsaleonline/images/dbf4c930c25f27492033383d9333679f.gif" alt=""/>
                </div>
                <div className={ccss.pink22}>
                <div className={ccss.pink221}>更低价格保障</div>
                <div className={ccss.pink222}>没有比这更低的，如果有，我照给。</div>
                <div className={ccss.pink223}>条款和条件</div>
                </div>
               </div>
              </div>

              <div className={ccss.messages}>
              <h2 className={ccss.h22}>项目信息</h2>
              <div className={ccss.thing}><span>交房时间：</span>{this.state.abouthouse.data.avaiabletime}</div> 
              <div className={ccss.thing}><span>开发商：</span>{this.state.abouthouse.data.developer_name}</div>
              <div className={ccss.thing}><span>房源地址：</span>{this.state.abouthouse.data.address}</div>
              <div className={ccss.more}>更多项目信息</div>
              <div className={ccss.call}><p>一键咨询更多打折优惠…</p></div>
              </div>

              <h2 className={ccss.h22}>详情介绍</h2>
              <div className={ccss.moremore} dangerouslySetInnerHTML={{ __html:this.state.abouthouse.data.morelink}}></div>
              

              <h4>品质户型（{this.state.abouthouse.data.layout.length}）</h4>
              {this.state.abouthouse.data.layout.length === 0 ? null :
                <DetailSwiper2 list={this.state.abouthouse.data.layout}></DetailSwiper2>
              }

              <div className={ccss.mapp}>
              <h2 className={ccss.h22}>周边地图</h2>
              <img className={ccss.map} src={`https://maps.google.cn/maps/api/staticmap?markers=${this.state.abouthouse.data.posx},${this.state.abouthouse.data.posy}&zoom=13&size=375x200&scale=2&format=png&key=AIzaSyB4ggOBQ9UfDbEhcKy8aBAv46YBu03tjUA&language=zh-CN`} alt={"map"}/>
              <div>
              <p>{this.state.abouthouse.data.address}</p>
              <p>周边设施</p>
              </div>
              </div>

              <div  className={ccss.hhbox}>
                <div  className={ccss.hh}>购房流程</div>
                <ul>
                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/95219129cdfcef0e2036349208025b9e.png" alt="1"/>
                      </dt>
                      <dd>
                        <h3>预约咨询</h3>
                        <p>选择意向国家/意向总价/置业目的等</p>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/8128f340ccfb09a411df704df21850ec.png" alt="2"/>
                      </dt>
                      <dd>
                      <h3>预订房源</h3>
                        <p>置业顾问一对一服务，项目筛选</p>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/a0e7b54888bd3114bce4238b679cfea2.png" alt="3"/>
                      </dt>
                      <dd>
                      <h3>认购签约</h3>
                        <p>选定房号，支付定金</p>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/7224ce46bf2fc8a9093bbeedbb65036e.png" alt="4"/>
                      </dt>
                      <dd>
                      <h3>交换合同</h3>
                        <p>支付首付，签订购房合同</p>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/f6b7226b9fa4d9622bad2f6b0e1b7828.png" alt="5"/>
                      </dt>
                      <dd>
                      <h3>支付尾款</h3>
                        <p>交房前支付剩余尾款或申请贷款</p>
                      </dd>
                    </dl>
                  </li>

                  <li>
                    <dl>
                      <dt>
                        <img src="https://pcpic.uhouzz.com/webappsaleonline/images/d8e9a2465092dc29f88c955f0752a00f.png" alt="6"/>
                      </dt>
                      <dd>
                      <h3>产权过户</h3>
                        <p>完成产权登记和房屋交易</p>
                      </dd>
                    </dl>
                  </li>
                </ul>
                <div className={ccss.ask}>免费咨询详细信息</div>
              </div>
              
                </div> 
              
              :null

              
              
              }
              {
                this.state.webapp?
                <div className={ccss.webappbox}>
                <div className={ccss.webapp}>
                <div>
                  <img src="https://pcpic.uhouzz.com/webappsaleonline/images/721c0adbd7437da3e2d893f54e2cd18d.png"  alt=""/>
                </div>
                <div  className={ccss.appp}>
                <div className={ccss.apptitle}>{this.state.webapp.title}</div>
                <div className={ccss.appkeyword}>{this.state.webapp.keyword}</div> 
                </div>
                <div className={ccss.checkmore}>查看更多</div>
                </div>
                </div>
                :null
               
              }
               {
                this.state.morehouse.length === 0 ? null :
                <DetailSwiper3 list={this.state.morehouse}></DetailSwiper3>
              }

              
              <div style={{height:'.5rem'}}></div>
              <div className={ccss.footer}>
              <div>在线咨询</div>
              <div>预约顾问</div>
              </div>
          </div>
         
        )
      }
    }

    export default withRouter(Detail)