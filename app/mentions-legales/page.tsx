import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, CONTACT, HOSTING } from "@/lib/constants";
import { LeafPattern } from "@/components/ui/LeafPattern";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site ansetassurances.com — éditeur, hébergement, statut professionnel, assurances obligatoires, RGPD, médiation de l'assurance.",
  robots: { index: true, follow: true },
};

const sections = [
  { id: "editeur", label: "Éditeur du site" },
  { id: "hebergement", label: "Hébergement" },
  { id: "statut", label: "Statut professionnel" },
  { id: "assurances", label: "Assurances obligatoires" },
  { id: "information", label: "Information précontractuelle" },
  { id: "reclamations", label: "Réclamations" },
  { id: "mediation", label: "Médiation de l'assurance" },
  { id: "rgpd", label: "Données personnelles" },
  { id: "cookies", label: "Cookies" },
  { id: "propriete", label: "Propriété intellectuelle" },
  { id: "droit", label: "Droit applicable" },
];

export default function MentionsLegalesPage() {
  return (
    <article className="bg-white relative">
      <header className="bg-anset-mist relative overflow-hidden">
        <LeafPattern color="var(--anset-blue)" opacity={0.05} size={300} className="-right-12 -top-12" />
        <div className="container-anset py-12 md:py-16 relative z-10">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-anset-corail mb-2">Information légale</p>
          <h1 className="text-display-md md:text-display-lg text-anset-blue">Mentions légales</h1>
          <p className="mt-3 text-sm md:text-base text-anset-slate max-w-2xl">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique et aux articles L.512-1 et suivants du Code des assurances.
          </p>
          <p className="mt-2 text-xs text-anset-slate/70">Dernière mise à jour : mai 2026</p>
        </div>
      </header>

      <div className="container-anset py-12 md:py-16 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-3">Sommaire</p>
          <nav>
            <ol className="space-y-1.5">
              {sections.map((s, i) => (
                <li key={s.id} className="text-sm">
                  <a href={`#${s.id}`} className="text-anset-slate hover:text-anset-blue transition-colors flex items-baseline gap-2">
                    <span className="text-xs font-bold text-anset-corail tabular-nums w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="space-y-12 max-w-3xl">
          <section id="editeur" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">01 — Éditeur du site</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Qui édite ce site</h2>
            <p className="text-anset-slate leading-relaxed mb-4">
              Le site <strong>ansetassurances.com</strong> est édité par <strong>{COMPANY.legalName}</strong>, marque commerciale exploitée sous le nom <strong>{COMPANY.brandName}</strong>.
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-y-2.5 gap-x-6 text-sm">
              <dt className="text-anset-slate/70">Forme juridique</dt><dd className="text-anset-ink">{COMPANY.legalForm}</dd>
              <dt className="text-anset-slate/70">Siège social</dt><dd className="text-anset-ink">{COMPANY.address.full}</dd>
              <dt className="text-anset-slate/70">SIREN</dt><dd className="text-anset-ink font-mono">{COMPANY.siren}</dd>
              <dt className="text-anset-slate/70">RCS</dt><dd className="text-anset-ink">{COMPANY.rcs}</dd>
              <dt className="text-anset-slate/70">Représentant légal</dt><dd className="text-anset-ink">{COMPANY.president}, Président</dd>
              <dt className="text-anset-slate/70">Directeur de la publication</dt><dd className="text-anset-ink">{COMPANY.directeurPublication}</dd>
              <dt className="text-anset-slate/70">Téléphone</dt>
              <dd><a href={CONTACT.phoneHref} className="text-anset-blue font-bold hover:underline">{CONTACT.phoneDisplay}</a></dd>
              <dt className="text-anset-slate/70">Courriel</dt>
              <dd><a href={CONTACT.emailHref} className="text-anset-blue font-bold hover:underline">{CONTACT.email}</a></dd>
            </dl>
          </section>

          <section id="hebergement" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">02 — Hébergement</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Qui héberge ce site</h2>
            <p className="text-anset-slate leading-relaxed">
              Le site est hébergé par <strong>{HOSTING.name}</strong>, dont le siège est situé au {HOSTING.address}. Les données sont servies depuis l'infrastructure européenne de Vercel ({HOSTING.euRegion}). Site web : <a href={HOSTING.website} target="_blank" rel="noopener noreferrer" className="text-anset-blue font-bold hover:underline">{HOSTING.website}</a>.
            </p>
          </section>

          <section id="statut" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">03 — Statut professionnel</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Immatriculation et autorité de contrôle</h2>
            <p className="text-anset-slate leading-relaxed mb-4">
              {COMPANY.legalName} est immatriculée au Registre unique des intermédiaires en assurance, banque et finance (ORIAS) sous le numéro <strong className="font-mono text-anset-blue">{COMPANY.oriasNumber}</strong> en qualité de <strong>{COMPANY.oriasCategory}</strong>. L'immatriculation est vérifiable à tout moment sur le site <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="text-anset-blue font-bold hover:underline">orias.fr</a> en saisissant le numéro ci-dessus.
            </p>
            <p className="text-anset-slate leading-relaxed">
              L'activité de courtage en assurance est soumise au contrôle de l'<strong>{COMPANY.acpr.name}</strong>, sise {COMPANY.acpr.address}, en application des articles L.310-12 et suivants du Code des assurances.
            </p>
          </section>

          <section id="assurances" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">04 — Assurances professionnelles obligatoires</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Responsabilité civile et garantie financière</h2>
            <p className="text-anset-slate leading-relaxed mb-4">
              {COMPANY.legalName} a souscrit auprès de <strong>{COMPANY.insurer}</strong> (via {COMPANY.insurerAgent}) un contrat d'assurance <strong>{COMPANY.contractName}</strong> n° <span className="font-mono text-xs">{COMPANY.contractNumber}</span> couvrant simultanément les deux assurances obligatoires de l'intermédiaire en assurance :
            </p>
            <ul className="list-disc list-inside text-anset-slate space-y-2 mb-4 ml-2">
              <li>la <strong>responsabilité civile professionnelle</strong> conformément aux articles L.512-6, R.512-14 et A.512-4 du Code des assurances ;</li>
              <li>la <strong>garantie financière</strong> conformément à l'article L.512-7 du Code des assurances, destinée à couvrir les fonds confiés à l'intermédiaire et destinés à être transmis aux entreprises d'assurance ou aux assurés.</li>
            </ul>
            <p className="text-anset-slate leading-relaxed text-sm">Les attestations en vigueur peuvent être communiquées sur simple demande auprès du service réclamations.</p>
          </section>

          <section id="information" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">05 — Information précontractuelle</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Devoir de conseil et information sur les liens</h2>
            <p className="text-anset-slate leading-relaxed mb-4">
              {COMPANY.brandName} agit en qualité de courtier indépendant. En application de la Directive 2016/97 sur la distribution d'assurances et des articles L.521-1 et suivants du Code des assurances, nous vous communiquons les éléments suivants :
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-y-3 gap-x-6 text-sm">
              <dt className="text-anset-slate/70 font-bold">Nature de l'intervention</dt>
              <dd className="text-anset-ink">Courtage d'assurance. Nous proposons les contrats d'un ou plusieurs assureurs partenaires et nous fournissons un conseil fondé sur une analyse impartiale et personnalisée de vos besoins.</dd>
              <dt className="text-anset-slate/70 font-bold">Lien capitalistique avec des entreprises d'assurance</dt>
              <dd className="text-anset-ink">{COMPANY.legalName} ne détient aucune participation directe ou indirecte supérieure à 10 % dans le capital d'une entreprise d'assurance, et aucune entreprise d'assurance ne détient une participation supérieure à 10 % dans le capital de {COMPANY.legalName}.</dd>
              <dt className="text-anset-slate/70 font-bold">Mode de rémunération</dt>
              <dd className="text-anset-ink">Nous sommes rémunérés sous forme de commissions versées par les entreprises d'assurance partenaires sur les primes encaissées. Aucun honoraire n'est facturé directement au client.</dd>
              <dt className="text-anset-slate/70 font-bold">Documents d'information remis</dt>
              <dd className="text-anset-ink">Pour chaque contrat proposé, le document d'information sur le produit d'assurance (IPID) et les conditions générales vous sont remis avant souscription.</dd>
            </dl>
          </section>

          <section id="reclamations" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">06 — Réclamations</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Comment formuler une réclamation</h2>
            <p className="text-anset-slate leading-relaxed mb-4">Pour toute réclamation concernant l'un de nos services, vous pouvez nous écrire à l'adresse suivante :</p>
            <div className="bg-anset-mist rounded-brand p-5 mb-4">
              <p className="text-anset-ink leading-relaxed">
                <strong>{COMPANY.legalName} — Service Réclamations</strong><br />
                {COMPANY.address.full}<br />
                Courriel : <a href={CONTACT.emailReclamationsHref} className="text-anset-blue font-bold hover:underline">{CONTACT.emailReclamations}</a>
              </p>
            </div>
            <p className="text-anset-slate leading-relaxed text-sm">
              Nous accusons réception de votre réclamation sous <strong>10 jours ouvrés maximum</strong> et nous nous engageons à vous apporter une réponse dans un délai de <strong>2 mois maximum</strong> à compter de la réception, sauf si la complexité du dossier justifie un délai supérieur, auquel cas nous vous en tiendrons informé.
            </p>
          </section>

          <section id="mediation" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">07 — Médiation de l'assurance</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Recours en cas de désaccord persistant</h2>
            <p className="text-anset-slate leading-relaxed mb-4">Si, après notre réponse, le différend persiste, vous pouvez saisir gratuitement <strong>{COMPANY.mediator.name}</strong>, à l'adresse suivante :</p>
            <div className="bg-anset-mist rounded-brand p-5 mb-4">
              <p className="text-anset-ink leading-relaxed">
                <strong>{COMPANY.mediator.name}</strong><br />
                {COMPANY.mediator.address}<br />
                Site : <a href={COMPANY.mediator.website} target="_blank" rel="noopener noreferrer" className="text-anset-blue font-bold hover:underline">mediation-assurance.org</a>
              </p>
            </div>
            <p className="text-anset-slate leading-relaxed text-sm">La saisine du médiateur est conditionnée au fait d'avoir préalablement tenté de résoudre le différend par une réclamation écrite directement auprès de notre service réclamations, et au délai maximal d'un an à compter de la réclamation initiale.</p>
          </section>

          <section id="rgpd" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">08 — Données personnelles</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Protection de vos données personnelles</h2>
            <p className="text-anset-slate leading-relaxed mb-4">
              Conformément au Règlement général sur la protection des données (Règlement UE 2016/679) et à la loi française Informatique et Libertés du 6 janvier 1978 modifiée, {COMPANY.legalName} en sa qualité de <strong>responsable de traitement</strong> collecte et traite vos données personnelles aux fins suivantes :
            </p>
            <ul className="list-disc list-inside text-anset-slate space-y-2 mb-5 ml-2">
              <li>gestion de votre demande de devis et de souscription de contrats d'assurance (base légale : exécution précontractuelle) ;</li>
              <li>gestion de votre relation contractuelle, des sinistres et des réclamations (base légale : exécution du contrat) ;</li>
              <li>respect de nos obligations légales et réglementaires, notamment en matière de lutte contre le blanchiment et le financement du terrorisme (base légale : obligation légale) ;</li>
              <li>envoi de communications commerciales sur nos produits et ceux de nos partenaires, dans la limite de votre consentement (base légale : consentement, retirable à tout moment).</li>
            </ul>
            <p className="text-anset-slate leading-relaxed mb-4">
              Les données sont conservées pour les durées prévues par la réglementation : la durée du contrat augmentée du délai de prescription légal (en général 5 ans pour les contrats d'assurance non-vie, jusqu'à 30 ans pour certains contrats vie), et 3 ans à compter du dernier contact pour les prospects.
            </p>
            <p className="text-anset-slate leading-relaxed mb-4">
              Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité, d'opposition au traitement et de définition des directives relatives à votre sort post-mortem. Vous pouvez exercer ces droits en écrivant à <a href={CONTACT.emailDpoHref} className="text-anset-blue font-bold hover:underline">{CONTACT.emailDpo}</a> en joignant une copie de pièce d'identité.
            </p>
            <p className="text-anset-slate leading-relaxed text-sm">
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la <a href={COMPANY.cnil.website} target="_blank" rel="noopener noreferrer" className="text-anset-blue font-bold hover:underline">{COMPANY.cnil.name}</a> ({COMPANY.cnil.address}).
            </p>
          </section>

          <section id="cookies" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">09 — Cookies</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Utilisation de cookies et traceurs</h2>
            <p className="text-anset-slate leading-relaxed mb-4">
              Le site ansetassurances.com utilise des cookies strictement nécessaires à son fonctionnement (sécurité, équilibrage de charge) et, sous réserve de votre consentement, des cookies de mesure d'audience et de personnalisation.
            </p>
            <p className="text-anset-slate leading-relaxed text-sm">
              Vous pouvez paramétrer ou retirer votre consentement à tout moment via la <Link href="/cookies" className="text-anset-blue font-bold hover:underline">page de gestion des cookies</Link> ou directement depuis les réglages de votre navigateur. Les cookies strictement nécessaires ne peuvent pas être désactivés sans rendre le site inopérant.
            </p>
          </section>

          <section id="propriete" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">10 — Propriété intellectuelle</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Marques et contenus</h2>
            <p className="text-anset-slate leading-relaxed mb-4">
              Les marques <strong>ANSET ASSURANCES</strong> et <strong>COVERSEAS</strong>, ainsi que tous les logos, textes, images, illustrations, photographies et éléments graphiques présents sur ce site sont protégés par le droit français et international de la propriété intellectuelle.
            </p>
            <p className="text-anset-slate leading-relaxed">
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, par quelque moyen ou procédé que ce soit, sans autorisation préalable écrite de {COMPANY.legalName}, est interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          <section id="droit" className="scroll-mt-24">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-anset-corail mb-2">11 — Droit applicable et juridiction</p>
            <h2 className="text-display-sm text-anset-blue mb-4">Loi et tribunaux compétents</h2>
            <p className="text-anset-slate leading-relaxed">
              Les présentes mentions légales et les relations entre {COMPANY.legalName} et les utilisateurs du site sont régies par le droit français. En cas de litige et après échec de toute tentative amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <div className="pt-8 border-t border-anset-mist text-center">
            <p className="text-xs text-anset-slate/70">
              Page mise à jour le 20 mai 2026 — Pour toute question sur ces mentions, contactez-nous à <a href={CONTACT.emailHref} className="text-anset-blue font-bold hover:underline">{CONTACT.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}