import { Drawer as DrawerPrimitive } from "@ark-ui/react/drawer";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import {
  type DrawerContentVariantProps,
  type DrawerPositionerVariantProps,
  drawerBodyVariants,
  drawerContentInnerVariants,
  drawerContentVariants,
  drawerDescriptionVariants,
  drawerFooterVariants,
  drawerGrabberIndicatorVariants,
  drawerGrabberVariants,
  drawerHeaderVariants,
  drawerInlineVariants,
  drawerOverlayVariants,
  drawerPositionerVariants,
  drawerTitleVariants,
} from "@pisagor/styles/ui/drawer";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { ScrollArea } from "../scroll-area";
import { DrawerContext, useDrawer } from "./drawer.context";

// #region Types
export interface DrawerPositionerProps
  extends ComponentProps<typeof DrawerPrimitive.Positioner>,
    DrawerPositionerVariantProps {}

export interface DrawerContentProps
  extends ComponentProps<typeof DrawerPrimitive.Content>,
    DrawerContentVariantProps {}

export interface DrawerHeaderProps extends ComponentProps<typeof ark.div> {
  /** The description of the drawer */
  description?: string;
  /** The title of the drawer */
  title?: string;
}

export interface DrawerBodyProps extends ComponentProps<typeof ark.div> {
  /**
   * Whether to add a fade effect to the scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}

export interface DrawerRootProps extends ComponentProps<typeof DrawerPrimitive.Root>, WithTestId {}

export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;

export type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Backdrop>;

export type DrawerGrabberProps = ComponentProps<typeof DrawerPrimitive.Grabber>;

export type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;

export type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.CloseTrigger>;
// #endregion

// #region Parts
/**
 * Drawer root. `lazyMount` and `unmountOnExit` default to `false` because enabling
 * either option currently breaks swipe-to-dismiss in Ark Drawer.
 */
export function DrawerRoot({
  lazyMount = false,
  unmountOnExit = false,
  testId,
  ...rest
}: DrawerRootProps) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };

  return (
    <DrawerContext value={{ testId: dataTestId ?? testId }}>
      <DrawerPrimitive.Root lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...props} />
    </DrawerContext>
  );
}
DrawerRoot.displayName = "Drawer";

export function DrawerTrigger(props: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger {...props} />;
}
DrawerTrigger.displayName = "Drawer.Trigger";

export function DrawerOverlay({ className, ...rest }: DrawerOverlayProps) {
  return <DrawerPrimitive.Backdrop {...rest} className={cn(drawerOverlayVariants(), className)} />;
}
DrawerOverlay.displayName = "Drawer.Overlay";

export function DrawerPositioner({
  variant = "default",
  className,
  ...rest
}: DrawerPositionerProps) {
  return (
    <DrawerPrimitive.Positioner
      {...rest}
      className={cn(drawerPositionerVariants({ variant }), className)}
    />
  );
}
DrawerPositioner.displayName = "Drawer.Positioner";

const SWIPE_DIRECTION_TO_PLACEMENT = {
  down: "down",
  end: "right",
  start: "left",
  up: "up",
} as const;

export function DrawerContent({
  variant = "default",
  className,
  children,
  ...rest
}: DrawerContentProps) {
  const { testId } = useDrawer() ?? {};

  return (
    <Portal>
      <DrawerOverlay />
      <DrawerPrimitive.Context>
        {({ swipeDirection }) => (
          <DrawerPositioner variant={variant}>
            <DrawerPrimitive.Content
              {...rest}
              className={cn(
                drawerContentVariants({
                  placement: SWIPE_DIRECTION_TO_PLACEMENT[swipeDirection],
                  variant,
                }),
                className,
              )}
              data-testid={testId}
            >
              <DrawerGrabber />

              {children}
            </DrawerPrimitive.Content>
          </DrawerPositioner>
        )}
      </DrawerPrimitive.Context>
    </Portal>
  );
}
DrawerContent.displayName = "Drawer.Content";

export function DrawerContentInner({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(drawerContentInnerVariants(), className)}
      data-part="content-inner"
      data-scope="drawer"
    />
  );
}
DrawerContentInner.displayName = "Drawer.ContentInner";

export function DrawerGrabber({ className, ...rest }: DrawerGrabberProps) {
  return (
    <ark.div className={drawerInlineVariants()}>
      <DrawerPrimitive.Grabber {...rest} className={cn(drawerGrabberVariants(), className)}>
        <DrawerPrimitive.GrabberIndicator className={drawerGrabberIndicatorVariants()} />
      </DrawerPrimitive.Grabber>
    </ark.div>
  );
}
DrawerGrabber.displayName = "Drawer.Grabber";

export function DrawerHeader({
  className,
  title,
  description,
  children,
  ...rest
}: DrawerHeaderProps) {
  return (
    <ark.div
      {...rest}
      className={cn(drawerHeaderVariants(), className)}
      data-part="header"
      data-scope="drawer"
    >
      {!!title && <DrawerTitle>{title}</DrawerTitle>}

      {!!description && <DrawerDescription>{description}</DrawerDescription>}

      {children}
    </ark.div>
  );
}
DrawerHeader.displayName = "Drawer.Header";

export function DrawerTitle({ className, ...rest }: DrawerTitleProps) {
  return <DrawerPrimitive.Title {...rest} className={cn(drawerTitleVariants(), className)} />;
}
DrawerTitle.displayName = "Drawer.Title";

export function DrawerDescription({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(drawerDescriptionVariants(), className)}
      data-part="description"
      data-scope="drawer"
    />
  );
}
DrawerDescription.displayName = "Drawer.Description";

export function DrawerBody({ scrollFade = false, className, ...rest }: DrawerBodyProps) {
  return (
    <ScrollArea scrollFade={scrollFade}>
      <ark.div
        {...rest}
        className={cn(drawerBodyVariants(), className)}
        data-part="body"
        data-scope="drawer"
      />
    </ScrollArea>
  );
}
DrawerBody.displayName = "Drawer.Body";

export function DrawerClose(props: DrawerCloseProps) {
  return <DrawerPrimitive.CloseTrigger {...props} />;
}
DrawerClose.displayName = "Drawer.Close";

export function DrawerFooter({ className, ...rest }: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...rest}
      className={cn(drawerFooterVariants(), className)}
      data-part="footer"
      data-scope="drawer"
    />
  );
}
DrawerFooter.displayName = "Drawer.Footer";
// #endregion
