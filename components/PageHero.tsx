import Container from "@/components/Container";

export default function PageHero({
  titre,
  description,
}: {
  titre: string;
  description?: string;
}) {
  return (
    <div className="bg-brand-teal-900">
      <Container className="py-14 sm:py-16">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{titre}</h1>
        {description && (
          <p className="mt-3 max-w-2xl text-brand-teal-100">{description}</p>
        )}
      </Container>
    </div>
  );
}
