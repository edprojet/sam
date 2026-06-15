import Link from "next/link";
import { ArrowRight, Download, FileText, NotebookTabs } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { resources } from "@/lib/mock-data";

export default function ResourcesPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="container page-top">
        <p className="eyebrow">
          <NotebookTabs size={16} /> Ressources
        </p>
        <div className="program-hero">
          <div>
            <h1 className="section-title">Les supports qui rendent le programme actionnable.</h1>
            <p className="lead">
              Des guides, check-lists et templates simples pour appliquer les conseils sans te compliquer la vie.
            </p>
          </div>
          <Link href="/programme" className="btn btn-dark">
            Voir dans l’espace membre <ArrowRight size={18} />
          </Link>
        </div>
        <div className="resources-grid">
          {resources.map((resource) => (
            <article key={resource.title} className="resource-card panel">
              <FileText size={28} />
              <span>{resource.type}</span>
              <h2>{resource.title}</h2>
              <p>{resource.detail}</p>
              <button className="btn btn-soft">
                <Download size={17} /> Télécharger
              </button>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
