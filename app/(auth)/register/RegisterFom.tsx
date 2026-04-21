"use client";

import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { registerSchema, type RegisterData } from "./schema";

const RegisterFom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({
    resolver: valibotResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: RegisterData) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
      <div>
        <label className="block text-sm text-gray-300 mb-2">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          {...register("name")}
          className="w-full rounded-xl bg-[#111111] border border-white/10 px-4 py-3 outline-none focus:border-blue-500 transition"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm text-gray-300 mb-2">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          {...register("email")}
          className="w-full rounded-xl bg-[#111111] border border-white/10 px-4 py-3 outline-none focus:border-blue-500 transition"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-2">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          {...register("password")}
          className="w-full rounded-xl bg-[#111111] border border-white/10 px-4 py-3 outline-none focus:border-blue-500 transition"
        />
        {errors.password && (
          <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-300 mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          {...register("confirmPassword")}
          className="w-full rounded-xl bg-[#111111] border border-white/10 px-4 py-3 outline-none focus:border-blue-500 transition"
        />
        {errors.confirmPassword && (
          <p className="mt-2 text-sm text-red-400">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 transition py-3 font-medium"
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </form>
  );
};

export default RegisterFom;
