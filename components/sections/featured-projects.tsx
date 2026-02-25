import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Luxe Brand Identity",
    category: "Branding",
    image: "/images/project-1.jpg",
    tools: ["Photoshop", "CorelDRAW"],
  },
  {
    title: "SaaS Dashboard Design",
    category: "Website Design",
    image: "/images/project-2.jpg",
    tools: ["Figma", "HTML", "CSS"],
  },
  {
    title: "Creative Flyer Series",
    category: "Graphic Design",
    image: "/images/project-3.jpg",
    tools: ["Photoshop", "CorelDRAW"],
  },
  {
    title: "Mobile App UI Design",
    category: "UI/UX Projects",
    image: "/images/project-4.jpg",
    tools: ["Figma"],
  },
]

export function FeaturedProjects() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-primary">Selected Work</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Featured Projects
            </h2>
          </div>
          <Link href="/portfolio">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Projects grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href="/portfolio"
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 4}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/10" />
                <div className="absolute right-4 top-4 rounded-full bg-card/90 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4 text-foreground" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-primary">{project.category}</p>
                <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">{project.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
