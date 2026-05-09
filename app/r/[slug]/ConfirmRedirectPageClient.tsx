"use client";

import { ExternalLink } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface ConfirmRedirectPageClientProps {
  customAlias: string;
  originalUrl: string;
}

const ConfirmRedirectPageClient = ({
  originalUrl,
  customAlias,
}: ConfirmRedirectPageClientProps) => {
  const [countdown, setCountdown] = useState(5);
  const [loading, setLoading] = useState(false);

  const redirectedRef = useRef(false);

  const redirectToWebsite = useCallback(async (): Promise<void> => {
    if (redirectedRef.current) return;

    redirectedRef.current = true;
    setLoading(true);

    try {
      await fetch(`/api/links/click`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ customAlias }),
      });

      window.location.href = originalUrl;
    } catch (error) {
      console.error(error);

      // fallback redirect walaupun analytics gagal
      window.location.href = originalUrl;
    }
  }, [customAlias, originalUrl]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          redirectToWebsite();

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [redirectToWebsite]);

  return (
    <button
      onClick={redirectToWebsite}
      disabled={loading}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed px-5 py-3 text-sm font-medium transition w-full sm:w-auto"
    >
      <ExternalLink size={16} />

      {loading ? "Redirecting..." : `Open Website (${countdown}s)`}
    </button>
  );
};

export default ConfirmRedirectPageClient;
