import type {
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerGrabberProps,
  DrawerContentProps as DrawerPrimitiveContentProps,
  DrawerPositionerProps as DrawerPrimitivePositionerProps,
  DrawerRootProps as DrawerPrimitiveRootProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "@ark-ui/solid/drawer";
import { Drawer as DrawerPrimitive } from "@ark-ui/solid/drawer";
import { ark } from "@ark-ui/solid/factory";
import type { DrawerProps as BaseDrawerRootProps } from "@pisagor/props";
import { type DrawerVariantProps, drawerRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { ScrollArea } from "./scroll-area";

// #region Context
const {
  Context: DrawerStylesContext,
  useStyles: useDrawer,
  withContext,
} = createSlotRecipeContext({ name: "Drawer", recipe: drawerRecipe });
// #endregion

export interface LocalDrawerRootProps
  extends DrawerPrimitiveRootProps,
    BaseDrawerRootProps {}

export type DrawerPositionerProps = DrawerPrimitivePositionerProps &
  Pick<DrawerVariantProps, "variant">;

export type DrawerContentProps = DrawerPrimitiveContentProps &
  Pick<DrawerVariantProps, "variant">;

export interface DrawerHeaderProps extends ComponentProps<typeof ark.div> {
  description?: string;
  title?: string;
}

export interface DrawerBodyProps extends ComponentProps<typeof ark.div> {
  scrollFade?: boolean;
}

export type DrawerContentInnerProps = ComponentProps<typeof ark.div>;
export type DrawerDescriptionProps = ComponentProps<typeof ark.div>;
export type DrawerFooterProps = ComponentProps<typeof ark.div>;

export function DrawerRoot(props: LocalDrawerRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe"]);
  const slots = createMemo(() => (local.recipe ?? drawerRecipe)());

  return (
    <DrawerStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <DrawerPrimitive.Root {...rest} />
    </DrawerStylesContext>
  );
}

export function DrawerTrigger(props: DrawerTriggerProps): JSX.Element {
  return <DrawerPrimitive.Trigger {...props} />;
}

export function DrawerBackdrop(props: DrawerBackdropProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useDrawer();

  return (
    <DrawerPrimitive.Backdrop
      {...rest}
      class={styles.slots.backdrop({ class: local.class })}
    />
  );
}

export function DrawerPositioner(props: DrawerPositionerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const styles = useDrawer();

  return (
    <DrawerPrimitive.Positioner
      {...rest}
      class={styles.slots.positioner({
        class: local.class,
        variant: local.variant ?? "default",
      })}
    />
  );
}

const SWIPE_DIRECTION_TO_PLACEMENT = {
  down: "down",
  end: "right",
  start: "left",
  up: "up",
} as const;

export function DrawerContent(props: DrawerContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "class"]);
  const styles = useDrawer();
  const variant = () => local.variant ?? "default";

  return (
    <Portal>
      <DrawerBackdrop />
      <DrawerPrimitive.Context>
        {(drawer) => (
          <DrawerPositioner variant={variant()}>
            <DrawerPrimitive.Content
              {...rest}
              class={styles.slots.content({
                class: local.class,
                placement:
                  SWIPE_DIRECTION_TO_PLACEMENT[drawer().swipeDirection],
                variant: variant(),
              })}
            >
              <DrawerGrabber />
              {local.children}
            </DrawerPrimitive.Content>
          </DrawerPositioner>
        )}
      </DrawerPrimitive.Context>
    </Portal>
  );
}

export function DrawerContentInner(
  props: DrawerContentInnerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useDrawer();

  return (
    <ark.div
      {...rest}
      class={styles.slots.contentInner({ class: local.class })}
      data-part="content-inner"
      data-scope="drawer"
    />
  );
}

export function DrawerGrabber(props: DrawerGrabberProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useDrawer();

  return (
    <ark.div class={styles.slots.grabberWrapper()}>
      <DrawerPrimitive.Grabber
        {...rest}
        class={styles.slots.grabber({ class: local.class })}
      >
        <DrawerPrimitive.GrabberIndicator class={styles.slots.grabberIcon()} />
      </DrawerPrimitive.Grabber>
    </ark.div>
  );
}

export function DrawerHeader(props: DrawerHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "description",
    "title",
    "class",
  ]);
  const styles = useDrawer();

  return (
    <ark.div
      {...rest}
      class={styles.slots.header({ class: local.class })}
      data-part="header"
      data-scope="drawer"
    >
      <Show when={!!local.title}>
        <DrawerTitle>{local.title}</DrawerTitle>
      </Show>
      <Show when={!!local.description}>
        <DrawerDescription>{local.description}</DrawerDescription>
      </Show>
      {local.children}
    </ark.div>
  );
}

export const DrawerTitle: Component<DrawerTitleProps> = withContext(
  DrawerPrimitive.Title,
  { name: "Title" },
);

export function DrawerDescription(props: DrawerDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useDrawer();

  return (
    <ark.div
      {...rest}
      class={styles.slots.description({ class: local.class })}
      data-part="description"
      data-scope="drawer"
    />
  );
}

export function DrawerBody(props: DrawerBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "class"]);
  const styles = useDrawer();

  return (
    <ScrollArea scrollFade={local.scrollFade ?? false}>
      <ark.div
        {...rest}
        class={styles.slots.body({ class: local.class })}
        data-part="body"
        data-scope="drawer"
      />
    </ScrollArea>
  );
}

export function DrawerCloseTrigger(
  props: DrawerCloseTriggerProps,
): JSX.Element {
  return <DrawerPrimitive.CloseTrigger {...props} />;
}

export function DrawerFooter(props: DrawerFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useDrawer();

  return (
    <ark.div
      {...rest}
      class={styles.slots.footer({ class: local.class })}
      data-part="footer"
      data-scope="drawer"
    />
  );
}

export type {
  DrawerBackdropProps,
  DrawerCloseTriggerProps,
  DrawerGrabberProps,
  DrawerRootProps,
  DrawerTitleProps,
  DrawerTriggerProps,
} from "@ark-ui/solid/drawer";

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
