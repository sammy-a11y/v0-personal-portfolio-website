"use client"

import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_80%)]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-sm text-muted-foreground">Available for freelance projects</span>
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="block text-balance">I Design Brands</span>
          <span className="block text-balance">
            {'& Build '}
            <span className="text-gradient bg-[linear-gradient(to_right,oklch(0.72_0.2_160),oklch(0.7_0.15_190))]">
              Powerful
            </span>
            {' Websites'}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Creative designer and developer crafting premium digital experiences 
          for brands and businesses worldwide.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8">
              Hire Me
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button size="lg" variant="outline" className="gap-2 px-8">
              View Projects
              <Download className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-12">
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "30+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-foreground md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
