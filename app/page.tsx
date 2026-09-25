import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import StatsBar from "@/components/StatsBar";
import ThemeCard from "@/components/ThemeCard";
import SeminaireCard from "@/components/SeminaireCard";
import TemoignageCard from "@/components/TemoignageCard";
import stats from "@/data/stats.json";
import themes from "@/data/themes.json";
import seminaires from "@/data/seminaires.json";
import temoignages from "@/data/temoignages.json";
import content from "@/data/content.json";
import type { Stat, Theme, Seminaire, Temoignage } from "@/lib/types";

const statsData = stats as Stat[];
const themesData = themes as Theme[];
const seminairesData = seminaires as Seminaire[];
const temoignagesData = temoignages as Temoignage[];
const c = content.fr.accueil;

const ACCES_RAPIDE = [
  {
    href: "/a-propos",
    titre: "Pourquoi choisir Cabinet Perfect Assistance ?",
    description: "Notre expertise et notre approche du renforcement des capacités publiques.",
  },
  {
    href: "/formations",
    titre: "Trouver une formation",
    description: "Parcourez notre catalogue par thématique.",
  },
  {
    href: "/inscription",
    titre: "S'inscrire",
    description: "Conditions et formulaire d'inscription à un séminaire.",
  },
  {
    href: "/formations",
    titre: "Catalogue 2026",
    description: "Découvrez l'ensemble de nos cycles de formation.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[420px] w-full sm:h-[480px]">
          <Image
            src={c.heroImage}
            alt="Session de formation Cabinet Perfect Assistance"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-teal-900/70" />
          <Container className="relative flex h-full flex-col justify-center">
            <h1 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {c.heroTitre}
            </h1>
            <p className="mt-4 max-w-xl text-brand-teal-50 sm:text-lg">{c.heroSousTitre}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/formations"
                className="rounded-full bg-brand-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-orange-600"
              >
                Trouver une formation
              </Link>
              <Link
                href="/inscription"
                className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand-teal-900"
              >
                S&apos;inscrire
              </Link>
            </div>
          </Container>
        </div>

        <Container className="relative -mt-10 grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2 lg:-mt-12 lg:grid-cols-4">
          {ACCES_RAPIDE.map((item) => (
            <Link
              key={item.titre}
              href={item.href}
              className="flex flex-col rounded-xl bg-white p-5 shadow-lg ring-1 ring-black/5 transition-transform hover:-translate-y-1"
            >
              <span className="text-sm font-semibold text-brand-teal-700">{item.titre}</span>
              <span className="mt-2 text-xs text-brand-neutral-600">{item.description}</span>
            </Link>
          ))}
        </Container>
      </section>

      <StatsBar stats={statsData} />

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-neutral-800 sm:text-3xl">
              Qui sommes-nous ?
            </h2>
            <p className="mt-4 text-brand-neutral-600">{c.quiSommesNous}</p>
            <Link
              href="/a-propos"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-700 hover:text-brand-teal-900"
            >
              En savoir plus sur le Cabinet →
            </Link>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80">
            <Image
              src={c.quiSommesNousImage}
              alt="Équipe Cabinet Perfect Assistance au bureau"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-brand-neutral-50 py-14 sm:py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-brand-neutral-800 sm:text-3xl">
              Nos thématiques de formation
            </h2>
            <Link
              href="/formations"
              className="text-sm font-semibold text-brand-teal-700 hover:text-brand-teal-900"
            >
              Voir tout le catalogue →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themesData.slice(0, 6).map((theme) => (
              <ThemeCard key={theme.slug} theme={theme} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-8 overflow-hidden rounded-2xl bg-brand-teal-900 lg:grid-cols-2 lg:items-center lg:gap-0">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange-400">
              Catalogue 2026
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Des formations qualifiantes et certifiantes
            </h2>
            <p className="mt-4 text-brand-teal-100">
              Un catalogue riche, régulièrement mis à jour, conçu pour accompagner la montée en
              compétences des équipes du secteur public au Maroc et en Afrique.
            </p>
            <Link
              href="/formations"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-orange-600"
            >
              Voir le catalogue complet →
            </Link>
          </div>
          <div className="relative h-56 lg:h-full lg:min-h-[280px]">
            <Image
              src="/images/formation-concept.jpg"
              alt="Formation qualifiante et certifiante"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-brand-neutral-800 sm:text-3xl">
              Prochains séminaires
            </h2>
            <Link
              href="/seminaires"
              className="text-sm font-semibold text-brand-teal-700 hover:text-brand-teal-900"
            >
              Voir le planning complet →
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {seminairesData.slice(0, 3).map((seminaire) => (
              <SeminaireCard key={seminaire.code} seminaire={seminaire} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-neutral-50 py-14 sm:py-16">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold text-brand-neutral-800 sm:text-3xl">
            Ce qu&apos;en disent nos participants
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {temoignagesData.map((temoignage) => (
              <TemoignageCard key={temoignage.nom + temoignage.fonction} temoignage={temoignage} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
