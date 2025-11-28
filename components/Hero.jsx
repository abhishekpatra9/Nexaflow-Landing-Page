"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check, User, FileText, CreditCard } from "lucide-react"

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const activities = [
    {
      icon: User,
      user: "Sarah Johnson",
      action: "upgraded to Pro plan",
      time: "2 min ago",
      status: "Success",
      iconBg: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      user: "Michael Chen",
      action: "created new project",
      time: "15 min ago",
      status: "Active",
      iconBg: "from-purple-500 to-pink-500",
    },
    {
      icon: CreditCard,
      user: "Emma Wilson",
      action: "payment received $299",
      time: "1 hour ago",
      status: "Complete",
      iconBg: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl">
        {/* Early Access Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/50 border border-blue-800/50 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-sm text-cyan-400 font-medium">Early Access Available</span>
        </div>

        {/* Heading with Gradient */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-balance">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Transform Your Workflow
          </span>
          <br />
          <span className="text-white">With Nexaflow</span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
          Streamline your business operations with our powerful platform. Built for modern teams who demand excellence
          and efficiency.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-blue-600/20"
            onClick={() => scrollToSection("contact")}
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-base backdrop-blur-sm bg-transparent"
            onClick={() => scrollToSection("features")}
          >
            Watch Demo
          </Button>
        </div>

        {/* Small Text Badges */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-cyan-400" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-cyan-400" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-cyan-400" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>

      {/* Right Side - Dashboard Mockup */}
      <div className="flex-1 w-full max-w-2xl">
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-3xl opacity-20"></div>

          {/* Dashboard Window */}
          <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-700/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-slate-400">Dashboard Preview</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 space-y-4">
              {/* Top Stats Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-4 shadow-lg">
                  <div className="text-xs text-blue-200 mb-1">Revenue</div>
                  <div className="text-xl font-bold text-white">$45.2K</div>
                  <div className="text-xs text-blue-200 mt-1">+12.5%</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg p-4 shadow-lg">
                  <div className="text-xs text-cyan-200 mb-1">Users</div>
                  <div className="text-xl font-bold text-white">2,847</div>
                  <div className="text-xs text-cyan-200 mt-1">+8.3%</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-4 shadow-lg">
                  <div className="text-xs text-purple-200 mb-1">Growth</div>
                  <div className="text-xl font-bold text-white">23.8%</div>
                  <div className="text-xs text-purple-200 mt-1">+5.2%</div>
                </div>
              </div>

              {/* Chart Area with Image */}
              <div className="bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700/50">
                <img
                  src="/analysis_image.jpg"
                  alt="Analytics Overview"
                  className="w-full h-48 object-cover"
                />
                <div className="py-2 text-xs text-slate-400 text-center bg-slate-900/50">Analytics Overview</div>
              </div>

              <div className="space-y-2">
                {activities.map((activity, index) => {
                  const IconComponent = activity.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-slate-900/30 rounded-lg p-3 border border-slate-700/30 hover:bg-slate-900/50 transition-colors"
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${activity.iconBg} flex items-center justify-center`}
                      >
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-xs text-slate-200 font-medium mb-0.5">{activity.user}</div>
                        <div className="text-xs text-slate-400">{activity.action}</div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="px-2 py-0.5 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded text-xs text-cyan-400 border border-blue-500/30">
                          {activity.status}
                        </div>
                        <div className="text-xs text-slate-500">{activity.time}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
