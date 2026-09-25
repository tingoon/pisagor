import type {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardRootProps as HoverCardPrimitiveRootProps,
  HoverCardTriggerProps,
} from "@ark-ui/solid/hover-card";
import { HoverCard as HoverCardPrimitive } from "@ark-ui/solid/hover-card";
import { hoverCardRecipe } from "@pisagor/recipes/hover-card";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { HoverCardContext, useHoverCard } from "./hover-card.context";

export interface HoverCardRootProps extends HoverCardPrimitiveRootProps {
  recipe?: typeof hoverCardRecipe;
}

export type HoverCardProps = HoverCardRootProps;

export function HoverCardRoot(props: HoverCardRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "closeDelay",
    "openDelay",
    "positioning",
    "children",
    "recipe",
  ]);
  const slots = () => (local.recipe ?? hoverCardRecipe)();

  return (
    <HoverCardContext value={{ slots: slots() }}>
      <HoverCardPrimitive.Root
        {...rest}
        closeDelay={local.closeDelay ?? 300}
        openDelay={local.openDelay ?? 600}
        positioning={local.positioning ?? { placement: "top" }}
      >
        {local.children}
      </HoverCardPrimitive.Root>
    </HoverCardContext>
  );
}

export function HoverCardTrigger(props: HoverCardTriggerProps): JSX.Element {
  return <HoverCardPrimitive.Trigger {...props} />;
}

export function HoverCardArrow(props: HoverCardArrowProps): JSX.Element {
  const [local, rest] = splitProps(props, ["style"]);
  const { slots } = useHoverCard();

  return (
    <HoverCardPrimitive.Arrow
      {...rest}
      style={{
        "--arrow-background": "var(--popover)",
        "--arrow-size": "calc(1.5 * var(--spacing))",
        ...(typeof local.style === "object" && local.style !== null ? local.style : {}),
      }}
    >
      <HoverCardPrimitive.ArrowTip class={slots.arrowTip()} />
    </HoverCardPrimitive.Arrow>
  );
}

export function HoverCardContent(props: HoverCardContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useHoverCard();

  return (
    <Portal>
      <HoverCardPrimitive.Positioner>
        <HoverCardPrimitive.Content {...rest} class={slots.content({ class: cn(local.class) })}>
          {local.children}
          <HoverCardArrow />
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Positioner>
    </Portal>
  );
}
