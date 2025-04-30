import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Overview from "@/components/Overview"
import Features from "@/components/Features"
import Goals from "@/components/Goals"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Features />
        <Goals />
        <Contact />
        {/* Additional sections can be added here */}
      </main>
      <Footer />
    </div>
  )
}
