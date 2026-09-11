import { Microscope } from "lucide-react";
import { classNames } from "@/lib/utils";

const palettes = [
  "from-[#d7f3ea] to-[#b7e4d8] dark:from-[#1a3a33] dark:to-[#10241f]",
  "from-[#d9eef2] to-[#c5e4e8] dark:from-[#17353a] dark:to-[#102428]",
  "from-[#e7f4e2] to-[#cfe8c8] dark:from-[#243a1f] dark:to-[#162414]",
  "from-[#eaf3f1] to-[#cde6df] dark:from-[#1c3530] dark:to-[#122420]",
];

function seedIndex(seed: string) {
  return seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % palettes.length;
}

export function PlaceholderImage({
  label,
  seed = "hematologia",
  className,
}: {
  label: string;
  seed?: string;
  className?: string;
}) {
  return (
    <div
      className={classNames(
        "relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br",
        palettes[seedIndex(seed)],
        className,
      )}
      role="img"
      aria-label={`Imagen de ejemplo: ${label}`}
    >
      <span className="absolute inset-8 rounded-full border border-brand/15" />
      <Microscope className="relative h-14 w-14 text-brand/55" aria-hidden="true" />
      <span className="absolute bottom-3 left-3 rounded-full bg-surface/90 px-3 py-1 text-[11px] font-medium text-ink-muted shadow-card">
        Imagen de ejemplo: {label}
      </span>
    </div>
  );
}
