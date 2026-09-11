"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, type ThemeMode } from "@/lib/theme";

function currentTheme(): ThemeMode {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTheme(currentTheme());
    setReady(true);
  }, []);

  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  const isDark = ready ? theme === "dark" : false;

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition hover:border-brand/40 hover:bg-mint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      aria-label={isDark ? "Activar modo claro" : "Activar modo nocturno"}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
