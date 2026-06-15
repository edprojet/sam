import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PrivacyPolicyPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container page-top legal-page">
        <p className="eyebrow">Document provisoire</p>
        <h1 className="section-title">Politique de confidentialité</h1>
        <p className="lead">
          Cette politique de confidentialité est un modèle provisoire. Elle sera remplacée par les informations légales
          définitives du site.
        </p>

        <section className="legal-content panel">
          <h2>Données collectées</h2>
          <p>
            Le site peut collecter les informations fournies volontairement via les formulaires, comme le nom, l'adresse
            email, les informations de connexion et les messages transmis.
          </p>

          <h2>Utilisation des données</h2>
          <p>
            Les données sont utilisées pour gérer l'accès au programme, répondre aux demandes, envoyer les informations
            liées au service et améliorer l'expérience utilisateur.
          </p>

          <h2>Conservation</h2>
          <p>
            Les données sont conservées pendant la durée nécessaire à la fourniture du service, puis supprimées ou
            archivées selon les obligations applicables.
          </p>

          <h2>Droits des utilisateurs</h2>
          <p>
            Chaque utilisateur peut demander l'accès, la rectification ou la suppression de ses données personnelles en
            contactant l'éditeur du site.
          </p>

          <h2>Cookies</h2>
          <p>
            Le site peut utiliser des cookies nécessaires au fonctionnement, à la mesure d'audience ou à l'amélioration
            du service. Les préférences pourront être précisées dans la version finale.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
