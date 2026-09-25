"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/data/site-config.json";
import type { SiteConfig } from "@/lib/types";

const config = siteConfig as SiteConfig;

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "Le Cabinet" },
  { href: "/formations", label: "Formations" },
  { href: "/seminaires", label: "Séminaires" },
  { href: "/historique", label: "Historique" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="hidden bg-brand-teal-900 text-white sm:block">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <p className="tracking-wide">{config.fr.bandeauGeo}</p>
          <div className="flex items-center gap-4">
            <a href={`mailto:${config.fr.coordonnees.email}`} className="hover:text-brand-teal-300">
              {config.fr.coordonnees.email}
            </a>
            <a href={`tel:${config.fr.coordonnees.telephone}`} className="hover:text-brand-teal-300">
              {config.fr.coordonnees.telephone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/logo.jpg"
            alt={config.fr.nomCabinet}
            width={48}
            height={28}
            className="h-10 w-auto rounded"
            priority
          />
          <span className="hidden text-sm font-semibold text-brand-teal-900 sm:block">
            {config.fr.nomCabinet}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-neutral-800 transition-colors hover:text-brand-teal-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/inscription"
            className="hidden rounded-full bg-brand-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-600 sm:inline-block"
          >
            S&apos;inscrire
          </Link>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-brand-neutral-200 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-brand-neutral-800" />
              <span className="block h-0.5 w-5 bg-brand-neutral-800" />
              <span className="block h-0.5 w-5 bg-brand-neutral-800" />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-brand-neutral-100 bg-white px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-brand-neutral-800 hover:bg-brand-teal-50 hover:text-brand-teal-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/inscription"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-brand-orange-500 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                S&apos;inscrire
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
