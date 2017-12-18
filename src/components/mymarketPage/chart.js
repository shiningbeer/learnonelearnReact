'use strict';
import React from 'react';

import Highcharts from 'highcharts'
import addHeatmap from 'highcharts/modules/heatmap'
addHeatmap(Highcharts)

export default class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        Highcharts.chart(this.props.div_id, configs);
    }
    render() {

        return (
            <div id={this.props.div_id}></div>);
    }
}
const data = [-325, -308, -301, -312, -322, -325, -327, -319, -309]
const categories = ['12', '13', '14', '15', '16', '17', '18', '19', '20']
const configs = {

    chart: {
        height: 79,
        width: 248,
        marginRight: 60,
        animation: false,
        marginTop: 10,
        marginBottom: 0,

    },
    credits: {
        enabled: false // 禁用版权信息
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        lineWidth: 0,

        tickWidth: 0,
        offset: 0,
        tickmarkPlacement: 'on',
        endOnTick: true,
        maxPadding: 0,
        labels: {
            formatter: function () {
                return categories[this.value];
            },

            style: {

                fontSize: 8
            }
        },
        tickInterval: 1,
        offset: -20,


    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        plotLines: [{
            color: 'grey',           //线的颜色，定义为红色
            dashStyle: 'dot',     //默认值，这里定义为实线
            value: -320,               //定义在那个值上显示标示线，这里是在x轴上刻度为3的值处垂直化一条线
            width: 1,                //标示线的宽度，2px
            label: {
                useHTML: true,
                align: 'right',
                text: '◄持有均价<br><span style="text-align:center;display: block;">5.0</span>',
                x: 60,
                y: 3
            }

        }],
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: { animation: false },
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, Highcharts.Color("#434dff").setOpacity(0.3).get('rgba')],
                    [1, Highcharts.Color("#434dff").setOpacity(0).get('rgba')]
                ]
            },
            marker: {
                radius: 2
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },

    series: [{
        type: 'area',
        name: 'price',
        data: data,
        color: "#434dff"
    }]
};


