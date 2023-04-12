export default defineAppConfig({
    pages: [
        'pages/index/index',
        'pages/home/home',
        'pages/find/find',
        'pages/message/message',
        'pages/person/person',
    ], tabBar: {
        color: '#7A7E83',
        selectedColor: '#3cc51f',
        backgroundColor: '#ffffff',
        borderStyle: 'black',
        list: [{
            pagePath: 'pages/index/index',
            text: '首页',
            iconPath: './assets/tab-bar/home.png',
            selectedIconPath: './assets/tab-bar/home-selected.png'
        }, {
            pagePath: 'pages/home/home',
            text: '首页2',
            iconPath: './assets/tab-bar/home.png',
            selectedIconPath: './assets/tab-bar/home-selected.png'
        }, {
            pagePath: 'pages/find/find',
            text: '发现页',
            iconPath: './assets/tab-bar/find.png',
            selectedIconPath: './assets/tab-bar/find-selected.png'
        }, {
            pagePath: 'pages/message/message',
            text: '消息中心',
            iconPath: './assets/tab-bar/message.png',
            selectedIconPath: './assets/tab-bar/message-selected.png'
        }, {
            pagePath: 'pages/person/person',
            text: '个人中心',
            iconPath: './assets/tab-bar/person.png',
            selectedIconPath: './assets/tab-bar/person-selected.png'
        },]
    },
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
})


