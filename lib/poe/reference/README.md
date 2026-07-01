# Base de connaissances de Poé (agent IA)

Ce dossier contient les **ressources de référence** que Poé, l'agente IA du site,
utilise pour répondre aux visiteurs.

## Comment ça marche

- Chaque fichier texte (`.md`, `.markdown`, `.txt`) de ce dossier — **y compris
  dans des sous-dossiers par produit** — est chargé automatiquement et injecté
  dans le contexte de Poé à chaque conversation. (`README.md` est ignoré.)
- **Pour enrichir Poé, il suffit d'ajouter ou de modifier des fichiers texte ici.**
  Aucun changement de code n'est nécessaire.
- Organisez par produit avec des sous-dossiers, par exemple :
  ```
  reference/
    01-produits.md          (vue d'ensemble)
    sante-chien-chat/garanties.md
    auto/conditions.md
    habitation/faq.md
  ```
- Les fichiers sont chargés par ordre alphabétique de chemin. Préfixez par un
  numéro si l'ordre compte.

## Les PDF

Poé ne lit **pas** les PDF directement (ce sont des fichiers binaires, trop
lourds à charger à chaque conversation). Pour intégrer le contenu d'un PDF :
convertissez-le en `.md`/`.txt` (copier-coller du texte, ou export texte) et
déposez le fichier dans le sous-dossier du produit concerné. Gardez l'essentiel
(garanties, conditions, exclusions, procédures), pas la mise en page.

## Bonnes pratiques

- Écrivez des faits vérifiés : garanties, conditions, procédures, coordonnées.
- Restez factuel et concis. Poé s'appuie sur ce contenu ; ne mettez pas
  d'informations incertaines ou provisoires.
- Évitez d'y placer des **tarifs précis** ou des **mentions légales** tant qu'ils
  ne sont pas définitifs — Poé a pour consigne de ne jamais inventer ces éléments.
- Ne mettez ici aucune donnée personnelle de client.

## Déploiement

Le dossier est inclus dans le bundle serveur via `outputFileTracingIncludes`
dans `next.config.mjs`. Après modification, redéployez pour que Poé prenne en
compte les changements (le contenu est mis en cache au démarrage de la fonction).
