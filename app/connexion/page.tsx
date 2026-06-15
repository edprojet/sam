import Link from "next/link";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function LoginPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container login-page">
        <section className="login-panel panel">
          <p className="eyebrow">
            <LockKeyhole size={16} /> Connexion
          </p>
          <h1>Accéder à ton espace Funky</h1>
          <p>
            Connecte-toi pour reprendre tes vidéos, suivre ta progression et retrouver tes ressources.
          </p>
          <label>
            Email
            <span>
              <Mail size={18} />
              <input defaultValue="sarah@email.com" type="email" />
            </span>
          </label>
          <label>
            Mot de passe
            <span>
              <LockKeyhole size={18} />
              <input defaultValue="motdepasse" type="password" />
            </span>
          </label>
          <Link href="/programme" className="btn btn-primary">
            Se connecter <ArrowRight size={18} />
          </Link>
        </section>
        <aside className="login-quote">
          <span>FS</span>
          <h2>"On avance simple. On avance vrai. Et surtout, on ne se lâche pas."</h2>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
