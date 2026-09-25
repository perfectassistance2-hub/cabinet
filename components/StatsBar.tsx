import type { Stat } from "@/lib/types";

export default function StatsBar({ stats }: { stats: Stat[] }) {
  return (
    <div className="bg-brand-teal-600">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center text-white">
            <p className="text-3xl font-bold sm:text-4xl">
              {stat.value}
              <span className="text-xl font-semibold sm:text-2xl">{stat.suffix}</span>
            </p>
            <p className="mt-1 text-xs font-medium text-brand-teal-50 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
