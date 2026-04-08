"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { publications } from "../data/publications";

export default function PublicationsPage() {
  const [filter, setFilter] = useState<"all" | number>("all");
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  const filtered = filter === "all"
    ? publications
    : publications.filter((p) => p.year === filter);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 noise pointer-events-none z-50" />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0066ff]/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#000000]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/icbl_logo_white_on_blue_bg.jpg" alt="ICB Lab" width={40} height={40} className="rounded-lg" />
              <span className="text-sm font-medium text-white/60">ICB Lab</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/research" className="text-sm text-white/50 hover:text-white transition-colors">Research</Link>
              <Link href="/publications" className="text-sm text-white">Publications</Link>
              <Link href="/people" className="text-sm text-white/50 hover:text-white transition-colors">Team</Link>
              <Link href="/news" className="text-sm text-white/50 hover:text-white transition-colors">News</Link>
            </div>
            <a href="mailto:stuart.campbell@yale.edu" className="text-sm text-white/50 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors mb-8 inline-block">← Back</Link>
          <h1 className="text-5xl md:text-6xl font-medium mb-6">Publications</h1>
          <p className="text-xl text-white/40 max-w-2xl mb-12">
            Research advancing cardiac biomechanics and cardiomyopathy understanding.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === "all" ? "bg-white text-black" : "glass text-white/60 hover:text-white"
              }`}
            >
              All
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setFilter(year)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === year ? "bg-white text-black" : "glass text-white/60 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Publications */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {filtered.map((pub) => (
              <article
                key={pub.id}
                className="group p-6 rounded-xl glass hover:bg-white/5 transition-all"
              >
                <div className="flex items-start gap-6">
                  <span className="text-sm text-[#14365d] font-medium shrink-0 pt-1">
                    {pub.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium mb-2 group-hover:text-[#14365d] transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-white/40 mb-1">{pub.authors.join(", ")}</p>
                    <p className="text-sm text-white/30 italic">{pub.journal}</p>
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-white/50 hover:text-white transition-colors"
                      >
                        View Paper →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="text-sm text-white/30">Integrative Cardiac Biomechanics Laboratory</span>
            <span className="text-sm text-white/30">Yale University</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
