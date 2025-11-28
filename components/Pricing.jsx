"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10 team members",
        "5GB storage",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "API access",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited team members",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "Mobile app access",
        "API access",
        "Custom integrations",
        "Advanced security",
      ],
      buttonText: "Get Started",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited everything",
        "Unlimited storage",
        "Custom analytics",
        "24/7 dedicated support",
        "Mobile app access",
        "API access",
        "Custom integrations",
        "Enterprise security",
        "SLA guarantee",
        "Dedicated account manager",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false,
    },
  ]

  const handlePlanClick = (planName) => {
    setSelectedPlan(planName)
    console.log("[v0] Selected plan:", planName)
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-pretty">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              onClick={() => handlePlanClick(plan.name)}
              className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                selectedPlan === plan.name
                  ? "ring-2 ring-blue-600 shadow-xl transform scale-105"
                  : plan.popular
                    ? "ring-2 ring-blue-600 shadow-xl shadow-blue-600/10"
                    : "ring-1 ring-slate-200 shadow-md hover:ring-2 hover:ring-blue-400"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Selected Badge */}
              {selectedPlan === plan.name && (
                <div className="absolute -top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-600 text-white text-xs font-semibold shadow-lg">
                    <Check className="w-3 h-3 mr-1" />
                    Selected
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-slate-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-600">/{plan.period.split(" ")[1]}</span>}
                </div>
                <p className="text-sm text-slate-600 mt-1">{plan.period}</p>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6 text-pretty">{plan.description}</p>

              {/* CTA Button */}
              <Button
                className={`w-full mb-6 ${
                  selectedPlan === plan.name || plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "border-2 border-slate-200 hover:bg-slate-50"
                }`}
                variant={plan.buttonVariant}
                size="lg"
              >
                {plan.buttonText}
              </Button>

              {/* Features List */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-900 mb-3">What's included:</p>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                    </div>
                    <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
