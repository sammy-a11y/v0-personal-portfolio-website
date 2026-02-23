"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Graphic Design", "Website Design", "Branding", "UI/UX Projects"] as const
type Category = (typeof categories)[number]

const projects = [
  {
    title: "Luxe Brand Identity",
    description: "Complete brand identity system including logo, color palette, typography, and brand guidelines for a luxury fashion label.",
    category: "Branding" as const,
    image: "/images/project-1.jpg",
    tools: ["Photoshop", "CorelDRAW"],
  },
  {
    title: "SaaS Dashboard Design",
    description: "End-to-end design and development of a modern SaaS analytics dashboard with real-time data visualization.",
    category: "Website Design" as const,
    image: "/images/project-2.jpg",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Creative Flyer Series",
    description: "A series of eye-catching promotional flyers and posters for corporate events and product launches.",
    category: "Graphic Design" as const,
    image: "/images/project-3.jpg",
    tools: ["Photoshop", "CorelDRAW"],
  },
  {
    title: "Mobile App UI Design",
    description: "Complete UI/UX design for a fintech mobile application including wireframes, prototypes, and design system.",
    category: "UI/UX Projects" as const,
    image: "/images/project-4.jpg",
    tools: ["Figma"],
  },
  {
    title: "E-Commerce Platform",
    description: "Designed and built a fully responsive e-commerce website with product catalog, cart, and checkout flow.",
    category: "Website Design" as const,
    image: "/images/project-5.jpg",
    tools: ["Figma", "WordPress", "CSS"],
  },
  {
    title: "Logo Collection",
    description: "A curated collection of modern logos designed for tech startups and creative agencies worldwide.",
    category: "Graphic Design" as const,
    image: "/images/project-6.jpg",
    tools: ["Photoshop", "CorelDRAW", "Figma"],
  },
  {
    title: "Corporate Brand System",
    description: "Comprehensive brand guideline documentation and identity system for a multinational consulting firm.",
    category: "Branding" as const,
    image: "/images/project-7.jpg",
    tools: ["Photoshop", "Figma"],
  },
  {
    title: "Real Estate Platform",
    description: "Modern real estate website with property listings, interactive maps, and agent profiles. Built for performance.",
    category: "Website Design" as const,
    image: "/images/project-8.jpg",
    tools: ["Figma", "HTML", "CSS", "JavaScript", "WordPress"],
  },
]

export function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">Portfolio</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            My Work
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects showcasing my expertise in design and development.
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-12 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "text-muted-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/10" />
                <div className="absolute right-4 top-4 rounded-full bg-card/90 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 text-foreground" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-primary">{project.category}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
