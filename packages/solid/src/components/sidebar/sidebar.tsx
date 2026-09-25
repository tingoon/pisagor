import { ark } from "@ark-ui/solid/factory";
import { type ButtonVariantProps, buttonRecipe } from "@pisagor/recipes/button";
import { sidebarRecipe } from "@pisagor/recipes/sidebar";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createEffect, createMemo, createSignal, onCleanup, Show, splitProps } from "solid-js";
import { useIsMobile } from "../../hooks";
import { SidebarSimpleIcon } from "../../internal/icons";
import { Button, type ButtonProps } from "../button";
import { Input, type InputProps } from "../input";
import { ScrollArea } from "../scroll-area";
import { Separator, type SeparatorProps } from "../separator";
import { Sheet, type SheetProps } from "../sheet";
import { Skeleton } from "../skeleton";
import { Tooltip, type TooltipProps } from "../tooltip";
import { SidebarContext, type SidebarContextProps, useSidebar } from "./sidebar.context";

export interface SidebarProviderProps extends ComponentProps<"div"> {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  recipe?: typeof sidebarRecipe;
}

export interface SidebarProps extends Omit<SheetProps, "class" | "children"> {
  placement?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
  class?: string;
  children?: JSX.Element;
}

export interface SidebarContentProps extends ComponentProps<"div"> {
  scrollFade?: boolean;
}

export interface SidebarMenuButtonProps extends ButtonProps {
  isActive?: boolean;
  tooltip?: string | Omit<TooltipProps, "children">;
}

export interface SidebarMenuActionProps extends ComponentProps<typeof ark.button> {
  showOnHover?: boolean;
  buttonRecipe?: typeof buttonRecipe;
}

export interface SidebarMenuSkeletonProps extends ComponentProps<typeof ark.div> {
  showIcon?: boolean;
}

export interface SidebarMenuSubButtonProps
  extends ComponentProps<typeof ark.a>,
    ButtonVariantProps {
  isActive?: boolean;
  buttonRecipe?: typeof buttonRecipe;
}

export type SidebarRailProps = ComponentProps<typeof ark.button>;
export type SidebarInsetProps = ComponentProps<typeof ark.main>;
export type SidebarHeaderProps = ComponentProps<typeof ark.div>;
export type SidebarFooterProps = ComponentProps<typeof ark.div>;
export type SidebarGroupProps = ComponentProps<typeof ark.div>;
export type SidebarGroupLabelProps = ComponentProps<typeof ark.div>;

export interface SidebarGroupActionProps extends ComponentProps<typeof ark.button> {
  buttonRecipe?: typeof buttonRecipe;
}

export type SidebarGroupContentProps = ComponentProps<typeof ark.div>;
export type SidebarMenuProps = ComponentProps<typeof ark.ul>;
export type SidebarMenuItemProps = ComponentProps<typeof ark.li>;
export type SidebarMenuBadgeProps = ComponentProps<typeof ark.div>;
export type SidebarMenuSubProps = ComponentProps<typeof ark.ul>;
export type SidebarMenuSubItemProps = ComponentProps<typeof ark.li>;

const SIDEBAR_STORAGE_KEY = "sidebar_state";
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";

export function SidebarProvider(props: SidebarProviderProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "defaultOpen",
    "open",
    "onOpenChange",
    "recipe",
    "class",
    "style",
    "children",
  ]);

  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = createSignal(false);
  const [uncontrolledOpen, setUncontrolledOpen] = createSignal(local.defaultOpen ?? true);

  const open = createMemo(() => (local.open !== undefined ? !!local.open : uncontrolledOpen()));

  const setOpen = (value: boolean) => {
    if (local.open === undefined) {
      setUncontrolledOpen(value);
    }
    local.onOpenChange?.(value);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(SIDEBAR_STORAGE_KEY, String(value));
    }
  };

  const toggleSidebar = () => {
    if (isMobile()) {
      setOpenMobile((v) => !v);
    } else {
      setOpen(!open());
    }
  };

  createEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "b") {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    onCleanup(() => window.removeEventListener("keydown", onKeyDown));
  });

  const state = createMemo<"expanded" | "collapsed">(() => (open() ? "expanded" : "collapsed"));
  const slots = () => (local.recipe ?? sidebarRecipe)();

  const contextValue: SidebarContextProps = {
    isMobile,
    open,
    openMobile,
    setOpen,
    setOpenMobile,
    slots: slots(),
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

  return (
    <SidebarContext value={contextValue}>
      <ark.div
        {...rest}
        class={slots().wrapper({ class: cn(local.class) })}
        data-part="wrapper"
        data-scope="sidebar"
        style={style()}
      >
        {local.children}
      </ark.div>
    </SidebarContext>
  );
}

export function SidebarRoot(props: SidebarProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "collapsible",
    "placement",
    "variant",
    "class",
    "children",
  ]);
  const { isMobile, openMobile, setOpenMobile, slots, state } = useSidebar();
  const collapsible = () => local.collapsible ?? "offcanvas";
  const placement = () => local.placement ?? "left";
  const variant = () => local.variant ?? "sidebar";
  const padded = () => variant() === "floating" || variant() === "inset";

  return (
    <Show
      fallback={
        <Show
          fallback={
            <ark.div
              {...rest}
              class={slots.peer({ class: cn(local.class) })}
              data-collapsible={state() === "collapsed" ? collapsible() : ""}
              data-part="root"
              data-placement={placement()}
              data-scope="sidebar"
              data-state={state()}
              data-variant={variant()}
            >
              <ark.div
                class={slots.gap({ padded: padded(), placement: placement() })}
                data-part="gap"
                data-scope="sidebar"
              />
              <ark.div
                class={slots.container({
                  class: cn(local.class),
                  padded: padded(),
                  placement: placement(),
                })}
                data-part="container"
                data-scope="sidebar"
              >
                <ark.div
                  class={slots.inner()}
                  data-part="inner"
                  data-scope="sidebar"
                  data-sidebar="sidebar"
                >
                  {local.children}
                </ark.div>
              </ark.div>
            </ark.div>
          }
          when={isMobile()}
        >
          <Sheet onOpenChange={(details) => setOpenMobile(details.open)} open={openMobile()}>
            <Sheet.Content
              {...rest}
              class={slots.mobile()}
              data-mobile="true"
              data-sidebar="sidebar"
              placement={placement() === "left" ? "left" : "right"}
              style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}
            >
              <Sheet.Header class={slots.mobileHeader()}>
                <Sheet.Title>Sidebar</Sheet.Title>
                <Sheet.Description>Displays the mobile sidebar.</Sheet.Description>
              </Sheet.Header>
              <ark.div class={slots.mobileBody()}>{local.children}</ark.div>
            </Sheet.Content>
          </Sheet>
        </Show>
      }
      when={collapsible() === "none"}
    >
      <ark.div
        {...rest}
        class={slots.base({ class: cn(local.class) })}
        data-part="root"
        data-scope="sidebar"
      >
        {local.children}
      </ark.div>
    </Show>
  );
}

export function SidebarTrigger(props: ButtonProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onClick", "class"]);
  const { slots, toggleSidebar } = useSidebar();

  return (
    <Button
      {...rest}
      class={slots.trigger({ class: cn(local.class) })}
      data-part="trigger"
      data-scope="sidebar"
      data-sidebar="trigger"
      onClick={(event) => {
        if (typeof local.onClick === "function") local.onClick(event);
        toggleSidebar();
      }}
      size="icon-md"
      variant="ghost"
    >
      <SidebarSimpleIcon class={slots.triggerIcon()} />
      <ark.span class={slots.triggerLabel()}>Toggle sidebar</ark.span>
    </Button>
  );
}

export function SidebarRail(props: SidebarRailProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots, toggleSidebar } = useSidebar();

  return (
    <ark.button
      {...rest}
      aria-label="Toggle sidebar"
      class={slots.rail({ class: cn(local.class) })}
      data-part="rail"
      data-scope="sidebar"
      data-sidebar="rail"
      onClick={toggleSidebar}
      tabIndex={-1}
      title="Toggle sidebar"
      type="button"
    />
  );
}

export function SidebarInset(props: SidebarInsetProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.main
      {...rest}
      class={slots.inset({ class: cn(local.class) })}
      data-part="inset"
      data-scope="sidebar"
    />
  );
}

export function SidebarInput(props: InputProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "classNames"]);
  const { slots } = useSidebar();
  return (
    <Input
      {...rest}
      class={slots.input({ class: cn(local.class) })}
      classNames={local.classNames}
      data-sidebar="input"
    />
  );
}

export function SidebarHeader(props: SidebarHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.div
      {...rest}
      class={slots.header({ class: cn(local.class) })}
      data-part="header"
      data-scope="sidebar"
      data-sidebar="header"
    />
  );
}

export function SidebarFooter(props: SidebarFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.div
      {...rest}
      class={slots.footer({ class: cn(local.class) })}
      data-part="footer"
      data-scope="sidebar"
      data-sidebar="footer"
    />
  );
}

export function SidebarSeparator(props: SeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <Separator
      {...rest}
      class={slots.separator({ class: cn(local.class) })}
      data-part="separator"
      data-scope="sidebar"
      data-sidebar="separator"
    />
  );
}

export function SidebarContent(props: SidebarContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "class"]);
  const { slots } = useSidebar();
  return (
    <ScrollArea class={slots.scrollArea()} scrollFade={local.scrollFade ?? false}>
      <ark.div
        {...rest}
        class={slots.content({ class: cn(local.class) })}
        data-part="content"
        data-scope="sidebar"
        data-sidebar="content"
      />
    </ScrollArea>
  );
}

export function SidebarGroup(props: SidebarGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.div
      {...rest}
      class={slots.group({ class: cn(local.class) })}
      data-part="group"
      data-scope="sidebar"
      data-sidebar="group"
    />
  );
}

export function SidebarGroupLabel(props: SidebarGroupLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.div
      {...rest}
      class={slots.groupLabel({ class: cn(local.class) })}
      data-part="group-label"
      data-scope="sidebar"
      data-sidebar="group-label"
    />
  );
}

export function SidebarGroupAction(props: SidebarGroupActionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["buttonRecipe", "class"]);
  const { slots } = useSidebar();
  const recipe = () => local.buttonRecipe ?? buttonRecipe;

  return (
    <ark.button
      {...rest}
      class={cn(
        recipe()({ clickEffect: false, size: "icon-xs", variant: "ghost" }).base(),
        slots.groupAction(),
        local.class,
      )}
      data-part="group-action"
      data-scope="sidebar"
      data-sidebar="group-action"
      type="button"
    />
  );
}

export function SidebarGroupContent(props: SidebarGroupContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.div
      {...rest}
      class={slots.groupContent({ class: cn(local.class) })}
      data-part="group-content"
      data-scope="sidebar"
      data-sidebar="group-content"
    />
  );
}

export function SidebarMenu(props: SidebarMenuProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.ul
      {...rest}
      class={slots.menu({ class: cn(local.class) })}
      data-part="menu"
      data-scope="sidebar"
      data-sidebar="menu"
    />
  );
}

export function SidebarMenuItem(props: SidebarMenuItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.li
      {...rest}
      class={slots.menuItem({ class: cn(local.class) })}
      data-part="menu-item"
      data-scope="sidebar"
      data-sidebar="menu-item"
    />
  );
}

export function SidebarMenuButton(props: SidebarMenuButtonProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "isActive",
    "tooltip",
    "class",
    "children",
  ]);
  const { isMobile, slots, state } = useSidebar();
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? "ghost";

  const button = (
    <Button
      {...rest}
      class={slots.menuButton({ class: cn(local.class) })}
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
  const [local, rest] = splitProps(props, ["showOnHover", "buttonRecipe", "class"]);
  const { slots } = useSidebar();
  const recipe = () => local.buttonRecipe ?? buttonRecipe;
  const showOnHover = () => local.showOnHover ?? false;

  return (
    <ark.button
      {...rest}
      class={cn(
        recipe()({ clickEffect: false, size: "icon-xs", variant: "ghost" }).base(),
        slots.menuAction(),
        !showOnHover() &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-accent-foreground md:opacity-0",
        local.class,
      )}
      data-part="menu-action"
      data-scope="sidebar"
      data-sidebar="menu-action"
      type="button"
    />
  );
}

export function SidebarMenuBadge(props: SidebarMenuBadgeProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.div
      {...rest}
      class={slots.menuBadge({ class: cn(local.class) })}
      data-part="menu-badge"
      data-scope="sidebar"
      data-sidebar="menu-badge"
    />
  );
}

export function SidebarMenuSkeleton(props: SidebarMenuSkeletonProps): JSX.Element {
  const [local, rest] = splitProps(props, ["showIcon", "class"]);
  const { slots } = useSidebar();

  return (
    <ark.div
      {...rest}
      class={slots.menuSkeleton({ class: cn(local.class) })}
      data-part="menu-skeleton"
      data-scope="sidebar"
      data-sidebar="menu-skeleton"
    >
      <Show when={local.showIcon}>
        <Skeleton class={slots.menuSkeletonIcon()} data-sidebar="menu-skeleton-icon" />
      </Show>
      <Skeleton
        class={slots.menuSkeletonText()}
        data-sidebar="menu-skeleton-text"
        style={{ "--skeleton-width": "70%" }}
      />
    </ark.div>
  );
}

export function SidebarMenuSub(props: SidebarMenuSubProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.ul
      {...rest}
      class={slots.menuSub({ class: cn(local.class) })}
      data-part="menu-sub"
      data-scope="sidebar"
      data-sidebar="menu-sub"
    />
  );
}

export function SidebarMenuSubItem(props: SidebarMenuSubItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSidebar();
  return (
    <ark.li
      {...rest}
      class={slots.menuSubItem({ class: cn(local.class) })}
      data-part="menu-sub-item"
      data-scope="sidebar"
      data-sidebar="menu-sub-item"
    />
  );
}

export function SidebarMenuSubButton(props: SidebarMenuSubButtonProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "isActive", "buttonRecipe", "class"]);
  const { slots } = useSidebar();
  const size = () => local.size ?? "md";
  const recipe = () => local.buttonRecipe ?? buttonRecipe;

  return (
    <ark.a
      {...rest}
      class={cn(
        recipe()({ clickEffect: false, size: size(), variant: "ghost" }).base(),
        slots.menuSubButton(),
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
