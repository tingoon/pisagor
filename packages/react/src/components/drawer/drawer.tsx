import { Drawer as DrawerPrimitive } from "@ark-ui/react/drawer";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import {
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
import type { VariantProps } from "tailwind-variants";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils";
import { ScrollArea } from "../scroll-area";

// #region Variants

// #endregion

// #region Types
interface DrawerPositionerProps
  extends ComponentProps<typeof DrawerPrimitive.Positioner>,
    VariantProps<typeof drawerPositionerVariants> {}

interface DrawerContentProps
  extends ComponentProps<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerContentVariants> {}

interface DrawerHeaderProps extends ComponentProps<typeof ark.div> {
  /** The description of the drawer */
  description?: string;
  /** The title of the drawer */
  title?: string;
}

interface DrawerBodyProps extends ComponentProps<typeof ark.div> {
  /**
   * Whether to add a fade effect to the scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}

interface DrawerRootProps extends ComponentProps<typeof DrawerPrimitive.Root>, WithTestId {}

// #endregion

// #region Context
const [DrawerContext, useDrawer] = createContext<{ testId?: string }>({
  name: "Drawer",
  strict: false,
});

// #endregion

// #region Components
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

export function DrawerTrigger(props: ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger {...props} />;
}
DrawerTrigger.displayName = "Drawer.Trigger";

export function DrawerOverlay({
  className,
  ...rest
}: ComponentProps<typeof DrawerPrimitive.Backdrop>) {
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

export function DrawerGrabber({
  className,
  ...rest
}: ComponentProps<typeof DrawerPrimitive.Grabber>) {
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

export function DrawerTitle({ className, ...rest }: ComponentProps<typeof DrawerPrimitive.Title>) {
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

export function DrawerClose(props: ComponentProps<typeof DrawerPrimitive.CloseTrigger>) {
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
