export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <div className="text-lg font-semibold tracking-tight">
          LinkPilot<span className="text-blue-500">.</span>
        </div>
        <nav className="flex gap-6 text-sm text-gray-400">
          <a href="/login" className="hover:text-white">
            Login
          </a>
          <a href="/register" className="hover:text-white">
            Register
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Shorten Links.{" "}
          <span className="text-blue-500">Track Everything.</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Create short URLs, generate QR codes, and track every click in
          real-time. Built for marketers, developers, and businesses who care
          about data.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="/register"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="px-6 py-3 rounded-lg border border-white/15 text-gray-300 hover:text-white hover:border-white/30 transition"
          >
            Login
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-4 gap-6">
          <FeatureCard
            title="Short URL Generator"
            desc="Convert long URLs into clean, shareable links instantly."
          />
          <FeatureCard
            title="QR Code Generator"
            desc="Generate QR codes automatically for every short link."
          />
          <FeatureCard
            title="Click Analytics"
            desc="Track clicks, devices, and user behavior in real-time."
          />
          <FeatureCard
            title="Custom Alias"
            desc="Create branded links with your own custom slug."
          />
        </div>
      </section>

      {/* Value Section */}
      <section className="border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Understand every click
          </h2>
          <p className="mt-4 text-gray-400">
            Every link you share tells a story. Analyze performance, optimize
            campaigns, and grow your reach with data-driven insights.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-semibold">Ready to track your links?</h3>
          <p className="text-gray-400 mt-3">
            Start creating short URLs and analyzing clicks in seconds.
          </p>
          <a
            href="/register"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
          >
            Create Free Account
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LinkPilot. All rights reserved.
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
      <h3 className="font-medium text-white">{title}</h3>
      <p className="text-sm text-gray-400 mt-2">{desc}</p>
    </div>
  );
}
