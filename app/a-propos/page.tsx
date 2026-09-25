import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Le Cabinet",
  description: "Découvrez Cabinet Perfect Assistance, son expertise et le mot de son dirigeant.",
};

const c = content.fr.aPropos;

export default function AProposPage() {
  return (
    <>
      <PageHero titre={c.titre} description={c.intro} />

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="mx-auto w-56 lg:mx-0 lg:w-full">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={c.motDirigeant.photo}
                alt={c.motDirigeant.nom}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-brand-teal-700 lg:text-left">
              {c.motDirigeant.nom}
            </p>
            <p className="text-center text-xs text-brand-neutral-600 lg:text-left">
              {c.motDirigeant.fonction}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange-500">
              Mot du dirigeant
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-neutral-800 sm:text-3xl">
              {c.motDirigeant.titreSection}
            </h2>
            <p className="mt-4 whitespace-pre-line text-brand-neutral-600">
              {c.motDirigeant.texte}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
