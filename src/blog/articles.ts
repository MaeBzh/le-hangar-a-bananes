const articles = [
  {
    publishedAt: new Date(2022, 12, 16),
    title: "Article 1",
    description: "lorem ipsum ",
    link: "#",
  },
  {
    publishedAt: new Date(2022, 12, 24),
    title: "Article 1",
    description: "lorem ipsum",
    link: "#",
  },
  {
    publishedAt: new Date(2022, 12, 31),
    title: "Article 1",
    description: "lorem ipsum",
    link: "#",
  },
  {
    publishedAt: new Date(2023, 1, 1),
    title: "Article 1",
    description: "lorem ipsum",
    link: "#",
  },
];

export default articles
  .filter((article) => article.publishedAt)
  .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
