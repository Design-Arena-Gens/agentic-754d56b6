"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/data";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 bg-midnight-950/70 px-6 py-4 shadow-lg shadow-midnight-900/40">
        <Link href="#hero" className="text-lg font-semibold tracking-tight">
          <span className="text-accent-400">Aftab</span>
          <span className="ml-2 hidden text-sm text-white/70 sm:inline">
            SRE &amp; DevOps Engineer
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/aftab-resume.pdf"
            className="rounded-full border border-accent-500 px-4 py-2 text-sm font-semibold text-accent-300 transition hover:border-accent-300 hover:text-white"
          >
            Download CV
          </a>
        </nav>
        <button
          type="button"
          className="rounded-md border border-white/10 p-2 text-white/80 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
              />
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-midnight-900/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/aftab-resume.pdf"
              className="rounded-full border border-accent-500 px-4 py-2 text-center text-sm font-semibold text-accent-300 transition hover:border-accent-300 hover:text-white"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
