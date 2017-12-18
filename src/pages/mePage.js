import React from 'react';
import { NavBar, Icon } from 'antd-mobile';


export default class Me extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {

  }
  render() {

    return (
      <div>
        <NavBar
          mode="light" onLeftClick={() => hashHistory.goBack()}
          rightContent={[
            <span key="0" className='icon-public_icon_search nav_ico'></span>,]
          }>
          个人中心
          </NavBar>
      </div>);
  }
}


