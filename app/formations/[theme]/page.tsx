import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import themes from "@/data/themes.json";
import formations from "@/data/formations.json";
import type { Theme, Formation } from "@/lib/types";

const themesData = themes as Theme[];
const formationsData = formations as Formation[];

type Params = { theme: string };

function getTheme(slug: string) {
  return themesData.find((t) => t.slug === slug);
}

export function generateStaticParams(): Params[] {
  return themesData.map((t) => ({ theme: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { theme: slug } = await params;
  const theme = getTheme(slug);
  if (!theme) return {};
  return {
    title: theme.theme,
    description: theme.description,
  };
}

export default async function ThemeFormationsPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { theme: slug } = await params;
  const theme = getTheme(slug);
  if (!theme) notFound();

  const formationsDuTheme = formationsData.filter((f) => f.themeSlug === slug);

  return (
    <>
      <PageHero titre={theme.theme} description={theme.description} />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-brand-neutral-600">
              {theme.nb_cycles} formations disponibles dans cette thématique
            </p>
            <Link
              href="/formations"
              className="text-sm font-semibold text-brand-teal-700 hover:text-brand-teal-900"
            >
              ← Toutes les thématiques
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {formationsDuTheme.map((formation) => (
              <div
                key={formation.code}
                className="flex flex-col justify-between gap-3 rounded-xl border border-brand-neutral-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >
                <div>
                  <span className="mb-1 inline-block rounded bg-brand-neutral-100 px-2 py-0.5 text-xs font-semibold text-brand-neutral-600">
                    {formation.code}
                  </span>
                  <h3 className="text-base font-semibold text-brand-neutral-800">
                    {formation.titre}
                  </h3>
                  <p className="text-sm text-brand-neutral-600">Durée : {formation.duree}</p>
                </div>
                <Link
                  href="/inscription"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-600"
                >
                  S&apos;inscrire
                </Link>
              </div>
            ))}
            {formationsDuTheme.length === 0 && (
              <p className="text-sm text-brand-neutral-600">
                Le détail des formations de cette thématique sera bientôt disponible.
                Contactez-nous pour en savoir plus.
              </p>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
