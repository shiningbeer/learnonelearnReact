
import React from 'react';
import { Card, Flex, WingBlank, WhiteSpace } from 'antd-mobile';
import Chart from './chart'
export default class Mymarket extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <Card onClick={() => console.log('hello')}>
                <Card.Body id="card">
                    {this.titleContent}{this.mainContent}
                </Card.Body>
                <div className="line"></div>
                <div id="card">
                    <Flex justify="between" className="footer">
                        <div>
                            <span className='icon-public_icon_share ico'></span>
                            分享
                    </div>
                        <div>
                            <span className='icon-public_icon_Collect ico'></span>
                            392
                    </div>
                        <div className="pull-right">
                            <span className='icon-public_icon_stick ico'></span>
                            置顶
                    </div>
                    </Flex>
                </div>
            </Card>
        )
    }
    chartString1 = '1stChart_of_' + this.props.index
    chartString2 = '2ndChart_of_' + this.props.index
    titleContent =
        <div>
            <div className="title">{this.props.data.title}</div>
            <div className='left_time'>剩余时间：{this.props.data.left_time}</div>
            <div className='message'>
                <span className='icon-public_icon_news ico'></span>
                {this.props.data.news}
            </div>
        </div>
    mainContent =
        <div>
            <div className="choice">
                <span className='pull-right'>6份</span>选项A. 不会超过
            </div>
            <Flex>
                <div>
                    <div className='multiple'>2.8
                  <span className='xx'>倍</span>
                        <div className='info'>获胜收益</div>
                    </div>
                </div>
                <div className="chart">
                    <Chart div_id={this.chartString1} />
                </div>
            </Flex>
            <div className="line"></div>
            <div className="choice">
                <span className='pull-right'>18份</span>选项B. 会超过
            </div>
            <Flex>
                <div>
                    <div className='multiple'>1.3
                  <span className='xx'>倍</span>
                        <div className='info'>获胜收益</div>
                    </div>
                </div>
                <div className="chart">
                    <Chart div_id={this.chartString2} />
                </div>
            </Flex>
        </div>
}


