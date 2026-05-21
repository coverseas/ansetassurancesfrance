import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { LeafPattern } from "@/components/ui/LeafPattern";
import { COMPANY, CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-anset-blue-dark text-white relative overflow-hidden">
      <LeafPattern color="white" opacity={0.05} size={400} className="absolute -right-20 -top-20" />
      <div className="container-anset py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-4">
            <Logo variant="white" size="md" />
            <p className="mt-4 text-sm text-white/70 max-w-xs leading-relaxed">
              L'assurance simple, claire, chaleureuse. Pensée pour la diaspora ultramarine et l'ensemble des familles en métropole.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-wider text-anset-moutarde mb-4">Nos offres</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/produits/sante-chien-chat" className="text-white/80 hover:text-white">Santé chien & chat</Link></li>
              <li><Link href="/produits/moto-cyclo" className="text-white/80 hover:text-white">Moto, cyclo, scooter</Link></li>
              <li><Link href="/produits/moto-pro" className="text-white/80 hover:text-white">Moto pour les pros</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-sm font-black uppercase tracking-wider text-anset-moutarde mb-4">La marque</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/notre-histoire" className="text-white/80 hover:text-white">Notre histoire</Link></li>
              <li><Link href="/comment-ca-marche" className="text-white/80 hover:text-white">Comment ça marche</Link></li>
              <li><Link href="/faq" className="text-white/80 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-anset-moutarde mb-4">Nous joindre</h4>
            <p className="text-sm text-white/80 mb-2"><a href={CONTACT.phoneHref} className="font-bold hover:text-white">{CONTACT.phoneDisplay}</a></p>
            <p className="text-sm text-white/80 mb-2"><a href={CONTACT.emailHref} className="hover:text-white">{CONTACT.email}</a></p>
            <p className="text-xs text-white/60 mt-3">{CONTACT.hours}</p>
            <p className="text-xs text-white/60 mt-2">{COMPANY.address.full}</p>
          </div>
        </div>
        <div className="border-t border-white/15 pt-8 text-xs text-white/55 leading-relaxed space-y-3">
          <p>
            <span className="font-bold text-white">{COMPANY.brandName}</span> est la marque commerciale de <span className="font-bold text-white">{COMPANY.legalName}</span>, {COMPANY.legalForm}, dont le siège social est situé au {COMPANY.address.full}, SIREN {COMPANY.siren}, RCS {COMPANY.rcs}.
          </p>
          <p>
            Immatriculée au Registre unique des intermédiaires en assurance, banque et finance (ORIAS) sous le n° <a href="https://www.orias.fr/welcome" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:underline">{COMPANY.oriasNumber}</a> en qualité de {COMPANY.oriasCategory}. Vérifiable sur <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" className="hover:underline">orias.fr</a>.
          </p>
          <p>
            Responsabilité civile professionnelle et garantie financière conformes aux articles L.512-6, L.512-7, R.512-14 et A.512-4 du Code des assurances délivrées par <span className="text-white">{COMPANY.insurer}</span> (contrat {COMPANY.contractName}).
          </p>
          <p>Sous le contrôle de l'{COMPANY.acpr.name}, {COMPANY.acpr.address}.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-xs text-white/60">
          <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
          <Link href="/rgpd" className="hover:text-white">Politique de confidentialité</Link>
          <Link href="/cookies" className="hover:text-white">Cookies</Link>
          <Link href="/cgu" className="hover:text-white">CGU</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}