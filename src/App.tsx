import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Footer, Header } from "./components";
import Home from "./pages/Home";
import { CollectionPage, CollectionsPage } from "./pages/Collections";
import DealerPage from "./pages/Dealer";
import { AboutPage, ContactPage, ResourcesPage } from "./pages/Other";
import NotFound from "./pages/NotFound";

function ScrollManager() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) { requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView()); return; }
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export default function App() {
  return <div className="site">
    <a className="skip-link" href="#continut">Sari la conținut</a>
    <ScrollManager />
    <Header />
    <main id="continut">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/colectii" component={CollectionsPage} />
        <Route path="/colectii/:slug">{params => <CollectionPage slug={params.slug} />}</Route>
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
