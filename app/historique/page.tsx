import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import TimelineHistorique from "@/components/TimelineHistorique";
import Gallery from "@/components/Gallery";
import historique from "@/data/historique.json";
import galerie from "@/data/galerie.json";
import type { HistoriqueEntry } from "@/lib/types";

export const metadata: Metadata = {
  title: "Historique",
  description: "L'historique des sessions de formation Cabinet Perfect Assistance depuis 2019.",
};

const historiqueData = (historique as HistoriqueEntry[]).sort((a, b) => a.annee - b.annee);

export default function HistoriquePage() {
  return (
    <>
      <PageHero
        titre="Historique des sessions"
        description="Depuis 2019, Cabinet Perfect Assistance accompagne les administrations publiques. Retour sur nos sessions année par année."
      />

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <TimelineHistorique entries={historiqueData} />
        </Container>
      </section>

      <section className="bg-brand-neutral-50 py-14 sm:py-16">
        <Container>
          <h2 className="mb-8 text-2xl font-bold text-brand-neutral-800 sm:text-3xl">
            Galerie photo
          </h2>
          <Gallery images={galerie} />
        </Container>
      </section>
    </>
  );
}
