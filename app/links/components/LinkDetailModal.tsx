"use client";

import { Download, ExternalLink, X, Copy } from "lucide-react";
import type { LinkItem } from "../type";
import Image from "next/image";
import { useBaseUrl } from "@/hooks/useBaseUrl";
import toast from "react-hot-toast";

type LinkDetailModalProps = {
  open: boolean;
  onClose: () => void;
  data?: LinkItem;
};

export default function LinkDetailModal({
  open,
  onClose,
  data,
}: LinkDetailModalProps) {
  const baseUrl = useBaseUrl();
  if (!open || !data) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(`${baseUrl}/r/${data.slug}`);
    toast.success("Copied!");
  };

  const handleDownload = async () => {
    try {
      const encodedUrl = encodeURIComponent(data.qrImage);
      const response = await fetch(`/api/download-image?url=${encodedUrl}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${data.slug}-qr.png`;
      link.click();

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Gagal mendownload QR code"); // ← dan error state-nya
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0f0f0f] scale-90 text-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div>
            <h2 className="text-xl font-semibold">Link Detail</h2>
            <p className="text-sm text-gray-400 mt-1">
              Share, download QR code, and manage your short link.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* QR Image */}
          <div className="rounded-3xl border border-white/10 bg-white  flex justify-center w-fit mx-auto p-2">
            <Image
              src={data.qrImage}
              width={300}
              height={300}
              alt="QR Code"
              className="object-contain"
            />
          </div>
          {/* Info */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Title</p>
              <h3 className="text-lg font-semibold">{data.title}</h3>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Short Link</p>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 flex items-center justify-between gap-3">
                <span className="text-blue-400 truncate text-sm">
                  {`${baseUrl}/r/${data.slug}`}
                </span>

                <button
                  onClick={handleCopy}
                  className="shrink-0 text-gray-400 hover:text-white transition"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleDownload}
              className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 py-3 font-medium transition inline-flex items-center justify-center gap-2"
            >
              <Download size={16} />
              Download QR
            </button>

            <a
              href={`/r/${data.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 hover:bg-blue-700 py-3 font-medium transition inline-flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              Open Link
            </a>
          </div>
          {/* Bottom Note */}
        </div>
      </div>
    </div>
  );
}
