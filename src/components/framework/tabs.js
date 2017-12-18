import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
class MyTabBar extends React.Component {
    constructor(props) {
        super(props);
        const { location } = props
        var selectedTab;
        switch (location.pathname) {
            case '/':
                selectedTab = 'findTab'
                break
            case '/mymarket':
                selectedTab = 'mymarketTab'
                break
            case '/me':
                selectedTab = 'meTab'
                break
            default:
                selectedTab = 'findTab'

        }

        this.state = {
            selectedTab: selectedTab,
            hidden: false,
        };

    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, zIndex: 99999 }}>
                <TabBar
                    unselectedTintColor="#c4c9d2"
                    tintColor="#000"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        key="Life"
                        icon={<div className='icon-nav_icon_mymarket ico' />
                        }
                        selectedIcon={<div className='icon-nav_icon_mymarket ico' />
                        }
                        selected={this.state.selectedTab === 'mymarketTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'mymarketTab',
                            });
                            this.props.history.push('/mymarket')
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        key="发现"
                        icon={
                            <div className='icon-nav_icon_find ico' />
                        }
                        selectedIcon={
                            <div className='icon-nav_icon_find ico' />
                        }
                        selected={this.state.selectedTab === 'findTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'findTab',
                            });
                            this.props.history.push('/')
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        key="个人中心"
                        icon={
                            <div className='icon-nav_icon_me ico' />
                        }
                        selectedIcon={
                            <div className='icon-nav_icon_me ico' />
                        }
                        selected={this.state.selectedTab === 'meTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'meTab',
                            });
                            this.props.history.push('/me')
                        }}
                    >
                    </TabBar.Item>

                </TabBar>
            </div>
        );
    }
}

export default withRouter(MyTabBar)