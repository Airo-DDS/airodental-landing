import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Overview from "@/components/Overview"

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Overview />
        {/* Additional sections can be added here */}
      </main>
    </div>
  )
}
