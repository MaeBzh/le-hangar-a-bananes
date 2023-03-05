import { DefaultTheme } from 'vitepress';

const sidebar: DefaultTheme.SidebarMulti = {
    '/blog/articles/permis_construire': [
        {
          text: 'Le permis de construire',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/blog/articles/permis_construire/index.md' },
            { text: 'Sites et logiciels utiles', link: '/blog/articles/permis_construire/sites_et_logiciels.md' },
            { text: 'PC01 Le plan de situation', link: '/blog/articles/permis_construire/plan_de_situation.md' },
            { text: 'PC02 Le plan de masse', link: '/blog/articles/permis_construire/plan_de_masse.md' },
            { text: 'PC03 Le plan de coupe', link: '/blog/articles/permis_construire/plan_de_coupe.md' },
            { text: 'PC04 La notice explicative', link: '/blog/articles/permis_construire/notice_explicative.md' },
            { text: 'PC05 Les plans de façades', link: '/blog/articles/permis_construire/plan_de_facades.md' },
            { text: 'PC06, PC07 et PC08 Photos et insertion paysage', link: '/blog/articles/permis_construire/photos_insertion_paysage.md' },
          ]
        }
      ],
}

export default sidebar;