"use client";

import { Children, cloneElement, isValidElement, useEffect, useId, useRef, useState, type ComponentPropsWithoutRef, type KeyboardEvent, type ReactElement, type ReactNode } from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type OptionProps = { children?: ReactNode; value: string; disabled?: boolean; className?: string; onClick?: () => void; role?: string; "aria-selected"?: boolean };
type SelectProps = Omit<ComponentPropsWithoutRef<"button">, "children" | "onClick" | "onKeyDown"> & { children: ReactNode; name?: string; onValueChange?: (value: string) => void; value?: string };

export function Select({ children, className, disabled, id, name, onValueChange, value = "", ...props }: SelectProps) {
  const selectId = id ?? useId();
  const listboxId = `${selectId}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const options = Children.toArray(children).filter(isValidElement) as ReactElement<OptionProps>[];
  const selectedOption = options.find((option) => option.props.value === value);
  const selectedIndex = options.findIndex((option) => option.props.value === value);

  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, []);

  function chooseOption(nextValue: string) {
    onValueChange?.(nextValue);
    setOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (disabled) return;
    if (event.key === "Escape") { event.preventDefault(); setOpen(false); return; }
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setOpen((current) => !current); return; }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextOption = options[Math.min(Math.max(selectedIndex + direction, 0), options.length - 1)];
    if (nextOption && !nextOption.props.disabled) chooseOption(nextOption.props.value);
  }

  return (
    <div className="relative" ref={rootRef}>
      <input name={name} type="hidden" value={value} />
      <button
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn("min-h-11 w-full rounded-lg border border-input bg-background px-3 py-2 pr-10 text-left text-base text-foreground shadow-xs outline-none transition-colors duration-150 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/35 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm", className)}
        disabled={disabled}
        id={selectId}
        type="button"
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {selectedOption?.props.children ?? "Select an option"}
        <Icon className={cn("pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground transition-transform duration-150", open && "rotate-180")} name="chevron-down" />
      </button>
      {open ? (
        <div aria-labelledby={selectId} className="absolute inset-x-0 top-[calc(100%+0.35rem)] z-50 grid max-h-60 gap-1 overflow-auto rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg" id={listboxId} role="listbox">
          {options.map((option) => {
            const optionValue = option.props.value;
            const isSelected = optionValue === value;
            return cloneElement(option, {
              className: cn("flex min-h-10 w-full cursor-pointer items-center rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent hover:text-accent-foreground", isSelected && "bg-secondary font-semibold text-secondary-foreground", option.props.disabled && "pointer-events-none opacity-50", option.props.className),
              role: "option",
              "aria-selected": isSelected,
              onClick: () => !option.props.disabled && chooseOption(optionValue),
            });
          })}
        </div>
      ) : null}
    </div>
  );
}
