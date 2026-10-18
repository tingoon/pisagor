import { Drawer as DrawerPrimitive, Portal } from "@ark-ui/react";
import type {
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerContentProps as DrawerContentPrimitiveProps,
  DrawerGrabberProps,
  DrawerPositionerProps as DrawerPositionerPrimitiveProps,
  DrawerRootProps as DrawerRootPrimitiveProps,
  DrawerTriggerProps,
} from "@ark-ui/react";
import type {
  DrawerContract,
  DrawerHeaderContract,
  DrawerRootContract,
} from "@pisagor/props";
import { type DrawerVariantProps, drawerRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef } from "react";
import { createSlotRecipeContext } from "../internal";
import { ScrollArea } from "./scroll-area";

// #region Context
const {
  Context: DrawerStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({
  name: "Drawer",
  recipe: drawerRecipe,
});
// #endregion

// #region Types
export interface DrawerRootProps
  extends DrawerRootPrimitiveProps, DrawerRootContract {}

export type DrawerPositionerProps = DrawerPositionerPrimitiveProps &
  DrawerVariantProps;

export type DrawerContentProps = DrawerContentPrimitiveProps &
  DrawerVariantProps;

export interface DrawerHeaderProps
  extends Omit<ComponentPropsWithRef<"div">, "title">, DrawerHeaderContract {
  description?: string;
  title?: string;
}

export interface DrawerBodyProps extends ComponentPropsWithRef<"div"> {
  /**
   * Whether to add a fade effect to the scroll area.
   *
   * @defaultValue false
   */
  scrollFade?: boolean;
}

export type DrawerContentInnerProps = ComponentPropsWithRef<"div">;

export type DrawerDescriptionProps = ComponentProps<
  typeof DrawerPrimitive.Description
>;

export type DrawerFooterProps = ComponentPropsWithRef<"div">;

export interface DrawerProps extends DrawerRootProps, DrawerContract {}
// #endregion

// #region Parts
export function DrawerRoot({
  recipe = drawerRecipe,
  ...rest
}: DrawerRootProps) {
  const slots = recipe();

  return (
    <DrawerStylesContext value={{ slots, variants: {} as never }}>
      <DrawerPrimitive.Root {...rest} />
    </DrawerStylesContext>
  );
}

export function DrawerTrigger(props: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger {...props} />;
}

export function DrawerBackdrop({ className, ...rest }: DrawerBackdropProps) {
  const { slots } = useStyles();

  return (
    <DrawerPrimitive.Backdrop
      {...rest}
      className={slots.backdrop({ className })}
    />
  );
}

export function DrawerPositioner({
  variant = "default",
  className,
  ...rest
}: DrawerPositionerProps) {
  const { slots } = useStyles();

  return (
    <DrawerPrimitive.Positioner
      {...rest}
      className={slots.positioner({ className, variant })}
    />
  );
}

const SWIPE_DIRECTION_TO_PLACEMENT = {
  down: "bottom",
  end: "right",
  start: "left",
  up: "top",
} as const;

export function DrawerContent({
  variant = "default",
  children,
  className,
  ...rest
}: DrawerContentProps) {
  const { slots } = useStyles();

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

export function DrawerContentInner({
  className,
  ...rest
}: DrawerContentInnerProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.contentInner({ className })}
      data-part="content-inner"
      data-scope="drawer"
    />
  );
}

export function DrawerGrabber({ className, ...rest }: DrawerGrabberProps) {
  const { slots } = useStyles();

  return (
    <div className={slots.grabberWrapper()}>
      <DrawerPrimitive.Grabber
        {...rest}
        className={slots.grabber({ className })}
      >
        <DrawerPrimitive.GrabberIndicator className={slots.grabberIcon()} />
      </DrawerPrimitive.Grabber>
    </div>
  );
}

export function DrawerHeader({
  children,
  description,
  title,
  className,
  ...rest
}: DrawerHeaderProps) {
  const { slots } = useStyles();

  return (
    <div
      {...rest}
      className={slots.header({ className })}
      data-part="header"
      data-scope="drawer"
    >
      {!!title && <DrawerTitle>{title}</DrawerTitle>}

      {!!description && <DrawerDescription>{description}</DrawerDescription>}

      {children}
    </div>
  );
}

export const DrawerTitle = withContext(DrawerPrimitive.Title, {
  name: "Title",
});

export function DrawerDescription({
  className,
  ...rest
}: DrawerDescriptionProps) {
  const { slots } = useStyles();

  return (
    <DrawerPrimitive.Description
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="drawer"
    />
  );
}

export function DrawerBody({
  scrollFade = false,
  className,
  ...rest
}: DrawerBodyProps) {
  const { slots } = useStyles();

  return (
    <ScrollArea scrollFade={scrollFade}>
      <div
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
  const { slots } = useStyles();

  return (
    <div
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
DrawerDescription.displayName = "Drawer.Description";
DrawerBody.displayName = "Drawer.Body";
DrawerCloseTrigger.displayName = "Drawer.CloseTrigger";
DrawerFooter.displayName = "Drawer.Footer";

// #endregion

export type {
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerGrabberProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "@ark-ui/react";

export const Drawer = Object.assign(DrawerRoot, {
  Backdrop: DrawerBackdrop,
  Body: DrawerBody,
  CloseTrigger: DrawerCloseTrigger,
  Content: DrawerContent,
  ContentInner: DrawerContentInner,
  Description: DrawerDescription,
  Footer: DrawerFooter,
  Grabber: DrawerGrabber,
  Header: DrawerHeader,
  Positioner: DrawerPositioner,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
});
