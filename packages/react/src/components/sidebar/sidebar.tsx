import { useHotkey } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { SidebarSimpleIcon } from "@phosphor-icons/react";
import { type ButtonVariantProps, buttonRecipe } from "@pisagor/recipes/button";
import { sidebarRecipe } from "@pisagor/recipes/sidebar";
import { cn } from "@pisagor/utils";
import { type ComponentProps, type CSSProperties, useCallback, useMemo, useState } from "react";
import { useIsMobile } from "../../hooks";
import { Button, type ButtonProps } from "../button";
import { Input, type InputProps } from "../input";
import { ScrollArea } from "../scroll-area";
import { Separator, type SeparatorProps } from "../separator";
import { Sheet, type SheetProps } from "../sheet";
import { Skeleton } from "../skeleton";
import { Tooltip, type TooltipProps } from "../tooltip";
import { SidebarContext, type SidebarContextProps, useSidebar } from "./sidebar.context";

// #region Types
export interface SidebarProviderProps extends ComponentProps<"div"> {
  /**
   * The default open state of the sidebar.
   *
   * @defaultValue true
   *
   * @remarks
   * Ignored when `open` is set.
   */
  defaultOpen?: boolean;
  /**
   * The open state of the sidebar.
   *
   * @remarks
   * When set, `defaultOpen` is ignored. Pair with `onOpenChange` to handle updates.
   */
  open?: boolean;
  /**
   * Called when the open state of the sidebar changes.
   *
   * @remarks
   * Each update also persists the expanded/collapsed state in `localStorage` under the `sidebar_state` key.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Style recipe. Defaults to `sidebarRecipe` from `@pisagor/recipes/sidebar`.
   *
   * @defaultValue sidebarRecipe
   */
  recipe?: typeof sidebarRecipe;
}

export interface SidebarProps extends SheetProps {
  placement?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
  collapsible?: "offcanvas" | "icon" | "none";
  className?: string;
}

export interface SidebarContentProps extends ComponentProps<"div"> {
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
  /**
   * The tooltip to display when hovering over the button.
   *
   */
  tooltip?: string | Omit<TooltipProps, "children">;
}

export interface SidebarMenuActionProps extends ComponentProps<typeof ark.button> {
  showOnHover?: boolean;
  /**
   * Button style recipe. Defaults to `buttonRecipe` from `@pisagor/recipes/button`.
   *
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
}

export interface SidebarMenuSkeletonProps extends ComponentProps<typeof ark.div> {
  showIcon?: boolean;
}

export interface SidebarMenuSubButtonProps
  extends ComponentProps<typeof ark.a>,
    ButtonVariantProps {
  isActive?: boolean;
  /**
   * Button style recipe. Defaults to `buttonRecipe` from `@pisagor/recipes/button`.
   *
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
}

export type SidebarRailProps = ComponentProps<typeof ark.button>;

export type SidebarInsetProps = ComponentProps<typeof ark.main>;

export type SidebarHeaderProps = ComponentProps<typeof ark.div>;

export type SidebarFooterProps = ComponentProps<typeof ark.div>;

export type SidebarGroupProps = ComponentProps<typeof ark.div>;

export type SidebarGroupLabelProps = ComponentProps<typeof ark.div>;

export interface SidebarGroupActionProps extends ComponentProps<typeof ark.button> {
  /**
   * Button style recipe. Defaults to `buttonRecipe` from `@pisagor/recipes/button`.
   *
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
}

export type SidebarGroupContentProps = ComponentProps<typeof ark.div>;

export type SidebarMenuProps = ComponentProps<typeof ark.ul>;

export type SidebarMenuItemProps = ComponentProps<typeof ark.li>;

export type SidebarMenuBadgeProps = ComponentProps<typeof ark.div>;

export type SidebarMenuSubProps = ComponentProps<typeof ark.ul>;

export type SidebarMenuSubItemProps = ComponentProps<typeof ark.li>;
// #endregion

// #region Constants
const SIDEBAR_STORAGE_KEY = "sidebar_state";

const SIDEBAR_WIDTH = "16rem";

const SIDEBAR_WIDTH_MOBILE = "18rem";

const SIDEBAR_WIDTH_ICON = "3rem";
// #endregion

// #region Parts
export function SidebarProvider({
  defaultOpen = true,
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
    hotkey: "mod+B",
  });

  const state = open ? "expanded" : "collapsed";
  const slots = recipe();

  const contextValue = useMemo<SidebarContextProps>(
    () => ({
      isMobile,
      open,
      openMobile,
      setOpen,
      setOpenMobile,
      slots,
      state,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, slots, toggleSidebar],
  );

  return (
    <SidebarContext value={contextValue}>
      <ark.div
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
    </SidebarContext>
  );
}

export function SidebarRoot(props: SidebarProps) {
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
      <ark.div
        {...rest}
        className={slots.base({ className })}
        data-part="root"
        data-scope="sidebar"
      >
        {children}
      </ark.div>
    );
  }

  if (isMobile) {
    return (
      <Sheet onOpenChange={({ open }) => setOpenMobile(open)} open={openMobile}>
        <Sheet.Content
          {...rest}
          className={slots.mobile()}
          data-mobile="true"
          data-sidebar="sidebar"
          placement={placement === "left" ? "left" : "right"}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as CSSProperties
          }
        >
          <Sheet.Header className={slots.mobileHeader()}>
            <Sheet.Title>Sidebar</Sheet.Title>
            <Sheet.Description>Displays the mobile sidebar.</Sheet.Description>
          </Sheet.Header>
          <ark.div className={slots.mobileBody()}>{children}</ark.div>
        </Sheet.Content>
      </Sheet>
    );
  }

  return (
    <ark.div
      {...rest}
      className={slots.peer({ className })}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-part="root"
      data-placement={placement}
      data-scope="sidebar"
      data-state={state}
      data-variant={variant}
    >
      <ark.div className={slots.gap({ padded, placement })} data-part="gap" data-scope="sidebar" />
      <ark.div
        className={slots.container({ className, padded, placement })}
        data-part="container"
        data-scope="sidebar"
      >
        <ark.div
          className={slots.inner()}
          data-part="inner"
          data-scope="sidebar"
          data-sidebar="sidebar"
        >
          {children}
        </ark.div>
      </ark.div>
    </ark.div>
  );
}

export function SidebarTrigger({ onClick, className, ...rest }: ButtonProps) {
  const { slots, toggleSidebar } = useSidebar();

  return (
    <Button
      {...rest}
      className={slots.trigger({ className })}
      data-part="trigger"
      data-scope="sidebar"
      data-sidebar="trigger"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      size="icon-md"
      variant="ghost"
    >
      <SidebarSimpleIcon className={slots.triggerIcon()} />
      <ark.span className={slots.triggerLabel()}>Toggle sidebar</ark.span>
    </Button>
  );
}

export function SidebarRail({ className, ...rest }: SidebarRailProps) {
  const { slots, toggleSidebar } = useSidebar();

  return (
    <ark.button
      {...rest}
      aria-label="Toggle sidebar"
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

export function SidebarInset({ className, ...rest }: SidebarInsetProps) {
  const { slots } = useSidebar();

  return (
    <ark.main
      {...rest}
      className={slots.inset({ className })}
      data-part="inset"
      data-scope="sidebar"
    />
  );
}

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

export function SidebarHeader({ className, ...rest }: SidebarHeaderProps) {
  const { slots } = useSidebar();

  return (
    <ark.div
      {...rest}
      className={slots.header({ className })}
      data-part="header"
      data-scope="sidebar"
      data-sidebar="header"
    />
  );
}

export function SidebarFooter({ className, ...rest }: SidebarFooterProps) {
  const { slots } = useSidebar();

  return (
    <ark.div
      {...rest}
      className={slots.footer({ className })}
      data-part="footer"
      data-scope="sidebar"
      data-sidebar="footer"
    />
  );
}

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

export function SidebarContent({ scrollFade = false, className, ...rest }: SidebarContentProps) {
  const { slots } = useSidebar();

  return (
    <ScrollArea className={slots.scrollArea()} scrollFade={scrollFade}>
      <ark.div
        {...rest}
        className={slots.content({ className })}
        data-part="content"
        data-scope="sidebar"
        data-sidebar="content"
      />
    </ScrollArea>
  );
}

export function SidebarGroup({ className, ...rest }: SidebarGroupProps) {
  const { slots } = useSidebar();

  return (
    <ark.div
      {...rest}
      className={slots.group({ className })}
      data-part="group"
      data-scope="sidebar"
      data-sidebar="group"
    />
  );
}

export function SidebarGroupLabel({ className, ...rest }: SidebarGroupLabelProps) {
  const { slots } = useSidebar();

  return (
    <ark.div
      {...rest}
      className={slots.groupLabel({ className })}
      data-part="group-label"
      data-scope="sidebar"
      data-sidebar="group-label"
    />
  );
}

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

export function SidebarGroupContent({ className, ...rest }: SidebarGroupContentProps) {
  const { slots } = useSidebar();

  return (
    <ark.div
      {...rest}
      className={slots.groupContent({ className })}
      data-part="group-content"
      data-scope="sidebar"
      data-sidebar="group-content"
    />
  );
}

export function SidebarMenu({ className, ...rest }: SidebarMenuProps) {
  const { slots } = useSidebar();

  return (
    <ark.ul
      {...rest}
      className={slots.menu({ className })}
      data-part="menu"
      data-scope="sidebar"
      data-sidebar="menu"
    />
  );
}

export function SidebarMenuItem({ className, ...rest }: SidebarMenuItemProps) {
  const { slots } = useSidebar();

  return (
    <ark.li
      {...rest}
      className={slots.menuItem({ className })}
      data-part="menu-item"
      data-scope="sidebar"
      data-sidebar="menu-item"
    />
  );
}

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
        !showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-accent-foreground md:opacity-0",
        className,
      )}
      data-part="menu-action"
      data-scope="sidebar"
      data-sidebar="menu-action"
      type="button"
    />
  );
}

export function SidebarMenuBadge({ className, ...rest }: SidebarMenuBadgeProps) {
  const { slots } = useSidebar();

  return (
    <ark.div
      {...rest}
      className={slots.menuBadge({ className })}
      data-part="menu-badge"
      data-scope="sidebar"
      data-sidebar="menu-badge"
    />
  );
}

export function SidebarMenuSkeleton({
  showIcon = false,
  className,
  ...rest
}: SidebarMenuSkeletonProps) {
  const { slots } = useSidebar();

  return (
    <ark.div
      {...rest}
      className={slots.menuSkeleton({ className })}
      data-part="menu-skeleton"
      data-scope="sidebar"
      data-sidebar="menu-skeleton"
    >
      {!!showIcon && (
        <Skeleton className={slots.menuSkeletonIcon()} data-sidebar="menu-skeleton-icon" />
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
    </ark.div>
  );
}

export function SidebarMenuSub({ className, ...rest }: SidebarMenuSubProps) {
  const { slots } = useSidebar();

  return (
    <ark.ul
      {...rest}
      className={slots.menuSub({ className })}
      data-part="menu-sub"
      data-scope="sidebar"
      data-sidebar="menu-sub"
    />
  );
}

export function SidebarMenuSubItem({ className, ...props }: SidebarMenuSubItemProps) {
  const { slots } = useSidebar();

  return (
    <ark.li
      {...props}
      className={slots.menuSubItem({ className })}
      data-part="menu-sub-item"
      data-scope="sidebar"
      data-sidebar="menu-sub-item"
    />
  );
}

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
