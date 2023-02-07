const articles = [
  {
    publishedAt: new Date(2022, 12, 16),
    title: "Présentation du projet",
    description: "On vous présente notre projet de garage en ossature bois avec nos 13 étapes de construction.",
    link: "/blog/articles/presentation_projet.md",
  },
];

export default articles
  .filter((article) => article.publishedAt)
  .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
