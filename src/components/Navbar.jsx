"use client"

import { useState } from "react"

export default function Navbar({ theme, onThemeToggle, font, onFontToggle }) {
  const isLight = theme === "light"
  const [isOpen, setIsOpen] = useState(false)
  const fontLabel = font === "roboto" ? "Roboto" : "BoldPixels"

  return (
    <nav className="sticky top-0 z-50">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      <div className="border-b border-border/70 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between md:h-16">
            <div className="flex items-center gap-6">
              <div
                className={`flex items-center ${isLight ? "rounded-md bg-black/90 px-2 py-1.5 ring-1 ring-black/20 sm:px-3 sm:py-2" : ""}`}
              >
              <img
                src="/Prevaia2-300x50.webp"
                alt="Prevaia"
                className="h-6 w-auto max-w-35 object-contain drop-shadow-[0_0_12px_rgba(120,255,180,0.25)] sm:h-7 sm:max-w-45"
              />
            </div>
              <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.3em] text-foreground/60">
                <a href="#home" className="hover:text-foreground transition">
                  Home
                </a>
                <a href="#components" className="hover:text-foreground transition">
                  Components
                </a>
                <a href="#about" className="hover:text-foreground transition">
                  About
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/70">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
                Secure Systems
              </div>
              <button
                onClick={onFontToggle}
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/70 transition hover:border-primary/60 hover:bg-primary/10"
                aria-label="Toggle font"
              >
                {fontLabel}
              </button>
              <button
                onClick={onThemeToggle}
                className="group relative inline-flex items-center justify-center rounded-full border border-border bg-background/70 p-2 text-foreground shadow-sm transition hover:border-primary/60 hover:bg-primary/10"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden group relative inline-flex items-center justify-center rounded-full border border-border bg-background/70 p-2 text-foreground shadow-sm transition hover:border-primary/60 hover:bg-primary/10"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="mobile-nav"
            className={`${isOpen ? "block" : "hidden"} md:hidden border-t border-border/60 pb-4 pt-3`}
          >
            <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.3em] text-foreground/70">
              <a href="#home" className="hover:text-foreground transition" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a
                href="#components"
                className="hover:text-foreground transition"
                onClick={() => setIsOpen(false)}
              >
                Components
              </a>
              <a href="#about" className="hover:text-foreground transition" onClick={() => setIsOpen(false)}>
                About
              </a>
              <button
                onClick={() => {
                  onFontToggle()
                  setIsOpen(false)
                }}
                className="text-left uppercase tracking-[0.3em] text-foreground/70 hover:text-foreground transition"
              >
                Font: {fontLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
