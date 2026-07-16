"use client";

import { usePathname } from "next/navigation";
import { ListTree } from "lucide-react";
import { researchProjectLinks } from "@/lib/research-project-index";

function dispatchProjectJump(projectId: string) {
  window.dispatchEvent(new CustomEvent("research-project-jump", { detail: { id: projectId } }));
}

export function ProjectJumpSidebar() {
  const pathname = usePathname();

  if (pathname !== "/" && pathname !== "/asrl_agent_ml_dl_cv_nlp") {
    return null;
  }

  return (
    <aside className="project-jump-sidebar fixed right-4 top-1/2 z-40 hidden max-h-[72vh] w-[7.6rem] -translate-y-1/2 flex-col overflow-hidden rounded-3xl px-2.5 py-3 xl:flex">
      <div className="flex items-center gap-2 px-2 pb-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-accent">
        <ListTree className="h-3.5 w-3.5" />
        Projects
      </div>
      <nav className="project-jump-list grid gap-1 overflow-y-auto pr-1" aria-label="Project directory">
        {researchProjectLinks.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={`${item.projectName} - ${item.categoryTitle}`}
            onClick={() => dispatchProjectJump(item.id)}
            className="project-jump-link focus-ring rounded-2xl px-2.5 py-2 text-[0.72rem] font-semibold leading-tight"
          >
            {item.shortName}
          </a>
        ))}
      </nav>
    </aside>
  );
}
