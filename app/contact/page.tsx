import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactContent } from "@/components/sections/contact-content"

export const metadata: Metadata = {
  title: "Contact | BIG FLOW - Get In Touch",
  description: "Ready to start a project? Contact BIG FLOW for graphic design, web development, and branding services. Available worldwide via email, WhatsApp, and phone.",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <ContactContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
