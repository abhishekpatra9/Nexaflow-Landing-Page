import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import About from "@/components/About"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div id="home" className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
          <Hero />
        </div>
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="pricing">
        <Pricing />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </main>
  )
}
