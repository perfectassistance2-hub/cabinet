import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ThemeCard from "@/components/ThemeCard";
import themes from "@/data/themes.json";
import type { Theme } from "@/lib/types";

export const metadata: Metadata = {
  title: "Formations",
  description: "Catalogue des formations Cabinet Perfect Assistance par thématique.",
};

const themesData = themes as Theme[];

export default function FormationsPage() {
  const totalFormations = themesData.reduce((sum, t) => sum + t.nb_cycles, 0);

  return (
    <>
      <PageHero
        titre="Catalogue des formations"
        description={`${totalFormations}+ formations réparties en ${themesData.length} grandes thématiques.`}
      />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themesData.map((theme) => (
              <ThemeCard key={theme.slug} theme={theme} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
