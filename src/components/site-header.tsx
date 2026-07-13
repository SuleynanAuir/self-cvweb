"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, Sparkles, X } from "lucide-react";
import { navigation } from "@/data/research";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/48 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-2xl">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-surface shadow-material-sm ring-1 ring-border">
            <span className="brand-mark grid h-7 w-7 place-items-center rounded-xl bg-[linear-gradient(135deg,#d08a2f,#687d45)] text-xs font-semibold text-white">
              M
            </span>
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-normal text-foreground">Materials AI</span>
            <span className="block text-xs text-muted-foreground">GraphRAG Research Workspace</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-surface/90 p-1 shadow-material-sm lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-medium transition",
                pathname === item.href
                  ? "bg-accent-soft text-accent shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden h-10 items-center gap-2 rounded-full border border-border bg-surface px-3 text-xs font-medium text-muted-foreground shadow-material-sm md:inline-flex">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Live Agent
          </div>
          <Link
            href="https://github.com/SuleynanAuir"
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground shadow-material-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-foreground sm:inline-flex"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground shadow-material-sm transition hover:border-accent hover:text-foreground lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/62 shadow-material-sm backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-6 py-4" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-2xl px-4 py-3 text-sm font-medium transition",
                  pathname === item.href ? "bg-accent-soft text-accent" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
