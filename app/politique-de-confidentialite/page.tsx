import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";
import { COMPANY, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialité · ANSET Assurances",
  description: "Comment ANSET Assurances collecte, utilise et protège vos données personnelles conformément au RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageLayout
      title="Politique de confidentialité"
      subtitle="Comment nous protégeons vos données"
      lastUpdated="21 mai 2026"
    >
      <h2>1. Responsable de traitement</h2>
      <p>Le responsable du traitement de vos données personnelles est :</p>
      <p>
        <strong>{COMPANY.legalName}</strong><br />
        Société par actions simplifiée unipersonnelle<br />
        SIREN : {COMPANY.siren}<br />
        Siège social : {COMPANY.address.full}<br />
        Marque commerciale : {COMPANY.brandName}<br />
        Inscrite à l'ORIAS sous le numéro {COMPANY.oriasNumber}
      </p>
      <p>
        Pour toute question relative au traitement de vos données :<br />
        Email : <a href={CONTACT.emailDpoHref}>{CONTACT.emailDpo}</a>
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons et traitons les catégories de données suivantes :</p>
      <ul>
        <li><strong>Données d'identification</strong> : nom, prénom, date de naissance, adresse postale, email, téléphone.</li>
        <li><strong>Données liées aux biens ou risques à assurer</strong> : informations sur l'animal (espèce, race, âge), sur le véhicule (marque, modèle, immatriculation), sur le voyage (destinations, durée), etc.</li>
        <li><strong>Données contractuelles</strong> : devis demandés, contrats souscrits, sinistres déclarés, échanges avec nos conseillers et avec Poé.</li>
        <li><strong>Données de connexion</strong> : adresse IP, type de navigateur, pages consultées, durée de visite.</li>
      </ul>

      <h2>3. Finalités du traitement</h2>
      <p>Vos données sont traitées pour :</p>
      <ul>
        <li>Établir les devis et propositions d'assurance que vous demandez.</li>
        <li>Conclure et gérer vos contrats d'assurance.</li>
        <li>Instruire et indemniser les sinistres.</li>
        <li>Vous adresser, le cas échéant et avec votre consentement, des communications commerciales.</li>
        <li>Respecter nos obligations légales et réglementaires (notamment Lutte contre le Blanchiment et le Financement du Terrorisme).</li>
        <li>Mesurer la qualité de nos services et améliorer notre site.</li>
      </ul>

      <h2>4. Bases légales</h2>
      <p>Le traitement de vos données repose sur :</p>
      <ul>
        <li><strong>L'exécution du contrat</strong> ou des mesures précontractuelles que vous avez demandées.</li>
        <li><strong>Le respect d'obligations légales</strong> auxquelles Coverseas SASU est soumise en tant que courtier en assurance.</li>
        <li><strong>L'intérêt légitime</strong> de Coverseas SASU pour l'amélioration de ses services et la sécurisation de son activité.</li>
        <li><strong>Votre consentement</strong>, notamment pour les communications commerciales et les cookies non essentiels.</li>
      </ul>

      <h2>5. Destinataires</h2>
      <p>Vos données peuvent être communiquées :</p>
      <ul>
        <li>À nos assureurs partenaires porteurs de risque : Groupama PJ, Mutuelle du Motard, HEYME, OCIRP, dans le cadre de l'instruction et de la gestion de vos contrats.</li>
        <li>À nos prestataires techniques (hébergement, outils de gestion), qui agissent en qualité de sous-traitants conformément à l'article 28 du RGPD.</li>
        <li>Aux autorités administratives ou judiciaires habilitées (ACPR, TRACFIN, justice) dans le cadre d'obligations légales.</li>
      </ul>

      <h2>6. Transferts hors Union européenne</h2>
      <p>
        Nos traitements sont principalement réalisés au sein de l'Union européenne. Notre hébergeur Vercel utilise la Région Vercel Paris (CDG). En cas de transfert ponctuel hors UE, celui-ci serait encadré par des clauses contractuelles types validées par la Commission européenne.
      </p>

      <h2>7. Durées de conservation</h2>
      <ul>
        <li><strong>Devis non transformés</strong> : 3 ans à compter du dernier contact.</li>
        <li><strong>Contrats d'assurance</strong> : durée du contrat puis 10 ans après son terme, conformément au Code des assurances.</li>
        <li><strong>Données liées aux sinistres</strong> : 10 ans après la clôture du sinistre.</li>
        <li><strong>Données de prospection commerciale</strong> : 3 ans à compter du dernier contact, sauf opposition.</li>
      </ul>

      <h2>8. Vos droits</h2>
      <p>
        Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
      </p>
      <ul>
        <li><strong>Droit d'accès</strong> à vos données personnelles.</li>
        <li><strong>Droit de rectification</strong> de données inexactes.</li>
        <li><strong>Droit à l'effacement</strong> dans certaines conditions.</li>
        <li><strong>Droit d'opposition</strong>, notamment à la prospection commerciale.</li>
        <li><strong>Droit à la limitation</strong> du traitement.</li>
        <li><strong>Droit à la portabilité</strong> de vos données.</li>
        <li><strong>Droit de définir des directives</strong> relatives au sort de vos données après votre décès.</li>
      </ul>
      <p>
        Pour exercer ces droits : <a href={CONTACT.emailDpoHref}>{CONTACT.emailDpo}</a> ou par courrier à notre siège.
      </p>

      <h2>9. Réclamation auprès de la CNIL</h2>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la {COMPANY.cnil.name} :
      </p>
      <p>
        {COMPANY.cnil.address}<br />
        Téléphone : {COMPANY.cnil.phone}<br />
        Site : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
      </p>

      <h2>10. Modification de la politique</h2>
      <p>
        La présente politique de confidentialité peut être modifiée à tout moment. La date de dernière mise à jour est indiquée en haut de cette page.
      </p>
    </LegalPageLayout>
  );
}
