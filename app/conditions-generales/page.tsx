import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function TermsPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container page-top legal-page">
        <p className="eyebrow">Document provisoire</p>
        <h1 className="section-title">Conditions générales</h1>
        <p className="lead">
          Ces conditions générales sont un modèle provisoire. Elles seront adaptées avec les informations commerciales,
          juridiques et contractuelles définitives.
        </p>

        <section className="legal-content panel">
          <h2>Objet</h2>
          <p>
            Les présentes conditions encadrent l'accès au programme, aux contenus vidéo, aux supports écrits et aux
            ressources proposés sur le site.
          </p>

          <h2>Accès au service</h2>
          <p>
            L'accès est réservé aux utilisateurs ayant validé leur inscription ou leur achat. Les identifiants sont
            personnels et ne doivent pas être partagés.
          </p>

          <h2>Prix et paiement</h2>
          <p>
            Les prix, moyens de paiement, modalités de facturation et éventuelles garanties seront précisés dans la
            version finale des conditions générales.
          </p>

          <h2>Contenus</h2>
          <p>
            Les contenus fournis ont une vocation d'accompagnement et d'information. Ils ne remplacent pas un avis
            médical, nutritionnel ou professionnel personnalisé.
          </p>

          <h2>Responsabilité</h2>
          <p>
            L'utilisateur reste responsable de l'application des conseils et doit adapter le programme à sa situation
            personnelle, à son état de santé et à ses contraintes.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
