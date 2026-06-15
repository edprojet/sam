import Link from "next/link";
import { Menu } from "lucide-react";
import { brand } from "@/lib/mock-data";
import { programNavItems } from "@/lib/programme-content";

export function ProgramHeader({ currentSlug }: { currentSlug: string }) {
  return (
    <header className="site-header program-header">
      <Link href="/" className="brand-mark" aria-label="Retour accueil">
        <span>S</span>
        <strong>{brand.name}</strong>
      </Link>
      <nav className="desktop-nav" aria-label="Navigation programme">
        {programNavItems.map((link) => (
          <Link key={link.href} href={link.href} className={link.slug === currentSlug ? "active" : undefined}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <details className="mobile-menu">
          <summary className="menu-button" aria-label="Menu">
            <Menu size={22} />
          </summary>
          <div className="mobile-nav">
            {programNavItems.map((link) => (
              <Link key={link.href} href={link.href} className={link.slug === currentSlug ? "active" : undefined}>
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
