import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gestion des cookies · ANSET Assurances",
  description: "Liste des cookies utilisés par ANSET Assurances et comment les gérer.",
};

export default function CookiesPage() {
  return (
    <LegalPageLayout
      title="Gestion des cookies"
      subtitle="Quels cookies nous utilisons et comment les gérer"
      lastUpdated="21 mai 2026"
    >
      <h2>Qu'est-ce qu'un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou smartphone) lorsque vous visitez un site web. Il permet au site de mémoriser certaines informations sur votre visite : préférences linguistiques, statut de connexion, ou habitudes de navigation.
      </p>

      <h2>Cookies utilisés sur ce site</h2>

      <h3>Cookies essentiels (toujours actifs)</h3>
      <p>Ces cookies sont strictement nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.</p>
      <ul>
        <li><strong>anset-cookie-consent</strong> : mémorise votre choix concernant les cookies. Durée : 12 mois.</li>
      </ul>

      <h3>Cookies d'analyse (avec votre consentement)</h3>
      <p>Ces cookies nous permettent de mesurer l'audience du site et d'améliorer son fonctionnement. Ils ne sont activés qu'après votre acceptation.</p>
      <ul>
        <li>À ce jour, aucun cookie d'analyse n'est déployé. Cette section sera mise à jour lors de la mise en place d'un outil de mesure d'audience respectueux de la vie privée (Plausible, Matomo ou équivalent).</li>
      </ul>

      <h3>Cookies marketing</h3>
      <p>Nous n'utilisons aucun cookie publicitaire ou de retargeting. Notre site est sans publicité.</p>

      <h2>Comment gérer vos cookies ?</h2>
      <p>Vous pouvez à tout moment modifier vos préférences :</p>
      <ul>
        <li><strong>Via notre bannière</strong> : effacez le cookie de consentement depuis les paramètres de votre navigateur pour faire réapparaître la bannière à votre prochaine visite.</li>
        <li><strong>Via les paramètres de votre navigateur</strong> : la plupart des navigateurs permettent de bloquer ou supprimer les cookies dans leurs options.</li>
      </ul>
      <p>Liens vers les pages d'aide :</p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox-ordinateur" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>Conséquences du refus</h2>
      <p>
        Le refus des cookies non essentiels n'affecte en rien votre navigation, votre capacité à demander un devis ou à souscrire un contrat. Seuls nos outils internes de mesure d'audience sont impactés.
      </p>

      <h2>Contact</h2>
      <p>Pour toute question : <a href={CONTACT.emailLegalHref}>{CONTACT.emailLegal}</a></p>
    </LegalPageLayout>
  );
}
