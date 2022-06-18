module.exports = {
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
      },
      '/fr/': {
        selectText: 'Langues',
        label: 'Français',
        ariaLabel: 'Langues',
      },
    },
  },
}
