import Header from "@/components/Header"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        {/* Additional sections can be added here */}
      </main>
    </div>
  )
}
