export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return new Response("Missing url", { status: 400 });
  }

  const response = await fetch(imageUrl); // fetch dari server, tidak kena CORS
  const blob = await response.blob();
  const contentType = response.headers.get("content-type") || "image/png";

  return new Response(blob, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="qr-code.png"`,
    },
  });
}
