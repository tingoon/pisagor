import type { ReactNode } from "react";
import { Button, type ButtonProps } from "../button";
import { Swap } from "../swap";
import type { AppShellPlacement } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";

export function AppShellSideTrigger({
  placement,
  defaultOff,
  defaultOn,
  open,
  "aria-label": ariaLabel,
  children,
  off: offContent,
  on: onContent,
  toggle,
  onClick,
  className,
  ...rest
}: {
  "aria-label"?: string;
  children?: ReactNode;
  defaultOff: ReactNode;
  defaultOn: ReactNode;
  onClick?: ButtonProps["onClick"];
  open: boolean;
  placement: AppShellPlacement;
  toggle: () => void;
  on?: ReactNode;
  off?: ReactNode;
} & Omit<ButtonProps, "aria-label" | "children" | "onClick">) {
  const { slots } = useAppShell();
  const resolvedOff = offContent ?? defaultOff;
  const resolvedOn = onContent ?? defaultOn;

  return (
    <Button
      {...rest}
      aria-label={ariaLabel ?? `Toggle ${placement} region`}
      aria-pressed={open}
      className={slots.inline({ className })}
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
