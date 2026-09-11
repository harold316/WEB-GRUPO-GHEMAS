import Image from "next/image";
import { classNames } from "@/lib/utils";

export function BrandLogo({
  className,
  height = 44,
  priority = false,
}: {
  className?: string;
  height?: number;
  priority?: boolean;
}) {
  const width = Math.round(height * (320 / 140));

  return (
    <Image
      src="/images/logo-ghemas.jpg"
      alt="Ghemas, grupo de hematología"
      width={width}
      height={height}
      priority={priority}
      className={classNames("h-auto w-auto object-contain", className)}
    />
  );
}
