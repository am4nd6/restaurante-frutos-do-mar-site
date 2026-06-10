import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const entryPath = resolve(__dirname, "..", ".vercel", "output", "functions", "__server.func", "index.mjs");

if (!existsSync(entryPath)) {
  console.log("[patch-vercel-entry] .vercel/output not found, skipping");
  process.exit(0);
}

let code = readFileSync(entryPath, "utf-8");

const oldPattern = "return nitroApp.fetch(req)";
const newPattern = "return services.ssr.fetch(req, context)";

if (code.includes("return services.ssr.fetch(req, context)")) {
  console.log("[patch-vercel-entry] Already patched, skipping");
} else if (code.includes(oldPattern)) {
  code = code.replace(/return nitroApp\.fetch\(req\)/g, "return services.ssr.fetch(req, context)");
  writeFileSync(entryPath, code, "utf-8");
  console.log("[patch-vercel-entry] Patched: SSR handler is now called directly");
} else {
  console.error("[patch-vercel-entry] ERROR: Could not find nitroApp.fetch in entry");
  process.exit(1);
}
