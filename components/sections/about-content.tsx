import { Briefcase, GraduationCap, Heart } from "lucide-react"

const tools = [
  { name: "Photoshop", category: "Design" },
  { name: "CorelDRAW", category: "Design" },
  { name: "Figma", category: "Design" },
  { name: "HTML", category: "Development" },
  { name: "CSS", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "WordPress", category: "Development" },
]

const journey = [
  {
    icon: GraduationCap,
    title: "The Beginning",
    description:
      "My journey started with a deep curiosity for design and technology. I taught myself graphic design tools and fell in love with the creative process of transforming ideas into visual stories.",
  },
  {
    icon: Briefcase,
    title: "Going Professional",
    description:
      "After years of honing my design skills, I expanded into web development. Learning HTML, CSS, and JavaScript allowed me to bring my designs to life and offer end-to-end digital solutions.",
  },
  {
    icon: Heart,
    title: "The Mission",
    description:
      "Today, I help businesses worldwide establish powerful digital presences. From startups to established brands, I combine design artistry with technical precision to deliver results that exceed expectations.",
  },
]

export function AboutContent() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">About Me</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            {"I'm "}
            <span className="text-primary">BIG FLOW</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Also known as <strong className="text-foreground">Sammy Tech Center</strong> &mdash; a passionate 
            graphic designer and web developer dedicated to creating premium digital experiences. 
            With expertise spanning visual design and front-end development, I bring a unique 
            perspective to every project.
          </p>
        </div>

        {/* Journey */}
        <div className="mt-20">
          <h2 className="font-serif text-2xl font-bold text-foreground">My Journey</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {journey.map((item) => (
              <div key={item.title} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Tools */}
        <div className="mt-20">
          <h2 className="font-serif text-2xl font-bold text-foreground">Tools & Skills</h2>
          <p className="mt-2 text-muted-foreground">The technologies and tools I use to bring ideas to life.</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Design tools */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-serif text-lg font-semibold text-foreground">Design Tools</h3>
              <div className="mt-6 flex flex-col gap-4">
                {tools
                  .filter((t) => t.category === "Design")
                  .map((tool) => (
                    <div key={tool.name} className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">{tool.name}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Dev tools */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="font-serif text-lg font-semibold text-foreground">Development</h3>
              <div className="mt-6 flex flex-col gap-4">
                {tools
                  .filter((t) => t.category === "Development")
                  .map((tool) => (
                    <div key={tool.name} className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm text-foreground">{tool.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fun facts / Values */}
        <div className="mt-20 rounded-xl border border-border bg-card p-10">
          <h2 className="font-serif text-2xl font-bold text-foreground">My Values</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Quality First",
                description: "Every pixel matters. I deliver work that meets the highest standards of quality and craftsmanship.",
              },
              {
                title: "Client-Centered",
                description: "Your vision is my mission. I work closely with every client to ensure the final product exceeds expectations.",
              },
              {
                title: "Global Mindset",
                description: "I serve clients worldwide, bringing diverse cultural perspectives and international design standards to every project.",
              },
            ].map((value) => (
              <div key={value.title}>
                <h3 className="font-serif text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
