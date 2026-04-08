"use client";

import Link from "next/link";
import Image from "next/image";
import { teamMembers, alumniMembers } from "../data/team";

const roleOrder = ["principal-investigator", "postdoc", "graduate", "undergraduate"];
const roleLabels: Record<string, string> = {
  "principal-investigator": "Principal Investigator",
  postdoc: "Postdoctoral Researchers",
  graduate: "Graduate Students",
  undergraduate: "Undergraduate Researchers",
};

export default function PeoplePage() {
  const groupedMembers = roleOrder.reduce((acc, role) => {
    acc[role] = teamMembers.filter((m) => m.role === role);
    return acc;
  }, {} as Record<string, typeof teamMembers>);

  return (
    <div className="relative min-h-screen">
      {/* Noise overlay */}
      <div className="fixed inset-0 noise pointer-events-none z-50" />

      {/* Gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#14365d]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-[#0066ff]/10 rounded-full blur-[100px]" />
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
              <Link href="/publications" className="text-sm text-white/50 hover:text-white transition-colors">Publications</Link>
              <Link href="/people" className="text-sm text-white">Team</Link>
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
          <h1 className="text-5xl md:text-6xl font-medium mb-6">Team</h1>
          <p className="text-xl text-white/40 max-w-2xl">
            The researchers advancing cardiac biomechanics.
          </p>
        </div>
      </header>

      {/* Team Members */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {roleOrder.map((role, roleIndex) => {
            const members = groupedMembers[role];
            if (members.length === 0) return null;

            return (
              <div key={role} className="mb-20 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-sm text-[#14365d] tracking-wider">
                    {String(roleIndex + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-medium text-white/80">
                    {roleLabels[role]}
                  </h2>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                {role === "principal-investigator" ? (
                  members.map((member) => (
                    <div
                      key={member.id}
                      className="glass rounded-2xl p-8 md:p-12"
                    >
                      <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="flex justify-center">
                          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#14365d] to-[#14365d]/50 flex items-center justify-center text-white text-4xl font-medium">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")}
                          </div>
                        </div>

                        <div className="md:col-span-2 text-center md:text-left">
                          <h3 className="text-2xl md:text-3xl font-medium mb-2">
                            {member.name}
                          </h3>
                          <p className="text-[#14365d] mb-4">
                            {member.title}
                          </p>
                          <p className="text-white/40 leading-relaxed mb-6 max-w-2xl">
                            {member.bio}
                          </p>

                          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            {member.email && (
                              <a
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
                              >
                                Email
                              </a>
                            )}
                            {member.scholar && (
                              <a
                                href={member.scholar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 glass text-white/60 hover:text-white rounded-full text-sm transition-colors"
                              >
                                Google Scholar →
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="group glass rounded-xl p-6 hover:bg-white/5 transition-all"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-white/60 text-sm font-medium group-hover:from-[#14365d]/30 group-hover:to-[#14365d]/10 group-hover:text-white transition-all">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")}
                          </div>
                          <div>
                            <h3 className="font-medium group-hover:text-[#14365d] transition-colors">
                              {member.name}
                            </h3>
                            <p className="text-sm text-white/40">
                              {member.title}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-white/30 leading-relaxed">
                          {member.bio}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Alumni */}
      <section className="py-16 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium mb-4">Alumni</h2>
            <p className="text-white/40">
              Former lab members making an impact.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {alumniMembers.map((member) => (
              <div
                key={member.id}
                className="glass rounded-xl p-5 text-center"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white/40 text-xs font-medium mb-3">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="text-sm font-medium mb-1">{member.name}</h3>
                <p className="text-xs text-white/30">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-white/40 mb-8 max-w-xl mx-auto">
            Passionate about cardiac health and computational biology?
          </p>
          <a
            href="mailto:stuart.campbell@yale.edu"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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
