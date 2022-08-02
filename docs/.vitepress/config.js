export default {
    title: 'VT-Admin',
    description: '一个vue3管理后台模板',
    themeConfig: {
        logo: '/images/logo-space.svg',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/tongwoo/vt-admin-app'}
        ],
        nav: [
            {
                text: '指南',
                activeMatch: `^/guide/`,
                link: '/guide/index'
            },
            {
                text: '常见问题',
                activeMatch: `^/qs/`,
                link: '/qa/index'
            },
            {
                text: '演示',
                link: 'http://demo.duckpear.com'
            },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present tongwoo'
        },
        sidebar: {
            '/guide/': [
                {
                    text: '介绍',
                    items: [
                        {text: '快速上手', link: '/guide/getting-started'},
                        {text: '目录结构', link: '/guide/directory-structure'},
                    ],
                },
                {
                    text: '功能',
                    items: [
                        {text: '登录', link: '/guide/login'},
                        {text: '路由', link: '/guide/route'},
                        {text: '权限', link: '/guide/permission'},
                        {text: '页面布局', link: '/guide/layout'},
                        {text: '多语言', link: '/guide/language'},
                        {text: '编辑器', link: '/guide/editor'},
                    ],
                },
                {
                    text: '其他',
                    items: [
                        {text: '服务端', link: '/guide/server'},
                        {text: 'Docker', link: '/guide/docker'},
                    ],
                },
            ],
        }
    }
}
