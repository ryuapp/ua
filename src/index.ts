import { Hono } from "hono/tiny";

const app = new Hono();

app.get("/", (c) => {
  const userAgent = c.req.header("User-Agent");
  if (!userAgent) return c.text("No User-Agent");
  return c.text(userAgent);
});

export default app;
