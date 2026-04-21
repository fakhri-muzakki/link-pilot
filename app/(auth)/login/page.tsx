"use client";

import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import * as v from "valibot";

const loginSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty("Email is required"),
    v.email("Invalid email address"),
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty("Password is required"),
    v.minLength(8, "Minimum 8 characters"),
  ),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: valibotResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        <section className="hidden lg:flex flex-col justify-between p-10 border-r border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent">
          <div>
            <div className="text-xl font-semibold tracking-tight">
              LinkPilot<span className="text-blue-500">.</span>
            </div>
            <h2 className="mt-8 text-4xl font-semibold leading-tight">
              Welcome back.
            </h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Login to manage short links, QR codes, and analytics from one
              dashboard.
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
              LinkForge<span className="text-blue-500">.</span>
            </div>
            <h1 className="text-3xl font-semibold">Sign In</h1>
            <p className="mt-2 text-gray-400">
              Enter your credentials to access your account.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className="w-full rounded-xl bg-[#111111] border border-white/10 px-4 py-3 outline-none focus:border-blue-500 transition"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                  className="w-full rounded-xl bg-[#111111] border border-white/10 px-4 py-3 outline-none focus:border-blue-500 transition"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 transition py-3 font-medium"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-400 hover:text-blue-300">
                Register
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="mt-2 text-xl font-semibold">{value}</p>
    </div>
  );
}
