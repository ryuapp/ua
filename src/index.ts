export default {
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      const userAgent = request.headers.get("User-Agent");
      if (!userAgent) return new Response("No User-Agent", { status: 400 });
      return new Response(userAgent, { status: 200 });
    }

    return new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler;
