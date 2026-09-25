import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import TemoignageCard from "@/components/TemoignageCard";
import temoignages from "@/data/temoignages.json";
import type { Temoignage } from "@/lib/types";

export const metadata: Metadata = {
  title: "Témoignages",
  description: "Ce que disent nos participants des formations Cabinet Perfect Assistance.",
};

const temoignagesData = temoignages as Temoignage[];

export default function TemoignagesPage() {
  return (
    <>
      <PageHero
        titre="Témoignages"
        description="Ils ont suivi nos formations et partagent leur expérience."
      />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {temoignagesData.map((temoignage) => (
              <TemoignageCard
                key={temoignage.nom + temoignage.fonction}
                temoignage={temoignage}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
