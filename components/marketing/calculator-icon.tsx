import type { CalculatorIconName } from "@/data/calculators";
import { Icon, type IconName } from "@/components/ui/icon";

type CalculatorIconProps = {
  name: CalculatorIconName;
};

export function CalculatorIcon({ name }: CalculatorIconProps) {
  const iconName: IconName = name === "paint" ? "paint-roller" : name === "tile" ? "grid" : name;

  return <Icon className="size-6" name={iconName} />;
}
