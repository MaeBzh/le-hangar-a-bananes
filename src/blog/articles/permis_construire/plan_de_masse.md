---
layout: doc
aside: true

head:
  - - meta
    - name: description
      content: On vous explique ce qu'est le plan de masse et comment nous avons réalisé le notre pour notre demande de permis de construire concernant l'autoconstruction de notre garage en ossature bois de 50 mètres carrés.
  - - meta
    - name: keywords
      content: garage ossature bois, auto-construction, bricolage, permis de construire, Plan de masse, PC02, PCMI02, plan de masse pour permis de construire
---

<Image src="/media/blog/permis_construire/plan_masse/miniature.jpg" alt="Illustration d'un plan de maison en cours de création avec un ordinateur" class="mb-8">
  Illustration de <a href="https://www.freepik.com/free-vector/wooden-house-with-garage_6967668.htm" target="_blank">Frimufilms</a> sur <a href="https://www.freepik.com">Freepik.com</a>
</Image>

# PC02 – Plan de masse

Difficulté : <span class="text-blue-500">★★★★★</span>

Le plan de masse est une pièce essentielle pour obtenir un permis de construire. C'est un document qui permet de visualiser l'emplacement de la maison sur le terrain. Il est important de créer un plan de masse détaillé qui montre les arbres, les aménagements prévus (chemin, passage des réseaux d’eau, d’électricité, etc.), les bâtiments existants, les distances entre le bâtiment et les limites de propriété de la parcelle, ainsi que les cotations du bâtiment. On doit pouvoir voir la totalité de la parcelle sur le plan de masse. Si besoin, on peut fournir plusieurs plans de masse.

## Comment créer le plan de masse ?

### 1 - Se renseigner sur les règles d'urbanisme

La première étape à prendre en compte est de se renseigner en mairie pour obtenir les règles du Plan Local d'Urbanisme (PLU) de votre commune. Il est important de savoir si la parcelle est soumise à des règles de hauteur, de distance avec les limites de propriété, les types de revêtements extérieurs et le type de toiture autorisés, si le terrain est dans une zone historique, etc.

Dans notre cas par exemple, le PLU impose de construire, soit en limite de propriété, soit à un minimum de 3m de distance. Cela nous a posé problème car notre garage est en limite sur 3 côtés et il est pas possible de perdre 3m. Par conséquent, le garage ne sera pas parfaitement rectangulaire, et nous devrons intégrer les boitiers Enedis dans le bardage. Au départ, nous avions prévu de construire notre garage en étant un peu en retrait (d'environ 30 centimètres) pour éviter des soucis avec les boitiers Enedis justement. Mais malheureusement, la mairie a refusé notre plan initial, nous avons dû revoir notre dossier pour respecter les règles du PLU.

### 2 - Obtenir un plan de référence précis de la parcelle

Il est important d'obtenir un plan précis de la parcelle sur laquelle vous souhaitez construire. Pour cela, vous pouvez utiliser le site [geoportail.gouv.fr](https://www.geoportail.gouv.fr/donnees/parcelles-cadastrales) pour récupérer un plan avec les bornes du terrain. L'objectif est d'obtenir une vue suffisamment précise pour pouvoir ajouter le bâtiment et les aménagements prévus. Faites attention à l'échelle lors de votre capture d'écran, elle sera utile pour la suite. Il est préférable de choisir une échelle arrondie, comme 1:500ème, pour simplifier les conversions. Petit conseil, avant de prendre votre capture d'écran, passez en mode plein écran pour avoir une image plus nette.

<Image :image="{src: '/media/blog/permis_construire/plan_masse/geoportail.jpg', alt: 'Capture d\écran du site Géoportail'}" />

### 3 - Connaitre l'emplacement et les dimensions du projet

Une fois le plan de référence du terrain réalisé, nous avons dû réfléchir à l'emplacement et à l'orientation du garage, décider de ses dimensions, de ses ouvertures de menuiseries, de son aménagement intérieur, etc. Pour ce faire, nous avons utilisé Kozikaza. C'est une application qui permet de dessiner son projet en 2D et en 3D, d'importer un plan de référence pour dessiner par-dessus (en l'occurrence notre plan du cadastre) et de pouvoir exporter le tout avec ou sans cartouche. Tout se fait via un navigateur et c'est gratuit. L'outil comprend également de nombreux objets d'aménagement et de décoration, c'est un peu comme jouer aux Sims. Nous avons facilement pu créer plusieurs variantes et affiner les plans.

<Carousel :images="[
    {src: '/media/blog/permis_construire/plan_masse/kozikaza_1.jpg', alt: 'Plan de masse 2D sur Kozikaza'},
    {src: '/media/blog/permis_construire/plan_masse/kozikaza_2.jpg', alt: 'Rendu 3D du garage sur Kozikaza'},
]"/>

Kozikaza propose trois types de composants principaux :

- les composants de délimitation et de structure pour les limites de propriété et les murs,
- les composants matériels tels que des portes, fenêtres, meubles, véhicules, électroménagers,
- les composants de finition tels que des textures, bardages et peintures pour les rendus 3D.

Nous avons noté quatres avantages à utiliser Kozikaza :

- C'est gratuit et on peut l'utiliser directement depuis un navigateur sur ordinateur ou tablette.
- On peut créer plusieurs variantes du projet et les comparer.
- L'outil permet d'exporter le plan 2D ou 3D avec une échelle personnalisable et au format A3 ou A4.
- On peut réaliser un rendu 3D HD du projet pour un autre document à fournir pour le permis.

Par contre, gros point négatif, Kozikaza ne permet pas de créer des plans de coupe ou de facade en 2D, contrairement au logiciel [ArchiFacile](https://www.archifacile.fr) qui est une excellente alternative gratuite que nous avions évoquée dans le chapitre sur les logiciels et sites utiles. Si vous voulez une certaine cohérence graphique dans vos plans, ArchiFacile est sans doute la meilleure option après Layout.

Au final, nous avons réalisé une vingtaine de tentatives sur Kozikaza avant d'arriver à un résultat satisfaisant.

### 4 - Intégrer le bâtiment sur le plan de référence

Bien qu'il soit possible de fournir directement le plan de masse exporté depuis Kozikaza, nous avons préféré redessiner entièrement le garage sur Sketchup Pro. Cette décision nous a permis d'affiner les cotes et les positions des ouvertures, en plus de concevoir les fondations, l'ossature bois, la dalle en béton, la toiture, le bardage, etc.

Contrairement à ce que l'on pourrait penser, refaire le garage sur Sketchup Pro n'a pas été une perte de temps. Au contraire, cela nous a permis d'ajuster les cotes en fonction de l'épaisseur de l'ossature et du bardage, et de modifier la position des ouvertures pour faciliter la conception de l'ossature bois et respecter les DTUs. De plus, cette étape nous a permis de quantifier les matériaux nécessaires et d'estimer les coûts de construction.

Sketchup Pro offre également l'avantage d'être accompagné d'un logiciel spécialisé dans la conception 2D : Layout. Nous avons donc utilisé Layout pour refaire le plan de masse en 2D. Nous avions d'abord essayé avec Photoshop, mais nous avons rapidement abandonné cette option, car Layout est plus simple à utiliser et permet de tracer des éléments avec des mesures précises, d'afficher les cotes et de personnaliser facilement l'échelle.

<Carousel :images="[
    {src: '/media/blog/permis_construire/plan_masse/sketchup_1.jpg', alt: 'Plan du garage avec le soubassement sur Sketchup'},
    {src: '/media/blog/permis_construire/plan_masse/sketchup_2.jpg', alt: 'Plan du garage avec l\'ossature bois sur Sketchup'},
    {src: '/media/blog/permis_construire/plan_masse/sketchup_3.jpg', alt: 'Plan du garage avec le contreventement sur Sketchup'},
    {src: '/media/blog/permis_construire/plan_masse/sketchup_4.jpg', alt: 'Plan du garage avec l\'ossature secondaire sur Sketchup'},
    {src: '/media/blog/permis_construire/plan_masse/sketchup_5.jpg', alt: 'Plan du garage avec le bardage sur Sketchup'},
    {src: '/media/blog/permis_construire/plan_masse/layout_1.jpg', alt: 'Plan de masse avec Layout'},
]"/>

Enfin, pour réaliser un plan de masse complet, il est important de prendre en compte certains éléments, tels que le nom de la route ou de la voie passant devant le terrain, les limites de la zone constructible, l'échelle des documents, les points cardinaux, les réseaux, l'emplacement des prises de vues pour les photos demandées dans les autres pièces du dossier, etc. La liste est présente dans les instructions du dossier de permis de construire.

## Notre plan de masse

<Carousel :images="[
    {src: '/media/blog/permis_construire/plan_masse/plan_de_masse_1.jpg', alt: 'Plan de masse sans le garage'},
    {src: '/media/blog/permis_construire/plan_masse/plan_de_masse_2.jpg', alt: 'Plan de masse avec le garage'},
]"/>

Au final, nous avons fourni deux versions du plan de masse "avant / après" pour bien comprendre quels seront les modifications apporté par le projet. Il est important d'être très précis et de vérifier les côtes et l'échelle pour éviter tout refus lors de l'étude du permis de construire.

Comme vous pouvez le constater, notre plan de masse est très détaillé. Nous avons pris le temps d'intégrer toutes les informations nécessaires pour que le dossier soit complet.

## Conclusion

La réalisation d'un plan de masse précis et détaillé est cruciale pour obtenir un permis de construire. Il permet de définir avec précision l'emplacement du projet sur le terrain, les modifications prévues et les distances entre le projet et les limites de la parcelle.

Bien que cette étape demande du temps et de la patience, elle est essentielle pour éviter les refus de permis de construire. Il est donc important de s'assurer de la conformité du plan de masse avec les réglementations en vigueur et de veiller à respecter les échelles appropriées.

Nous espérons que cet article vous a été utile et nous vous invitons à le partager sur les réseaux sociaux et à nous laisser un petit commentaire.

<Comments
    pageId="permis_construire_plan_masse" 
    pageUrl="https://le-hangar-a-bananes.fr/blog/articles/permis_construire/plan_masse.html" 
    pageTitle="Le permis de construire - plan de masse"
/>
