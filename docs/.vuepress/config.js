module.exports = {
  plugins: [
    [
      'vuepress-plugin-mermaidjs',
      {
        theme: 'neutral',
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'TLCA Documentation',
      description: 'Documentation related to the TLCA project',
    },
    '/fr/': {
      lang: 'fr-BE',
      title: 'Documentation TLCA',
      description: 'Documentation en lien avec le projet TLCA',
    },
  },
  themeConfig: {
    sidebarDepth: 2,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        nav: [
          { text: 'User guide', link: '/user-guide/' },
          { text: 'Developer guide', link: '/developer-guide/' },
          { text: 'About', link: '/about/' },
        ],
        sidebar: {
          '/developer-guide/': [
            'data-model/',
            'graphql-api/',
          ],
          '/': [
            'user-guide/',
            'developer-guide/',
            'about/',
          ],
        },
      },
      '/fr/': {
        selectText: 'Langues',
        label: 'Français',
        ariaLabel: 'Langues',
        nav: [
          { text: 'Guide de l\'utilisateur', link: '/fr/user-guide/' },
          { text: 'Guide du développeur', link: '/fr/developer-guide/' },
          { text: 'À propos', link: '/fr/about/' },
        ],
        sidebar: {
          '/fr/user-guide/students/': [
            'courses/',
            'assessments/',
          ],
          '/fr/user-guide/': [
            'students/',
            'teachers/',
          ],
          '/fr/': [
            'user-guide/',
            'developer-guide/',
            'about/',
          ],
        },
      },
    },
  },
}
