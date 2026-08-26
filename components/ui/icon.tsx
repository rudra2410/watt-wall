import {
  ArrowRight,
  Blinds,
  Check,
  ChevronDown,
  Grid2X2Check,
  Mail,
  Menu,
  PaintRoller,
  PlugZap,
  Plus,
  RectangleHorizontal,
  Sofa,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type IconName =
  | "arrow-right"
  | "bolt"
  | "check"
  | "chevron-down"
  | "close"
  | "grid"
  | "furniture"
  | "rug"
  | "curtain"
  | "mail"
  | "menu"
  | "paint-roller"
  | "plug"
  | "plus";

type IconProps = {
  name: IconName;
  className?: string;
};

const icons: Record<IconName, LucideIcon> = {
  "arrow-right": ArrowRight,
  bolt: Zap,
  check: Check,
  "chevron-down": ChevronDown,
  close: X,
  grid: Grid2X2Check,
  furniture: Sofa,
  rug: RectangleHorizontal,
  curtain: Blinds,
  mail: Mail,
  menu: Menu,
  "paint-roller": PaintRoller,
  plug: PlugZap,
  plus: Plus,
};

export function Icon({ name, className }: IconProps) {
  const IconComponent = icons[name];

  return (
    <IconComponent
      aria-hidden="true"
      className={cn("size-5 shrink-0", className)}
      focusable="false"
      strokeWidth={1.8}
    />
  );
}
