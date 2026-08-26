import { Drawer as DrawerPrimitive } from "@ark-ui/react/drawer";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import {
  type DrawerContentVariantProps,
  type DrawerPositionerVariantProps,
  drawerBackdropVariants,
  drawerBodyVariants,
  drawerContentInnerVariants,
  drawerContentVariants,
  drawerDescriptionVariants,
  drawerFooterVariants,
  drawerGrabberVariants,
  drawerHeaderVariants,
  drawerPositionerVariants,
  drawerTitleVariants,
} from "@pisagor/styles/ui/drawer";
import type { ComponentProps } from "react";
import { ScrollArea } from "../scroll-area";

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

export interface DrawerRootProps extends ComponentProps<typeof DrawerPrimitive.Root> {}

export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;

export type DrawerBackdropProps = ComponentProps<typeof DrawerPrimitive.Backdrop>;

export type DrawerGrabberProps = ComponentProps<typeof DrawerPrimitive.Grabber>;

export type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;

export type DrawerCloseTriggerProps = ComponentProps<typeof DrawerPrimitive.CloseTrigger>;

export interface DrawerContentInnerProps extends ComponentProps<typeof ark.div> {}

export interface DrawerDescriptionProps extends ComponentProps<typeof ark.div> {}

export interface DrawerFooterProps extends ComponentProps<typeof ark.div> {}
// #endregion

// #region Parts
/**
 * Drawer root. `lazyMount` and `unmountOnExit` default to `false` because enabling
 * either option currently breaks swipe-to-dismiss in Ark Drawer.
 */
export function DrawerRoot({ lazyMount = false, unmountOnExit = false, ...rest }: DrawerRootProps) {
  return <DrawerPrimitive.Root lazyMount={lazyMount} unmountOnExit={unmountOnExit} {...rest} />;
}

export function DrawerTrigger(props: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger {...props} />;
}

export function DrawerBackdrop({ className, ...rest }: DrawerBackdropProps) {
  return <DrawerPrimitive.Backdrop {...rest} className={drawerBackdropVariants({ className })} />;
}

export function DrawerPositioner({
  variant = "default",
  className,
  ...rest
}: DrawerPositionerProps) {
  return (
    <DrawerPrimitive.Positioner
      {...rest}
      className={drawerPositionerVariants({ className, variant })}
    />
  );
}

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
  return (
    <Portal>
      <DrawerBackdrop />
      <DrawerPrimitive.Context>
        {({ swipeDirection }) => (
          <DrawerPositioner variant={variant}>
            <DrawerPrimitive.Content
              {...rest}
              className={drawerContentVariants({
                className,
                placement: SWIPE_DIRECTION_TO_PLACEMENT[swipeDirection],
                variant,
              })}
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

export function DrawerContentInner({ className, ...rest }: DrawerContentInnerProps) {
  return (
    <ark.div
      {...rest}
      className={drawerContentInnerVariants({ className })}
      data-part="content-inner"
      data-scope="drawer"
    />
  );
}

export function DrawerGrabber({ className, ...rest }: DrawerGrabberProps) {
  const slots = drawerGrabberVariants();

  return (
    <ark.div className={slots.wrapper()}>
      <DrawerPrimitive.Grabber {...rest} className={slots.base({ className })}>
        <DrawerPrimitive.GrabberIndicator className={slots.indicator()} />
      </DrawerPrimitive.Grabber>
    </ark.div>
  );
}

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
      className={drawerHeaderVariants({ className })}
      data-part="header"
      data-scope="drawer"
    >
      {!!title && <DrawerTitle>{title}</DrawerTitle>}

      {!!description && <DrawerDescription>{description}</DrawerDescription>}

      {children}
    </ark.div>
  );
}

export function DrawerTitle({ className, ...rest }: DrawerTitleProps) {
  return <DrawerPrimitive.Title {...rest} className={drawerTitleVariants({ className })} />;
}

export function DrawerDescription({ className, ...rest }: DrawerDescriptionProps) {
  return (
    <ark.div
      {...rest}
      className={drawerDescriptionVariants({ className })}
      data-part="description"
      data-scope="drawer"
    />
  );
}

export function DrawerBody({ scrollFade = false, className, ...rest }: DrawerBodyProps) {
  return (
    <ScrollArea scrollFade={scrollFade}>
      <ark.div
        {...rest}
        className={drawerBodyVariants({ className })}
        data-part="body"
        data-scope="drawer"
      />
    </ScrollArea>
  );
}

export function DrawerCloseTrigger(props: DrawerCloseTriggerProps) {
  return <DrawerPrimitive.CloseTrigger {...props} />;
}

export function DrawerFooter({ className, ...rest }: DrawerFooterProps) {
  return (
    <ark.div
      {...rest}
      className={drawerFooterVariants({ className })}
      data-part="footer"
      data-scope="drawer"
    />
  );
}
// #endregion

// #region Display Names
DrawerRoot.displayName = "Drawer";
DrawerTrigger.displayName = "Drawer.Trigger";
DrawerBackdrop.displayName = "Drawer.Backdrop";
DrawerPositioner.displayName = "Drawer.Positioner";
DrawerContent.displayName = "Drawer.Content";
DrawerContentInner.displayName = "Drawer.ContentInner";
DrawerGrabber.displayName = "Drawer.Grabber";
DrawerHeader.displayName = "Drawer.Header";
DrawerTitle.displayName = "Drawer.Title";
DrawerDescription.displayName = "Drawer.Description";
DrawerBody.displayName = "Drawer.Body";
DrawerCloseTrigger.displayName = "Drawer.CloseTrigger";
DrawerFooter.displayName = "Drawer.Footer";
// #endregion
