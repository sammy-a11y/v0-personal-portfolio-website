import Link from "next/link"
import { ArrowRight, Palette, PenTool, Layers, Globe, Code, Layout, Briefcase, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Custom logo designs that capture your brand essence. From concept to final files in multiple formats.",
    features: ["3 Initial Concepts", "Unlimited Revisions", "All File Formats", "Brand Color Palette"],
    price: "From $150",
  },
  {
    icon: Palette,
    title: "Flyer Design",
    description: "Eye-catching flyer and poster designs for events, promotions, and marketing campaigns.",
    features: ["Print-Ready Files", "Digital Versions", "2 Revisions", "Quick Turnaround"],
    price: "From $50",
  },
  {
    icon: Layers,
    title: "Branding",
    description: "Complete brand identity packages including logo, typography, colors, and brand guidelines.",
    features: ["Logo Suite", "Brand Guidelines", "Business Cards", "Social Media Kit"],
    price: "From $400",
  },
  {
    icon: Layout,
    title: "Website Design",
    description: "Beautiful, modern website designs that convert visitors into customers with intuitive UX.",
    features: ["Responsive Design", "UI/UX Research", "Interactive Prototype", "Design System"],
    price: "From $300",
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Fast, responsive, and SEO-optimized websites built with modern technologies and clean code.",
    features: ["Mobile Responsive", "SEO Optimized", "Fast Loading", "CMS Integration"],
    price: "From $500",
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description: "Stunning portfolio websites to showcase your work and attract new clients globally.",
    features: ["Custom Design", "Project Gallery", "Contact Forms", "Analytics Setup"],
    price: "From $350",
  },
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional business websites that establish credibility and drive growth for your company.",
    features: ["Multi-Page Design", "Contact Integration", "Google Maps", "SSL Certificate"],
    price: "From $600",
  },
]

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "$299",
    period: "per project",
    features: [
      "Logo Design",
      "Business Card Design",
      "2 Revision Rounds",
      "Digital Files Delivery",
      "3-5 Day Turnaround",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Best for growing businesses",
    price: "$799",
    period: "per project",
    features: [
      "Complete Branding Package",
      "Website Design (5 pages)",
      "Unlimited Revisions",
      "Source Files Included",
      "7-10 Day Turnaround",
      "Social Media Kit",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale projects and companies",
    price: "Custom",
    period: "let's talk",
    features: [
      "Full Brand Identity System",
      "Custom Web Development",
      "Priority Support",
      "Ongoing Maintenance",
      "Dedicated Timeline",
      "Strategy Consultation",
    ],
    highlighted: false,
  },
]

export function ServicesContent() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">Services</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            What I Offer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Premium design and development services tailored to help your business stand out and grow.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-6 flex flex-col gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-serif text-lg font-bold text-foreground">{service.price}</p>
            </div>
          ))}
        </div>

        {/* Pricing section */}
        <div className="mt-32">
          <div className="text-center">
            <p className="text-sm font-medium text-primary">Pricing</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Choose Your Plan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Flexible pricing options designed to fit your budget and project needs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-xl border p-8 ${
                  tier.highlighted
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border bg-card"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-xl font-bold text-foreground">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>
                <div className="mt-6">
                  <span className="font-serif text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="ml-2 text-sm text-muted-foreground">{tier.period}</span>
                </div>
                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-8">
                  <Button
                    className={`w-full gap-2 ${
                      tier.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : ""
                    }`}
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
