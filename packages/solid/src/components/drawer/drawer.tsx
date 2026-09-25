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
import { type DrawerVariantProps, drawerRecipe } from "@pisagor/recipes/drawer";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { ScrollArea } from "../scroll-area";
import { DrawerContext, useDrawer } from "./drawer.context";

export interface DrawerRootProps extends DrawerPrimitiveRootProps {
  recipe?: typeof drawerRecipe;
}

export type DrawerPositionerProps = DrawerPrimitivePositionerProps &
  Pick<DrawerVariantProps, "variant">;

export type DrawerContentProps = DrawerPrimitiveContentProps & Pick<DrawerVariantProps, "variant">;

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

export function DrawerRoot(props: DrawerRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["recipe", "children"]);
  const slots = () => (local.recipe ?? drawerRecipe)();

  return (
    <DrawerContext value={{ slots: slots() }}>
      <DrawerPrimitive.Root {...rest}>{local.children}</DrawerPrimitive.Root>
    </DrawerContext>
  );
}

export function DrawerTrigger(props: DrawerTriggerProps): JSX.Element {
  return <DrawerPrimitive.Trigger {...props} />;
}

export function DrawerBackdrop(props: DrawerBackdropProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDrawer();
  return <DrawerPrimitive.Backdrop {...rest} class={slots.backdrop({ class: cn(local.class) })} />;
}

export function DrawerPositioner(props: DrawerPositionerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  const { slots } = useDrawer();

  return (
    <DrawerPrimitive.Positioner
      {...rest}
      class={slots.positioner({ class: cn(local.class), variant: local.variant ?? "default" })}
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
  const { slots } = useDrawer();
  const variant = () => local.variant ?? "default";

  return (
    <Portal>
      <DrawerBackdrop />
      <DrawerPrimitive.Context>
        {(drawer) => (
          <DrawerPositioner variant={variant()}>
            <DrawerPrimitive.Content
              {...rest}
              class={slots.content({
                class: cn(local.class),
                placement: SWIPE_DIRECTION_TO_PLACEMENT[drawer().swipeDirection],
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

export function DrawerContentInner(props: DrawerContentInnerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDrawer();

  return (
    <ark.div
      {...rest}
      class={slots.contentInner({ class: cn(local.class) })}
      data-part="content-inner"
      data-scope="drawer"
    />
  );
}

export function DrawerGrabber(props: DrawerGrabberProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDrawer();

  return (
    <ark.div class={slots.grabberWrapper()}>
      <DrawerPrimitive.Grabber {...rest} class={slots.grabber({ class: cn(local.class) })}>
        <DrawerPrimitive.GrabberIndicator class={slots.grabberIcon()} />
      </DrawerPrimitive.Grabber>
    </ark.div>
  );
}

export function DrawerHeader(props: DrawerHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "description", "title", "class"]);
  const { slots } = useDrawer();

  return (
    <ark.div
      {...rest}
      class={slots.header({ class: cn(local.class) })}
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

export function DrawerTitle(props: DrawerTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDrawer();
  return <DrawerPrimitive.Title {...rest} class={slots.title({ class: cn(local.class) })} />;
}

export function DrawerDescription(props: DrawerDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDrawer();

  return (
    <ark.div
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="description"
      data-scope="drawer"
    />
  );
}

export function DrawerBody(props: DrawerBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["scrollFade", "class"]);
  const { slots } = useDrawer();

  return (
    <ScrollArea scrollFade={local.scrollFade ?? false}>
      <ark.div
        {...rest}
        class={slots.body({ class: cn(local.class) })}
        data-part="body"
        data-scope="drawer"
      />
    </ScrollArea>
  );
}

export function DrawerCloseTrigger(props: DrawerCloseTriggerProps): JSX.Element {
  return <DrawerPrimitive.CloseTrigger {...props} />;
}

export function DrawerFooter(props: DrawerFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useDrawer();

  return (
    <ark.div
      {...rest}
      class={slots.footer({ class: cn(local.class) })}
      data-part="footer"
      data-scope="drawer"
    />
  );
}
