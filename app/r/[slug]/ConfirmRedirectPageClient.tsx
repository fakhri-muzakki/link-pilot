"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface ConfirmRedirectPageClientProps {
  customAlias: string;
  originalUrl: string;
}

const ConfirmRedirectPageClient = ({
  originalUrl,
  customAlias,
}: ConfirmRedirectPageClientProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (): Promise<void> => {
    setLoading(true);

    const res = await fetch(`/api/links/click`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ customAlias }),
    });

    if (!res.ok) {
      throw new Error("Error");
    }

    window.open(originalUrl, "_blank");
  };

  return (
    <button
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed px-5 py-3 text-sm font-medium transition w-full sm:w-auto"
      onClick={handleClick}
    >
      <ExternalLink size={16} />
      {loading ? "Redirecting..." : "Open Website"}

      <a href="https://www.youtube.com/watch?v=06OOefngy4U" target="_blank"></a>
    </button>
  );
};

export default ConfirmRedirectPageClient;
