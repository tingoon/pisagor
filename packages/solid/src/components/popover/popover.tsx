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
import { popoverRecipe } from "@pisagor/recipes/popover";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { XIcon } from "../../internal/icons";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";
import { PopoverContentContext, usePopoverContent } from "./popover.context";

export interface PopoverContentProps extends PopoverPrimitiveContentProps {
  showCloseButton?: boolean;
  recipe?: typeof popoverRecipe;
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
  const [local, rest] = splitProps(props, ["showCloseButton", "children", "recipe", "class"]);
  const slots = () => (local.recipe ?? popoverRecipe)();

  return (
    <Portal>
      <PopoverPositioner>
        <PopoverContentContext value={{ slots: slots() }}>
          <PopoverPrimitive.Content {...rest} class={slots().base({ class: cn(local.class) })}>
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
        </PopoverContentContext>
      </PopoverPositioner>
    </Portal>
  );
}

export function PopoverHeader(props: PopoverHeaderProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "description", "title", "class"]);
  const { slots } = usePopoverContent();

  return (
    <ark.div
      {...rest}
      class={slots.header({ class: cn(local.class) })}
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

export function PopoverTitle(props: PopoverTitleProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = usePopoverContent();
  return <PopoverPrimitive.Title {...rest} class={slots.title({ class: cn(local.class) })} />;
}

export function PopoverDescription(props: PopoverDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = usePopoverContent();
  return (
    <PopoverPrimitive.Description {...rest} class={slots.description({ class: cn(local.class) })} />
  );
}

export function PopoverBody(props: PopoverBodyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = usePopoverContent();

  return (
    <ScrollArea>
      <ark.div
        {...rest}
        class={slots.body({ class: cn(local.class) })}
        data-part="body"
        data-scope="popover"
      />
    </ScrollArea>
  );
}

export function PopoverFooter(props: PopoverFooterProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = usePopoverContent();
  return (
    <ark.div
      {...rest}
      class={slots.footer({ class: cn(local.class) })}
      data-part="footer"
      data-scope="popover"
    />
  );
}

export function PopoverCloseTrigger(props: PopoverCloseTriggerProps): JSX.Element {
  return <PopoverPrimitive.CloseTrigger {...props} />;
}

export function PopoverArrow(props: PopoverArrowProps): JSX.Element {
  const [local, rest] = splitProps(props, ["style"]);
  const { slots } = usePopoverContent();
  return (
    <PopoverPrimitive.Arrow
      {...rest}
      style={{
        "--arrow-background": "var(--popover)",
        "--arrow-size": "calc(1.5 * var(--spacing))",
        ...(typeof local.style === "object" && local.style !== null ? local.style : {}),
      }}
    >
      <PopoverPrimitive.ArrowTip class={slots.arrowTip()} />
    </PopoverPrimitive.Arrow>
  );
}
