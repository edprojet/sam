import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { modules } from "@/lib/mock-data";

type Module = (typeof modules)[number];

export function ModuleCard({
  module,
  compact = false,
  showLink = true,
}: {
  module: Module;
  compact?: boolean;
  showLink?: boolean;
}) {
  const Icon = module.icon;

  return (
    <article className={compact ? "module-card compact" : "module-card"}>
      <div className="module-icon">
        <Icon size={24} />
      </div>
      <div>
        <p className="module-duration">{module.duration}</p>
        <h3>{module.title}</h3>
        <p>{module.description}</p>
      </div>
      <div className="progress-track" aria-label={`Progression ${module.progress}%`}>
        <span style={{ width: `${module.progress}%` }} />
      </div>
      {showLink ? (
        <Link href="/programme" className="module-link">
          Voir le module <ArrowUpRight size={16} />
        </Link>
      ) : null}
    </article>
  );
}
