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
      <nav className="fixed top-0 left-0 right-0 z-40 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-16">
            {/* Logo - left */}
            <div className="flex justify-start">
              <Link href="/" className="flex items-center hover-lift">
                <Image
                  src="/icbl_logo.png"
                  alt="Integrative Cardiac Biomechanics Laboratory"
                  width={280}
                  height={48}
                  className="h-10 md:h-12 w-auto"
                />
              </Link>
            </div>

            {/* Nav links - center */}
            <div className="hidden md:flex justify-center">
              <div className="nav-pill rounded-full px-2 py-2 flex items-center gap-1">
                <Link href="/" className="px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Home</Link>
                <Link href="/research" className="px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Research</Link>
                <Link href="/publications" className="px-4 py-2 text-sm text-white hover:bg-white/5 rounded-full transition-all duration-300">Publications</Link>
                <Link href="/people" className="px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Team</Link>
                <Link href="/news" className="px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">News</Link>
              </div>
            </div>

            {/* Contact - right */}
            <div className="flex justify-end">
              <a
                href="mailto:stuart.campbell@yale.edu"
                className="nav-pill px-5 py-2.5 rounded-full text-sm text-white/60 hover:text-white transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors mb-8 inline-block animate-in">← Back</Link>
          <h1 className="text-5xl md:text-6xl font-medium mb-6 animate-in">Publications</h1>
          <p className="text-xl text-white/40 max-w-2xl mb-12 animate-in-delay">
            Research advancing cardiac biomechanics and cardiomyopathy understanding.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 animate-in-delay-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === "all" ? "bg-white text-black" : "neumorphic text-white/60 hover:text-white"
              }`}
            >
              All
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setFilter(year)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === year ? "bg-white text-black" : "neumorphic text-white/60 hover:text-white"
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
            {filtered.map((pub, index) => (
              <article
                key={pub.id}
                className="group p-6 rounded-xl neumorphic hover:bg-white/5 transition-all animate-slide-up"
                style={{ animationDelay: `${0.05 * Math.min(index, 10)}s` }}
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
