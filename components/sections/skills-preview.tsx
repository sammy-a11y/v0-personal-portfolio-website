import { Palette, Code, Layout, Figma, Globe, Layers } from "lucide-react"

const skills = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creating stunning visual designs, logos, flyers, and brand materials that leave lasting impressions.",
  },
  {
    icon: Layout,
    title: "Web Design",
    description: "Designing beautiful, user-friendly interfaces that convert visitors into loyal customers.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, fast-loading websites with modern technologies and clean code.",
  },
  {
    icon: Figma,
    title: "UI/UX Design",
    description: "Crafting intuitive digital experiences through research-driven prototyping and design systems.",
  },
  {
    icon: Layers,
    title: "Branding",
    description: "Developing comprehensive brand identities that tell your story and connect with audiences.",
  },
  {
    icon: Globe,
    title: "WordPress",
    description: "Creating custom WordPress websites with powerful features and easy content management.",
  },
]

export function SkillsPreview() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium text-primary">What I Do</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Combining design creativity with technical expertise to deliver premium digital solutions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <skill.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
