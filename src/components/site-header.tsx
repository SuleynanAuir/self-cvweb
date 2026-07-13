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
    <header className="sticky top-0 z-50 border-b border-border/45 bg-background/42 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-2xl">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-surface/38 shadow-material-sm ring-1 ring-border/45 backdrop-blur-xl">
            <span className="brand-mark grid h-7 w-7 place-items-center rounded-xl bg-[linear-gradient(135deg,#d08a2f,#687d45,#3f8f8a)] text-xs font-semibold text-white">
              AI
            </span>
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-normal text-foreground">AI Research Lab</span>
            <span className="block text-xs text-muted-foreground">Agents, Knowledge, AI for Science</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/45 bg-surface/38 p-1 shadow-material-sm backdrop-blur-2xl lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "focus-ring rounded-full px-4 py-2 text-sm font-medium transition",
                pathname === item.href
                  ? "bg-accent-soft/64 text-accent shadow-sm backdrop-blur-xl"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden h-10 items-center gap-2 rounded-full border border-border/45 bg-surface/36 px-3 text-xs font-medium text-muted-foreground shadow-material-sm backdrop-blur-xl md:inline-flex">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Research Agent
          </div>
          <Link
            href="https://github.com/SuleynanAuir"
            target="_blank"
            rel="noreferrer"
            className="focus-ring hidden h-10 w-10 items-center justify-center rounded-full border border-border/45 bg-surface/36 text-muted-foreground shadow-material-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent hover:text-foreground sm:inline-flex"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/45 bg-surface/36 text-muted-foreground shadow-material-sm backdrop-blur-xl transition hover:border-accent hover:text-foreground lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border/45 bg-background/52 shadow-material-sm backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-6 py-4" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-2xl px-4 py-3 text-sm font-medium transition",
                  pathname === item.href ? "bg-accent-soft/64 text-accent" : "text-muted-foreground hover:bg-muted hover:text-foreground",
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
