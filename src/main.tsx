import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = document.getElementById("root")!;
const app = <StrictMode><App /></StrictMode>;
if (root.hasChildNodes() && import.meta.env.MODE !== "artifact") hydrateRoot(root, app);
else createRoot(root).render(app);

// Private preview only: PDFs are not hosted there, so explain instead of a failed download.
if (import.meta.env.MODE === "artifact") {
  document.addEventListener("click", e => {
    const a = (e.target as Element | null)?.closest?.("a[href$='#pdf-disponibil-pe-site']");
    if (!a) return;
    e.preventDefault();
    e.stopPropagation();
    document.querySelector(".pdf-toast")?.remove();
    const t = document.createElement("div");
    t.className = "pdf-toast";
    t.setAttribute("role", "status");
    t.textContent = "Previzualizare: documentele PDF nu sunt incluse aici. Pe burmatex.ro se deschid și se descarcă direct.";
    t.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:1000;max-width:min(560px,calc(100vw - 32px));padding:14px 18px;background:#1c1b1a;color:#fff;font:600 14px/1.5 Manrope,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.25)";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 4500);
  }, true);
}
