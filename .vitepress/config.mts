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
        text: '贡献者寄语',
        items: [
          {
            text: '23届自动化同学',
            link: '/message/suli'
          },
        ]
      },
      {
        text: '校园生活',
        items: [
          {
            text: '通用篇',
            items: [
              { text: '医疗与报销', link: '/daily/tongyong/yiliao' },
              { text: '气候与穿衣', link: '/daily/tongyong/qihou' },
              { text: '诈骗防范', link: '/daily/tongyong/zhapian' },
              { text: '运动健身', link: '/daily/tongyong/yundong' },
              { text: '校园卡业务', link: '/daily/tongyong/xiaoyuanka' },
              { text: '校园网', link: '/daily/tongyong/xiaoyuanwang' },
            ]
          },
          {
            text: '浑南校区篇',
            items: [
              { text: '出行方式', link: '/daily/hunnan/chuxing' },
              { text: '周边娱乐', link: '/daily/hunnan/yuletuijian'},
            ],
          },
          {
            text: '南湖校区篇',
            items: [
              { text: '吃在南湖', link: '/daily/nanhu/yinshi' },
              { text: '校园日常', link: '/daily/nanhu/shenghuo' },
              { text: '出行方式', link: '/daily/nanhu/chuxing' },
              { text: '周边娱乐', link: '/daily/nanhu/yule' },
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
          { text: '选调', link: '/learning/xuandiao' },
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
          {
            text: '信息学院', items: [
              { text: '学院简介', link: '/college/automation/jianjie' },


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

