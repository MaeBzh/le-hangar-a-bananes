import { DefaultTheme } from 'vitepress';

const sidebar: DefaultTheme.SidebarMulti = {
    '/blog/articles/permis_construire': [
        {
          text: 'Le permis de construire',
          collapsible: true,
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/blog/articles/permis_construire/index.md' },
            { text: 'Les outils, sites et logiciels', link: '/blog/articles/permis_construire/liste_outils.md' },
            // { text: 'Le plan de situation', link: '/blog/articles/permis_construire/plan_situation.md' },
            // { text: 'Le plan de masse', link: '/blog/articles/permis_construire/plan_masse.md' },
            // { text: 'Le plan de coupe', link: '/blog/articles/permis_construire/plan_coupe.md' },
            // { text: 'La notice explicative', link: '/blog/articles/permis_construire/notice_explicative.md' },
          ]
        }
      ],
}

export default sidebar;