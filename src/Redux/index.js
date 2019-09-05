import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import listReducer from './Reducers/listReducer'
import indexListReducer from './Reducers/indexListReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  list: listReducer,
  indexList: indexListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store