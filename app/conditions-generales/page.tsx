import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { COMPANY, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation · ANSET Assurances",
  description: "Conditions générales d'utilisation du site ANSET Assurances.",
};

export default function CGUPage() {
  return (
    <LegalPageLayout
      title="Conditions générales d'utilisation"
      subtitle="Les règles d'utilisation du site"
      lastUpdated="21 mai 2026"
    >
      <h2>Article 1 — Objet</h2>
      <p>
        Les présentes conditions générales d'utilisation (CGU) régissent l'accès et l'utilisation du site <a href="https://ansetassurances.com">ansetassurances.com</a> édité par {COMPANY.legalName} (SIREN {COMPANY.siren}), exploitant la marque commerciale {COMPANY.brandName}.
      </p>

      <h2>Article 2 — Acceptation des CGU</h2>
      <p>
        L'utilisation du site implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions, nous vous demandons de ne pas utiliser le site.
      </p>

      <h2>Article 3 — Services proposés</h2>
      <p>Le site permet aux utilisateurs de :</p>
      <ul>
        <li>Consulter notre offre d'assurance (santé chien/chat, moto, et autres produits à venir).</li>
        <li>Demander un devis personnalisé via notre formulaire en ligne ou notre agente IA Poé.</li>
        <li>Échanger avec nos conseillers humains.</li>
        <li>Souscrire à terme un contrat d'assurance (en ligne pour certains produits, via conseiller pour d'autres).</li>
      </ul>

      <h2>Article 4 — Obligations de l'utilisateur</h2>
      <p>L'utilisateur s'engage à :</p>
      <ul>
        <li>Fournir des informations exactes, complètes et à jour lors de toute demande de devis ou souscription.</li>
        <li>Utiliser le site conformément à sa destination et à la législation en vigueur.</li>
        <li>Ne pas chercher à porter atteinte à la sécurité ou au bon fonctionnement du site.</li>
        <li>Respecter les droits de propriété intellectuelle de Coverseas SASU et de ses partenaires.</li>
      </ul>
      <p>
        Toute déclaration intentionnellement inexacte au stade de la souscription pourrait conduire à la nullité du contrat (article L113-8 du Code des assurances) ou à une réduction d'indemnité (article L113-9).
      </p>

      <h2>Article 5 — Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments du site (textes, images, marques, logos, charte graphique, code source, base de données) sont protégés par les lois en vigueur sur la propriété intellectuelle et sont la propriété exclusive de Coverseas SASU ou de ses partenaires. Toute reproduction, représentation, modification, exploitation ou utilisation non autorisée est strictement interdite.
      </p>

      <h2>Article 6 — Disponibilité et responsabilité</h2>
      <p>
        Coverseas SASU s'efforce d'assurer la disponibilité du site 24h/24, mais ne garantit pas une accessibilité ininterrompue. Le site peut être suspendu pour maintenance ou évolution sans préavis.
      </p>
      <p>Coverseas SASU décline toute responsabilité quant à :</p>
      <ul>
        <li>Les dommages indirects résultant de l'utilisation du site.</li>
        <li>Les indisponibilités ponctuelles.</li>
        <li>Les contenus de sites tiers vers lesquels des liens hypertextes peuvent renvoyer.</li>
      </ul>

      <h2>Article 7 — Agente IA Poé</h2>
      <p>
        L'agente IA Poé fournit des informations sur nos contrats et garanties à titre indicatif. Elle peut préparer des demandes de devis et mettre l'utilisateur en relation avec un conseiller humain. Les réponses de Poé n'engagent pas Coverseas SASU et ne se substituent pas à un conseil professionnel personnalisé d'un conseiller habilité. En cas de divergence entre les informations fournies par Poé et le contrat d'assurance effectivement souscrit, ce dernier prévaut.
      </p>

      <h2>Article 8 — Modification des CGU</h2>
      <p>
        Coverseas SASU se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le site. Il appartient à l'utilisateur de consulter régulièrement la version en vigueur.
      </p>

      <h2>Article 9 — Loi applicable et juridiction</h2>
      <p>
        Les présentes CGU sont soumises au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
      </p>

      <h2>Article 10 — Contact</h2>
      <p>
        Pour toute question relative aux présentes CGU :<br />
        Email : <a href={CONTACT.emailLegalHref}>{CONTACT.emailLegal}</a>
      </p>
    </LegalPageLayout>
  );
}
