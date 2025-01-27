# Kata Awele

### €noncé

Cet exercice vise à reproduire le jeu Awalé (ou awelé) en adoptant une approche orientée objet. Aucun langage n'est imposé, seul le paradigme. Il est donc recommandé de partir sur un langage orienté objet ou un langage multi paradigme qui le supporte.

Vidéo explicative des règles du jeu : <URL_YOUTUBE> Proposition : https://www.youtube.com/watch?v=f0LXPwJR3Vw

### Etape 1

Écrire la classe et les attributs qui matérialisera le plateau de jeu: les cases et les lettres Il va donc falloir trouver une structure de donnée adaptée au format du plateau où chaque case va devoir contenir un nombre défini de graines. Les lettres servent à pointer une case. Y ajouter une première fonction display: affichage du plateau dans la console Une seconde fonction isEmpty: le plateau est-il vide ? (toutes les cases à zero)

 A  B  C  D  E  F
(0)(0)(0)(0)(0)(0)
(0)(0)(0)(0)(0)(0)
 G  H  I  J  K  L

### Etape 2

Écrire la classe et les attributs qui serviront à représenter le joueur. Ajouter une fonction d'incrément du score

### Etape 3

Voici le coeur du jeu. Notez bien que semer se fait dans un sens et récolter, dans l'autre. Ces fonctions vont donc devoir s'ajouter à la classe du plateau de jeu.

    saw: semer les graines d'une case aux suivantes
    harvest: récolter les graines d'une case et des précédentes Il est recommandé de créer une fonction qui retourne la case suivante, en parcourant le plateau de jeu dans un sens ou dans l'autre. Cette (ou ces fonctions si vous en faite deux: une pour un sens et une autre pour l'autre) pourra donc être appelée par les fonctions de saw/harvest.

### Etape 4

Maintenant que le plus dur est passé, créer la classe et les attributs pour matérialiser le jeu. Prendre en compte deux joueurs et une gestion des tours. Il va donc falloir anticiper :

    l'affichage du plateau et des scores
    la demande de saisie et boucle de jeu.
    la gestion de la fin du jeu. Pour un souci de simplicité, on assumera que le jeu se termine quand le plateau est vide.

## Les règles de l'awele
https://fondem.ong/awale-regles-du-jeu/

L’objectif des joueurs est de capturer le maximum de graines. Les graines sont collectées grâce à des répartitions stratégiques sur le plateau jouées tour à tour par les joueurs (certains tours ne permettent pas de récupérer des graines).

### Début de partie

Les joueurs placent 4 graines par case. Le jeu est placé entre les deux joueurs dans le sens horizontal. La rangée la plus proche de chaque joueur constitue son camp.

Les joueurs jouent à tour de rôle.

Le premier joueur prend toutes les graines d’un des trous de son camp puis il les égrène une par une dans toutes les cases qui suivent sur sa rangée puis sur celle de son adversaire suivant le sens de rotation (une graine dans chaque trou après celui où il a récupéré les graines).

### Les prises

Le joueur « capture » des graines lorsque la dernière case où il pose une graine :

    est une case du camp adverse
    contient 2 ou 3 graines en comptant la nouvelle (elle contenait 1 ou 2 graines avant)

- Le joueur prend alors les graines de cette case (2 ou 3)
- puis il prend également les graines de la case précédente si celle-ci répond aux mêmes conditions : être une case du camp adverse et contenir 2 ou 3 graines. 
- Il continue ainsi à prendre les graines des cases antérieures tant que celles-ci répondent aux conditions. 
- Dès que la case antérieure n’y répond plus, (elle est dans son propre camp ou elle ne contient ni 2 ni 3 graines) sa prise s’arrête.

### La règle des 12

Si le nombre de graines ramène le joueur à la case départ du coup après un tour complet (plus de 11 billes), il saute cette case en ne posant aucune graine dedans et continue sa répartition dans les cases suivantes.

Il peut aussi arriver, plus rarement, que le joueur effectue plus de deux tours avec ses graines (s’il en a plus de 22) ; il saute alors à nouveau sa case de départ.

### L'obligation de "nourrir" l'adversaire

Lorsqu’un joueur n’a plus de graines dans son camp, son adversaire est obligé de jouer un coup qui lui en apporte au moins une.

Par ailleurs, il est interdit de jouer un coup qui ôte, par des prises, toutes les graines du camp adverse. Si un joueur joue un tel coup ou si un joueur se trouve dans la position de n’avoir qu’un tel coup à jouer, alors le coup est joué mais aucune prise n’est effectuée.
Fin de la partie

### La partie s’achève :

    lorsqu’un joueur n’a plus de graines dans son camp alors que c’est à lui de jouer et que son adversaire n’est plus en mesure de lui en apporter une selon la règle de « l’obligation de nourrir l’adversaire ». Dans ce cas, son adversaire gagne toutes les graines restantes. C’est la fin par famine.
    lorsqu’il reste trop peu de graines pour qu’aucune prise ne soit désormais possible (en pratique 2 ou 3). Chaque joueur récupère la ou les graines restantes de son camp. C’est la fin par indétermination.
