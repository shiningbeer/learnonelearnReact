import React from 'react';
import { NavBar, Icon, Tabs, Card, Flex, WingBlank, WhiteSpace } from 'antd-mobile';
import Mycard from '../components/mymarketPage/myMarketCard'
export default class Mymarket extends React.Component {
  componentDidMount() {

  }
  render() {

    return (
      <div>
        <NavBar
          mode="light" onLeftClick={() => hashHistory.goBack()}
          rightContent={[
            <span key="0" className='icon-public_icon_search nav_ico'></span>,]
          } >
          我的预测
          </NavBar>
        <div style={{ marginBottom: 30 }}>
          <Tabs tabs={[{ title: '进行中' }, { title: '已结束' }]} renderTab={tab => tab.title}>
            <WingBlank size="lg">
              <WhiteSpace size="lg" />
              {dataList.map((dataitem, index) => (
                <Mycard data={dataitem} index={index} />
              ))}

              <WhiteSpace size="lg" />
            </WingBlank>

          </Tabs>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 2000 }}>
          选项卡二内容，内容很长，测试向下滑动页面，是否会导致 tab content 内容的左右偏移
            </div>
      </div>
    );
  }
}

var dataList = []
var data = {}
data.title = 'Bithumb上市EOS，EOS是否会一鼓作气价格破百？'
data.left_time = '7天'
data.news = 'BTC当前价格4800人民币，跌幅8%'

var data2 = {}
data2.title = '星巴克被指利用顾客笔记本电脑进行加密数字货币挖矿，这是话题炒作吗？'
data2.left_time = '7天'
data2.news = '星巴克当前价格4800人民币，跌幅8%'

dataList.push(data)
dataList.push(data2)