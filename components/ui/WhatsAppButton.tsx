import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { classNames } from "@/lib/utils";

type Props = {
  label?: string;
  message?: string;
  className?: string;
  variant?: "whatsapp" | "primary" | "secondary" | "inverse";
};

export function WhatsAppButton({
  label = "Solicitar turno por WhatsApp",
  message,
  className,
  variant = "whatsapp",
}: Props) {
  return (
    <Button
      href={getWhatsAppUrl(message)}
      external
      variant={variant}
      className={classNames("uppercase", className)}
      aria-label={label}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {label}
    </Button>
  );
}
