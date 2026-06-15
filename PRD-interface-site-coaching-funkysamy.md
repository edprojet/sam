# PRD - Interface du site de vente du programme Funky Samy

## 1. Contexte

Funky Samy est une coach spécialisée dans la perte de poids, avec une image de marque déjà visible sur Instagram : ton direct, motivant, accessible, énergique et orienté résultats. Son compte met en avant le coaching perte de poids, la nutrition, les témoignages, le bien-être, la confiance en soi et une approche humaine du changement.

Le projet consiste à créer une première version visuelle du site internet pour présenter et vendre son programme de coaching vidéo. Cette première phase ne concerne que l'interface utilisateur. L'objectif est de disposer d'un prototype crédible, complet et présentable à la cliente, afin qu'elle puisse valider la direction graphique, les sections, le ton, le parcours utilisateur et les écrans principaux avant les intégrations techniques.

## 2. Objectif du projet

Créer une interface Next.js moderne, responsive et professionnelle pour vendre un programme vidéo de coaching perte de poids.

Le site doit permettre à la cliente de se projeter concrètement dans :

- une page de vente claire et convaincante ;
- un espace membre visuel pour suivre la formation ;
- une présentation attractive du programme ;
- une expérience cohérente avec son univers Instagram ;
- un parcours simple depuis la découverte du programme jusqu'à l'accès aux vidéos.

Cette phase doit produire une démonstration visuelle fonctionnelle, sans connecter les paiements, l'authentification, la base de données ni les vidéos réelles.

## 3. Périmètre de cette première phase

### Inclus

- Design et intégration frontend avec Next.js.
- Création des pages principales.
- Version responsive desktop et mobile.
- Contenus fictifs mais réalistes.
- Données mockées pour les programmes, vidéos, témoignages et profils utilisateurs.
- Parcours utilisateur simulé.
- Interface d'espace membre.
- Direction artistique inspirée de son branding Instagram.

### Exclu

- Connexion Stripe.
- Connexion Supabase.
- Authentification réelle.
- Base de données.
- Upload ou hébergement réel des vidéos.
- Paiement réel.
- Emails transactionnels.
- Domaine, DNS et déploiement final.
- Back-office d'administration complet.

## 4. Public cible

Le site s'adresse principalement à des femmes et hommes qui veulent perdre du poids sans se sentir jugés, avec une méthode accessible, motivante et réaliste.

Les visiteurs peuvent être :

- des abonnés Instagram déjà familiers avec Funky Samy ;
- des personnes qui ont déjà essayé plusieurs régimes sans résultat durable ;
- des personnes qui veulent retrouver confiance en elles ;
- des personnes qui cherchent un accompagnement clair, humain et structuré ;
- des prospects intéressés par une formation vidéo plutôt qu'un coaching individuel.

## 5. Positionnement

Le site doit positionner Funky Samy comme une coach proche, énergique, crédible et orientée transformation.

Le message central :

> Un programme vidéo simple, motivant et concret pour perdre du poids, retrouver de bonnes habitudes et se sentir mieux dans son corps sans pression inutile.

Le ton doit être :

- chaleureux ;
- direct ;
- dynamique ;
- rassurant ;
- motivant ;
- non culpabilisant ;
- légèrement fun, en cohérence avec son nom et son univers Instagram.

## 6. Direction artistique

L'identité visuelle doit reprendre l'énergie visible sur Instagram, notamment :

- couleurs fortes ;
- touches de rose, violet et vert acide ;
- typographies lisibles avec une personnalité affirmée ;
- visuels humains et authentiques ;
- boutons visibles et assumés ;
- mise en avant des résultats et témoignages ;
- interface moderne, mais pas froide ni trop corporate.

Le design doit rester professionnel pour inspirer confiance, tout en gardant une personnalité vive et reconnaissable.

### Palette indicative

- Rose énergique : pour les accents, badges et éléments de marque.
- Violet profond : pour les sections fortes, titres ou fonds contrastés.
- Vert punchy : pour les appels à l'action et éléments positifs.
- Blanc ou fond très clair : pour garder de la lisibilité.
- Noir doux : pour les textes principaux.

## 7. Pages à créer

### 7.1 Page d'accueil / page de vente

Cette page sera la page principale du site. Elle doit présenter le programme, convaincre et guider vers l'achat ou la découverte.

Sections prévues :

- Header avec logo, navigation et bouton d'appel à l'action.
- Hero section avec promesse claire, photo ou visuel fort, bouton principal et preuve sociale.
- Bloc problème : pourquoi les régimes classiques ne fonctionnent pas toujours.
- Bloc méthode : la façon de travailler de Funky Samy.
- Présentation du programme vidéo.
- Aperçu des modules de formation.
- Bénéfices concrets du programme.
- Témoignages clients.
- Section "pour qui / pas pour qui".
- Présentation de Funky Samy.
- Bloc prix ou offre mockée.
- FAQ.
- Dernier appel à l'action.
- Footer.

Objectif : donner envie de rejoindre le programme et rendre l'offre claire en moins de quelques minutes.

### 7.2 Page programme

Page plus détaillée dédiée au contenu de la formation.

Sections prévues :

- Résumé du programme.
- Liste des modules.
- Nombre de vidéos fictif.
- Durée estimée.
- Objectifs de chaque module.
- Bonus éventuels : fiches pratiques, exemples de menus, routines motivation.
- Bouton d'accès ou d'achat simulé.

Objectif : aider la cliente à visualiser comment son contenu vidéo pourra être structuré.

### 7.3 Page connexion

Interface de connexion visuelle pour l'espace membre.

Éléments prévus :

- Formulaire email / mot de passe.
- Bouton de connexion.
- Lien mot de passe oublié.
- Message rassurant.
- Visuel ou citation motivante.

Objectif : montrer le futur point d'entrée des clientes ayant acheté le programme.

### 7.4 Page inscription / achat simulé

Page de transition visuelle avant accès au programme.

Éléments prévus :

- Récapitulatif de l'offre.
- Prix fictif ou mention "à définir".
- Liste des inclusions.
- Bouton "Rejoindre le programme" non connecté.
- Bandeau de réassurance.

Objectif : simuler le futur tunnel de conversion sans intégrer Stripe.

### 7.5 Espace membre - dashboard

Page privée simulée après connexion.

Éléments prévus :

- Message de bienvenue.
- Progression globale du programme.
- Modules en cours.
- Prochaine vidéo recommandée.
- Raccourcis vers les ressources.
- Bloc motivation du jour.

Objectif : montrer à quoi ressemblera l'expérience après achat.

### 7.6 Espace membre - lecteur vidéo

Page de lecture d'un module vidéo.

Éléments prévus :

- Lecteur vidéo mocké avec placeholder.
- Titre de la leçon.
- Description courte.
- Liste des leçons du module.
- Statut vu / non vu.
- Bouton "Marquer comme terminé".
- Zone ressources associées.

Objectif : présenter l'interface principale de consommation de la formation.

### 7.7 Page ressources

Page regroupant des supports fictifs.

Exemples :

- PDF nutrition.
- Exemple de planning repas.
- Liste de courses.
- Routine motivation.
- Guide de suivi des progrès.

Objectif : valoriser le programme au-delà des vidéos.

## 8. Parcours utilisateur à simuler

1. Le visiteur arrive sur la page d'accueil.
2. Il comprend rapidement la promesse du programme.
3. Il consulte les bénéfices, témoignages et modules.
4. Il clique sur un bouton d'appel à l'action.
5. Il arrive sur une page d'achat simulée.
6. Il peut accéder à un espace membre de démonstration.
7. Il voit son dashboard.
8. Il ouvre une vidéo de formation.
9. Il consulte des ressources complémentaires.

Le parcours doit être fluide, même si aucune donnée réelle n'est connectée.

## 9. Contenus mockés à prévoir

### Modules fictifs

- Module 1 : Comprendre son corps et ses habitudes.
- Module 2 : Reprendre une alimentation simple et durable.
- Module 3 : Construire des repas qui calent vraiment.
- Module 4 : Gérer les envies, les craquages et la motivation.
- Module 5 : Bouger sans se dégoûter du sport.
- Module 6 : Suivre ses progrès sans obsession.

### Témoignages fictifs

Prévoir 3 à 6 témoignages courts avec prénom, résultat ou ressenti.

Exemples :

- "J'ai enfin compris comment manger sans me frustrer."
- "Le programme m'a aidée à reprendre confiance sans culpabiliser."
- "Les vidéos sont simples, motivantes et faciles à suivre."

Les témoignages devront être clairement identifiables comme contenus de démonstration tant qu'ils ne sont pas remplacés par des vrais.

### Ressources fictives

- Guide de démarrage.
- Planning repas sur 7 jours.
- Liste de courses.
- Fiche suivi mensuel.
- Check-list motivation.

## 10. Composants UI principaux

À prévoir :

- Header responsive.
- Footer.
- Boutons principaux et secondaires.
- Cards modules.
- Cards témoignages.
- Bloc prix.
- Accordéon FAQ.
- Barre de progression.
- Layout espace membre.
- Sidebar ou navigation membre.
- Lecteur vidéo placeholder.
- Badges de statut.
- Cards ressources.
- États vides simples.

## 11. Responsive design

Le site doit être utilisable sur :

- mobile ;
- tablette ;
- desktop.

Le mobile est important, car une grande partie du trafic viendra probablement d'Instagram. Les sections doivent donc être pensées pour une lecture rapide, avec des boutons visibles et des blocs courts.

## 12. Critères de validation pour la démo

La première version sera considérée comme réussie si :

- la cliente comprend immédiatement la structure du futur site ;
- l'univers visuel lui semble cohérent avec son image ;
- le parcours de vente est clair ;
- l'espace membre donne envie d'être utilisé ;
- les pages principales sont navigables ;
- les contenus mockés rendent le projet concret ;
- le site est propre sur mobile et desktop ;
- aucune intégration technique réelle n'est nécessaire pour la présentation.

## 13. Livrables attendus

- Application Next.js avec les pages frontend.
- Données mockées locales.
- Interface responsive.
- Navigation fonctionnelle entre les écrans.
- Prototype présentable en rendez-vous client.
- Possibilité de modifier facilement les textes, couleurs, modules et témoignages après retour client.

## 14. Points à valider avec la cliente

- Nom exact du programme.
- Prix de l'offre.
- Durée du programme.
- Nombre réel de vidéos.
- Existence de bonus ou supports PDF.
- Ton souhaité : très fun, plus premium, plus doux ou plus direct.
- Photos disponibles.
- Témoignages réels utilisables.
- Couleurs à conserver ou ajuster.
- Type de promesse à mettre en avant.
- Niveau de détail souhaité dans l'espace membre.

## 15. Prochaine étape recommandée

Créer une première maquette intégrée de la page d'accueil et de l'espace membre avec des contenus fictifs. Ces deux écrans permettront de valider rapidement la direction commerciale et l'expérience post-achat avant de construire toutes les pages secondaires.
