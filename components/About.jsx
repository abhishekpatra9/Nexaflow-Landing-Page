export default function About() {
  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "50+", label: "Countries" },
    { number: "24/7", label: "Support" },
  ]

  const values = [
    {
      title: "Innovation First",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that transform how businesses operate.",
    },
    {
      title: "Customer Success",
      description:
        "Your success is our success. We're committed to providing exceptional support and tools that drive results.",
    },
    {
      title: "Transparency",
      description: "We believe in honest communication and clear processes. No hidden fees, no surprises.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">About Our Platform</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We're on a mission to empower businesses with intelligent tools that streamline operations and accelerate
            growth.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/image.png"
                alt="Team collaborating on SaaS platform"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Built for Modern Teams</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded in 2020, we set out to solve a critical problem: businesses were drowning in disconnected tools
              and inefficient workflows. Our platform brings everything together in one intuitive interface.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Today, we serve thousands of companies worldwide, helping them save time, reduce costs, and focus on what
              matters most - growing their business.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Cloud-Based</div>
              <div className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">AI-Powered</div>
              <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Secure</div>
              <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">Scalable</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
