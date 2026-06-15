import Link from "next/link";
import { BookOpenCheck, Home, LogOut, NotebookTabs } from "lucide-react";
import { brand } from "@/lib/mock-data";

export function MemberShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="member-page">
      <aside className="member-sidebar">
        <Link href="/" className="brand-mark">
          <span>S</span>
          <strong>{brand.name}</strong>
        </Link>
        <nav aria-label="Navigation espace membre">
          <Link href="/programme">
            <Home size={18} /> Dashboard
          </Link>
          <Link href="/programme">
            <BookOpenCheck size={18} /> Programme
          </Link>
          <Link href="/ressources">
            <NotebookTabs size={18} /> Ressources
          </Link>
        </nav>
        <Link href="/" className="member-logout">
          <LogOut size={17} /> Déconnexion
        </Link>
      </aside>
      <main className="member-main">{children}</main>
    </div>
  );
}
