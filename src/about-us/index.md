---
layout: doc
aside: true

footer:
  flaticons:
    - author: Flat Icons
      link: https://www.flaticon.com/authors/flat-icons
    - author: JunGSa
      link: https://www.flaticon.com/authors/jungsa
    - author: Freepik
      link: https://www.freepik.com
---

<script setup>
const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/9337396',
    name: 'Julien',
    title: 'Développeur web',
    desc: 'Salutations 🖖, je m\'appel <b>Julien</b> et je suis développeur web. Ce blog est l\'occasion pour moi de combiner ma passion pour le développement web, le bricolage et le partage de connaissances. J\'ai adoré coder ce blog et il reste encore beaucoup de choses à faire. Pour ceux qui sont intéressés, le code source de ce blog est disponible sur <a href="https://github.com/MaeBzh/le-hangar-a-bananes" target="_blank" title="lien vers le repo github">notre compte Github</a>. "Que la force soit avec vous"'
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/12775492?v=4',
    name: 'Maelenn',
    title: 'Développeuse web',
    desc: 'Salut 👋, moi c\'est <b>Maelenn</b>, je suis également développeuse web suite à une reconversion professionnelle. Mon parcours initial en tapisserie d\'ameublement m\'a donné une passion pour tout ce qui est manuel : couture, tricot, dessin, peinture, crochet, etc. Ce projet d\'autoconstruction est une belle opportunité pour apprendre plein de nouvelles choses. A bientôt.',
  }
]
</script>

<LastUpdated />

# <Flaticon :icon="{src: '/media/about-us/005-parchment.png', alt:'icône parchemin'}"/> Notre petite histoire

## <Flaticon :icon="{src: '/media/about-us/001-cabin.png', alt: 'icône maison'}"/> Notre première maison

Il y a quelques années, nous avons fait construire une maison plain-pied de 100m2 en ossature bois via un maître d'œuvre. Nous n'avions aucune expérience dans la construction, mais pour des questions financières, nous avons décidé de participer aux travaux en réalisant l'électricité, la plomberie, le parquet et les peintures. Au final, nous avons eu plus de problèmes de malfaçons avec les différents artisans et le maître d'œuvre que sur les travaux que nous avons effectués nous-mêmes. Si nous avions tenu un blog à ce moment-là, nous aurions eu beaucoup de choses à dire...

Nous vivons dans cette maison avec nos deux enfants et nous avons rapidement acheté un abri de jardin pour pouvoir stocker les vélos, la tondeuse, les outils, etc. C'est incroyable à quel point l'espace peut vite manquer lorsque les enfants grandissent !

## <Flaticon :icon="{src: '/media/about-us/006-coronavirus.png', alt:'icône coronavirus'}"/> La période confinement

Nous avons toujours aimé le bricolage et les projets DIY, mais nous avons vraiment commencé à faire des choses sympas pendant le confinement de l'épidémie de COVID-19. Par chance, nous avions un petit stock de bois de palette que nous avions récupéré. Nous avons commencé par construire une serre, des bacs à potager, puis un poulailler, un salon de jardin, etc. Nous commençons à avoir pas mal d'outils sympas pour nos projets, mais nous manquons vraiment d'espace pour des projets de menuiserie plus importants.

## <Flaticon :icon="{src: '/media/about-us/002-compass.png', alt:'icône plans garage'}"/> L'avant-projet

Vous l'avez compris, construire un garage/atelier est donc devenue quelque chose de nécessaire. Nous avons longtemps cherché la meilleure solution pour réaliser ce projet et c'est avec un certain mélange d'excitation et d'appréhension que nous avons décidé de construire un garage en ossature bois.

Au début, nous avions pensé utiliser des containers maritimes pour notre garage, mais malheureusement, leur taille fixe ne convient pas à l'emplacement de notre futur garage. Nous avons donc passé plus d'un an à éplucher des forums, blogs et chaînes YouTube consacrés à l'autoconstruction en ossature bois. Nous avons réalisé des plans et des maquettes sur Sketchup, étudié différentes solutions techniques, lu les DTUs (normes techniques de construction), choisi les matériaux et surtout établi un budget pour obtenir un prêt.

## <Flaticon :icon="{src:'/media/about-us/004-house.png', alt:'icône garage en construction'}"/> Le projet

Notre rêve ultime serait de pouvoir rénover une ferme en pleine campagne. Mais avant de nous lancer dans un tel projet, nous devons encore acquérir de nombreux savoir-faire. Quoi de mieux qu'un petit garage de 50m² pour nous y exercer ? Tout y est: terrassement, fondations, étanchéité, toiture, menuiseries, isolations, finitions, etc. Bien sûr, les problèmes ne sont pas les mêmes lors d'une construction neuve ou d'une rénovation, mais il faut bien commencer quelque part, et il est tellement gratifiant de pouvoir dire "c'est nous qui l'avons fait, nous l'avons réalisé de nos propres mains".

## <Flaticon :icon="{src:'/media/about-us/003-blogging.png', alt:'icône blog'}"/> Le blog

A l'origine, nous avions acheté une mini-caméra pour nous filmer tout au long de l'aventure, mais nous avons rapidement réalisé que cela demandait beaucoup d'investissement en équipement, en temps de tournage et en montage. C'est pourquoi nous avons décidé de créer un blog pour partager notre projet avec vous. Le blog nous permet de travailler sur notre projet même tard le soir, depuis notre lit. Peu importe le support, c'est avant tout le partage qui est important pour nous.

## <Flaticon :icon="{src: '/media/about-us/007-banana.png', alt:'icône banane'}"/> Pourquoi \"Le hangar à bananes\" ?

Probablement parce que nous sommes une famille un peu folle, et que nous aimons nous amuser ensemble. Notre réplique favorite quand l'un de nous fait le zouave, c'est "Tu es vraiment une sacrée banane". Il y a un concours permanent pour voir qui sera la plus grosse banane (et nous avons de sacrés champions !). En termes d'évolution, nous devons plus nous rapprocher des singes que d'autres choses... Du coup, pour un projet de garage qui va abriter une famille de bipèdes, "Le hangar à bananes" nous semblait être un nom approprié !

<br/>
Nous espérons que notre petite histoire vous a plu. À bientôt !
<hr />
<TeamMembers :members="members"/>
