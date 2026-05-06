// Ambil cookie di client component
export function getSupabaseTokenCookie() {
  const cookies = document.cookie.split("; ");

  const found = cookies.find(
    (item) => item.startsWith("sb-") && item.includes("-auth-token="),
  );

  if (!found) return null;

  return found.split("=")[1];
}
