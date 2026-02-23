import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
          {"Let's Create Something"}
          <span className="text-primary">{" Amazing"}</span>{" Together"}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          Ready to elevate your brand? I am here to help you design and build 
          digital experiences that stand out and deliver results.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="gap-2 px-8">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
