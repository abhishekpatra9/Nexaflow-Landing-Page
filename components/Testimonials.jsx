import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This platform has completely transformed how we manage our workflow. The automation features alone have saved us countless hours every week.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      initials: "SJ",
      avatarColor: "bg-blue-500",
    },
    {
      quote:
        "The analytics dashboard gives us insights we never had before. It's intuitive, powerful, and has become essential to our decision-making process.",
      author: "Michael Chen",
      role: "Product Manager, InnovateCo",
      initials: "MC",
      avatarColor: "bg-cyan-500",
    },
    {
      quote:
        "Outstanding customer support and a product that actually delivers on its promises. We've seen a 40% increase in productivity since switching.",
      author: "Emily Rodriguez",
      role: "Director of Operations, GrowthLab",
      initials: "ER",
      avatarColor: "bg-purple-500",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            Loved by Teams Worldwide
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-pretty">
            See what our customers have to say about their experience with our platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 md:p-8 ring-1 ring-slate-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* 5-Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-slate-700 text-base leading-relaxed mb-6 text-pretty">"{testimonial.quote}"</p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                {/* Avatar with Initials */}
                <div
                  className={`${testimonial.avatarColor} w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg`}
                >
                  {testimonial.initials}
                </div>

                {/* Name and Role */}
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
