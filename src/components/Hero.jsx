"use client"

import "@google/model-viewer"

export default function Hero() {
  const complianceLogos = [
    { src: "/images/iso27001.webp", label: "ISO 27001" },
    { src: "/images/gdpr.webp", label: "GDPR" },
    { src: "/images/nist.webp", label: "NIST" },
    { src: "/images/pci.webp", label: "PCI DSS" },
    { src: "/images/anssi.webp", label: "ANSSI" },
    { src: "/images/dora.webp", label: "DORA" },
    { src: "/images/nis2.webp", label: "NIS2" },
  ]

  const marqueeLogos = [...complianceLogos, ...complianceLogos]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-6 pb-24 md:pt-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(14,116,144,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,116,144,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ✅ FIXED TYPO: w-72 + -translate-x-1/2 */}
      <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary/90">
              Zero-Trust AI Surface
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-balance">
                The AI Command Center for{" "}
                <span className="bg-linear-to-r from-primary to-emerald-300 bg-clip-text text-transparent">
                  Third-Party
                </span>{" "}
                Risk
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed text-balance">
                PREVAIA scans, scores, and orchestrates vendor exposure in real time so compliance stays ahead of threats,
                audits, and procurement velocity.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground shadow-[0_0_25px_rgba(34,197,94,0.35)] hover:opacity-90 transition">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-lg font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition">
                Book a Demo
              </button>
            </div>

            <div className="grid gap-4 text-sm text-foreground/70 sm:grid-cols-3">
              {[
                { label: "Vendor risk scoring", value: "24h" },
                { label: "Automations shipped", value: "120+" },
                { label: "Coverage uplift", value: "3.6x" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-border/60 bg-background/60 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">{stat.label}</p>
                  <p className="mt-2 text-xl font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="order-last mt-8 flex items-center justify-center lg:order-0 lg:mt-0">
            <div className="relative w-full max-w-xs aspect-square sm:max-w-sm lg:max-w-md">
              <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-primary/30 via-primary/10 to-transparent blur-2xl" />
              <div className="absolute inset-6 overflow-hidden rounded-[28px] border border-primary/30 bg-background/40 shadow-[0_0_40px_rgba(34,197,94,0.25)]">
                <model-viewer
                  src="/models/prevaia-logo.glb"
                  aria-label="PREVAIA 3D logo representing AI-driven risk management"
                  camera-controls
                  auto-rotate
                  rotation-per-second="18deg"
                  shadow-intensity="0.6"
                  exposure="1.05"
                  environment-image="neutral"
                  disable-pan
                  style={{ width: "100%", height: "100%", background: "transparent" }}
                />
              </div>
              <div className="absolute -bottom-4 left-10 h-3 w-24 rounded-full bg-primary/40 blur-xl" />
            </div>
          </div>
        </div>

        {/* COMPLIANCE MATRIX */}
        <div className="mt-12 rounded-2xl border border-border/70 bg-background/60 px-6 py-8 backdrop-blur">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">Compliance Matrix</p>
            <h2 className="text-2xl md:text-3xl font-semibold">Always audit-ready across global frameworks</h2>
            <p className="mx-auto max-w-2xl text-sm text-foreground/70 md:text-base">
              PREVAIA continuously maps vendor signals to regulatory standards and surfaces evidence packs for every
              review cycle.
            </p>
          </div>

          {/* ✅ Better marquee structure + logos visible on dark */}
          <div className="relative mt-8 overflow-hidden">
            <div className="flex w-max items-center gap-6 pr-6 animate-marquee">
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo.label}-${index}`}
                  className="flex items-center justify-center rounded-xl border border-border/50 bg-background/80 px-10 py-6 shadow-sm animate-float-slow"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img
                    src={logo.src}
                    alt={logo.label}
                    className="h-14 w-auto object-contain md:h-16 lg:h-18
                               dark:brightness-0 dark:invert"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
