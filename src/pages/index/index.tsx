import Taro from '@tarojs/taro'
import React, {useState} from "react";
import {View, ScrollView, Image, Button, Picker, Text} from '@tarojs/components'
import {AtTabBar, AtSearchBar, AtIcon,AtGrid} from "taro-ui";
import './index.scss'

import searchPng from '../../assets/search/search.png'
import lightingPng from '../../assets/search/lighting.png'
import TabBarDemo from "../AtTabBarDemo";

type StateType = {
    selectorChecked: String
    searchValue: String
}

export default class Index extends React.Component {
    state: StateType = {
        selectorChecked: "北京",
        searchValue: "搜一搜"
    }

    componentDidMount() {
        // 获取远程数据
        Taro.showLoading({title: '加载中'})
        Taro.request({
            url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
        }).then(res => {
            Taro.hideLoading()
            if (res.data.success) {
                this.setState({
                    loading: false,
                    list: res.data.data
                })
            }
        })
    }

    onChange(e) {
        this.setState({
            selectorChecked: e.detail.value
        })
    }

    handleSearchClick(value) {
        this.setState({
            selectorChecked: value.detail.value
        })
    }

    handleSearchSearch(e) {
        this.setState({
            searchValue: e.detail.value
        })
    }

    render() {
        const data = [
            {
                image: 'https://jdc.jd.com/img/200',
                value: '领取中心'
            },
            {
                image: 'https://jdc.jd.com/img/200',
                value: '找折扣'
            },
            {
                image: 'https://jdc.jd.com/img/200',
                value: '领会员'
            },
            {
                image: 'https://jdc.jd.com/img/200',
                value: '新品首发'
            },
            {
                image: 'https://jdc.jd.com/img/200',
                value: '领京豆'
            }
        ]
        return (
            <View>
                <View className='home_location_search'>
                    <Picker
                      className='home_location'
                      mode='selector' range={['北京', '上海', '广州', '深圳']} onChange={this.onChange}
                    >
                        <View className='picker'>
                            {this.state.selectorChecked}
                        </View>
                    </Picker>

                    <AtSearchBar className='home_search' onClick={this.handleSearchClick}
                      placeholder='请输入搜索关键字'
                    />
                </View>
                <TabBarDemo />
            </View>
        )
    }
}




