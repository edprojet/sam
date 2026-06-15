import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function LegalNoticePage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container page-top legal-page">
        <p className="eyebrow">Document provisoire</p>
        <h1 className="section-title">Mentions légales</h1>
        <p className="lead">
          Ces mentions légales sont un modèle provisoire. Les informations officielles de l'éditeur, de l'hébergeur et
          du responsable de publication seront ajoutées ensuite.
        </p>

        <section className="legal-content panel">
          <h2>Éditeur du site</h2>
          <p>
            Nom ou raison sociale : à compléter. Adresse : à compléter. Email de contact : à compléter. Numéro
            d'identification : à compléter.
          </p>

          <h2>Responsable de publication</h2>
          <p>Responsable de publication : à compléter.</p>

          <h2>Hébergement</h2>
          <p>Hébergeur : à compléter. Adresse de l'hébergeur : à compléter. Contact : à compléter.</p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, images, vidéos, éléments graphiques et contenus du site sont protégés. Toute reproduction ou
            diffusion non autorisée est interdite.
          </p>

          <h2>Contact</h2>
          <p>Pour toute demande relative au site ou à ses contenus, l'utilisateur peut contacter l'éditeur à l'adresse qui sera indiquée ici.</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
