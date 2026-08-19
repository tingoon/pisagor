import { appShellInlineVariants } from "@pisagor/styles/ui/app-shell";
import { cn } from "@pisagor/utils";
import type { ReactNode } from "react";
import { Button, type ButtonProps } from "../button";
import { Swap } from "../swap";
import type { AppShellPlacement } from "./context";

export function AppShellSideTrigger({
  "aria-label": ariaLabel,
  className,
  children,
  dataPart,
  defaultOff,
  defaultOn,
  onClick,
  open,
  placement,
  toggle,
  on: onContent,
  off: offContent,
  ...rest
}: {
  "aria-label"?: string;
  children?: ReactNode;
  dataPart: string;
  defaultOff: ReactNode;
  defaultOn: ReactNode;
  onClick?: ButtonProps["onClick"];
  open: boolean;
  placement: AppShellPlacement;
  toggle: () => void;
  on?: ReactNode;
  off?: ReactNode;
} & Omit<ButtonProps, "aria-label" | "children" | "onClick">) {
  const resolvedOff = offContent ?? defaultOff;
  const resolvedOn = onContent ?? defaultOn;

  return (
    <Button
      {...rest}
      aria-label={ariaLabel ?? `Toggle ${placement} region`}
      aria-pressed={open}
      className={cn(appShellInlineVariants(), className)}
      data-part={dataPart}
      data-placement={placement}
      data-scope="app-shell"
      data-state={open ? "open" : "closed"}
      onClick={(event) => {
        onClick?.(event);
        toggle();
      }}
      size="icon-md"
      variant="ghost"
    >
      {children ?? <Swap off={resolvedOff} on={resolvedOn} swap={open} />}
    </Button>
  );
}
