import Taro from '@tarojs/taro';
import {Button, View} from '@tarojs/components'
import {AtTabs, AtTabsPane} from 'taro-ui'
import {Component} from "react";
import "./index.scss"

export default class TabBarDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            tabList: [
                {title: '标签页1'},
                {title: '标签页2'}
            ],
            panelList: [<AtTabsPane current={0} index={0}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
            </AtTabsPane>, <AtTabsPane current={1} index={1}>
                <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
            </AtTabsPane>]
        }
    }

    handleClick(value) {
        this.setState({
            current: value
        })
    }

    handleAddTab() {
        //console.log("========== state"+this.state)
        //console.log("========== tabList"+this.state.tabList)
        const currentTabCount = this.state.tabList.length + 1;
        this.setState(
            {
                current:0,
                tabList: [...this.state.tabList, {title: `标签页${currentTabCount}`}],
                panelList: [...this.state.panelList, <AtTabsPane current={0} index={currentTabCount - 1}>
                    <View style='font-size:18px;text-align:center;height:100px;'>标签页{currentTabCount}的内容</View>
                </AtTabsPane>]
            }
        )
    }

    render() {
        return (
            <View>
                {this.state.tabList && (<AtTabs
                  current={this.state.current}
                  scroll
                  swipeable
                  tabList={this.state.tabList}
                  onClick={this.handleClick.bind(this)}
                >
                    {this.state.panelList}
                </AtTabs>)}
                

                <Button onClick={this.handleAddTab}>添加标签页</Button>
            </View>

        )
    }
}