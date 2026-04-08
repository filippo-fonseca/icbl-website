"use client";

import Link from "next/link";
import Image from "next/image";
import { researchAreas } from "../data/research";

export default function ResearchPage() {
  return (
    <div className="relative min-h-screen">
      {/* Noise overlay */}
      <div className="fixed inset-0 noise pointer-events-none z-50" />

      {/* Gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#14365d]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#0066ff]/10 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#000000]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/icbl_logo_white_on_blue_bg.jpg"
                alt="ICB Lab"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-sm font-medium text-white/60">ICB Lab</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/research" className="text-sm text-white">Research</Link>
              <Link href="/publications" className="text-sm text-white/50 hover:text-white transition-colors">Publications</Link>
              <Link href="/people" className="text-sm text-white/50 hover:text-white transition-colors">Team</Link>
              <Link href="/news" className="text-sm text-white/50 hover:text-white transition-colors">News</Link>
            </div>
            <a href="mailto:stuart.campbell@yale.edu" className="text-sm text-white/50 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors mb-8 inline-block">
            ← Back
          </Link>
          <h1 className="text-5xl md:text-6xl font-medium mb-6">Research</h1>
          <p className="text-xl text-white/40 max-w-2xl">
            Translational research at the intersection of cardiac physiology,
            biomechanics, and computational biology.
          </p>
        </div>
      </header>

      {/* Research Areas */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-32">
            {researchAreas.map((area, index) => (
              <article
                key={area.id}
                id={area.id}
                className="scroll-mt-32"
              >
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div>
                    <span className="text-sm text-[#14365d] tracking-wider">
                      0{index + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">
                      {area.title}
                    </h2>
                    <div className="text-white/50 space-y-4 leading-relaxed">
                      {area.fullDescription.split("\n\n").map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-2xl p-8 lg:sticky lg:top-32">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-[#14365d]/20 to-transparent flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-[#14365d]/30 blur-xl" />
                    </div>
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
            <span className="text-sm text-white/30">
              Integrative Cardiac Biomechanics Laboratory
            </span>
            <span className="text-sm text-white/30">Yale University</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
