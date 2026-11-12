import { useEffect, useSyncExternalStore } from "react";
import { Route, Router, Switch, useLocation } from "wouter";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import { CollectionPage, CollectionsPage } from "./pages/Collections";
import DealerPage from "./pages/Dealer";
import { AboutPage, ContactPage, ResourcesPage } from "./pages/Other";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/Landing";
import SelectorPage from "./pages/Selector";
import ProjectsPage from "./pages/Projects";
import { CatalogHub, DesignConnectionPage, OrganicMergePage, SustainabilityPage } from "./pages/Catalogs";
import { landings } from "./data/landings";

// The hosted preview (claude.ai artifact) has no server rewrites, so it routes on the URL hash:
// "#/page?query#section". The real site uses normal browser URLs.
const hashMode = import.meta.env.MODE === "artifact";
const rawHash = () => "/" + window.location.hash.replace(/^#?\/?/, "");
const subscribeHash = (cb: () => void) => { window.addEventListener("hashchange", cb); return () => window.removeEventListener("hashchange", cb); };
const anchor = () => (hashMode ? rawHash().split("#")[1] : window.location.hash.slice(1)) ?? "";
function navigateHash(to: string, { replace = false }: { replace?: boolean } = {}) {
  const oldURL = window.location.href;
  const url = new URL(oldURL);
  url.hash = to.startsWith("/") ? to : `/${to}`;
  history[replace ? "replaceState" : "pushState"](null, "", url.href);
  window.dispatchEvent(new HashChangeEvent("hashchange", { oldURL, newURL: url.href }));
}
function useAppHashLocation(): [string, typeof navigateHash] {
  return [useSyncExternalStore(subscribeHash, rawHash).split(/[?#]/)[0], navigateHash];
}
function useHashSearch() {
  return useSyncExternalStore(subscribeHash, rawHash).split("#")[0].split("?")[1] ?? "";
}

function ScrollManager() {
  const [location] = useLocation();
  useEffect(() => {
    const id = anchor();
    if (id) { requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView()); return; }
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export { Site };

export default function App() {
  return hashMode ? <Router hook={useAppHashLocation} searchHook={useHashSearch}><Site /></Router> : <Site />;
}

function Site() {
  return <div className="site">
    <a className="skip-link" href="#continut" onClick={e => { e.preventDefault(); document.getElementById("continut")?.focus(); document.getElementById("continut")?.scrollIntoView(); }}>Sari la conținut</a>
    <ScrollManager />
    <Header />
    <main id="continut" tabIndex={-1}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/colectii" component={CollectionsPage} />
        <Route path="/colectii/:slug">{params => <CollectionPage slug={params.slug} />}</Route>
        <Route path="/selector-mocheta" component={SelectorPage} />
        <Route path="/proiecte" component={ProjectsPage} />
        <Route path="/cataloage" component={CatalogHub} />
        <Route path="/cataloage/design-connection" component={DesignConnectionPage} />
        <Route path="/cataloage/organic-merge-colour-link" component={OrganicMergePage} />
        <Route path="/cataloage/principii-sustenabilitate" component={SustainabilityPage} />
        {landings.map(l => <Route key={l.path} path={l.path}><LandingPage path={l.path} /></Route>)}
        <Route path="/devino-dealer" component={DealerPage} />
        <Route path="/de-ce-burmatex" component={AboutPage} />
        <Route path="/resurse" component={ResourcesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </div>;
}
