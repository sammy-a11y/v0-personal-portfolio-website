import Link from "next/link"

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Logo Design" },
      { href: "/services", label: "Web Development" },
      { href: "/services", label: "Branding" },
      { href: "/services", label: "UI/UX Design" },
    ],
  },
]

const socialLinks = [
  { href: "https://twitter.com", label: "X / Twitter" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://behance.net", label: "Behance" },
  { href: "https://tiktok.com", label: "Tiktok" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                BIG<span className="text-primary"> FLOW</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Crafting premium brands and building powerful websites for clients worldwide.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Also known as Sammy Tech Center
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {'© 2026 BIG FLOW. All rights reserved.'}
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Developed by{" "}
            <span className="font-medium text-primary">BIG FLOW</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
