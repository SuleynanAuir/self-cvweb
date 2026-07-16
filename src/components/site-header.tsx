"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Languages, Menu, Sparkles, X } from "lucide-react";
import { ResearchVisionHeaderRail } from "@/components/research-vision-sidebar";
import { getLanguageHref, getLocaleFromPathname, headerCopy } from "@/data/site-copy";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = headerCopy[locale];
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [deepScrolled, setDeepScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    let frameId = 0;

    const updateHeaderState = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 16);
      setDeepScrolled(scrollY > 260);
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateHeaderState();
      });
    };

    updateHeaderState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/30 backdrop-blur-2xl",
        scrolled ? "site-header-scrolled" : "site-header-top",
        deepScrolled ? "site-header-deep" : "",
      )}
    >
      <div className="site-header-inner mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href={copy.nav[0].href} className="focus-ring flex items-center gap-3 rounded-2xl">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-surface/25 shadow-sm ring-1 ring-white/10 backdrop-blur-xl">
            <img
              src="/assets/web_page/logo.png"
              alt="AI Systems Research Laboratory logo"
              className="brand-mark h-8 w-8 rounded-xl object-cover"
            />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-normal text-foreground">{copy.brandTitle}</span>
            <span className="block text-xs text-muted-foreground">{copy.brandSubtitle}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <ResearchVisionHeaderRail />
          <nav className="site-header-nav flex items-center gap-1 rounded-full border border-white/10 bg-surface/25 p-1 shadow-sm backdrop-blur-2xl" aria-label="Primary navigation">
            {copy.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-sm font-medium transition",
                  pathname === item.href
                    ? "bg-accent-soft/60 text-accent shadow-sm backdrop-blur-xl"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-header-actions flex items-center gap-2">
          <div className="site-header-control hidden h-10 items-center gap-2 rounded-full border border-white/10 bg-surface/25 px-3 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-xl md:inline-flex">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {copy.agent}
          </div>
          <Link
            href={getLanguageHref(pathname)}
            className="site-header-control focus-ring inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-surface/25 px-3 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-surface/40 hover:text-accent"
            aria-label="Switch language"
          >
            <Languages className="h-3.5 w-3.5 text-accent" />
            {copy.switchLabel}
          </Link>
          <Link
            href="https://github.com/SuleynanAuir"
            target="_blank"
            rel="noreferrer"
            className="site-header-control focus-ring hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface/25 text-muted-foreground shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-surface/40 hover:text-foreground sm:inline-flex"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="site-header-control focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface/25 text-muted-foreground shadow-sm backdrop-blur-xl transition hover:bg-surface/40 hover:text-foreground lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-background/50 shadow-sm backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-6 py-4" aria-label="Mobile navigation">
            {copy.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-2xl px-4 py-3 text-sm font-medium transition",
                  pathname === item.href ? "bg-accent-soft/60 text-accent" : "text-muted-foreground hover:bg-muted hover:text-foreground",
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
