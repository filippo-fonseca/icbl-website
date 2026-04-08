"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const AnatomicalHeart = dynamic(() => import("./components/AnatomicalHeart"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-[#14365d]/20 blur-xl animate-pulse" />
    </div>
  ),
});

const NetworkBackground = dynamic(
  () => import("./components/NetworkBackground"),
  {
    ssr: false,
  },
);

const navLinks = [
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "Team", href: "/people" },
  { name: "News", href: "/news" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Animated network background */}
      <NetworkBackground />

      {/* Noise overlay */}
      <div className="fixed inset-0 noise pointer-events-none z-50" />

      {/* Gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#14365d]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#0066ff]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-[#14365d]/5 rounded-full blur-[80px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
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

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <a
              href="mailto:stuart.campbell@yale.edu"
              className="text-sm text-white/50 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-screen py-32">
            {/* Left: Text - higher z-index to stay above heart */}
            <div className="animate-in relative z-20">
              <p className="text-sm text-[#14365d] tracking-widest uppercase mb-6">
                Yale School of Engineering
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8 tracking-tight">
                Decoding the intrinsic{" "}
                <span className="gradient-text">mechanics</span>
                <br />
                of the human heart.
              </h1>

              <p className="text-lg text-white/40 max-w-md mb-12 leading-relaxed">
                Computational approaches to understand cardiac disease at the
                molecular level.
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="/research"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all"
                >
                  Explore Research
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/publications"
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  View Publications
                </Link>
              </div>
            </div>

            {/* Right: Heart - lower z-index so text overlaps it */}
            <div className="relative h-[500px] lg:h-[600px] animate-in-delay z-0">
              <AnatomicalHeart />
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </main>

      {/* Research teaser */}
      <section className="relative z-10 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Inherited Cardiomyopathies",
                description:
                  "Understanding genetic mutations that alter cardiac muscle function.",
              },
              {
                number: "02",
                title: "Cardiomyocyte Function",
                description:
                  "Examining cellular heterogeneity and contraction regulation.",
              },
              {
                number: "03",
                title: "Cardiac Mechanobiology",
                description:
                  "Investigating how biomechanical loads influence heart function.",
              },
            ].map((item, i) => (
              <Link
                key={item.number}
                href="/research"
                className="group block p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-500 animate-in"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <span className="text-xs text-[#14365d] tracking-wider">
                  {item.number}
                </span>
                <h3 className="text-xl font-medium mt-4 mb-3 group-hover:text-[#14365d] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Publications" },
              { value: "15+", label: "Years" },
              { value: "10+", label: "Researchers" },
              { value: "3", label: "Focus Areas" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-medium gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/30 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <Image
                src="/icbl_logo_white_on_blue_bg.jpg"
                alt="ICB Lab"
                width={32}
                height={32}
                className="rounded-lg opacity-50"
              />
              <span className="text-sm text-white/30">
                Integrative Cardiac Biomechanics Laboratory
              </span>
            </div>

            <div className="flex items-center gap-8 text-sm text-white/30">
              <span>Yale University</span>
              <span>New Haven, CT</span>
              <a
                href="mailto:stuart.campbell@yale.edu"
                className="hover:text-white transition-colors"
              >
                stuart.campbell@yale.edu
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
