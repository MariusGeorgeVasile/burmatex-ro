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
    .replace(/"\/cataloage\/([^"]+\.pdf)"/g, '"cataloage/$1"'));
}
const html = join(out, "index.html");
writeFileSync(html, readFileSync(html, "utf8").replace('href="./favicon.svg"', 'href="favicon.svg"'));
console.log("Preview ready in", out);
