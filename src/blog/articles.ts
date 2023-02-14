const articles = [
  {
    publishedAt: new Date(2022, 12, 15),
    title: "Présentation du projet",
    description: "On vous présente notre projet de garage en ossature bois avec nos 13 étapes de construction.",
    link: "/blog/articles/presentation_projet.md",
  },
  {
    publishedAt: new Date(2023, 1, 4),
    title: "Le permis de construire 1/3",
    description: "Présentation de la réalisation du plan de situation (PC01) et du plan de masse (PC02).",
    link: "/blog/articles/permis_construire_partie1.md",
  },
  {
    publishedAt: new Date(2023, 1, 11),
    title: "Le permis de construire 2/3",
    description: "Suite de la réalisation du plan de coupe (PC03), notice descriptive (PC04) et plans de façade (PC05).",
    link: "/blog/articles/permis_construire_partie2.md",
  },
  {
    publishedAt: new Date(2023, 1, 25),
    title: "Le permis de construire 3/3",
    description: "Suite et fin avec la réalisation des plans d'insertions dans le paysage (PC06, PC07 et PC08).",
    link: "/blog/articles/permis_construire_partie3.md",
  },
];

export default articles
  .filter((article) => article.publishedAt)
  .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
