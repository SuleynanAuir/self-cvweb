"use client";

import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { getLocaleFromPathname, homeCopy } from "@/data/site-copy";

export function ResearchVisionHeaderRail() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = homeCopy[locale];

  if (pathname !== "/" && pathname !== "/asrl_agent_ml_dl_cv_nlp" && pathname !== "/zh/asrl_agent_ml_dl_cv_nlp") {
    return null;
  }

  return (
    <div className="research-vision-header-rail hidden items-center rounded-full px-3 py-1.5 xl:flex">
      <nav aria-label={copy.visionEyebrow}>
        <ol className="research-vision-rail research-vision-rail-horizontal relative flex items-center gap-2.5">
          {copy.visionCards.map((item, index) => {
            const indexLabel = String(index + 1).padStart(2, "0");

            return (
              <li key={item.title} className="research-vision-step research-vision-step-horizontal relative">
                <a
                  href="#research-vision"
                  className="research-vision-trigger research-vision-trigger-compact focus-ring group flex items-center gap-2 rounded-full px-2 py-1.5 text-left"
                  aria-describedby={`research-vision-detail-${indexLabel}`}
                >
                  <span className="research-vision-dot inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-accent">
                      {indexLabel}
                    </span>
                    <span className="sr-only">
                      {item.title}
                    </span>
                  </span>
                </a>

                <div id={`research-vision-detail-${indexLabel}`} className="research-vision-detail">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{indexLabel}</div>
                  <h3 className="mt-2 text-lg font-semibold tracking-normal text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
