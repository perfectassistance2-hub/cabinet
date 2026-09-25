import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import InscriptionForm from "./InscriptionForm";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "Inscription",
  description: "Conditions d'inscription et formulaire pour rejoindre une formation Cabinet Perfect Assistance.",
};

const conditions = content.fr.inscription.conditions;

export default async function InscriptionPage({
  searchParams,
}: {
  searchParams: Promise<{ seminaire?: string }>;
}) {
  const { seminaire } = await searchParams;

  return (
    <>
      <PageHero
        titre="Conditions d'inscription"
        description="Consultez nos conditions générales puis complétez le formulaire ci-dessous."
      />

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div>
            <h2 className="text-lg font-semibold text-brand-neutral-800">Conditions générales</h2>
            <ul className="mt-4 space-y-3 text-sm text-brand-neutral-600">
              {conditions.map((condition) => (
                <li key={condition} className="flex gap-2">
                  <span className="mt-0.5 text-brand-orange-500">•</span>
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="mb-6 text-lg font-semibold text-brand-neutral-800">
              Formulaire d&apos;inscription
            </h2>
            <InscriptionForm seminaireInitial={seminaire} />
          </div>
        </Container>
      </section>
    </>
  );
}
