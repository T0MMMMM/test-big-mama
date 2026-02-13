# Test Technique - Big Mama

## Description

Section d'intégration Wordpress HTML/CSS/JS basée sur une maquette Figma.

## Fonctionnalités

- Titre principal statique
- Liste de cards interactives
- Bloc "Titre du projet" dynamique (change selon la carte active)

## Technologies

- HTML
- CSS / SCSS
- JavaScript

## Architecture & Méthodologie

Le projet suit la méthodologie **BEM** (Block Element Modifier) pour l'organisation CSS (ex: `.project-section__title`).
Cette approche modulaire prévient les conflits de style, ce qui est idéal pour une intégration dans l'écosystème WordPress.

## Intégration WordPress

Le script JS est conçu pour être dynamique. Pour l'alimenter depuis le PHP (WordPress) :

1.  Utilisez `wp_localize_script` dans `functions.php` pour injecter vos données :
```php
wp_localize_script('mon-script-js', 'projectDataGlobal', $tableau_de_projets_php);
```
2.  Le fichier `main.js` détectera automatiquement la variable `window.projectDataGlobal`.

## Installation

Ouvrir `index.html` dans un navigateur.

## Auteur

Tom Fuster