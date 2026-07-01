import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { COMPANY, CONTACT, HOSTING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales · ANSET Assurances",
  description: "Informations légales relatives à ANSET Assurances et Coverseas SASU.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout title="Mentions légales" lastUpdated="21 mai 2026">

      <h2>Éditeur du site</h2>
      <p>
        Le site <a href="https://ansetassurances.com">ansetassurances.com</a> est édité par :
      </p>
      <p>
        <strong>{COMPANY.legalName}</strong><br />
        Société par actions simplifiée unipersonnelle au capital de {COMPANY.capital}<br />
        SIREN : {COMPANY.siren}<br />
        Siège social : {COMPANY.address.full}<br />
        Marque commerciale : {COMPANY.brandName}
      </p>

      <h2>Direction de la publication</h2>
      <p>
        Directeur de la publication : Geoffrey Guérin, Président de Coverseas SASU.
      </p>

      <h2>Statut professionnel</h2>
      <p>
        Coverseas SASU est inscrite à l'<strong>ORIAS</strong> (Organisme pour le Registre unique des Intermédiaires en Assurance, Banque et Finance) sous le numéro <strong>{COMPANY.oriasNumber}</strong>, en qualité de courtier en assurance (catégorie B).
      </p>
      <p>
        L'inscription peut être vérifiée à tout moment sur le site officiel : <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer">www.orias.fr</a>
      </p>
      <p>
        En tant qu'intermédiaire d'assurance, Coverseas SASU est soumise au contrôle de l'<strong>Autorité de Contrôle Prudentiel et de Résolution (ACPR)</strong>, située 4 Place de Budapest, CS 92459, 75436 Paris Cedex 09.
      </p>

      <h2>Responsabilité civile professionnelle et garantie financière</h2>
      <p>
        Conformément aux articles L.512-6 et L.512-7 du Code des assurances, Coverseas SASU dispose d'une assurance de responsabilité civile professionnelle et d'une garantie financière souscrites auprès de :
      </p>
      <p>
        <strong>Liberty Mutual Insurance Europe SE</strong><br />
        Contrat Evolution Broker n° MRCMBR2202511FR00000000068917A00<br />
        Distribué par LSME
      </p>

      <h2>Médiation de l'assurance</h2>
      <p>
        Conformément aux articles L.612-1 et suivants du Code de la consommation, en cas de litige non résolu avec votre intermédiaire d'assurance, vous pouvez saisir gratuitement le médiateur compétent :
      </p>
      <p>
        <strong>La Médiation de l'Assurance</strong><br />
        TSA 50110, 75441 Paris Cedex 09<br />
        <a href="https://www.mediation-assurance.org" target="_blank" rel="noopener noreferrer">www.mediation-assurance.org</a>
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par :
      </p>
      <p>
        <strong>{HOSTING.name}</strong><br />
        {HOSTING.address}<br />
        <a href={HOSTING.website} target="_blank" rel="noopener noreferrer">{HOSTING.website}</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus du site (textes, images, logos, marques, illustrations, mises en page) est la propriété exclusive de Coverseas SASU ou de ses partenaires, et est protégé par le droit français et international de la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, par quelque procédé que ce soit, est interdite sans autorisation écrite préalable.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question concernant ces mentions légales ou le site :
      </p>
      <p>
        Email : <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </p>

    </LegalPageLayout>
  );
}
