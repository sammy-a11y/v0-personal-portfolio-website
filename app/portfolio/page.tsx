import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CTA } from "@/components/sections/cta"
import { PortfolioContent } from "@/components/sections/portfolio-content"

export const metadata: Metadata = {
  title: "Portfolio | BIG FLOW - Graphic Design & Web Development Projects",
  description: "Explore BIG FLOW's portfolio of graphic design, web development, branding, and UI/UX projects. Premium work for global clients.",
}

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <PortfolioContent />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
