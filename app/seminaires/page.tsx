import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SeminaireCard from "@/components/SeminaireCard";
import seminaires from "@/data/seminaires.json";
import type { Seminaire } from "@/lib/types";

export const metadata: Metadata = {
  title: "Séminaires",
  description: "Planning des prochains séminaires Cabinet Perfect Assistance, présentiel et distanciel.",
};

const seminairesData = (seminaires as Seminaire[]).sort(
  (a, b) => new Date(a.dateDebut).getTime() - new Date(b.dateDebut).getTime()
);

export default function SeminairesPage() {
  return (
    <>
      <PageHero
        titre="Prochains séminaires"
        description="Sessions en présentiel au Maroc et en distanciel pour nos participants internationaux."
      />

      <section className="py-14 sm:py-16">
        <Container className="flex flex-col gap-4">
          {seminairesData.map((seminaire) => (
            <SeminaireCard key={seminaire.code} seminaire={seminaire} />
          ))}
        </Container>
      </section>
    </>
  );
}
