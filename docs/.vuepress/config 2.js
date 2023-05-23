// module.exports = {
//   theme: 'reco', // 博客主题
//   title: '希望的笔记', // 博客标题
//   description: '开心最重要', // 备注
//   head: [ // 注入到当前页面的 HTML <head> 中的标签
//     ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
//     ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
//   ],
//   base: '/', // 这是部署到github相关的配置
//   markdown: {
//     lineNumbers: true, // 代码块显示行号
//   },
//   type: 'blog',
//   themeConfig: {
//     mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
//     modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
//       // bulletin: {
//   //   body: [
//   //     {
//   //       type: 'text',
//   //       content: `🎉🎉🎉 reco 主题 2.x 已经发布 Beta 版本，在发布 Latest 版本之前不会再有大的更新，
//   //           大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
//   //       style: 'font-size: 12px;'
//   //     },
//   //     { type: 'hr' },
//   //     { type: 'title', content: 'QQ 群' },
//   //     {
//   //       type: 'text',
//   //       content: `
//   //           <ul>
//   //             <li>QQ群1：1037296104</li>
//   //             <li>QQ群2：1061561395</li>
//   //             <li>QQ群3：962687802</li>
//   //           </ul>`,
//   //       style: 'font-size: 12px;'
//   //     },
//   //     { type: 'hr' },
//   //     { type: 'title', content: 'GitHub' },
//   //     {
//   //       type: 'text',
//   //       content: `
//   //           <ul>
//   //             <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
//   //             <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
//   //           </ul>`,
//   //       style: 'font-size: 12px;'
//   //     },
//   //     { type: 'hr', },
//   //     {
//   //       type: 'buttongroup',
//   //       children: [
//   //         { text: '打赏', link: '/docs/others/donate.html' }
//   //       ]
//   //     }
//   //   ],
//   // } 
//     valineConfig: {
//       appId: 'GiBBsH2B263dQp7HSxJ3bUUp-gzGzoHsz',
//       appKey: 'qaa0VvMmY97FjQ3KcJXJJki6',
//       placeholder:'请输入你想要说的话!'
//     },
//     author: 'xiwang', // 作者,
//     authorAvatar: '/hero.jpg', // 作者头像
//     type: 'blog', // 类型:博客
//     // 博客配置
//     blogConfig: {
//       category: {
//         location: 2,     // 在导航栏菜单中所占的位置，默认2
//         text: 'Category' // 默认文案 “分类”
//       },
//       tag: {
//         location: 3,     // 在导航栏菜单中所占的位置，默认3
//         text: 'Tag'      // 默认文案 “标签”
//       },
//       // socialLinks: [     // 信息栏展示社交信息
//       //   { icon: 'reco-github', link: 'https://github.com/Carroll-X' },
//       //   { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
//       // ]
//     },
//     smoothScroll: true, // 页面滚动
//     displayAllHeaders: true, // 默认值：false
//     activeHeaderLinks: false, // 默认值：true
//     nav: [ // 导航栏配置
//       { text: 'Home', link: '/' },
//       { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
//       // { text: '算法题库', link: '/xwDocs/' },
//       { text: '掘金', link: 'https://juejin.cn/user/3315782801697438?utm_source=gold_browser_extension' },
//       { text: 'GitHub', link: 'https://github.com/Carroll-X' },
//       { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/' },
//     ],
//     subSidebar: 'auto', // 自动生成子菜单
//     sidebar: {
//       '/guide/': [
//         // {
//         //   title: '前端基础',
//         //   collapsable: true,
//         //   children: [
//         //     { title: "学前必读1", path: "/guide/frontEndBasics/md1" },
//         //     { title: "学前必读2", path: "/guide/frontEndBasics/md2" },
//         //   ]
//         // },
//         {
//           title: '前端进阶',
//           collapsable: true,
//           children: [
//             { title: 'Promise/A+译文', path: '/guide/frontEndAdvanced/promise' },
//             // { title: "手写Promise", path: "/guide/frontEndAdvanced/myPromise" }
//           ]
//         },
//         {
//           title: '前端拓展',
//           collapsable: true,
//           children: [
//             { title: "Git代码提交规范", path: "/guide/frontEndExpand/git" },
//             { title: "Eslint", path: "/guide/frontEndExpand/eslint" },
//             { title: "Linux实用指令", path: "/guide/frontEndExpand/linux" },
//             { title: "PM2", path: "/guide/frontEndExpand/pm2" },
//             { title: "TypeScript", path: "/guide/frontEndExpand/typescript" },
//           ]
//         },
//       ]
//     },
//     friendLink: [
//       {
//         title: 'vuepress-theme-reco',
//         desc: 'A simple and beautiful vuepress Blog & Doc theme.',
//         logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
//         link: 'https://vuepress-theme-reco.recoluan.com'
//       },
//       {
//         title: '午后南杂',
//         desc: 'Enjoy when you can, and endure when you must.',
//         email: 'recoluan@qq.com',
//         link: 'https://www.recoluan.com'
//       },
//       // ...
//     ],
//     //博客自定义LOGO
//     logo: '/hero.jpg',
//     sidebarDepth: 2, // 侧边栏显示2级
//   },
//   plugins: [
//     ['reading-progress', {/* options */ }],
//     [
//       'ribbon', //在您的 Vuepress 中添加美丽的丝带！
//       {
//         size: 90, // width of the ribbon, default: 90
//         opacity: 0.8, // opacity of the ribbon, default: 0.3
//         zIndex: -1, // z-index property of the background, default: -1
//       },
//     ],
//     [
//       'cursor-effects', // 在您的 vuepress 中添加可爱的光标效果！
//       {
//         size: 2, // size of the particle, default: 2
//         shape: ['star' | 'circle'], // shape of the particle, default: 'star'
//         zIndex: 999999999, // z-index property of the canvas, default: 999999999
//       },
//     ],
//     [
//       'dynamic-title',  // 在您的 vuepress 中添加动态标题！
//       {
//         showIcon: '/favicon.ico',
//         showText: '(/≧▽≦/)咦！又好了！',
//         hideIcon: '/failure.ico',
//         hideText: '(●—●)喔哟，崩溃啦！',
//         recoverTime: 2000,
//       },
//     ],
//     ['@vuepress-reco/vuepress-plugin-bgm-player', { // 添加音乐播放器
//       audios: [
//         {
//           name: '강남역 4번 출구',
//           artist: 'Plastic / Fallin` Dild',
//           url: 'https://assets.smallsunnyfox.com/music/2.mp3',
//           cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
//         },
//         {
//           name: '用胳膊当枕头',
//           artist: '최낙타',
//           url: 'https://assets.smallsunnyfox.com/music/3.mp3',
//           cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
//         }
//       ],
//       position: {
//         left: '10px',
//         bottom: '10px',
//         'z-index': '999999'
//       },
//       autoplay: true,
//       autoShrink: true,
//       shrinkMode: 'float',
//       floatPosition: 'left',
//       floatStyle: {
//         bottom: '200px',
//         'z-index': '999999'
//       }
//     }]
//   ],
// };


// // module.exports = {
// //   // 标题
// //   title: 'xx的博客', 
// //   // 备注
// //   description: '我的个人网站', 
// //   // 注入到当前页面的 HTML <head> 中的标签
// //   head: [ 
// //     // 增加一个自定义的 favicon(网页标签的图标)
// //     ['link', { rel: 'icon', href: '/logo.jpg' }], 
// //     // 移动端优化
// //     ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
// //   ],
// //   // 这是部署到github相关的配置
// //   base: '/', 
// //   markdown: {
// //     // 代码块显示行号
// //     lineNumbers: true, 
// //   },
// //   themeConfig: {
// //     // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
// //     nextLinks: false,
// //     // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
// //     prevLinks: false,
// //     // 作者,
// //     author: 'xxxx',
// //     // 作者头像
// //     authorAvatar: '/hero.jpg', 
// //     // 页面滚动
// //     smoothScroll: true, 
// //     // 默认值：false
// //     displayAllHeaders: true, 
// //     // 默认值：true
// //     activeHeaderLinks: false,
// //     // 导航栏配置
// //     nav: [ 
// //       { text: 'Home', link: '/' },
// //       { text: 'VuePress', link: 'https://vuepress.vuejs.org/zh/' },
// //     ],
// //     // 搜索设置
// //     search: true,
// //     searchMaxSuggestions: 10,
// //     // 自动生成子菜单
// //     subSidebar: 'auto',
// //     // sidebar: 'auto' 自动生成侧边栏
// //     sidebar: {
// //       '/guide/': [
// //         {
// //           title: '标题',
// //           collapsable: true,
// //           children: [
// //             // { title: "内容1", path: "/guide/" },
// //             // { title: "内容2", path: "/guide/mySelf" },
// //             { title: "Promise/A+译文", path: "/guide/frontEndAdvanced/promise" },
// //           ]
// //         },
// //       ],
// //     },
// //     logo: '/hero.jpg',
// //     // 最后更新时间
// //     lastUpdated: 'Last Updated',
// //     // 备案号
// //     record: 'xxxx',
// //     // 项目开始时间
// //     startYear: '2022',
// //     // 侧边栏显示2级  
// //     sidebarDepth: 2, 
// //   },
// // };