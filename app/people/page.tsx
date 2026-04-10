"use client";

import Link from "next/link";
import Image from "next/image";
import { teamMembers, alumniMembers } from "../data/team";

const roleOrder = ["principal-investigator", "postdoc", "graduate", "undergraduate"];
const roleLabels: Record<string, string> = {
  "principal-investigator": "Principal Investigator",
  postdoc: "Research Scientists",
  graduate: "Graduate Students",
  undergraduate: "Undergraduate Researchers",
};

function MemberPhoto({ member, size = "md" }: { member: typeof teamMembers[0]; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "w-16 h-16 text-lg",
    lg: "w-40 h-40 text-4xl",
  };

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  if (member.image && !member.image.includes("placeholder")) {
    return (
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-[#14365d]/20`}>
        <Image
          src={member.image}
          alt={member.name}
          width={160}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-[#14365d] to-[#14365d]/50 flex items-center justify-center text-white font-medium`}>
      {initials}
    </div>
  );
}

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
                <Link href="/publications" className="px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300">Publications</Link>
                <Link href="/people" className="px-4 py-2 text-sm text-white hover:bg-white/5 rounded-full transition-all duration-300">Team</Link>
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
          <h1 className="text-5xl md:text-6xl font-medium mb-6 animate-in">Team</h1>
          <p className="text-xl text-white/50 max-w-2xl animate-in-delay">
            The researchers advancing cardiac biomechanics at Yale.
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
              <div key={role} className="mb-20 last:mb-0 animate-slide-up" style={{ animationDelay: `${0.1 * roleIndex}s` }}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-sm text-[#4a9eff] tracking-wider font-medium">
                    {String(roleIndex + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-medium text-white">
                    {roleLabels[role]}
                  </h2>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                {role === "principal-investigator" ? (
                  members.map((member) => (
                    <div
                      key={member.id}
                      className="neumorphic rounded-2xl p-8 md:p-12"
                    >
                      <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="flex justify-center">
                          <MemberPhoto member={member} size="lg" />
                        </div>

                        <div className="md:col-span-2 text-center md:text-left">
                          <h3 className="text-2xl md:text-3xl font-medium mb-2">
                            {member.name}
                          </h3>
                          <p className="text-[#4a9eff] mb-4">
                            {member.title}
                          </p>
                          <p className="text-white/50 leading-relaxed mb-6 max-w-2xl">
                            {member.bio}
                          </p>

                          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
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
                                className="inline-flex items-center gap-2 px-5 py-2.5 neumorphic-inset text-white/70 hover:text-white rounded-full text-sm transition-colors"
                              >
                                Google Scholar
                              </a>
                            )}
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 neumorphic-inset text-white/70 hover:text-white rounded-full text-sm transition-colors"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {members.map((member) => (
                      <div
                        key={member.id}
                        className="group neumorphic rounded-xl p-6 transition-all"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <MemberPhoto member={member} size="md" />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-white group-hover:text-[#4a9eff] transition-colors truncate">
                              {member.name}
                            </h3>
                            <p className="text-sm text-white/40 truncate">
                              {member.title}
                            </p>
                          </div>
                        </div>

                        <p className="text-sm text-white/40 leading-relaxed mb-4">
                          {member.bio}
                        </p>

                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-[#4a9eff] hover:text-white transition-colors"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                          </a>
                        )}
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
                className="neumorphic rounded-xl p-5 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#14365d]/30 flex items-center justify-center text-white/60 text-sm font-medium mb-3">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="text-sm font-medium mb-1">{member.name}</h3>
                <p className="text-xs text-white/40">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-white/50 mb-8 max-w-xl mx-auto">
            Passionate about cardiac physiology, biomechanics, or computational biology?
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
