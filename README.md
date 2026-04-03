CICD_ASRC_Project
Description

Ce projet illustre la mise en place d’une application Node.js avec une base de données PostgreSQL et un worker pour le traitement en arrière-plan, orchestrés via Docker et Docker Compose.

L’objectif principal est de créer un environnement reproductible, sécurisé et modulable, tout en intégrant les bonnes pratiques de développement et de gestion de versions avec Git et GitHub.

Architecture

Le projet est composé de plusieurs services :

API : service principal exposant les fonctionnalités de l’application.
Base de données (PostgreSQL) : stockage persistant des données, isolé pour sécuriser les accès.
Worker (pg_worker) : exécute des tâches en arrière-plan à intervalle régulier.

Tous les services communiquent via un réseau interne Docker, ce qui permet d’isoler les services sensibles et de limiter leur exposition.

Fonctionnalités
Persistance des données avec PostgreSQL.
Communication interne entre conteneurs via Docker Compose.
Worker pour le traitement périodique en arrière-plan.
Gestion des secrets via un fichier .env.
Environnement reproductible grâce à Docker Compose.
Historique et versionnement avec Git et GitHub.
Installation et utilisation
Cloner le projet :
Le projet est hébergé sur GitHub et peut être cloné localement.

Configurer les variables d’environnement :
Créez un fichier .env avec le contenu suivant :

POSTGRES_DB=testdb
POSTGRES_USER=user
POSTGRES_PASSWORD=pass
Lancer l’application avec Docker Compose :
Tout l’environnement peut être démarré avec :
Arrêt et suppression d’un environnement précédent : docker-compose down
Construction et démarrage de tous les services : docker-compose up --build
Accès à l’API :
L’API est accessible sur le port défini dans docker-compose.yml (ex. http://localhost:3000).
Vérification du worker :
Les logs du worker peuvent être consultés pour vérifier le traitement en arrière-plan.
Bonnes pratiques et sécurité
Les données sensibles sont stockées dans .env, qui est ignoré par Git pour éviter toute fuite.
Les services sensibles (comme la base de données) ne sont pas exposés publiquement, et ne communiquent qu’au sein du réseau interne Docker.
Les services sont séparés pour isoler les responsabilités, faciliter la maintenance et améliorer la sécurité globale.
L’utilisation de Docker Compose permet de créer un environnement reproductible et homogène, facilitant les tests et les déploiements.
Git et CI/CD
Le projet est versionné avec Git et hébergé sur GitHub.
La branche principale a été renommée main pour suivre les conventions actuelles.
Toutes les modifications sont enregistrées dans l’historique des commits pour assurer la traçabilité et la collaboration.
Structure du projet
DockerProject/
├─ .env
├─ docker-compose.yml
├─ app/
│  ├─ Dockerfile
│  ├─ api.js
│  └─ package.json
└─ pg_worker/
   ├─ Dockerfile
   └─ worker.js
Conclusion

Ce projet m’a permis de comprendre comment orchestrer plusieurs services avec Docker, sécuriser les données sensibles, rendre l’environnement reproductible et intégrer le suivi de version avec Git et GitHub.

Il constitue une base solide pour développer des applications modulaires, sécurisées et faciles à déployer.
