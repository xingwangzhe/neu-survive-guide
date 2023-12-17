import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    math: true
  },
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
        text: '活在东大篇',
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
          { text: '基础学业信息', link: '/learning/information' },
          { text: '机考指南' ,link: '/learning/jikao'},
          { text: '保研', link: 'learning/baoyan' },
          {
            text: '学院攻略', items: [
              { text: '软件学院', link: 'learning/college/software' }
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

