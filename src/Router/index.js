import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import React from 'react'
import App from './../App'

import Index from './../Views/Index'
import Calculator from './../Views/Calculator'
import Detail from './../Views/Detail'
import GoodHouse from './../Views/GoodHouse'
import Guide from './../Views/Guide'
import HelpMe from './../Views/HelpMe'
import Search from './../Views/Search'
import SearchAll from './../Views/SearchAll'
import SearchCity from './../Views/SearchCity'
import {Provider} from 'react-redux'
import store from './../Redux'
import Information from './../Views/Information'
import Talk from './../Views/Talk'
import More from './../Views/More'
const router = (
  <Provider store={store}>
  <Router>
    <App>
      <Switch>
        <Route path='/index' component={Index} exact></Route>
        <Route path='/detail/:id' component={Detail} exact></Route>
        <Route path='/searchcity' component={SearchCity} exact></Route>
        <Route path='/search/:citynm' component={Search} exact></Route>
        <Route path='/searchall/:cityinfo' component={SearchAll} exact></Route>
        <Route path='/goodhouse' component={GoodHouse} exact></Route>
        <Route path='/helpme' component={HelpMe} exact></Route>
        <Route path='/calculator' component={Calculator} exact></Route>
        <Route path='/guide/:cityid' component={Guide} exact></Route>
        <Route path='/information/:id' component={Information} exact></Route>
        <Route path='/talk' component={Talk} exact></Route>
        <Route path="/More" render={()=>
                        <More>
                        </More>
                    } />
        <Redirect from='*' to="/index" />
      </Switch>
    </App>
  </Router>
  </Provider>
)

export default router