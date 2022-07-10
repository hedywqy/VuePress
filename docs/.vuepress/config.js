//const moment = require('moment');

module.exports = {
    base: "/docs/",
    title: "水星曙光",
    description: "个人笔记汇总",
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // 不要忘了安装 moment
                    const moment = require('moment')
                    //moment.locale(lang)
                    moment.locale("zh-cn")
                    return moment(timestamp).format("LLLL")
                }
            }
        ]
    ],
    themeConfig: {
        //最后更新时间
        lastUpdated: '更新于：',
        //导航栏 Logo
        logo: '/assets/img/logo.png',
        //侧边栏
        sidebar: 'auto',
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        //导航栏链接
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/about'
            },
            {
                text: 'External',
                link: 'https://google.com'
            },
            {
                text: '语言',
                ariaLabel: 'Language Menu',
                items: [{
                    text: '中文',
                    link: '/'
                }]
            }
        ]
    }
}