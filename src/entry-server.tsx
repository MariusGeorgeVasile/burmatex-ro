// Build-time renderer: produces the full HTML of every route so search engines and AI crawlers
// that do not execute JavaScript still read the complete content.
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { Site } from "./App";

export function render(path: string) {
  return renderToString(<Router ssrPath={path}><Site /></Router>);
}
export { getMeta, allRoutes } from "./seo";
export { docsFor } from "./data/documents";
export { collections, families, collectionPath } from "./data/collections";
export { landings, generalFaqs } from "./data/landings";
export { priceTiers } from "./data/attributes";
export { site } from "./data/site";
export { references, formatArea } from "./data/references";
