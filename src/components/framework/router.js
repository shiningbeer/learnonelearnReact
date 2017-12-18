import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Tabs from './tabs'
import Mymarket from '../../pages/mymarketPage'
import Find from '../../pages/findPage'
import me from '../../pages/mePage'
const MyRouter = () => (
  <Router>
    <div>
      <Tabs />

      <Route exact path="/" component={Find} />
      <Route path="/mymarket" component={Mymarket} />
      <Route path="/me" component={me} />
    </div>
  </Router>
)


export default MyRouter