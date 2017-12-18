import React from 'react';
import { NavBar, Icon, Button, Tabs, Carousel, WingBlank, WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { fetchUserMarkets } from '../redux/actions/findActions'
class Find extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['', '', ''],
      imgHeight: 176,
    }
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  renderCarousel() {
    return (
      <div className="carousel">
        <Carousel
          autoplay={false}
          infinite
          selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a
              key={ii}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
  renderTab() {
    return (
      <div style={{ marginBottom: 30 }}>
        <Tabs tabs={[{ title: '热门' }, { title: '新鲜' }]} renderTab={tab => tab.title}>
          <WingBlank size="lg">
            <WhiteSpace size="lg" />

            <WhiteSpace size="lg" />
          </WingBlank>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 2000 }}>
            选项卡二内容，内容很长，测试向下滑动页面，是否会导致 tab content 内容的左右偏移
            </div>
        </Tabs>
      </div>

    );
  }
  render() {

    return (
      <div>
        <NavBar
          mode="light" onLeftClick={() => hashHistory.goBack()}
          rightContent={[
            <span key="0" className='icon-public_icon_search nav_ico'></span>,]
          }>
          DELPHY
          </NavBar>
        {this.renderCarousel()}
        {this.renderTab()}

      </div>);
  }
}

const mapStateToProps = store => {
  return {
    findState: store.findState,
  }
}

export default connect(mapStateToProps)(Find);
