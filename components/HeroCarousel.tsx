"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

type Slide = { texte: string; image: string };

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[420px] w-full overflow-hidden sm:h-[480px]">
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-brand-blue-900/70" />

      <Container className="relative flex h-full flex-col justify-center">
        <h1 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {slides[index].texte}
        </h1>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/formations"
            className="rounded-full bg-brand-red-500 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-red-600"
          >
            Trouver une formation
          </Link>
          <Link
            href="/inscription"
            className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand-blue-900"
          >
            S&apos;inscrire
          </Link>
        </div>
      </Container>

      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Aller à la diapositive ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
