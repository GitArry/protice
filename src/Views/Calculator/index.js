import React, {Component} from 'react'
import css from './index.module.scss'
class Calculator extends Component {
  state = {
    isMyAlertHide: true
  }
  render() {
    return <div className={css.wrap}>
      <div>
        <header>
          <div className={css.hasT}>
            <div className={css.user}>
              <i className={'iconfont icon-fanhui'} onClick={()=> this.props.history.goBack()}></i>
            </div>
            <div className={css.select}>
              <p>房贷计算器</p>
            </div>
          </div>
        </header>

        <ul className={css.title} ref='myUl'>
          <li onClick={()=> this.liOnclick(0)} style={{borderBottom: '0.03rem solid #ff5a5f'}}>等额本息</li>
          <li onClick={()=> this.liOnclick(1)}>等额本金</li>
        </ul>
     
        <div className={css.houseloanI}>
          <p>
            <span>房价总额(¥)</span>
            <b>(万)</b>
            <input type="tel" placeholder="请输入房价总额"/>
          </p>
          <p>
            <span>首付比例</span>
            <b>(%)</b>
            <input type="number" placeholder="请输入首付比例"/>
          </p>
          <p>
            <span>贷款利率</span>
            <b>(%)</b>
            <input type="number" placeholder="请输入贷款利率"/>
          </p>
          <p>
            <span>贷款期限</span>
            <i>></i>
            <select name="" id="" dir="rtl">
              <option value="0">请选择</option>
              <option value="1" >1年</option>
              <option value="2" >2年</option>
              <option value="3" >3年</option>
              <option value="4" >4年</option>
              <option value="5" >5年</option>
              <option value="6" >6年</option>
              <option value="7" >7年</option>
              <option value="8" >8年</option>
              <option value="9" >9年</option>
              <option value="10" >10年</option>
              <option value="11" >11年</option>
              <option value="12" >12年</option>
              <option value="13" >13年</option>
              <option value="14" >14年</option>
              <option value="15" >15年</option>
              <option value="16" >16年</option>
              <option value="17" >17年</option>
              <option value="18" >18年</option>
              <option value="19" >19年</option>
              <option value="20" >20年</option>
              <option value="21" >21年</option>
              <option value="22" >22年</option>
              <option value="23" >23年</option>
              <option value="24" >24年</option>
              <option value="25" >25年</option>
              <option value="26" >26年</option>
              <option value="27" >27年</option>
              <option value="28" >28年</option>
              <option value="29" >29年</option>
              <option value="30" >30年</option>
              </select>
          </p>
        </div>

        <div className={css.button} onClick={()=> {
          this.setState({
            isMyAlertHide: false
          })
        }}>开始计算</div>

      </div>

      {
        this.state.isMyAlertHide ? null :
        <div className={css.myalert}>
          <div className={css.front}>
            <div className={css.alertFont}>别做梦了！<br/>还想全款呢！<br/>你知道么？你就要成功了！</div>
            <div className={css.alertBtn} onClick={()=> {
              this.setState({
                isMyAlertHide: true
              })
            }}>确定</div>
          </div>
        </div>
      }
    </div>
    
  }
  liOnclick(index) {
    if (index === 0) {
      this.refs.myUl.children[0].style = 'border-bottom: 0.03rem solid #ff5a5f'
      this.refs.myUl.children[1].style = ''
    } else {
      this.refs.myUl.children[0].style = ''
      this.refs.myUl.children[1].style = 'border-bottom: 0.03rem solid #ff5a5f'
    }
  }
}
export default Calculator 