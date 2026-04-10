"use client";

import Link from "next/link";
import Image from "next/image";
import { researchAreas } from "../data/research";
import CardiomyopathyTree from "../components/research/CardiomyopathyTree";
import CellHeterogeneityDiagram from "../components/research/CellHeterogeneityDiagram";
import MechanobiologyDiagram from "../components/research/MechanobiologyDiagram";

// Map research area IDs to their diagram components
const diagramComponents: Record<string, React.ComponentType> = {
  "inherited-cardiomyopathies": CardiomyopathyTree,
  "cardiomyocyte-function": CellHeterogeneityDiagram,
  "cardiac-mechanobiology": MechanobiologyDiagram,
};

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
                <Link href="/research" className="px-4 py-2 text-sm text-white hover:bg-white/5 rounded-full transition-all duration-300">Research</Link>
                <Link href="/publications" className="px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Publications</Link>
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
          <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors mb-8 inline-block animate-in">
            ← Back
          </Link>
          <h1 className="text-5xl md:text-6xl font-medium mb-6 animate-in">Research</h1>
          <p className="text-xl text-white/40 max-w-2xl animate-in-delay">
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
                className="scroll-mt-32 animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
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

                  <div className="neumorphic rounded-2xl p-6 lg:sticky lg:top-32 animate-scale-in">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-[#14365d]/10 to-transparent flex items-center justify-center overflow-hidden">
                      {(() => {
                        const DiagramComponent = diagramComponents[area.id];
                        return DiagramComponent ? <DiagramComponent /> : (
                          <div className="w-24 h-24 rounded-full bg-[#14365d]/30 blur-xl" />
                        );
                      })()}
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
