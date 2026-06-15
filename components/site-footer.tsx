import Link from "next/link";
import { Instagram } from "lucide-react";
import { brand } from "@/lib/mock-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link href="/" className="brand-mark footer-mark">
          <span>S</span>
          <strong>{brand.name}</strong>
        </Link>
        <p>Programme vidéo de stabilisation pour retrouver un cadre après un régime, des vacances ou une période d'écarts.</p>
      </div>
      <div className="footer-links">
        <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
        <Link href="/conditions-generales">Conditions générales</Link>
        <Link href="/mentions-legales">Mentions légales</Link>
        <span>
          <Instagram size={16} /> {brand.handle}
        </span>
      </div>
    </footer>
  );
}
