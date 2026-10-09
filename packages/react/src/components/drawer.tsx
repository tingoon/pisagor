import type {
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerGrabberProps,
  DrawerContentProps as DrawerPrimitiveContentProps,
  DrawerPositionerProps as DrawerPrimitivePositionerProps,
  DrawerRootProps as DrawerPrimitiveRootProps,
  DrawerTriggerProps,
} from "@ark-ui/react/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/react/drawer";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import type { DrawerProps as BaseDrawerRootProps } from "@pisagor/props";
import { type DrawerVariantProps, drawerRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { ScrollArea } from "./scroll-area";

// #region Context
const {
  Context: DrawerStylesContext,
  useStyles: useDrawer,
  withContext,
} = createSlotRecipeContext({
  name: "Drawer",
  recipe: drawerRecipe,
});
// #endregion

// #region Types
export interface LocalDrawerRootProps
  extends DrawerPrimitiveRootProps,
    BaseDrawerRootProps {}

export type DrawerPositionerProps = DrawerPrimitivePositionerProps &
  Pick<DrawerVariantProps, "variant">;

export type DrawerContentProps = DrawerPrimitiveContentProps &
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

export type DrawerContentInnerProps = ComponentProps<typeof ark.div>;

export type DrawerDescriptionProps = ComponentProps<typeof ark.div>;

export type DrawerFooterProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export function DrawerRoot({
  recipe = drawerRecipe,
  ...rest
}: LocalDrawerRootProps) {
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
  const { slots } = useDrawer();

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
  const { slots } = useDrawer();

  return (
    <DrawerPrimitive.Positioner
      {...rest}
      className={slots.positioner({ className, variant })}
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

export function DrawerContentInner({
  className,
  ...rest
}: DrawerContentInnerProps) {
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
      <DrawerPrimitive.Grabber
        {...rest}
        className={slots.grabber({ className })}
      >
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

export const DrawerTitle = withContext(DrawerPrimitive.Title, {
  name: "Title",
});

export function DrawerDescription({
  className,
  ...rest
}: DrawerDescriptionProps) {
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

export function DrawerBody({
  scrollFade = false,
  className,
  ...rest
}: DrawerBodyProps) {
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
DrawerDescription.displayName = "Drawer.Description";
DrawerBody.displayName = "Drawer.Body";
DrawerCloseTrigger.displayName = "Drawer.CloseTrigger";
DrawerFooter.displayName = "Drawer.Footer";

// #endregion

export type {
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerGrabberProps,
  DrawerRootProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "@ark-ui/react/drawer";

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
