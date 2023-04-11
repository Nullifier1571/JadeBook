import React, {PropsWithChildren} from 'react'
import Taro, {eventCenter, getCurrentInstance } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

class Message extends React.Component<PropsWithChildren> {
    $instance = getCurrentInstance()


    componentDidMount() {
        const onHideEventId = this.$instance.router.onHide
        // 监听
        eventCenter.on(onHideEventId, this.onHide)
    }

    componentWillUnmount() {
        const onHideEventId = this.$instance.router.onHide
        // 卸载
        eventCenter.off(onHideEventId, this.onHide)
    }

    componentDidShow() {
    }

    componentDidHide() {
        console.log('onHide')
    }

    handleBackClick = () => {
        Taro.navigateBack()
    }

    render() {
        return (
            <View className='detail'>
                <Button onClick={this.handleBackClick}>返回首页</Button>
            </View>
        )
    }
}