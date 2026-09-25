import Image from "next/image";
import type { Temoignage } from "@/lib/types";

export default function TemoignageCard({ temoignage }: { temoignage: Temoignage }) {
  return (
    <figure className="flex h-full flex-col items-center rounded-xl border border-brand-neutral-200 bg-white p-6 text-center shadow-sm">
      <Image
        src={temoignage.photo}
        alt={temoignage.nom}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full object-cover"
      />
      <blockquote className="mt-4 text-sm italic text-brand-neutral-800">
        &laquo;&nbsp;{temoignage.citation}&nbsp;&raquo;
      </blockquote>
      <figcaption className="mt-4">
        <p className="text-sm font-semibold text-brand-teal-700">{temoignage.nom}</p>
        <p className="text-xs text-brand-neutral-600">{temoignage.fonction}</p>
      </figcaption>
    </figure>
  );
}
