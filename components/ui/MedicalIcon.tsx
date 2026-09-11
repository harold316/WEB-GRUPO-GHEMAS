import {
  Activity,
  Bone,
  CircleDot,
  Droplets,
  FlaskConical,
  HeartPulse,
  Layers,
  Microscope,
  Scan,
  Shield,
  TrendingDown,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types";

const icons: Record<IconName, LucideIcon> = {
  droplets: Droplets,
  activity: Activity,
  shield: Shield,
  circleDot: CircleDot,
  trendingUp: TrendingUp,
  trendingDown: TrendingDown,
  layers: Layers,
  microscope: Microscope,
  heartPulse: HeartPulse,
  scan: Scan,
  bone: Bone,
  flaskConical: FlaskConical,
};

export function MedicalIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
