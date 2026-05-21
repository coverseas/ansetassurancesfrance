# ANSET Assurances · Site métropole

Site B2C d'ANSET Assurances, marque commerciale de Coverseas SASU, en métropole France.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 3
- Hébergement Vercel
- Supabase optionnel (formulaires, lead capture)

## Démarrage

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000.

## Structure

- `app/` — Pages (home, mentions-legales)
- `components/` — Composants UI et sections
- `lib/constants.ts` — Toutes les données centralisées (légal, produits, etc.)
- `tailwind.config.ts` — Couleurs de la charte ANSET

## Mentions légales

Centralisées dans `lib/constants.ts`. Une seule source de vérité pour ORIAS, SIREN, Liberty Mutual, médiateur, CNIL, hébergeur.

## TODO

- Acquérir et intégrer Sonny Gothic + Agrandir
- Récupérer les pictogrammes ANSET de la charte Pitaya
- Configurer les sous-domaines KAYROS (souscription.ansetassurances.com, espace.ansetassurances.com)
- Mettre à jour le numéro de téléphone réel dans `lib/constants.ts`
- Page contact avec formulaire
- Bandeau cookies conforme RGPD
- Pages produit (santé, moto, moto pro)