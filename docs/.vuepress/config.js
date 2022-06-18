module.exports = {
  base: '/tlca-docs/',
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
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        nav: [
          { text: 'User guide', link: '/user/' },
          { text: 'Developer guide', link: '/developer/' },
        ],
      },
      '/fr/': {
        selectText: 'Langues',
        label: 'Français',
        ariaLabel: 'Langues',
        nav: [
          { text: 'Guide de l\'utilisateur', link: '/fr/user/' },
          { text: 'Guide du développeur', link: '/fr/developer/' },
        ],
      },
    },
  },
}
