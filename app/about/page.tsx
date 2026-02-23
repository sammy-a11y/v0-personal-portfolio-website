import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CTA } from "@/components/sections/cta"
import { AboutContent } from "@/components/sections/about-content"

export const metadata: Metadata = {
  title: "About | BIG FLOW - Graphic Designer & Web Developer",
  description: "Learn about BIG FLOW (Sammy Tech Center) - a passionate graphic designer and web developer with 5+ years of experience crafting premium digital experiences.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <AboutContent />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
