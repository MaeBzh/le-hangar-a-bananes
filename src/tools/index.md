---
layout: doc
aside: false
footer:
  flaticons:
    - author: Freepik
      link: https://www.freepik.com
---

<script setup lang="ts">
  import {tools} from './tools'
</script>

<LastUpdated />

# <Flaticon :icon="{src: '/media/tools/001-tool-box.png', alt:'icône boîte à outils'}"/> Nos outils

Ici, vous retrouverez une liste d'outils avec une photo et un avis personnel pour chacun d'entre eux. Ces outils sont ceux que nous utilisons personnellement pour notre projet d'autoconstruction. Ces outils ne sont pas forcément les meilleurs du marché, mais ils sont suffisants pour réaliser notre garage. Nous avons essayé de choisir des outils de qualité, mais aussi des outils abordables pour les bricoleurs amateurs comme nous. Nous compléterons cette liste au fur et à mesure de notre avancée dans le projet.

Certains des outils présentés sur cette page ont des liens d'affiliation. Les liens d'affiliation sont des liens qui nous permettent de gagner une commission si vous achetez un produit via ces liens. Cela nous permet de continuer à améliorer notre site et à vous offrir des contenus de qualité. Nous espérons que cette page vous sera utile dans vos projets de bricolage et de construction.
<hr/>
<Tools :tools="tools" />

<Comments
  pageId="tools" 
  pageUrl="https://le-hangar-a-bananes.fr/tools/index.html" 
  pageTitle="Nos outils"
/>