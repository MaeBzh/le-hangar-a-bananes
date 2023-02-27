import footer from './footer'
import nav from './nav'
import sidebar from './sidebar'
import socialLinks from './socialLinks'

const themeConfig = {
  logo: '/banane.png',
  nav,
  sidebar,
  socialLinks,
  footer,
  lastUpdatedText: "Dernière mise à jour",
  outlineTitle: "Sommaire",
  outline: 'deep',
  docFooter: {
    next: "Page suivante",
    prev: "Page précédente",
  },
}

export default themeConfig