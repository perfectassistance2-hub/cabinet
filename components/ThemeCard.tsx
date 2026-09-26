import Link from "next/link";
import type { Theme } from "@/lib/types";

export default function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <Link
      href={`/formations/${theme.slug}`}
      className="group flex flex-col justify-between rounded-xl border border-brand-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-blue-500 hover:shadow-md"
    >
      <div>
        <h3 className="text-base font-semibold text-brand-neutral-800 group-hover:text-brand-blue-700">
          {theme.theme}
        </h3>
        <p className="mt-2 text-sm text-brand-neutral-600">{theme.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center rounded-full bg-brand-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue-700">
          {theme.nb_cycles} formations disponibles
        </span>
        <span className="text-brand-gold-500 transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
