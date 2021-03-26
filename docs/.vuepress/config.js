module.exports = {
  title: 'Solder of Fortune',
  description: 'Soldering kit for SMT components',
  dest: 'dist',
  plugins: [
    ['vuepress-plugin-zooming'],
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
      // {
      //   title: 'JavaScript',   // required
      //   collapsable: true, // optional, defaults to true
      //   sidebarDepth: 0,    // optional, defaults to 1
      //   children: [
      //     '/chapters/01-javascript/nodejs/',
      //   ]
      // },
    ]
  },
}