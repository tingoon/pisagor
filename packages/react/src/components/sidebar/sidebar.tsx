import { ark } from "@ark-ui/react/factory";
import { SidebarSimpleIcon } from "@phosphor-icons/react";
import { buttonVariants } from "@pisagor/styles/ui/button";
import {
  sidebar2Variants,
  sidebar3Variants,
  sidebarContainerVariants,
  sidebarContentVariants,
  sidebarFooterVariants,
  sidebarGapVariants,
  sidebarGroupActionVariants,
  sidebarGroupContentVariants,
  sidebarGroupLabelVariants,
  sidebarGroupVariants,
  sidebarHeaderVariants,
  sidebarInline2Variants,
  sidebarInline3Variants,
  sidebarInline4Variants,
  sidebarInline5Variants,
  sidebarInline6Variants,
  sidebarInline7Variants,
  sidebarInlineVariants,
  sidebarInnerVariants,
  sidebarInputVariants,
  sidebarInsetVariants,
  sidebarMenuActionVariants,
  sidebarMenuBadgeVariants,
  sidebarMenuButtonVariants,
  sidebarMenuItemVariants,
  sidebarMenuSkeletonVariants,
  sidebarMenuSubButtonVariants,
  sidebarMenuSubItemVariants,
  sidebarMenuSubVariants,
  sidebarMenuVariants,
  sidebarRailVariants,
  sidebarSeparatorVariants,
  sidebarTriggerVariants,
  sidebarVariants,
  sidebarWrapperVariants,
} from "@pisagor/styles/ui/sidebar";
import { cn } from "@pisagor/utils";
import { useHotkey } from "@tanstack/react-hotkeys";
import { type ComponentProps, type CSSProperties, useCallback, useMemo, useState } from "react";
import type { VariantProps } from "tailwind-variants";
import { useIsMobile } from "../../hooks";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";
import { Button, type ButtonProps } from "../button";
import { Input, type InputProps } from "../input";
import { ScrollArea } from "../scroll-area";
import { Separator, type SeparatorProps } from "../separator";
import { Sheet, type SheetProps } from "../sheet";
import { Skeleton } from "../skeleton";
import { Tooltip, type TooltipProps } from "../tooltip";

// #region Types
interface SidebarContextProps {
  isMobile: boolean;
  open: boolean;
  openMobile: boolean;
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  state: "expanded" | "collapsed";
  toggleSidebar: () => void;
}

interface SidebarProviderProps extends ComponentProps<"div"> {
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
   * Called when the open state of the sidebar changes.
   *
   * @remarks
   * Each update also persists the expanded/collapsed state in `localStorage` under the `sidebar_state` key.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The open state of the sidebar.
   *
   * @remarks
   * When set, `defaultOpen` is ignored. Pair with `onOpenChange` to handle updates.
   */
  open?: boolean;
}

export interface SidebarProps extends SheetProps, WithTestId {
  className?: string;
  collapsible?: "offcanvas" | "icon" | "none";
  placement?: "left" | "right";
  variant?: "sidebar" | "floating" | "inset";
}

interface SidebarContentProps extends ComponentProps<"div"> {
  /**
   * Whether to add a scroll fade effect to the sidebar content.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}

interface SidebarMenuButtonProps extends ButtonProps {
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

interface SidebarMenuActionProps extends ComponentProps<typeof ark.button> {
  showOnHover?: boolean;
}

interface SidebarMenuSkeletonProps extends ComponentProps<typeof ark.div> {
  showIcon?: boolean;
}

interface SidebarMenuSubButtonProps
  extends ComponentProps<typeof ark.a>,
    VariantProps<typeof buttonVariants> {
  isActive?: boolean;
}

// #endregion

// #region Context
/**
 * Returns the nearest sidebar context.
 *
 * @returns Sidebar open state, mobile state, and layout helpers.
 */
const [SidebarContext, useSidebar] = createContext<SidebarContextProps>({
  name: "Sidebar",
});

export { useSidebar };

const SIDEBAR_STORAGE_KEY = "sidebar_state";

const SIDEBAR_WIDTH = "16rem";

const SIDEBAR_WIDTH_MOBILE = "18rem";

const SIDEBAR_WIDTH_ICON = "3rem";

// #endregion

// #region Components
export function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
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

  useHotkey("Mod+B", () => {
    toggleSidebar();
  });

  const state = open ? "expanded" : "collapsed";

  const contextValue = useMemo<SidebarContextProps>(
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
    <SidebarContext value={contextValue}>
      <ark.div
        {...rest}
        className={cn(sidebarWrapperVariants(), className)}
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
    testId,
    ...rest
  } = props;
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <ark.div
        {...rest}
        className={cn(sidebarVariants(), className)}
        data-part="root"
        data-scope="sidebar"
        data-testid={testId}
      >
        {children}
      </ark.div>
    );
  }

  if (isMobile) {
    return (
      <Sheet onOpenChange={({ open }) => setOpenMobile(open)} open={openMobile} testId={testId}>
        <Sheet.Content
          {...rest}
          className={cn(sidebar2Variants())}
          data-mobile="true"
          data-sidebar="sidebar"
          data-testid={testId}
          placement={placement === "left" ? "left" : "right"}
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as CSSProperties
          }
        >
          <Sheet.Header
            className={sidebarInlineVariants()}
            description="Displays the mobile sidebar."
            title="Sidebar"
          />
          <ark.div className={sidebarInline2Variants()}>{children}</ark.div>
        </Sheet.Content>
      </Sheet>
    );
  }

  return (
    <ark.div
      {...rest}
      className={cn(sidebar3Variants())}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-part="root"
      data-placement={placement}
      data-scope="sidebar"
      data-state={state}
      data-testid={testId}
      data-variant={variant}
    >
      <ark.div
        className={cn(
          sidebarGapVariants({ padded: variant === "floating" || variant === "inset" }),
        )}
        data-part="gap"
        data-scope="sidebar"
      />
      <ark.div
        className={cn(
          sidebarContainerVariants({
            padded: variant === "floating" || variant === "inset",
            placement,
          }),
          className,
        )}
        data-part="container"
        data-scope="sidebar"
      >
        <ark.div
          className={cn(sidebarInnerVariants())}
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

export function SidebarTrigger({ className, onClick, ...rest }: ButtonProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      {...rest}
      className={cn(sidebarTriggerVariants(), className)}
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
      <SidebarSimpleIcon className={sidebarInline3Variants()} />
      <ark.span className={sidebarInline4Variants()}>Toggle sidebar</ark.span>
    </Button>
  );
}

export function SidebarRail({ className, ...rest }: ComponentProps<typeof ark.button>) {
  const { toggleSidebar } = useSidebar();

  return (
    <ark.button
      {...rest}
      aria-label="Toggle sidebar"
      className={cn(sidebarRailVariants(), className)}
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

export function SidebarInset({ className, ...rest }: ComponentProps<typeof ark.main>) {
  return (
    <ark.main
      {...rest}
      className={cn(sidebarInsetVariants(), className)}
      data-part="inset"
      data-scope="sidebar"
    />
  );
}

export function SidebarInput({ className, classNames, ...rest }: InputProps) {
  return (
    <Input
      {...rest}
      className={cn(sidebarInputVariants(), className)}
      classNames={classNames}
      data-sidebar="input"
    />
  );
}

export function SidebarHeader({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(sidebarHeaderVariants(), className)}
      data-part="header"
      data-scope="sidebar"
      data-sidebar="header"
    />
  );
}

export function SidebarFooter({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(sidebarFooterVariants(), className)}
      data-part="footer"
      data-scope="sidebar"
      data-sidebar="footer"
    />
  );
}

export function SidebarSeparator({ className, ...rest }: SeparatorProps) {
  return (
    <Separator
      {...rest}
      className={cn(sidebarSeparatorVariants(), className)}
      data-sidebar="separator"
      dataPart="separator"
      dataScope="sidebar"
    />
  );
}

export function SidebarContent({ scrollFade = false, className, ...rest }: SidebarContentProps) {
  return (
    <ScrollArea className={sidebarInline5Variants()} scrollFade={scrollFade}>
      <ark.div
        {...rest}
        className={cn(sidebarContentVariants(), className)}
        data-part="content"
        data-scope="sidebar"
        data-sidebar="content"
      />
    </ScrollArea>
  );
}

export function SidebarGroup({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(sidebarGroupVariants(), className)}
      data-part="group"
      data-scope="sidebar"
      data-sidebar="group"
    />
  );
}

export function SidebarGroupLabel({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(sidebarGroupLabelVariants(), className)}
      data-part="group-label"
      data-scope="sidebar"
      data-sidebar="group-label"
    />
  );
}

export function SidebarGroupAction({ className, ...rest }: ComponentProps<typeof ark.button>) {
  return (
    <ark.button
      {...rest}
      className={cn(
        buttonVariants({
          clickEffect: false,
          size: "icon-xs",
          variant: "ghost",
        }),
        sidebarGroupActionVariants(),
        className,
      )}
      data-part="group-action"
      data-scope="sidebar"
      data-sidebar="group-action"
      type="button"
    />
  );
}

export function SidebarGroupContent({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(sidebarGroupContentVariants(), className)}
      data-part="group-content"
      data-scope="sidebar"
      data-sidebar="group-content"
    />
  );
}

export function SidebarMenu({ className, ...rest }: ComponentProps<typeof ark.ul>) {
  return (
    <ark.ul
      {...rest}
      className={cn(sidebarMenuVariants(), className)}
      data-part="menu"
      data-scope="sidebar"
      data-sidebar="menu"
    />
  );
}

export function SidebarMenuItem({ className, ...rest }: ComponentProps<typeof ark.li>) {
  return (
    <ark.li
      {...rest}
      className={cn(sidebarMenuItemVariants(), className)}
      data-part="menu-item"
      data-scope="sidebar"
      data-sidebar="menu-item"
    />
  );
}

export function SidebarMenuButton({
  tooltip,
  isActive = false,
  size = "md",
  variant = "ghost",
  className,
  ...rest
}: SidebarMenuButtonProps) {
  const { isMobile, state } = useSidebar();

  const button = (
    <Button
      {...rest}
      className={cn(sidebarMenuButtonVariants(), className)}
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
  className,
  showOnHover = false,
  ...rest
}: SidebarMenuActionProps) {
  return (
    <ark.button
      {...rest}
      className={cn(
        buttonVariants({
          clickEffect: false,
          size: "icon-xs",
          variant: "ghost",
        }),
        sidebarMenuActionVariants(),
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

export function SidebarMenuBadge({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(sidebarMenuBadgeVariants(), className)}
      data-part="menu-badge"
      data-scope="sidebar"
      data-sidebar="menu-badge"
    />
  );
}

export function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...rest
}: SidebarMenuSkeletonProps) {
  const width = useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);

  return (
    <ark.div
      {...rest}
      className={cn(sidebarMenuSkeletonVariants(), className)}
      data-part="menu-skeleton"
      data-scope="sidebar"
      data-sidebar="menu-skeleton"
    >
      {!!showIcon && (
        <Skeleton className={sidebarInline6Variants()} data-sidebar="menu-skeleton-icon" />
      )}
      <Skeleton
        className={sidebarInline7Variants()}
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as CSSProperties
        }
      />
    </ark.div>
  );
}

export function SidebarMenuSub({ className, ...rest }: ComponentProps<typeof ark.ul>) {
  return (
    <ark.ul
      {...rest}
      className={cn(sidebarMenuSubVariants(), className)}
      data-part="menu-sub"
      data-scope="sidebar"
      data-sidebar="menu-sub"
    />
  );
}

export function SidebarMenuSubItem({ className, ...props }: ComponentProps<typeof ark.li>) {
  return (
    <ark.li
      className={cn(sidebarMenuSubItemVariants(), className)}
      data-part="menu-sub-item"
      data-scope="sidebar"
      data-sidebar="menu-sub-item"
      {...props}
    />
  );
}

export function SidebarMenuSubButton({
  size = "md",
  isActive = false,
  className,
  ...rest
}: SidebarMenuSubButtonProps) {
  return (
    <ark.a
      {...rest}
      className={cn(
        buttonVariants({ clickEffect: false, size, variant: "ghost" }),
        sidebarMenuSubButtonVariants(),
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
