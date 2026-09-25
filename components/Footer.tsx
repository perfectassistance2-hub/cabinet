import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/data/site-config.json";
import type { SiteConfig } from "@/lib/types";
import Container from "@/components/Container";

const config = siteConfig as SiteConfig;

const LIENS_RAPIDES = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "Le Cabinet" },
  { href: "/formations", label: "Formations" },
  { href: "/inscription", label: "Conditions d'inscription" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-brand-teal-900 text-brand-neutral-50">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt={config.fr.nomCabinet}
              width={40}
              height={24}
              className="h-9 w-auto rounded"
            />
            <span className="text-sm font-semibold">{config.fr.nomCabinet}</span>
          </div>
          <p className="text-sm text-brand-teal-100">{config.fr.slogan}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-teal-300">
            Liens rapides
          </h3>
          <ul className="space-y-2 text-sm">
            {LIENS_RAPIDES.map((lien) => (
              <li key={lien.href}>
                <Link href={lien.href} className="text-brand-neutral-50/90 hover:text-white">
                  {lien.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-teal-300">
            Coordonnées
          </h3>
          <ul className="space-y-2 text-sm text-brand-neutral-50/90">
            <li>{config.fr.coordonnees.adresse}</li>
            <li>
              <a href={`mailto:${config.fr.coordonnees.email}`} className="hover:text-white">
                {config.fr.coordonnees.email}
              </a>
            </li>
            <li>
              <a href={`tel:${config.fr.coordonnees.telephone}`} className="hover:text-white">
                {config.fr.coordonnees.telephone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-teal-300">
            Réseaux sociaux
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={config.fr.reseauxSociaux.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-neutral-50/90 hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={config.fr.reseauxSociaux.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-neutral-50/90 hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={config.fr.reseauxSociaux.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-neutral-50/90 hover:text-white"
              >
                Twitter / X
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-4">
        <Container>
          <p className="text-center text-xs text-brand-neutral-50/70">
            © {annee} {config.fr.mentionLegale}
          </p>
        </Container>
      </div>
    </footer>
  );
}
