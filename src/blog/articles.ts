const articles = [
  {
    publishedAt: new Date(2022, 12, 15),
    title: "Présentation du projet",
    description: "On vous présente notre projet de garage en ossature bois avec nos 13 étapes de construction.",
    image: "/media/blog/presentation_projet/rendu_3d_projet.png",
    link: "/blog/articles/presentation_projet.md",
  },
  {
    publishedAt: new Date(2023, 1, 4),
    title: "Le permis de construire",
    description: "On vous explique comment nous avons réaliser notre permis de construire avec les outils et logiciels utilisés.",
    image: "/media/blog/permis_construire/miniature.jpg",
    link: "/blog/articles/permis_construire/index.md",
  },
];

export default articles
  .filter((article) => article.publishedAt)
  .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
