export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <main className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-geist-sans)]">
          Welcome to Airodental
        </h1>
        <p className="text-lg mb-6">
          Your clean, custom Next.js site with Lato for body text and Geist for headings.
        </p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl mb-3 font-[family-name:var(--font-geist-sans)]">
            Getting Started
          </h2>
          <p className="mb-4">
            This template has been stripped of all default Next.js styling and assets.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Default background is white</li>
            <li>Body text uses Lato font</li>
            <li>Headings use Geist font</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
