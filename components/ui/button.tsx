import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold whitespace-nowrap transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        primary: "bg-primary-strong text-primary-foreground shadow-xs hover:bg-primary-strong-hover",
        secondary: "border border-border bg-secondary text-secondary-foreground shadow-xs hover:bg-accent",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "min-h-11 px-5",
        small: "min-h-10 px-4",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} type={type ?? "button"} {...props} />;
}
