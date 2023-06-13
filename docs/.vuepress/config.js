const { description } = require('../../package')

module.exports = {
  theme: "vuepress-theme-default-prefers-color-scheme",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Wii Homebrew Guide',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "skyybrwe/wii-hbguide",
		docsBranch: "master",
		docsDir: "docs",
    overrideTheme: 'dark',
    prefersTheme: "dark",
    editLinks: false,
    lastUpdated: false,
    repoLabel: '<i class="fab fa-github icon"></i>',
    nav: [  

      {
        
      }
    ],
    displayAllHeaders: true, // Default: fa
    search: false,
    searchMaxSuggestions: 10,
      
    }
  }
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
