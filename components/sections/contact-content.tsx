"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@bigflow.design",
    href: "mailto:hello@bigflow.design",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 9169530731",
    href: "tel:+2349169530731",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with me",
    href: "https://wa.me/2349169530731",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide",
    href: "#",
  },
]

const socialLinks = [
  { name: "X / Twitter", href: "https://twitter.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Behance", href: "https://behance.net" },
  { name: "Dribbble", href: "https://dribbble.com" },
]

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">Contact</p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl">
            {"Let's Work Together"}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {"Have a project in mind? I'd love to hear about it. Reach out and let's create something amazing."}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="font-serif text-xl font-bold text-foreground">Send a Message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form below and I will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-lg bg-primary/10 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Send className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">Message Sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you for reaching out. I will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input id="name" placeholder="Your full name" required className="bg-background" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required className="bg-background" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input id="subject" placeholder="Project type or inquiry" required className="bg-background" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="budget" className="text-foreground">Budget Range</Label>
                    <Input id="budget" placeholder="e.g. $500 - $1000" className="bg-background" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Send Message
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/* Contact details */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="font-serif text-xl font-bold text-foreground">Contact Info</h2>
              <div className="mt-6 flex flex-col gap-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 p-6 transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/20"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Chat on WhatsApp</p>
                <p className="text-sm text-muted-foreground">Quick response guaranteed</p>
              </div>
            </a>

            {/* Social links */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="font-serif text-xl font-bold text-foreground">Follow Me</h2>
              <div className="mt-6 flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-muted"
                  >
                    <span className="text-sm text-muted-foreground group-hover:text-foreground">{link.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:text-foreground group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
