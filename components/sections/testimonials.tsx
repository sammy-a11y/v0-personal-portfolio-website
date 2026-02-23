import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVibe Studios",
    content:
      "BIG FLOW transformed our brand identity from scratch. The attention to detail and creative vision exceeded all expectations. Our new website drives 3x more leads.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, NovaBrand",
    content:
      "Working with BIG FLOW was a game-changer. The designs are world-class and the development quality is outstanding. Highly recommend for any serious business.",
    rating: 5,
  },
  {
    name: "Amara Williams",
    role: "Marketing Director, CloudScale",
    content:
      "The portfolio website BIG FLOW built for us perfectly captures our brand essence. Professional, fast, and beautifully designed. A true creative partner.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="border-y border-border bg-card/50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-medium text-primary">Testimonials</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
            What Clients Say
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-xl border border-border bg-card p-8"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.content}"`}
              </p>
              <div className="mt-6 border-t border-border pt-6">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
