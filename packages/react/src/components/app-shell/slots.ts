import { Children, isValidElement, type ReactNode } from "react";
import type { AppShellPlacement } from "./app-shell.context";

export interface AppShellSlots {
  banner: ReactNode;
  inspectors: Record<AppShellPlacement, ReactNode>;
  main: ReactNode;
  navigation: ReactNode;
  panels: Record<AppShellPlacement, ReactNode>;
  rails: Record<AppShellPlacement, ReactNode>;
}

function getDisplayName(type: unknown): string | undefined {
  if (typeof type === "function" || (typeof type === "object" && type !== null)) {
    return (type as { displayName?: string }).displayName;
  }

  return undefined;
}

export function partitionAppShellChildren(children: ReactNode): AppShellSlots {
  const slots: AppShellSlots = {
    banner: null,
    inspectors: { end: null, start: null },
    main: null,
    navigation: null,
    panels: { end: null, start: null },
    rails: { end: null, start: null },
  };

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      return;
    }

    const name = getDisplayName(child.type);
    const props = child.props as { placement?: AppShellPlacement };
    const placement = props.placement ?? "start";

    switch (name) {
      case "AppShell.Banner":
        slots.banner = child;
        break;
      case "AppShell.Inspector":
        slots.inspectors[placement] = child;
        break;
      case "AppShell.Main":
        slots.main = child;
        break;
      case "AppShell.Navigation":
        slots.navigation = child;
        break;
      case "AppShell.Panel":
        slots.panels[placement] = child;
        break;
      case "AppShell.Rail":
        slots.rails[placement] = child;
        break;
      default:
        break;
    }
  });

  return slots;
}
