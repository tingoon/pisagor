import { Drawer as DrawerPrimitive } from "@ark-ui/react/drawer";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { type DrawerVariantProps, drawerRecipe } from "@pisagor/recipes/drawer";
import type { ComponentProps } from "react";
import { ScrollArea } from "../scroll-area";
import { DrawerContext, useDrawer } from "./drawer.context";

// #region Types
export type DrawerPositionerProps = ComponentProps<typeof DrawerPrimitive.Positioner> &
  Pick<DrawerVariantProps, "variant">;

export type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content> &
  Pick<DrawerVariantProps, "variant">;

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

export type DrawerRootProps = ComponentProps<typeof DrawerPrimitive.Root>;

export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>;

export type DrawerBackdropProps = ComponentProps<typeof DrawerPrimitive.Backdrop>;

export type DrawerGrabberProps = ComponentProps<typeof DrawerPrimitive.Grabber>;

export type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>;

export type DrawerCloseTriggerProps = ComponentProps<typeof DrawerPrimitive.CloseTrigger>;

export type DrawerContentInnerProps = ComponentProps<typeof ark.div>;

export type DrawerDescriptionProps = ComponentProps<typeof ark.div>;

export type DrawerFooterProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function DrawerRoot(props: DrawerRootProps) {
  const slots = drawerRecipe();

  return (
    <DrawerContext value={{ slots }}>
      <DrawerPrimitive.Root {...props} />
    </DrawerContext>
  );
}

export function DrawerTrigger(props: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger {...props} />;
}

export function DrawerBackdrop({ className, ...rest }: DrawerBackdropProps) {
  const { slots } = useDrawer();

  return <DrawerPrimitive.Backdrop {...rest} className={slots.backdrop({ className })} />;
}

export function DrawerPositioner({
  variant = "default",
  className,
  ...rest
}: DrawerPositionerProps) {
  const { slots } = useDrawer();

  return (
    <DrawerPrimitive.Positioner {...rest} className={slots.positioner({ className, variant })} />
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
  children,
  className,
  ...rest
}: DrawerContentProps) {
  const { slots } = useDrawer();

  return (
    <Portal>
      <DrawerBackdrop />
      <DrawerPrimitive.Context>
        {({ swipeDirection }) => (
          <DrawerPositioner variant={variant}>
            <DrawerPrimitive.Content
              {...rest}
              className={slots.content({
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
  const { slots } = useDrawer();

  return (
    <ark.div
      {...rest}
      className={slots.contentInner({ className })}
      data-part="content-inner"
      data-scope="drawer"
    />
  );
}

export function DrawerGrabber({ className, ...rest }: DrawerGrabberProps) {
  const { slots } = useDrawer();

  return (
    <ark.div className={slots.grabberWrapper()}>
      <DrawerPrimitive.Grabber {...rest} className={slots.grabber({ className })}>
        <DrawerPrimitive.GrabberIndicator className={slots.grabberIcon()} />
      </DrawerPrimitive.Grabber>
    </ark.div>
  );
}

export function DrawerHeader({
  children,
  description,
  title,
  className,
  ...rest
}: DrawerHeaderProps) {
  const { slots } = useDrawer();

  return (
    <ark.div
      {...rest}
      className={slots.header({ className })}
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
  const { slots } = useDrawer();

  return <DrawerPrimitive.Title {...rest} className={slots.title({ className })} />;
}

export function DrawerDescription({ className, ...rest }: DrawerDescriptionProps) {
  const { slots } = useDrawer();

  return (
    <ark.div
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="drawer"
    />
  );
}

export function DrawerBody({ scrollFade = false, className, ...rest }: DrawerBodyProps) {
  const { slots } = useDrawer();

  return (
    <ScrollArea scrollFade={scrollFade}>
      <ark.div
        {...rest}
        className={slots.body({ className })}
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
  const { slots } = useDrawer();

  return (
    <ark.div
      {...rest}
      className={slots.footer({ className })}
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
