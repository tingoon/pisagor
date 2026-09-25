import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Button, type ButtonProps } from "../button";
import { Swap } from "../swap";
import type { AppShellPlacement } from "./app-shell.context";
import { useAppShell } from "./app-shell.context";

export function AppShellSideTrigger(
  props: {
    "aria-label"?: string;
    children?: JSX.Element;
    defaultOff: JSX.Element;
    defaultOn: JSX.Element;
    open: boolean;
    placement: AppShellPlacement;
    toggle: () => void;
    on?: JSX.Element;
    off?: JSX.Element;
  } & Omit<ButtonProps, "aria-label" | "children" | "onClick"> & {
      onClick?: ButtonProps["onClick"];
    },
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "aria-label",
    "children",
    "defaultOff",
    "defaultOn",
    "open",
    "placement",
    "toggle",
    "on",
    "off",
    "onClick",
    "class",
  ]);
  const { slots } = useAppShell();
  const resolvedOff = () => local.off ?? local.defaultOff;
  const resolvedOn = () => local.on ?? local.defaultOn;

  return (
    <Button
      {...rest}
      aria-label={local["aria-label"] ?? `Toggle ${local.placement} region`}
      aria-pressed={local.open}
      class={slots.inline({ class: local.class })}
      data-placement={local.placement}
      data-scope="app-shell"
      data-state={local.open ? "open" : "closed"}
      onClick={(event) => {
        if (typeof local.onClick === "function") local.onClick(event);
        local.toggle();
      }}
      size="icon-md"
      variant="ghost"
    >
      {local.children ?? (
        <Swap off={resolvedOff()} on={resolvedOn()} swap={local.open} />
      )}
    </Button>
  );
}
