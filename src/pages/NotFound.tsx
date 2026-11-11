import { Link } from "../link";
import { ArrowUpRight } from "lucide-react";
import { Label } from "../components";

export default function NotFound() {
  return <section className="page-intro ed-shell not-found">
    <Label>Eroare 404</Label>
    <h1>Pagina nu există.<br /><strong>Colecțiile, da.</strong></h1>
    <p>Adresa a fost mutată sau scrisă greșit.</p>
    <div className="intro-actions"><Link href="/colectii" className="ed-button">Vedeți colecțiile <ArrowUpRight /></Link><Link href="/" className="ed-text-link">Înapoi acasă</Link></div>
  </section>;
}
