---
layout: home

footer:
  flaticons:
    - author: Kerismaker
      link: https://www.flaticon.com/free-stickers/cabin
---

<Landing>
  <h1
    class="flex mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl border-l-8 border-yellow-500 pl-4"
  >
    <Flaticon :icon="{src: '/banane.png'}" class=""/>
    Le hangar à Bananes
  </h1>
  <p class="mb-6 text-base text-justify md:text-lg">
    <strong>Bienvenue sur notre blog</strong>. Nous sommes deux amateurs
    de bricolage passionnés et on a décidé de nous lancer dans
    l'aventure de la construction de notre propre garage de A à Z.
  </p>
  <p class="mb-6 text-base text-justify md:text-lg">
    Nous vous invitons à suivre notre aventure et à découvrir toutes
    les étapes de notre projet, des préparatifs à la réalisation
    finale. Nous partagerons avec vous nos erreurs, nos difficultés et
    nos réussites, ainsi que tous les conseils et astuces que nous
    avons appris au fil de notre projet.
  </p>
  <p class="mb-6 text-base text-justify md:text-lg">
    Nous espérons que notre blog vous inspirera et vous aidera à
    réaliser votre propre projet de construction en ossature bois.
  </p>
 <template v-slot:image>
    <img
      src="/media/home/001-cottage.png"
      alt="Une image d'un chalet en bois avec des arbres en arrière plan"
      class="object-scale-down px-8 w-full h-auto max-h-96"
    />
  </template>
</Landing>

<LastArticles :articles="[
  {date: '16 Décembre 2022', title: 'Article 1', description: 'lorem ipsum ', link: '#'},
]"/>

<HomeStats :stats="[
  { title: 'Articles', value: 10 },
  { title: 'Tags', value: 10 },
  { title: 'Categories', value: 10 },
  { title: 'Words', value: 10 },
]"  />
