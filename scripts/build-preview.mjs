// Builds a self-contained preview (hash routing, relative asset paths) into dist-preview/ for hosting as a claude.ai artifact.
import { execSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = "dist-preview";
execSync(`npx vite build --mode artifact --base ./ --outDir ${out} --emptyOutDir`, { stdio: "inherit" });
const assets = join(out, "assets");
for (const file of readdirSync(assets).filter(f => f.endsWith(".js"))) {
  const path = join(assets, file);
  writeFileSync(path, readFileSync(path, "utf8")
    .replaceAll('"/img/', '"img/')
    .replaceAll("`/img/", "`img/")
    .replace(/"\/cataloage\/([^"]+\.pdf)"/g, '"#pdf-disponibil-pe-site"'));
}
// The hosted preview is limited to 511 files: catalogue PDFs are left out (they work on the real site).
import { rmSync } from "node:fs";
rmSync(join(out, "cataloage"), { recursive: true, force: true });
rmSync(join(out, "favicon.svg"), { force: true });
const html = join(out, "index.html");
writeFileSync(html, readFileSync(html, "utf8").replace('href="./favicon.svg"', 'href="favicon.svg"'));
console.log("Preview ready in", out);
