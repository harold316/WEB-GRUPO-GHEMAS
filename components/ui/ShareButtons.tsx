"use client";

import { Link2, MessageCircle, Share2 } from "lucide-react";
import { FacebookIcon } from "@/components/ui/SocialIcons";
import { getWhatsAppUrl, getShareMessage } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export function ShareButtons({ title, path }: { title: string; path: string }) {
  const url = `${siteConfig.url}${path}`;
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt("Copiá el enlace:", url);
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={getWhatsAppUrl(getShareMessage(title, url))}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-white"
        aria-label="Compartir por WhatsApp"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-ink"
        aria-label="Compartir en Facebook"
      >
        <FacebookIcon className="h-4 w-4" />
        Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-ink"
        aria-label="Compartir en X"
      >
        <Share2 className="h-4 w-4" />
        X
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-semibold text-ink"
        aria-label="Copiar enlace"
      >
        <Link2 className="h-4 w-4" />
        Copiar enlace
      </button>
    </div>
  );
}
