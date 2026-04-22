import RegisterFom from "./RegisterFom";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        <section className="hidden lg:flex flex-col justify-between p-10 border-r border-white/10 bg-linear-to-br from-white/3 to-transparent">
          <div>
            <div className="text-xl font-semibold tracking-tight">
              LinkPilot<span className="text-blue-500">.</span>
            </div>
            <h2 className="mt-8 text-4xl font-semibold leading-tight">
              Start building smarter links.
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Create your account and start managing short links, QR codes, and
              click analytics from one clean workspace.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <InfoCard label="Links Created" value="12K+" />
            <InfoCard label="Tracked Clicks" value="1.8M+" />
            <InfoCard label="Response Time" value="<50ms" />
            <InfoCard label="Uptime" value="99.99%" />
          </div>
        </section>

        <section className="p-6 sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="text-xl font-semibold tracking-tight mb-8">
              LinkPilot<span className="text-blue-500">.</span>
            </div>
            <h1 className="text-3xl font-semibold">Create Account</h1>
            <p className="mt-2 text-gray-400">
              Create your free account and launch your first tracked link.
            </p>

            <RegisterFom />

            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="text-blue-400 hover:text-blue-300">
                Login
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="mt-2 text-xl font-semibold">{value}</p>
    </div>
  );
}
