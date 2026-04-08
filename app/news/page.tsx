"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { newsItems } from "../data/news";

type FilterCategory = "all" | "publication" | "award" | "event" | "media" | "announcement";

const categoryLabels: Record<FilterCategory, string> = {
  all: "All",
  publication: "Publications",
  award: "Awards",
  event: "Events",
  media: "Media",
  announcement: "Announcements",
};

const categoryColors: Record<string, string> = {
  publication: "text-[#0066ff]",
  award: "text-[#ffd700]",
  event: "text-[#00ff88]",
  media: "text-[#ff66ff]",
  announcement: "text-[#14365d]",
};

export default function NewsPage() {
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("all");

  const categories: FilterCategory[] = [
    "all",
    "publication",
    "award",
    "event",
  ];

  const filteredNews = newsItems.filter(
    (item) => filterCategory === "all" || item.category === filterCategory
  );

  // Group by year
  const groupedNews = filteredNews.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {} as Record<number, typeof newsItems>);

  const years = Object.keys(groupedNews)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="relative min-h-screen">
      {/* Noise overlay */}
      <div className="fixed inset-0 noise pointer-events-none z-50" />

      {/* Gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#14365d]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0066ff]/10 rounded-full blur-[100px]" />
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
              <Link href="/people" className="text-sm text-white/50 hover:text-white transition-colors">Team</Link>
              <Link href="/news" className="text-sm text-white">News</Link>
            </div>
            <a href="mailto:stuart.campbell@yale.edu" className="text-sm text-white/50 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors mb-8 inline-block">← Back</Link>
          <h1 className="text-5xl md:text-6xl font-medium mb-6">News</h1>
          <p className="text-xl text-white/40 max-w-2xl mb-12">
            Updates from the lab.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filterCategory === category
                    ? "bg-white text-black"
                    : "glass text-white/60 hover:text-white"
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* News Timeline */}
      <section className="pb-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {years.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-white/40 text-lg">
                No news items found.
              </p>
            </div>
          ) : (
            years.map((year) => (
              <div key={year} className="mb-16 last:mb-0">
                {/* Year header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-2xl font-medium text-[#14365d]">
                    {year}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                {/* News items */}
                <div className="space-y-4">
                  {groupedNews[year].map((item) => (
                    <article
                      key={item.id}
                      className="group glass rounded-xl p-6 hover:bg-white/5 transition-all"
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`text-xs font-medium uppercase tracking-wider ${categoryColors[item.category]}`}>
                          {item.category}
                        </span>
                        <span className="text-sm text-white/30">
                          {new Date(item.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className="text-lg font-medium mb-2 group-hover:text-[#14365d] transition-colors">
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>

                      <p className="text-white/40 text-sm">{item.summary}</p>

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 text-sm text-white/50 hover:text-white transition-colors"
                        >
                          Read more →
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))
          )}
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
