"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { classNames } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/80 bg-surface/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex min-h-12 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <span className="rounded-md bg-white p-1 shadow-sm ring-1 ring-line">
            <BrandLogo priority height={42} className="h-10 sm:h-11" />
          </span>
          <span className="hidden leading-tight min-[400px]:block">
            <span className="block text-sm font-semibold text-ink">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-ink-muted">Consultorio</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 2xl:flex"
          aria-label="Principal"
        >
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "rounded-full px-2.5 py-2 text-[11px] font-semibold uppercase tracking-wide transition",
                  active
                    ? "bg-mint text-brand-dark"
                    : "text-ink-muted hover:bg-mint/70 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <span className="hidden sm:inline-flex">
            <WhatsAppButton label="Solicitar turno" className="min-h-11 px-4 text-xs" />
          </span>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink 2xl:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-movil"
          className="border-t border-line bg-surface px-4 py-4 2xl:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Móvil">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-medium text-ink hover:bg-mint"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 sm:hidden">
            <WhatsAppButton className="w-full" label="Solicitar turno" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
