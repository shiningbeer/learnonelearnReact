import React, { Component } from 'react';
import Router from './components/framework/router'
import store from './redux/store/store'
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">

        <Router />
      </div>
    );
  }
}
const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
export default AppWithRedux;
