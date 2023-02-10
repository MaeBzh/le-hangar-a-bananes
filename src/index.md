---
layout: home

footer:
  flaticons:
    - author: Kerismaker
      link: https://www.flaticon.com/free-stickers/cabin
    - author: Stickers
      link: https://www.flaticon.com/free-stickers/facebook
---

<script setup lang="ts">
  import articles from './blog/articles'
  import {tools} from './tools/tools'
  const lastArticles = articles.slice(0, 3)

  function share() {
    console.log(window?.FB.ui )
    window?.FB.ui({
      method: 'share',
      href: window.location.href,
    }, function(response){});
  }
</script>

<Landing scrollId="lastArticles" class="text-white">
  <h1
    class="flex mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl border-l-8 border-[#eab308] pl-4"
  >
    <Flaticon :icon="{src: '/banane.png'}" class=""/> Le hangar à Bananes
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

<Articles id="lastArticles" :articles="lastArticles">
  <template v-slot:title>
    <Flaticon :icon="{ src: '/media/home/002-news.png' }" class="w-auto h-64" /> Derniers articles
  </template>
</Articles>

<div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
  <VPButton href="/blog/index.md" size="big" class="w-full max-w-xs mx-auto">
    Voir tous les articles
  </VPButton>
</div>

<HomeStats :stats="[
  { title: 'Démarrage des travaux', value: '16/12/2022' },
  { title: 'Articles de blog', value: articles.length },
  { title: 'Etape en cours', value: 'Terrassement' },
  { title: 'Dépensés', value: '~4500€' },
]"  />

<CTA>
  <h2 class="flex max-w-lg m-6 font-sans text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-3xl">
     Vous appréciez notre blog ?
  </h2>
  <p class="mb-6 text-base text-justify md:text-lg">
    Aidez-nous à le faire grandir <strong class="text-blue">en un seul clic !</strong> Avec un like, un commentaire et un partage sur les liens en bas de chacun de nos articles, vous pouvez facilement contribuer à faire grandir et à améliorer ce blog. Votre participation est cruciale pour notre motivation et notre succès. Merci pour votre soutien !
  </p>
  <template #image>
    <img src="/media/home/cta_like.png" class="w-auto max-h-64 qlign-center rounded-xl border border-black" />
  </template>
</CTA>

<hr class="border-[var(--vp-c-divider-light)]" />

<Partners :partners="[
  {
    title: 'Denis Matériaux',
    image: 'https://www.denismateriaux.com/skin/frontend/rwd/dm/images/refonte/logo-denisMat.jpg',
    link: 'https://www.denismateriaux.com'
  }, {
    title: 'Gefradis',
    image: 'https://www.gefradis.fr/img/gefradis-logo-1673440793.jpg',
    link: 'https://www.gefradis.fr'
  }, {
    title: 'DBi bois',
    image: 'https://www.dbi-bois.fr/wp-content/uploads/2022/02/logo-dbi-300x116.png',
    link: 'https://www.dbi-bois.fr'
  }
]" />



