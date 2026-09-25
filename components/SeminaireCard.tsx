import Link from "next/link";
import type { Seminaire } from "@/lib/types";
import { formatDateFr, formatDateRangeFr } from "@/lib/format";

export default function SeminaireCard({ seminaire }: { seminaire: Seminaire }) {
  const estPresentiel = seminaire.modalite === "Présentiel";

  return (
    <div className="flex flex-col justify-between gap-4 rounded-xl border border-brand-neutral-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
      <div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded bg-brand-neutral-100 px-2 py-0.5 text-xs font-semibold text-brand-neutral-600">
            {seminaire.code}
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              estPresentiel
                ? "bg-brand-teal-50 text-brand-teal-700"
                : "bg-brand-orange-50 text-brand-orange-600"
            }`}
          >
            {estPresentiel ? `Présentiel · ${seminaire.ville}` : "Distanciel"}
          </span>
        </div>
        <h3 className="text-base font-semibold text-brand-neutral-800">{seminaire.titre}</h3>
        <p className="mt-1 text-sm text-brand-neutral-600">
          {formatDateRangeFr(seminaire.dateDebut, seminaire.dateFin)} · {seminaire.duree}
        </p>
        <p className="mt-1 text-xs text-brand-neutral-600">
          Date limite d&apos;inscription : {formatDateFr(seminaire.dateLimiteInscription)}
        </p>
      </div>

      <Link
        href={`/inscription?seminaire=${seminaire.code}`}
        className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-600"
      >
        S&apos;inscrire
      </Link>
    </div>
  );
}
