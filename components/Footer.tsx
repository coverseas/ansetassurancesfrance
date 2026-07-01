import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, CALENDLY } from "@/lib/constants";
import { CalendarClock, Mail, MapPin } from "lucide-react";

const colTitleCls = "text-[10px] uppercase tracking-[2px] font-black text-white/70 mb-4";
const linkCls = "block text-sm text-white/85 font-medium hover:text-white transition-colors mb-2.5";
const contactLinkCls = "flex items-start gap-2 text-sm text-white/85 font-medium hover:text-white transition-colors mb-3";

export function Footer() {
  return (
    <footer className="bg-anset-blue text-white">
      <div className="container-anset py-14 md:py-16">

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8">

          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/images/logo-anset-white.png"
                alt="ANSET Assurances"
                width={220}
                height={100}
                className="h-16 w-auto"
                priority
              />
            </Link>
            <p className="text-sm text-white/75 leading-relaxed max-w-xs font-medium">
              {COMPANY.brandName} est la marque commerciale de {COMPANY.legalName}, courtier en assurance immatriculé à l'ORIAS sous le numéro {COMPANY.oriasNumber}.
            </p>
            <p className="text-xs text-white/55 mt-4 leading-relaxed">
              25 ans d'expertise en outre-mer.<br />
              Désormais en métropole.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className={colTitleCls}>Nos assurances</p>
            <Link href="/bientot?produit=sante-animale" className={linkCls}>Santé chien & chat</Link>
            <Link href="/bientot?produit=moto" className={linkCls}>Moto & cyclo</Link>
            <Link href="/bientot?produit=emprunteur" className={linkCls}>Emprunteur</Link>
          </div>

          <div className="lg:col-span-2">
            <p className={colTitleCls}>La marque</p>
            <Link href="/notre-histoire" className={linkCls}>Notre histoire</Link>
            <Link href="/comment-ca-marche" className={linkCls}>Comment ça marche</Link>
            <Link href="/#service" className={linkCls}>Notre service</Link>
            <Link href="/contact" className={linkCls}>Nous contacter</Link>
          </div>

          <div className="lg:col-span-2">
            <p className={colTitleCls}>Légal</p>
            <Link href="/mentions-legales" className={linkCls}>Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className={linkCls}>Confidentialité</Link>
            <Link href="/cookies" className={linkCls}>Cookies</Link>
            <Link href="/conditions-generales" className={linkCls}>CGU</Link>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <p className={colTitleCls}>Contact</p>
            <Link href={CALENDLY.sectionHref} className={contactLinkCls}>
              <CalendarClock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" />
              {CALENDLY.label}
            </Link>
            <a href={`mailto:${CONTACT.email}`} className={`${contactLinkCls} break-all`}>
              <Mail className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" />
              {CONTACT.email}
            </a>
            <p className="flex items-start gap-2 text-sm text-white/75 font-medium leading-relaxed">
              <MapPin className="w-3.5 h-3.5 mt-1 flex-shrink-0" aria-hidden="true" />
              {COMPANY.address.full}
            </p>
          </div>

        </div>

        <div className="border-t border-white/15 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[11px] text-white/55 leading-relaxed font-medium">
            <div>
              <p className="font-black text-white/75 text-[11px] uppercase tracking-wider mb-2">Statut professionnel</p>
              <p>
                {COMPANY.legalName} — SIREN {COMPANY.siren}<br />
                Inscrite à l'ORIAS n° {COMPANY.oriasNumber} en qualité de courtier d'assurance (catégorie B). Soumise au contrôle de l'ACPR — 4 place de Budapest, 75436 Paris Cedex 09.
              </p>
            </div>
            <div>
              <p className="font-black text-white/75 text-[11px] uppercase tracking-wider mb-2">Garanties</p>
              <p>
                Responsabilité civile professionnelle et garantie financière assurées par {COMPANY.insurer}. Contrat Evolution Broker n° {COMPANY.contractNumber}, distribué par {COMPANY.insurerAgent}.
              </p>
            </div>
          </div>
          <p className="text-[11px] text-white/55 leading-relaxed font-medium mt-6">
            Le site est édité par COVERSEAS SASU, société de courtage en assurances immatriculée à l'ORIAS, exploitant le nom commercial «&nbsp;ANSET Assurances&nbsp;».
          </p>
        </div>

        <div className="border-t border-white/15 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/55 font-medium">
            © {new Date().getFullYear()} {COMPANY.legalName}. Tous droits réservés.
          </p>
          <p className="text-[10px] text-white/40 uppercase tracking-wider font-bold">
            À vos côtés · À tout moment
          </p>
        </div>

      </div>
    </footer>
  );
}
