import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import { useState } from 'react'
import './index.scss'

function TabBarDemo() {
    const [current, setCurrent] = useState(0)
    const tabList = [
        { title: '首页', iconType: 'home', url: '/pages/index/index' },
        { title: '分类', iconType: 'bullet-list', url: '/pages/category/category' },
        { title: '购物车', iconType: 'shopping-cart', url: '/pages/cart/cart' },
        { title: '我的', iconType: 'user', url: '/pages/user/user' }
    ]
    return (
        <AtTabBar
          className='home_tab_bar'
          fixed
          selectedColor='#d43c33'
          tabList={tabList}
          onClick={(item) => {
                setCurrent(item)
                Taro.switchTab({ url: item.url })
            }}
          current={current}
        />
    )
}

export default TabBarDemo
