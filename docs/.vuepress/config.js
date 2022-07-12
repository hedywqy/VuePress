//const moment = require('moment');

const {
    locales
} = require('moment')

module.exports = {
    // 如果你打算发布到 https://<USERNAME or GROUP>.gitlab.io/，则可以省略这一步，因为 base 默认即是 "/"
    // 如果你打算发布到 https://<USERNAME or GROUP>.gitlab.io/<REPO>/（也就是说你的仓库在 https://gitlab.com/<USERNAME>/<REPO>），则将 base 设置为 "/<REPO>/"
    base: "/",
    // dest: './dist',
    host: 'localhost',
    port: 8080,
    title: "水星曙光",
    description: "个人笔记汇总",
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    plugins: [
        ['@vuepress/back-to-top'],
        ['dynamic-title', {
            // showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
            showText: '(/≧▽≦/)欢迎回来~',
            // hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
            hideText: '(●—●)bye bye~',
            recoverTime: 1000,
        }],
        [
            'copyright',
            {
                authorName: 'Mercury', // 选中的文字将无法被复制
                minLength: 30, // 如果长度超过  30 个字符
            },
        ],
        ['sakura', {
            num: 30, // 默认数量
            show: true, //  是否显示
            zIndex: -1, // 层级
            img: {
                replace: false, // false 默认图 true 换图 需要填写httpUrl地址
                httpUrl: '...' // 绝对路径
            }
        }],
        // ["vuepress-plugin-nuggets-style-copy", {
        //     copyText: "复制代码",
        //     tip: {
        //         content: "复制成功"
        //     }
        // }],
        ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
            theme: ["wanko"],
            clean: false,
            info: 'https://github.com/hedywqy',
            messages: {
                welcome: '',
                home: '心里的花，我想要带你回家',
                theme: '好吧，希望你能喜欢我的其他小伙伴。',
                close: '再见哦'
            }
        }],
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
        ],
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
                text: 'About',
                link: '/about/index/'

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
            },
        ]
    }
}