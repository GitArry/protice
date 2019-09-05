import axios from 'axios'

function getIndexListData() {
  return (
    (dispatch)=> {
      axios({
        url: '/index.php/wechatapp/SaleHouse/getIndexInfo?src=webapp'
      }).then(res=> {
        dispatch({type: 'getIndexList', payload: res.data.data})
      })
    }
  )
}

export {getIndexListData}