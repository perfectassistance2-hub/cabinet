import Image from "next/image";
import type { GalerieItem } from "@/lib/types";

export default function Gallery({ items }: { items: GalerieItem[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {items.map((item) => (
        <div
          key={item.image}
          className="group relative aspect-square overflow-hidden rounded-xl bg-brand-neutral-100"
        >
          <Image
            src={item.image}
            alt={item.legende}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-blue-900/80 to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-xs font-medium text-white">{item.legende}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
