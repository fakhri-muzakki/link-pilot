import { useEffect, useState } from "react";

export function useBaseUrl() {
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    const baseUrl = window.location.origin;
    setOrigin(baseUrl);
  }, []);

  return origin;
}
