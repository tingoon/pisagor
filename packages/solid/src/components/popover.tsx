import { ark } from "@ark-ui/solid/factory";
import type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverCloseTriggerProps,
  PopoverDescriptionProps,
  PopoverPositionerProps,
  PopoverContentProps as PopoverPrimitiveContentProps,
  PopoverRootProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "@ark-ui/solid/popover";
import { Popover as PopoverPrimitive } from "@ark-ui/solid/popover";
import type { PopoverProps as BasePopoverContentProps } from "@pisagor/props";
import { popoverRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { XIcon } from "../internal/icons";
import { Button } from "./button";
import { ScrollArea } from "./scroll-area";

// #region Context
const {
  Context: PopoverStylesContext,
  useStyles: usePopover,
  withContext,
} = createSlotRecipeContext({
  name: "Popover",
  recipe: popoverRecipe,
});
// #endregion

export interface PopoverContentProps
  extends PopoverPrimitiveContentProps,
    BasePopoverContentProps {
  showCloseButton?: boolean;
}

export interface PopoverHeaderProps extends ComponentProps<typeof ark.div> {
  description?: string;
  title?: string;
}

export type PopoverBodyProps = ComponentProps<typeof ark.div>;
export type PopoverFooterProps = ComponentProps<typeof ark.div>;

export function PopoverRoot(props: PopoverRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["modal"]);
  return <PopoverPrimitive.Root {...rest} modal={local.modal ?? false} />;
}

export function PopoverTrigger(props: PopoverTriggerProps): JSX.Element {
  return <PopoverPrimitive.Trigger {...props} />;
}

export function PopoverAnchor(props: PopoverAnchorProps): JSX.Element {
  return <PopoverPrimitive.Anchor {...props} />;
}

export function PopoverPositioner(props: PopoverPositionerProps): JSX.Element {
  return <PopoverPrimitive.Positioner {...props} />;
}

export function PopoverContent(props: PopoverContentProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "showCloseButton",
    "children",
    "recipe",
    "class",
  ]);
  const slots = createMemo(() => (local.recipe ?? popoverRecipe)());

  return (
    <Portal>
      <PopoverPositioner>
        <PopoverStylesContext
          value={{
            get slots() {
              return slots();
            },
            variants: {},
          }}
        >
          <PopoverPrimitive.Content
            {...rest}
            class={slots().base({ class: local.class })}
          >
            {local.children}
            <Show when={local.showCloseButton}>
              <PopoverCloseTrigger
                asChild={(triggerProps) => (
                  <Button
                    {...triggerProps({ class: slots().close() })}
                    aria-label="Close"
                    size="icon-sm"
                    variant="ghost"
                  >
                    <XIcon />
                  </Button>
                )}
              />
            </Show>
          </PopoverPrimitive.Content>
        </PopoverStylesContext>
      </PopoverPositioner>
    </Portal>
  );
}

export function PopoverHeader(props: PopoverHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "description",
    "title",
    "class",
  ]);
  const styles = usePopover();

  return (
    <ark.div
      {...rest}
      class={styles.slots.header({ class: local.class })}
      data-part="header"
      data-scope="popover"
    >
      <Show when={local.title}>
        <PopoverTitle>{local.title}</PopoverTitle>
      </Show>
      <Show when={local.description}>
        <PopoverDescription>{local.description}</PopoverDescription>
      </Show>
      {local.children}
    </ark.div>
  );
}

export const PopoverTitle: Component<PopoverTitleProps> = withContext(
  PopoverPrimitive.Title,
  { name: "Title" },
);

export const PopoverDescription: Component<PopoverDescriptionProps> =
  withContext(PopoverPrimitive.Description, { name: "Description" });

/** Body wraps its content in a ScrollArea. */
export function PopoverBody(props: PopoverBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = usePopover();

  return (
    <ScrollArea>
      <ark.div
        {...rest}
        class={styles.slots.body({ class: local.class })}
        data-part="body"
        data-scope="popover"
      />
    </ScrollArea>
  );
}

export const PopoverFooter = withContext(ark.div, { name: "Footer" });

export function PopoverCloseTrigger(
  props: PopoverCloseTriggerProps,
): JSX.Element {
  return <PopoverPrimitive.CloseTrigger {...props} />;
}

export function PopoverArrow(props: PopoverArrowProps): JSX.Element {
  const [local, rest] = splitProps(props, ["style"]);
  const styles = usePopover();
  return (
    <PopoverPrimitive.Arrow
      {...rest}
      style={{
        "--arrow-background": "var(--popover)",
        "--arrow-size": "calc(1.5 * var(--spacing))",
        ...(typeof local.style === "object" && local.style !== null
          ? local.style
          : {}),
      }}
    >
      <PopoverPrimitive.ArrowTip class={styles.slots.arrowTip()} />
    </PopoverPrimitive.Arrow>
  );
}

export type {
  PopoverAnchorProps,
  PopoverArrowProps,
  PopoverCloseTriggerProps,
  PopoverDescriptionProps,
  PopoverPositionerProps,
  PopoverRootProps,
  PopoverTitleProps,
  PopoverTriggerProps,
} from "@ark-ui/solid/popover";

export const Popover = Object.assign(PopoverRoot, {
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  Body: PopoverBody,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Footer: PopoverFooter,
  Header: PopoverHeader,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
});
