import axios from 'axios'

function getListData() {
  return (
    (dispatch)=> {
      axios({
        url: '/index.php/wechatapp/SaleHouse/getHotHouse?src=webapp'
      }).then(res=> {
        dispatch ({type: 'getGoodHouseList', payload: res.data.data})
      })
    }
  )
}

export {getListData}