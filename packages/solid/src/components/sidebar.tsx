import { ark, type HTMLArkProps } from "@ark-ui/solid";
import type { SidebarRootContract } from "@pisagor/contracts";
import {
  type ButtonVariantProps,
  buttonRecipe,
  type SidebarRecipe,
  sheetRecipe,
  sidebarRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Accessor, JSX } from "solid-js";
import { Portal } from "solid-js/web";
import {
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  Show,
  splitProps,
} from "solid-js";
import { useIsMobile } from "../hooks";
import { XIcon, createSlotRecipeContext } from "../internal";
import { createContext } from "../utils";
import { Button, type ButtonProps } from "./button";
import { Input, type InputProps } from "./input";
import { useLocale } from "./provider/context";
import { ScrollArea } from "./scroll-area";
import { Separator, type SeparatorProps } from "./separator";
import { Sheet } from "./sheet";
import { Skeleton } from "./skeleton";
import { Tooltip, type TooltipProps } from "./tooltip";

// #region Context
const {
  Context: SidebarStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({
  name: "Sidebar",
  recipe: sidebarRecipe,
});

/** Open/collapse state shared by sidebar parts (not styles). */
interface SidebarState {
  readonly isMobile: Accessor<boolean>;
  readonly open: Accessor<boolean>;
  readonly openMobile: Accessor<boolean>;
  readonly setOpen: (open: boolean) => void;
  readonly setOpenMobile: (open: boolean) => void;
  readonly state: Accessor<"expanded" | "collapsed">;
  readonly toggleSidebar: () => void;
}

const { SidebarStateContext, useSidebarState } =
  createContext("SidebarState")<SidebarState>();

export interface SidebarContextProps extends SidebarState {
  /** Slot class recipes from `sidebarRecipe`. */
  readonly slots: SidebarRecipe;
}

/** Returns the nearest sidebar styles + state (`slots` stays reactive). */
export function useSidebar(): SidebarContextProps {
  const styles = useStyles();
  const state = useSidebarState();

  return {
    ...state,
    get slots() {
      return styles.slots;
    },
  };
}

// #endregion

export interface SidebarProviderProps
  extends HTMLArkProps<"div">, Pick<SidebarRootContract, "recipe"> {
  /**
   * Initial open state. A stored value in `localStorage` (`sidebar_state`) wins
   * after mount.
   */
  defaultOpen?: boolean;
  /**
   * Whether to disable the `mod+B` toggle hotkey.
   *
   * @defaultValue false
   */
  disableHotkey?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface SidebarProps extends HTMLArkProps<"div"> {
  placement?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
  class?: string;
  children?: JSX.Element;
}

export interface SidebarContentProps extends HTMLArkProps<"div"> {
  scrollFade?: boolean;
}

export interface SidebarMenuButtonProps extends ButtonProps {
  isActive?: boolean;
  tooltip?: string | Omit<TooltipProps, "children">;
}

export interface SidebarMenuActionProps extends HTMLArkProps<"button"> {
  showOnHover?: boolean;
  buttonRecipe?: typeof buttonRecipe;
}

export interface SidebarMenuSkeletonProps extends HTMLArkProps<"div"> {
  showIcon?: boolean;
}

export interface SidebarMenuSubButtonProps
  extends HTMLArkProps<"a">, ButtonVariantProps {
  isActive?: boolean;
  buttonRecipe?: typeof buttonRecipe;
}

export type SidebarRailProps = HTMLArkProps<"button">;
export type SidebarInsetProps = HTMLArkProps<"main">;
export type SidebarHeaderProps = HTMLArkProps<"div">;
export type SidebarFooterProps = HTMLArkProps<"div">;
export type SidebarGroupProps = HTMLArkProps<"div">;
export type SidebarGroupLabelProps = HTMLArkProps<"div">;

export interface SidebarGroupActionProps extends HTMLArkProps<"button"> {
  buttonRecipe?: typeof buttonRecipe;
}

export type SidebarGroupContentProps = HTMLArkProps<"div">;
export type SidebarMenuProps = HTMLArkProps<"ul">;
export type SidebarMenuItemProps = HTMLArkProps<"li">;
export type SidebarMenuBadgeProps = HTMLArkProps<"div">;
export type SidebarMenuSubProps = HTMLArkProps<"ul">;
export type SidebarMenuSubItemProps = HTMLArkProps<"li">;

const SIDEBAR_STORAGE_KEY = "sidebar_state";
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";

export function SidebarProvider(props: SidebarProviderProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "defaultOpen",
    "disableHotkey",
    "open",
    "onOpenChange",
    "recipe",
    "class",
    "style",
    "children",
  ]);

  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = createSignal(false);
  const [uncontrolledOpen, setUncontrolledOpen] = createSignal(
    local.defaultOpen ?? true,
  );

  const open = createMemo(() =>
    local.open !== undefined ? !!local.open : uncontrolledOpen(),
  );

  const setOpen = (value: boolean) => {
    if (local.open === undefined) {
      setUncontrolledOpen(value);
    }
    local.onOpenChange?.(value);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(SIDEBAR_STORAGE_KEY, String(value));
    }
  };

  onMount(() => {
    if (local.open !== undefined || typeof localStorage === "undefined") {
      return;
    }
    const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (stored === "true" || stored === "false") {
      setUncontrolledOpen(stored === "true");
    }
  });

  const toggleSidebar = () => {
    if (isMobile()) {
      setOpenMobile((v) => !v);
    } else {
      setOpen(!open());
    }
  };

  createEffect(() => {
    if (local.disableHotkey) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "b") {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    onCleanup(() => window.removeEventListener("keydown", onKeyDown));
  });

  const state = createMemo<"expanded" | "collapsed">(() =>
    open() ? "expanded" : "collapsed",
  );
  const stateValue: SidebarState = {
    isMobile,
    open,
    openMobile,
    setOpen,
    setOpenMobile,
    state,
    toggleSidebar,
  };

  const style = () => {
    const base: Record<string, string> = {
      "--sidebar-width": SIDEBAR_WIDTH,
      "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
    };
    const s = local.style;
    if (s && typeof s === "object" && !Array.isArray(s)) {
      return { ...base, ...(s as Record<string, string>) };
    }

    return base;
  };

  const slots = createMemo(() => (local.recipe ?? sidebarRecipe)());

  return (
    <SidebarStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <SidebarStateContext value={stateValue}>
        <div
          {...rest}
          class={slots().wrapper({ class: local.class })}
          data-part="wrapper"
          data-scope="sidebar"
          style={style()}
        >
          {local.children}
        </div>
      </SidebarStateContext>
    </SidebarStylesContext>
  );
}

export function SidebarRoot(props: SidebarProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "collapsible",
    "placement",
    "variant",
    "class",
    "children",
  ]);
  const styles = useStyles();
  const { isMobile, openMobile, setOpenMobile, state } = useSidebarState();
  const collapsible = () => local.collapsible ?? "offcanvas";
  const placement = () => local.placement ?? "left";
  const variant = () => local.variant ?? "sidebar";
  const padded = () => variant() === "floating" || variant() === "inset";

  return (
    <Show
      fallback={
        <Show
          fallback={
            <div
              {...rest}
              class={styles.slots.peer({ class: local.class })}
              data-collapsible={state() === "collapsed" ? collapsible() : ""}
              data-part="root"
              data-placement={placement()}
              data-scope="sidebar"
              data-state={state()}
              data-variant={variant()}
            >
              <div
                class={styles.slots.gap({
                  padded: padded(),
                  placement: placement(),
                })}
                data-part="gap"
                data-scope="sidebar"
              />
              <div
                class={styles.slots.container({
                  class: local.class,
                  padded: padded(),
                  placement: placement(),
                })}
                data-part="container"
                data-scope="sidebar"
              >
                <div
                  class={styles.slots.inner()}
                  data-part="inner"
                  data-scope="sidebar"
                  data-sidebar="sidebar"
                >
                  {local.children}
                </div>
              </div>
            </div>
          }
          when={isMobile()}
        >
          <Sheet.Root
            onOpenChange={(details) => setOpenMobile(details.open)}
            open={openMobile()}
            placement={placement() === "left" ? "left" : "right"}
          >
            <Portal>
              <Sheet.Backdrop />

              <Sheet.Positioner>
                <Sheet.Content
                  {...rest}
                  class={styles.slots.mobile()}
                  data-mobile="true"
                  data-sidebar="sidebar"
                  style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}
                >
                  <Sheet.Header class={styles.slots.mobileHeader()}>
                    <Sheet.Title>{m("sidebar.title")}</Sheet.Title>
                    <Sheet.Description>
                      {m("sidebar.description")}
                    </Sheet.Description>
                  </Sheet.Header>
                  <div class={styles.slots.mobileBody()}>{local.children}</div>
                  <Sheet.CloseTrigger
                    asChild={(triggerProps) => (
                      <Button
                        {...triggerProps()}
                        aria-label={m("sheet.close")}
                        class={sheetRecipe().inline()}
                        size="icon-sm"
                        variant="ghost"
                      >
                        <XIcon />
                      </Button>
                    )}
                  />
                </Sheet.Content>
              </Sheet.Positioner>
            </Portal>
          </Sheet.Root>
        </Show>
      }
      when={collapsible() === "none"}
    >
      <div
        {...rest}
        class={styles.slots.base({ class: local.class })}
        data-part="root"
        data-scope="sidebar"
      >
        {local.children}
      </div>
    </Show>
  );
}

/**
 * Toggles the sidebar; localized default `aria-label`. Pass your own icon as
 * children.
 */
export function SidebarTrigger(props: ButtonProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["onClick", "class"]);
  const styles = useStyles();
  const { toggleSidebar } = useSidebarState();

  return (
    <Button
      aria-label={m("sidebar.toggle")}
      size="icon-md"
      variant="ghost"
      {...rest}
      class={styles.slots.trigger({ class: local.class })}
      data-part="trigger"
      data-scope="sidebar"
      data-sidebar="trigger"
      onClick={(event) => {
        if (typeof local.onClick === "function") local.onClick(event);
        toggleSidebar();
      }}
    />
  );
}

export function SidebarRail(props: SidebarRailProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();
  const { toggleSidebar } = useSidebarState();

  return (
    <ark.button
      aria-label={m("sidebar.toggle")}
      {...rest}
      class={styles.slots.rail({ class: local.class })}
      data-part="rail"
      data-scope="sidebar"
      data-sidebar="rail"
      onClick={toggleSidebar}
      tabIndex={-1}
      title={m("sidebar.toggle")}
      type="button"
    />
  );
}

export const SidebarInset = withContext<SidebarInsetProps>(ark.main, {
  name: "Inset",
});

export function SidebarInput(props: InputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "classNames"]);
  const styles = useStyles();

  return (
    <Input
      {...rest}
      class={styles.slots.input({ class: local.class })}
      classNames={local.classNames}
      data-sidebar="input"
    />
  );
}

export const SidebarHeader = withContext<SidebarHeaderProps>(ark.div, {
  defaultProps: { "data-sidebar": "header" },
  name: "Header",
});

export const SidebarFooter = withContext<SidebarFooterProps>(ark.div, {
  defaultProps: { "data-sidebar": "footer" },
  name: "Footer",
});

export function SidebarSeparator(props: SeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <Separator
      {...rest}
      class={styles.slots.separator({ class: local.class })}
      data-part="separator"
      data-scope="sidebar"
      data-sidebar="separator"
    />
  );
}

export function SidebarContent(props: SidebarContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "class"]);
  const styles = useStyles();

  return (
    <ScrollArea
      class={styles.slots.scrollArea()}
      scrollFade={local.scrollFade ?? false}
    >
      <div
        {...rest}
        class={styles.slots.content({ class: local.class })}
        data-part="content"
        data-scope="sidebar"
        data-sidebar="content"
      />
    </ScrollArea>
  );
}

export const SidebarGroup = withContext<SidebarGroupProps>(ark.div, {
  defaultProps: { "data-sidebar": "group" },
  name: "Group",
});

export const SidebarGroupLabel = withContext<SidebarGroupLabelProps>(ark.div, {
  defaultProps: { "data-sidebar": "group-label" },
  name: "GroupLabel",
});

export function SidebarGroupAction(
  props: SidebarGroupActionProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["buttonRecipe", "class"]);
  const styles = useStyles();
  const recipe = () => local.buttonRecipe ?? buttonRecipe;

  return (
    <ark.button
      {...rest}
      class={cn(
        recipe()({
          clickEffect: false,
          size: "icon-xs",
          variant: "ghost",
        }).base(),
        styles.slots.groupAction(),
        local.class,
      )}
      data-part="group-action"
      data-scope="sidebar"
      data-sidebar="group-action"
      type="button"
    />
  );
}

export const SidebarGroupContent = withContext<SidebarGroupContentProps>(
  ark.div,
  {
    defaultProps: { "data-sidebar": "group-content" },
    name: "GroupContent",
  },
);

export const SidebarMenu = withContext<SidebarMenuProps>(ark.ul, {
  defaultProps: { "data-sidebar": "menu" },
  name: "Menu",
});

export const SidebarMenuItem = withContext<SidebarMenuItemProps>(ark.li, {
  defaultProps: { "data-sidebar": "menu-item" },
  name: "MenuItem",
});

export function SidebarMenuButton(props: SidebarMenuButtonProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "isActive",
    "tooltip",
    "class",
    "children",
  ]);
  const styles = useStyles();
  const { isMobile, state } = useSidebarState();
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? "ghost";

  const button = (
    <Button
      {...rest}
      class={styles.slots.menuButton({ class: local.class })}
      clickEffect={false}
      data-active={local.isActive ?? false}
      data-part="menu-button"
      data-scope="sidebar"
      data-sidebar="menu-button"
      data-size={size()}
      size={size()}
      variant={variant()}
    >
      {local.children}
    </Button>
  );

  return (
    <Show fallback={button} when={local.tooltip}>
      {(tip) => {
        const tooltipProps =
          typeof tip() === "string"
            ? ({ content: tip() as string } as Omit<TooltipProps, "children">)
            : (tip() as Omit<TooltipProps, "children">);

        return (
          <Tooltip
            {...tooltipProps}
            contentProps={{
              ...tooltipProps.contentProps,
              hidden: state() !== "collapsed" || isMobile(),
            }}
            positioning={{ placement: "right", ...tooltipProps.positioning }}
          >
            {button}
          </Tooltip>
        );
      }}
    </Show>
  );
}

export function SidebarMenuAction(props: SidebarMenuActionProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "showOnHover",
    "buttonRecipe",
    "class",
  ]);
  const styles = useStyles();
  const recipe = () => local.buttonRecipe ?? buttonRecipe;
  const showOnHover = () => local.showOnHover ?? false;

  return (
    <ark.button
      {...rest}
      class={cn(
        recipe()({
          clickEffect: false,
          size: "icon-xs",
          variant: "ghost",
        }).base(),
        styles.slots.menuAction(),
        !showOnHover() &&
          "peer-data-[active=true]/menu-button:text-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        local.class,
      )}
      data-part="menu-action"
      data-scope="sidebar"
      data-sidebar="menu-action"
      type="button"
    />
  );
}

export const SidebarMenuBadge = withContext<SidebarMenuBadgeProps>(ark.div, {
  defaultProps: { "data-sidebar": "menu-badge" },
  name: "MenuBadge",
});

export function SidebarMenuSkeleton(
  props: SidebarMenuSkeletonProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["showIcon", "class"]);
  const styles = useStyles();

  return (
    <div
      {...rest}
      class={styles.slots.menuSkeleton({ class: local.class })}
      data-part="menu-skeleton"
      data-scope="sidebar"
      data-sidebar="menu-skeleton"
    >
      <Show when={local.showIcon}>
        <Skeleton
          class={styles.slots.menuSkeletonIcon()}
          data-sidebar="menu-skeleton-icon"
        />
      </Show>
      <Skeleton
        class={styles.slots.menuSkeletonText()}
        data-sidebar="menu-skeleton-text"
        style={{ "--skeleton-width": "70%" }}
      />
    </div>
  );
}

export const SidebarMenuSub = withContext<SidebarMenuSubProps>(ark.ul, {
  defaultProps: { "data-sidebar": "menu-sub" },
  name: "MenuSub",
});

export const SidebarMenuSubItem = withContext<SidebarMenuSubItemProps>(ark.li, {
  defaultProps: { "data-sidebar": "menu-sub-item" },
  name: "MenuSubItem",
});

export function SidebarMenuSubButton(
  props: SidebarMenuSubButtonProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "isActive",
    "buttonRecipe",
    "class",
  ]);
  const styles = useStyles();
  const size = () => local.size ?? "md";
  const recipe = () => local.buttonRecipe ?? buttonRecipe;

  return (
    <ark.a
      {...rest}
      class={cn(
        recipe()({ clickEffect: false, size: size(), variant: "ghost" }).base(),
        styles.slots.menuSubButton(),
        local.class,
      )}
      data-active={local.isActive ?? false}
      data-part="menu-sub-button"
      data-scope="sidebar"
      data-sidebar="menu-sub-button"
      data-size={size()}
    />
  );
}

export const Sidebar = Object.assign(SidebarRoot, {
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupAction: SidebarGroupAction,
  GroupContent: SidebarGroupContent,
  GroupLabel: SidebarGroupLabel,
  Header: SidebarHeader,
  Input: SidebarInput,
  Inset: SidebarInset,
  Menu: SidebarMenu,
  MenuAction: SidebarMenuAction,
  MenuBadge: SidebarMenuBadge,
  MenuButton: SidebarMenuButton,
  MenuItem: SidebarMenuItem,
  MenuSkeleton: SidebarMenuSkeleton,
  MenuSub: SidebarMenuSub,
  MenuSubButton: SidebarMenuSubButton,
  MenuSubItem: SidebarMenuSubItem,
  Provider: SidebarProvider,
  Rail: SidebarRail,
  Separator: SidebarSeparator,
  Trigger: SidebarTrigger,
});
