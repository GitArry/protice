const listReducers = (prevState = [], action) => {
  let {type, payload} = action

  switch(type) {
      case "getIndexList": 
          return [...prevState, ...payload];
      default:
          return prevState;
  }
}

export default listReducers