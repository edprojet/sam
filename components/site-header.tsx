"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { brand, navLinks } from "@/lib/mock-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="brand-mark" aria-label="Retour accueil">
        <span>S</span>
        <strong>{brand.name}</strong>
      </Link>
      <nav className="desktop-nav" aria-label="Navigation principale">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link href="/#offre" className="btn btn-dark header-cta">
          <Sparkles size={18} />
          Rejoindre le programme
        </Link>
        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open ? (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/#offre" className="btn btn-primary" onClick={() => setOpen(false)}>
            Rejoindre le programme
          </Link>
        </div>
      ) : null}
    </header>
  );
}
