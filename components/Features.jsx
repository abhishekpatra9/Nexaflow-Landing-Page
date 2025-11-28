export default function Features() {
  const features = [
    {
      icon: "📊",
      title: "Advanced Analytics",
      description: "Get deep insights into your data with powerful analytics tools and real-time reporting dashboards.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Automation",
      description: "Leverage artificial intelligence to automate repetitive tasks and boost your productivity.",
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to keep your data safe and compliant.",
    },
    {
      icon: "🔄",
      title: "Seamless Integration",
      description: "Connect with your favorite tools and services through our extensive integration library.",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Access your workspace anywhere with our responsive design and native mobile apps.",
    },
    {
      icon: "🎨",
      title: "Customizable Design",
      description: "Tailor the platform to match your brand with flexible theming and customization options.",
    },
  ]

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Powerful features designed to streamline your workflow and accelerate your business growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md ring-1 ring-slate-200 p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
