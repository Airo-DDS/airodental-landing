import type { Metadata } from "next";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Overview from "@/components/Overview"
import Solutions from "@/components/Solutions"
import Goals from "@/components/Goals"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Founder from "@/components/Founder"
import FoundersMessage from "@/components/FoundersMessage"

export const metadata: Metadata = {
  title: "AiroDental | Revolutionizing Dental Practices with AI",
  description: "Enhance efficiency, streamline patient communication, and empower your dental team with AiroDental's AI-powered solutions.",
};

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Founder />
        <Features />
        <Solutions />
        <Goals />
        <FoundersMessage />
        <Contact />
        {/* Additional sections can be added here */}
      </main>
      <Footer />
    </div>
  )
}
