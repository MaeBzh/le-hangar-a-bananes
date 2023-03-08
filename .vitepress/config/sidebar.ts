import { DefaultTheme } from "vitepress/types";
import articles from "../../src/blog/articles";
import { SidebarMulti } from "../theme/types";
import permisConstruireSidebar from "./sidebars/permis_construire";
import presentationProjetSidebar from "./sidebars/presentation_projet";

const sidebar: SidebarMulti = {
  ...presentationProjetSidebar,
  ...permisConstruireSidebar,
  "/blog/articles": [
    {
      items: [
        {
          text: "Voir tous les articles",
          link: "/blog/index.md",
          type: "button",
        },
      ],
    },
  ],
  "/blog/": [
    {
      text: "Les derniers articles",
      items: articles.slice(0, 5).map((article) => {
        return {
          title: article.title,
          text: article.description,
          link: article.link,
          publishedAt: article.publishedAt,
          image: article.image,
        };
      }),
    },
  ],
};

export default sidebar;
