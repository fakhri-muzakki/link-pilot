"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { X, Link2, Loader2 } from "lucide-react";
import { LinkFormSchema, type LinkFormData } from "../schema";

interface LinkFormModalProps {
  open: boolean;
  mode: "create" | "edit";
  initialData?: {
    title: string;
    originalUrl: string;
    customAlias: string;
  };
  onClose: () => void;
  onSubmit: (values: LinkFormData) => Promise<void>;
}

export default function LinkFormModal({
  open = true,
  mode = "create",
  initialData,
  onClose,
  onSubmit,
}: LinkFormModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: valibotResolver(LinkFormSchema),
    defaultValues: {
      title: "",
      originalUrl: "",
      customAlias: "",
    },
  });

  useEffect(() => {
    if (open) {
      reset({
        title: initialData?.title || "",
        originalUrl: initialData?.originalUrl || "",
        customAlias: initialData?.customAlias || "",
      });
    }
  }, [open, initialData, reset]);

  if (!open) return null;

  const isEdit = mode === "edit";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#0f0f0f] text-white shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div>
            <h2 className="text-xl font-semibold">
              {isEdit ? "Edit Link" : "Create New Link"}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {isEdit
                ? "Update your short link settings."
                : "Generate a short link and QR code instantly."}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(async (values) => await onSubmit?.(values))}
          className="p-6 space-y-5"
        >
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Link Title
            </label>
            <input
              {...register("title")}
              placeholder="Summer Campaign"
              className="w-full rounded-xl bg-[#111111] border border-white/10 px-4 py-3 outline-none focus:border-blue-500 transition"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-400">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Destination URL
            </label>
            <input
              {...register("originalUrl")}
              placeholder="https://example.com/product"
              className="w-full rounded-xl bg-[#111111] border border-white/10 px-4 py-3 outline-none focus:border-blue-500 transition"
            />
            {errors.originalUrl && (
              <p className="mt-2 text-sm text-red-400">
                {errors.originalUrl.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Custom Alias <span className="text-gray-500">(optional)</span>
            </label>
            <div className="flex rounded-xl overflow-hidden border border-white/10 focus-within:border-blue-500 transition bg-[#111111]">
              <div className="px-4 flex items-center text-gray-500 border-r border-white/10">
                /r/
              </div>
              <input
                {...register("customAlias")}
                placeholder="summer-sale"
                className="flex-1 px-4 py-3 bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/3 p-4 flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center shrink-0">
              <Link2 size={18} />
            </div>
            <div>
              <p className="text-sm font-medium">
                QR code included automatically
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Every created link gets a downloadable QR code for quick
                sharing.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="sm:flex-1 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 py-3 font-medium transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="sm:flex-1 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 py-3 font-medium transition inline-flex items-center justify-center gap-2"
            >
              {isSubmitting && <Loader2 size={16} className="animate-spin" />}
              {isSubmitting
                ? isEdit
                  ? "Saving..."
                  : "Creating..."
                : isEdit
                  ? "Save Changes"
                  : "Create Link"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
