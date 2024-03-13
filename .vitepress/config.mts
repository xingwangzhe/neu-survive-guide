import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    math: true
  },
  head: [
    // 设置 favor.ico，.vuepress/public 下
    [
      'link', { rel: 'icon', href: '/poached-eggs-svgrepo-com.svg' }
    ]]
  ,
  title: "NEU Survive Guide",
  description: "An guide for NEUer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开始阅读', link: '/introduction' }
    ],
    logo: '/poached-eggs-svgrepo-com.svg',
    sidebar: [
      {
        text: '简介篇',
        items: [
          {
            text: '写在前面',
            link: '/introduction'
          },
        ]
      },
      {
        text: '校园生活',
        items: [
          { text: '通用篇',
          items: [{ text: '医疗与报销', link: '/daily/tongyong/yiliao' },
          { text: '玩遍沈阳', link: '' },
          { text: '诈骗防范', link: '/daily/tongyong/zhapian' },
          ]
          },
          {
            text: '浑南校区篇',
            items: [{ text: '出行方式', link: '/daily/hunnan/chuxing' },
            // { text: '发取快递' },
            { text: '校园卡业务', link: '/daily/hunnan/xiaoyuanka' },
            { text: '吃喝玩乐', link: '/daily/hunnan/yuletuijian' },            
            ],
          }
        ]
      },
      {
        text: '学在东大',
        items: [
          { text: '基础学业信息', link: '/learning/xueyexinxi' },
          { text: '机考指南', link: '/learning/jikao' },
          { text: '保研', link: '/learning/baoyan' },
          { text: '公共课', link: '/learning/gonggongke' },

        ]
      },
      {
        text: '学院攻略',
        items: [
          { text: '写在前面', link: '/college/introduction' },
          {
            text: '软件学院', items: [
              { text: '学院简介', link: '/college/software/jianjie' },
              { text: '保研', link: '/college/software/baoyan' },
              { text: '创新创业与竞赛', link: '/college/software/chuangxin' },
              { text: '就业', link: '/college/software/jiuye' },

            ]
          },

        ]
      }
    ],
    search: {
      provider: 'local'
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  // base: '/neu-survive-guide/'
  // base: '/test/'
})

