import { ShieldCheck, Link2 } from "lucide-react";
import ConfirmRedirectPageClient from "./ConfirmRedirectPageClient";
import CancelButton from "./CancelButton";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ConfirmRedirectPage({ params }: Props) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/links/${slug}`,
    // {
    //   headers: {
    //     Authorization: `Bearer ${session.access_token}`,
    //   },
    // },
  );

  if (!res) {
    throw new Error("Error pada saat fetch");
  }

  const result = await res.json();
  const data = result.data;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            LinkPilot<span className="text-blue-500">.</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="min-h-[calc(100vh-73px)] flex items-center justify-center px-6 py-4">
        <div className="w-full max-w-2xl">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            {/* Icon */}
            <div className="flex gap-x-4 items-center h-fit mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/15 text-blue-400 flex items-center justify-center border border-blue-500/10 ">
                <ShieldCheck size={28} />
              </div>
              <h1 className="text-4xl font-bold"> Link Pilot </h1>
            </div>

            {/* Label */}
            <p className="text-sm uppercase tracking-[0.35em] text-blue-400 mb-4">
              Redirect Confirmation
            </p>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              Open external destination?
            </h2>

            {/* Desc */}
            <p className="mt-5 text-gray-400 leading-relaxed">
              You clicked a shortened link. Please confirm before continuing to
              the destination website.
            </p>

            {/* Card URL */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#111111] p-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <Link2 size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-400 mb-1">Destination URL</p>

                  <p className="text-sm md:text-base text-white break-all leading-relaxed">
                    {data.original_url}
                  </p>

                  <p className="mt-3 text-xs text-gray-500">
                    From linkpilot.app/r/{data.custom_alias}
                  </p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-5 rounded-2xl border border-blue-500/10 bg-blue-500/5 px-4 py-3">
              <p className="text-sm text-blue-300 leading-relaxed">
                For security reasons, always verify unfamiliar links before
                opening them.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ConfirmRedirectPageClient
                customAlias={data.custom_alias}
                originalUrl={data.original_url}
              />

              <CancelButton />
            </div>

            {/* Footer */}
            <p className="mt-8 text-xs text-gray-500 text-end">
              Powered by LinkPilot<span className="text-blue-500">.</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
