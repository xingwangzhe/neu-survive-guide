import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NEU Survive Guide",
  description: "An guide for NEUer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开始阅读', link: '/introduction' }
    ],

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
        text: '校园生活篇',
        items: [
          { text: '出行方式', link: '/school_life/to_out' },
          // { text: '发取快递' },
          { text: '校园卡业务', link: '/school_life/school_card' },
          // { text: '医疗与报销' },
          // { text: '玩乐推荐' },
          // { text: '体育运动' },
          // { text: '生活TIPS' },
        ]
      },
      {
        text: '学在东大篇',
        items: [
          { text: '基础信息', link: '/learning/information' },
          { text: '机考指南' },
          { text: '公共课' },
          {
            text: '学院攻略', items: [
              { text: '软件学院' }
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

