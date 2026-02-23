import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Hero } from "@/components/sections/hero"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { SkillsPreview } from "@/components/sections/skills-preview"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedProjects />
        <SkillsPreview />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
