import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CTA } from "@/components/sections/cta"
import { ServicesContent } from "@/components/sections/services-content"

export const metadata: Metadata = {
  title: "Services | BIG FLOW - Design & Development Services",
  description: "Premium graphic design, web development, branding, and UI/UX services by BIG FLOW. Logo design, flyer design, website development, and more.",
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <ServicesContent />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
