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
        text: '写在前面',
        items: [
          {
            text: '写在前面',
            items: [
              { text: '关于这个', link: '/introduction' },

            ]
          },
          {
            text: '写在前面2',
            items: [
              { text: '关于这个', link: '/introduction' },

            ]
          }
        ]
      },
      {
        text: '写在前面',
        items: [
          {
            text: '写在前面',
            items: [
              { text: '关于这个', link: '/introduction' },

            ]
          },
          {
            text: '写在前面2',
            items: [
              { text: '关于这个', link: '/introduction' },

            ]
          },
          {
            text: '写在前面2',
            items: [
              { text: '关于这个', link: '/introduction' },
              { text: '关于这个2', link: '/introduction' }, { text: '关于这个3', link: '/introduction' },
            ]
          }
        ]
      },
    ],
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
