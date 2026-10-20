import { ark, Portal, useHotkey, type HTMLArkProps } from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import type { SidebarRootContract } from "@pisagor/contracts";
import {
  type ButtonVariantProps,
  buttonRecipe,
  sheetRecipe,
  sidebarRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ComponentPropsWithRef, CSSProperties } from "react";
import { useIsMobile } from "../hooks";
import { createSlotRecipeContext } from "../internal";
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

interface SidebarState {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  state: "expanded" | "collapsed";
  toggleSidebar: () => void;
}

const SidebarStateContext = createContext<SidebarState | undefined>(undefined);
SidebarStateContext.displayName = "SidebarStateContext";

export type SidebarContextProps = SidebarState & {
  /** Slot class recipes from `sidebarRecipe`. */
  slots: ReturnType<typeof sidebarRecipe>;
};

/** Returns the nearest sidebar styles + state. */
export function useSidebar(): SidebarContextProps {
  const styles = useStyles();
  const state = use(SidebarStateContext);
  if (state === undefined) {
    throw new Error("useSidebar must be used within SidebarStateContext.");
  }

  return { ...styles, ...state };
}
// #endregion

// #region Types
export interface SidebarProviderProps
  extends ComponentPropsWithRef<"div">, SidebarRootContract {
  /**
   * The default open state of the sidebar.
   *
   * @remarks
   *   Ignored when `open` is set. When uncontrolled, the state persisted in
   *   `localStorage` (`sidebar_state`) wins after mount.
   * @defaultValue true
   */
  defaultOpen?: boolean;
  /**
   * Whether to disable the `mod+B` toggle hotkey.
   *
   * @defaultValue false
   */
  disableHotkey?: boolean;
  /**
   * The open state of the sidebar.
   *
   * @remarks
   *   When set, `defaultOpen` is ignored. Pair with `onOpenChange` to handle
   *   updates.
   */
  open?: boolean;
  /**
   * Called when the open state of the sidebar changes.
   *
   * @remarks
   *   Each update also persists the expanded/collapsed state in `localStorage`
   *   under the `sidebar_state` key.
   */
  onOpenChange?: (open: boolean) => void;
}

export interface SidebarProps extends ComponentPropsWithRef<"div"> {
  placement?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
  className?: string;
}

export interface SidebarContentProps extends ComponentPropsWithRef<"div"> {
  /**
   * Whether to add a scroll fade effect to the sidebar content.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}

export interface SidebarMenuButtonProps extends ButtonProps {
  /**
   * Whether the button is active.
   *
   * @defaultValue false
   */
  isActive?: boolean;
  /** The tooltip to display when hovering over the button. */
  tooltip?: string | Omit<TooltipProps, "children">;
}

export interface SidebarMenuActionProps extends HTMLArkProps<"button"> {
  showOnHover?: boolean;
  /**
   * Button style recipe. Defaults to `buttonRecipe` from
   * `@pisagor/recipes/button`.
   *
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
}

export interface SidebarMenuSkeletonProps extends ComponentPropsWithRef<"div"> {
  showIcon?: boolean;
}

export interface SidebarMenuSubButtonProps
  extends HTMLArkProps<"a">, ButtonVariantProps {
  isActive?: boolean;
  /**
   * Button style recipe. Defaults to `buttonRecipe` from
   * `@pisagor/recipes/button`.
   *
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
}

export type SidebarRailProps = HTMLArkProps<"button">;

export type SidebarInsetProps = ComponentPropsWithRef<"main">;

export type SidebarHeaderProps = ComponentPropsWithRef<"div">;

export type SidebarFooterProps = ComponentPropsWithRef<"div">;

export type SidebarGroupProps = ComponentPropsWithRef<"div">;

export type SidebarGroupLabelProps = ComponentPropsWithRef<"div">;

export interface SidebarGroupActionProps extends HTMLArkProps<"button"> {
  /**
   * Button style recipe. Defaults to `buttonRecipe` from
   * `@pisagor/recipes/button`.
   *
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
}

export type SidebarGroupContentProps = ComponentPropsWithRef<"div">;

export type SidebarMenuProps = ComponentPropsWithRef<"ul">;

export type SidebarMenuItemProps = ComponentPropsWithRef<"li">;

export type SidebarMenuBadgeProps = ComponentPropsWithRef<"div">;

export type SidebarMenuSubProps = ComponentPropsWithRef<"ul">;

export type SidebarMenuSubItemProps = ComponentPropsWithRef<"li">;
// #endregion

// #region Constants
const SIDEBAR_STORAGE_KEY = "sidebar_state";

const SIDEBAR_WIDTH = "calc(var(--spacing) * 64)";

const SIDEBAR_WIDTH_MOBILE = "calc(var(--spacing) * 72)";

const SIDEBAR_WIDTH_ICON = "calc(var(--spacing) * 12)";
// #endregion

// #region Parts
export function SidebarProvider({
  defaultOpen = true,
  disableHotkey = false,
  open: openProp,
  onOpenChange: setOpenProp,
  recipe = sidebarRecipe,
  className,
  style,
  ...rest
}: SidebarProviderProps) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = useState(false);

  const [_open, _setOpen] = useState(defaultOpen);
  const open = openProp ?? _open;

  useEffect(() => {
    if (openProp !== undefined) {
      return;
    }
    const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
    if (stored === "true" || stored === "false") {
      _setOpen(stored === "true");
    }
  }, [openProp]);
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      localStorage.setItem(SIDEBAR_STORAGE_KEY, String(openState));
    },
    [setOpenProp, open],
  );

  const toggleSidebar = useCallback(() => {
    if (isMobile) {
      setOpenMobile((open) => !open);
    } else {
      setOpen((open) => !open);
    }
  }, [isMobile, setOpen]);

  useHotkey({
    action: () => {
      toggleSidebar();
    },
    enabled: !disableHotkey,
    hotkey: "mod+B",
  });

  const state = open ? "expanded" : "collapsed";
  const slots = recipe();

  const stateValue = useMemo<SidebarState>(
    () => ({
      isMobile,
      open,
      openMobile,
      setOpen,
      setOpenMobile,
      state,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, toggleSidebar],
  );

  return (
    <SidebarStylesContext value={{ slots, variants: {} as never }}>
      <SidebarStateContext value={stateValue}>
        <div
          {...rest}
          className={slots.wrapper({ className })}
          data-part="wrapper"
          data-scope="sidebar"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as CSSProperties
          }
        />
      </SidebarStateContext>
    </SidebarStylesContext>
  );
}

export function SidebarRoot(props: SidebarProps) {
  const { m } = useLocale();
  const {
    collapsible = "offcanvas",
    placement = "left",
    variant = "sidebar",
    className,
    children,
    ...rest
  } = props;
  const { isMobile, openMobile, setOpenMobile, slots, state } = useSidebar();
  const padded = variant === "floating" || variant === "inset";

  if (collapsible === "none") {
    return (
      <div
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-scope="sidebar"
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet.Root
        onOpenChange={({ open }) => setOpenMobile(open)}
        open={openMobile}
        placement={placement === "left" ? "left" : "right"}
      >
        <Portal>
          <Sheet.Backdrop />

          <Sheet.Positioner>
            <Sheet.Content
              {...rest}
              className={slots.mobile()}
              data-mobile="true"
              data-sidebar="sidebar"
              style={
                {
                  "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
                } as CSSProperties
              }
            >
              <Sheet.Header className={slots.mobileHeader()}>
                <Sheet.Title>{m("sidebar.title")}</Sheet.Title>
                <Sheet.Description>
                  {m("sidebar.description")}
                </Sheet.Description>
              </Sheet.Header>
              <div className={slots.mobileBody()}>{children}</div>
              <Sheet.CloseTrigger asChild>
                <Button
                  aria-label={m("sheet.close")}
                  className={sheetRecipe().inline()}
                  size="icon-sm"
                  variant="ghost"
                >
                  <XIcon />
                </Button>
              </Sheet.CloseTrigger>
            </Sheet.Content>
          </Sheet.Positioner>
        </Portal>
      </Sheet.Root>
    );
  }

  return (
    <div
      {...rest}
      className={slots.peer({ className })}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-part="root"
      data-placement={placement}
      data-scope="sidebar"
      data-state={state}
      data-variant={variant}
    >
      <div
        className={slots.gap({ padded, placement })}
        data-part="gap"
        data-scope="sidebar"
      />
      <div
        className={slots.container({ padded, placement })}
        data-part="container"
        data-scope="sidebar"
      >
        <div
          className={slots.inner()}
          data-part="inner"
          data-scope="sidebar"
          data-sidebar="sidebar"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Toggles the sidebar; localized default `aria-label`. Pass your own icon as
 * children.
 */
export function SidebarTrigger({ onClick, className, ...rest }: ButtonProps) {
  const { m } = useLocale();
  const { slots, toggleSidebar } = useSidebar();

  return (
    <Button
      aria-label={m("sidebar.toggle")}
      size="icon-md"
      variant="ghost"
      {...rest}
      className={slots.trigger({ className })}
      data-part="trigger"
      data-scope="sidebar"
      data-sidebar="trigger"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
    />
  );
}

export function SidebarRail({ className, ...rest }: SidebarRailProps) {
  const { m } = useLocale();
  const { slots, toggleSidebar } = useSidebar();

  return (
    <ark.button
      aria-label={m("sidebar.toggle")}
      {...rest}
      className={slots.rail({ className })}
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

export const SidebarInset = withContext<SidebarInsetProps>("main", {
  name: "Inset",
});

export function SidebarInput({ className, classNames, ...rest }: InputProps) {
  const { slots } = useSidebar();

  return (
    <Input
      {...rest}
      className={slots.input({ className })}
      classNames={classNames}
      data-sidebar="input"
    />
  );
}

export const SidebarHeader = withContext<SidebarHeaderProps>("div", {
  defaultProps: { "data-sidebar": "header" },
  name: "Header",
});

export const SidebarFooter = withContext<SidebarFooterProps>("div", {
  defaultProps: { "data-sidebar": "footer" },
  name: "Footer",
});

export function SidebarSeparator({ className, ...rest }: SeparatorProps) {
  const { slots } = useSidebar();

  return (
    <Separator
      {...rest}
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="sidebar"
      data-sidebar="separator"
    />
  );
}

export function SidebarContent({
  scrollFade = false,
  className,
  ...rest
}: SidebarContentProps) {
  const { slots } = useSidebar();

  return (
    <ScrollArea className={slots.scrollArea()} scrollFade={scrollFade}>
      <div
        {...rest}
        className={slots.content({ className })}
        data-part="content"
        data-scope="sidebar"
        data-sidebar="content"
      />
    </ScrollArea>
  );
}

export const SidebarGroup = withContext<SidebarGroupProps>("div", {
  defaultProps: { "data-sidebar": "group" },
  name: "Group",
});

export const SidebarGroupLabel = withContext<SidebarGroupLabelProps>("div", {
  defaultProps: { "data-sidebar": "group-label" },
  name: "GroupLabel",
});

export function SidebarGroupAction({
  buttonRecipe: buttonRecipeProp = buttonRecipe,
  className,
  ...rest
}: SidebarGroupActionProps) {
  const { slots } = useSidebar();

  return (
    <ark.button
      {...rest}
      className={cn(
        buttonRecipeProp({
          clickEffect: false,
          size: "icon-xs",
          variant: "ghost",
        }).base(),
        slots.groupAction(),
        className,
      )}
      data-part="group-action"
      data-scope="sidebar"
      data-sidebar="group-action"
      type="button"
    />
  );
}

export const SidebarGroupContent = withContext<SidebarGroupContentProps>(
  "div",
  {
    defaultProps: { "data-sidebar": "group-content" },
    name: "GroupContent",
  },
);

export const SidebarMenu = withContext<SidebarMenuProps>("ul", {
  defaultProps: { "data-sidebar": "menu" },
  name: "Menu",
});

export const SidebarMenuItem = withContext<SidebarMenuItemProps>("li", {
  defaultProps: { "data-sidebar": "menu-item" },
  name: "MenuItem",
});

export function SidebarMenuButton({
  size = "md",
  variant = "ghost",
  isActive = false,
  tooltip,
  className,
  ...rest
}: SidebarMenuButtonProps) {
  const { isMobile, slots, state } = useSidebar();

  const button = (
    <Button
      {...rest}
      className={slots.menuButton({ className })}
      clickEffect={false}
      data-active={isActive}
      data-part="menu-button"
      data-scope="sidebar"
      data-sidebar="menu-button"
      data-size={size}
      size={size}
      variant={variant}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = { content: tooltip };
  }

  return (
    <Tooltip
      {...tooltip}
      contentProps={{
        ...tooltip.contentProps,
        hidden: state !== "collapsed" || isMobile,
      }}
      positioning={{ placement: "right", ...tooltip.positioning }}
    >
      {button}
    </Tooltip>
  );
}

export function SidebarMenuAction({
  showOnHover = false,
  buttonRecipe: buttonRecipeProp = buttonRecipe,
  className,
  ...rest
}: SidebarMenuActionProps) {
  const { slots } = useSidebar();

  return (
    <ark.button
      {...rest}
      className={cn(
        buttonRecipeProp({
          clickEffect: false,
          size: "icon-xs",
          variant: "ghost",
        }).base(),
        slots.menuAction(),
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className,
      )}
      data-part="menu-action"
      data-scope="sidebar"
      data-sidebar="menu-action"
      type="button"
    />
  );
}

export const SidebarMenuBadge = withContext<SidebarMenuBadgeProps>("div", {
  defaultProps: { "data-sidebar": "menu-badge" },
  name: "MenuBadge",
});

export function SidebarMenuSkeleton({
  showIcon = false,
  className,
  ...rest
}: SidebarMenuSkeletonProps) {
  const { slots } = useSidebar();

  return (
    <div
      {...rest}
      className={slots.menuSkeleton({ className })}
      data-part="menu-skeleton"
      data-scope="sidebar"
      data-sidebar="menu-skeleton"
    >
      {!!showIcon && (
        <Skeleton
          className={slots.menuSkeletonIcon()}
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className={slots.menuSkeletonText()}
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": "70%",
          } as CSSProperties
        }
      />
    </div>
  );
}

export const SidebarMenuSub = withContext<SidebarMenuSubProps>("ul", {
  defaultProps: { "data-sidebar": "menu-sub" },
  name: "MenuSub",
});

export const SidebarMenuSubItem = withContext<SidebarMenuSubItemProps>("li", {
  defaultProps: { "data-sidebar": "menu-sub-item" },
  name: "MenuSubItem",
});

export function SidebarMenuSubButton({
  size = "md",
  isActive = false,
  buttonRecipe: buttonRecipeProp = buttonRecipe,
  className,
  ...rest
}: SidebarMenuSubButtonProps) {
  const { slots } = useSidebar();

  return (
    <ark.a
      {...rest}
      className={cn(
        buttonRecipeProp({ clickEffect: false, size, variant: "ghost" }).base(),
        slots.menuSubButton(),
        className,
      )}
      data-active={isActive}
      data-part="menu-sub-button"
      data-scope="sidebar"
      data-sidebar="menu-sub-button"
      data-size={size}
    />
  );
}
// #endregion

// #region Display Names
SidebarProvider.displayName = "Sidebar.Provider";
SidebarRoot.displayName = "Sidebar";
SidebarTrigger.displayName = "Sidebar.Trigger";
SidebarRail.displayName = "Sidebar.Rail";
SidebarInset.displayName = "Sidebar.Inset";
SidebarInput.displayName = "Sidebar.Input";
SidebarHeader.displayName = "Sidebar.Header";
SidebarFooter.displayName = "Sidebar.Footer";
SidebarSeparator.displayName = "Sidebar.Separator";
SidebarContent.displayName = "Sidebar.Content";
SidebarGroup.displayName = "Sidebar.Group";
SidebarGroupLabel.displayName = "Sidebar.GroupLabel";
SidebarGroupAction.displayName = "Sidebar.GroupAction";
SidebarGroupContent.displayName = "Sidebar.GroupContent";
SidebarMenu.displayName = "Sidebar.Menu";
SidebarMenuItem.displayName = "Sidebar.MenuItem";
SidebarMenuButton.displayName = "Sidebar.MenuButton";
SidebarMenuAction.displayName = "Sidebar.MenuAction";
SidebarMenuBadge.displayName = "Sidebar.MenuBadge";
SidebarMenuSkeleton.displayName = "Sidebar.MenuSkeleton";
SidebarMenuSub.displayName = "Sidebar.MenuSub";
SidebarMenuSubItem.displayName = "Sidebar.MenuSubItem";
SidebarMenuSubButton.displayName = "Sidebar.MenuSubButton";
// #endregion

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
