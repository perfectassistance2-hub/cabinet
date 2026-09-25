import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";
import siteConfig from "@/data/site-config.json";
import content from "@/data/content.json";
import type { SiteConfig } from "@/lib/types";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Cabinet Perfect Assistance pour toute question sur nos formations.",
};

const config = siteConfig as SiteConfig;

export default function ContactPage() {
  return (
    <>
      <PageHero titre="Contact" description={content.fr.contact.intro} />

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr]">
          <div className="space-y-4 text-sm text-brand-neutral-600">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal-700">
                Adresse
              </h2>
              <p className="mt-1">{config.fr.coordonnees.adresse}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal-700">
                Email
              </h2>
              <a href={`mailto:${config.fr.coordonnees.email}`} className="mt-1 block hover:text-brand-teal-700">
                {config.fr.coordonnees.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-teal-700">
                Téléphone
              </h2>
              <a href={`tel:${config.fr.coordonnees.telephone}`} className="mt-1 block hover:text-brand-teal-700">
                {config.fr.coordonnees.telephone}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-brand-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
