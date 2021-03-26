module.exports = {
  title: 'Solder of Fortune',
  description: 'Soldering kit for SMT components',
  dest: 'dist',
  plugins: [
    ['vuepress-plugin-container', {
      type: 'quote',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'right',
      defaultTitle: '',
    }],
    ['vuepress-plugin-container', {
      type: 'tip',
      defaultTitle: 'TIP',
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
      defaultTitle: 'WARNING',
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
      defaultTitle: 'WARNING',
    }],
    ['vuepress-plugin-container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n'
    }],
    ['vuepress-plugin-presentation-mode'],
    ['vuepress-plugin-zooming', {
      selector: '.theme-default-content :not(a) > img:not(.no-zoom)',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: 'Course PCB-Design', link: 'https://pcb-design.devbit.be' },
      { text: 'Devbit', link: 'https://www.devbit.be' }
    ],
    repo: 'sillevl/solder-of-fortune',
    docsDir: 'src',
    docsBranch: 'main',
    sidebarDepth: 1,
    sidebar: [
      ['/01_introduction/', 'Introduction'],
      ['/02_7-segment/', '7 Segment Display'],
      ['/03_1206/', '1206'],
      ['/04_0805/', '0805'],
      ['/05_0603/', '0603'],
      ['/06_0402/', '0402']
    ]
  },
}