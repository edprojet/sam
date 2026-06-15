import Link from "next/link";
import { ArrowRight, BadgeCheck, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/mock-data";

export default function JoinPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container checkout-page">
        <section className="checkout-copy">
          <p className="eyebrow">
            <Sparkles size={16} /> Inscription
          </p>
          <h1 className="section-title">Rejoindre {brand.offerName}</h1>
          <p className="lead">
            Accède au programme de stabilisation, aux vidéos de coaching et aux supports pratiques pour revenir à
            l'équilibre après un régime, des vacances ou une période d'écarts.
          </p>
          <div className="reassurance-grid">
            <span>
              <ShieldCheck size={18} /> Accès sécurisé
            </span>
            <span>
              <LockKeyhole size={18} /> Espace membre inclus
            </span>
            <span>
              <BadgeCheck size={18} /> Programme complet
            </span>
          </div>
        </section>
        <aside className="checkout-card panel">
          <p className="kicker-note">Accès immédiat</p>
          <h2>{brand.offerName}</h2>
          <strong>{brand.priceLabel}</strong>
          <ul>
            <li>Programme de stabilisation 15 jours</li>
            <li>2 vidéos principales de coaching</li>
            <li>Supports écrits pour appliquer facilement</li>
            <li>1 mois d'accès à l'espace membre</li>
          </ul>
          <Link href="/programme" className="btn btn-primary">
            Entrer dans l’espace membre <ArrowRight size={18} />
          </Link>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
