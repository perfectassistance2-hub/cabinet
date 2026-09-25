import type { HistoriqueEntry } from "@/lib/types";

export default function TimelineHistorique({ entries }: { entries: HistoriqueEntry[] }) {
  return (
    <ol className="relative border-s-2 border-brand-teal-100 ps-6 sm:ps-8">
      {entries.map((entry) => (
        <li key={entry.annee} className="mb-10 last:mb-0">
          <span className="absolute -start-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-orange-500 ring-4 ring-white" />
          <div className="rounded-xl border border-brand-neutral-200 bg-white p-5 shadow-sm">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="text-xl font-bold text-brand-teal-700">{entry.annee}</span>
              <span className="rounded-full bg-brand-teal-50 px-3 py-1 text-xs font-semibold text-brand-teal-700">
                {entry.nb_sessions} sessions
              </span>
              <span className="rounded-full bg-brand-orange-50 px-3 py-1 text-xs font-semibold text-brand-orange-600">
                {entry.nb_participants} participants
              </span>
            </div>
            <p className="text-sm text-brand-neutral-600">{entry.resume}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
