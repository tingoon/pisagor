import type {
  CarouselControlProps,
  CarouselIndicatorGroupProps,
  CarouselIndicatorProps,
  CarouselItemGroupProps,
  CarouselItemProps,
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
  CarouselRootProps as CarouselPrimitiveRootProps,
} from "@ark-ui/solid/carousel";
import { Carousel as CarouselPrimitive } from "@ark-ui/solid/carousel";
import { carouselRecipe } from "@pisagor/recipes/carousel";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { CaretLeftIcon, CaretRightIcon } from "../../internal/icons";
import { Button } from "../button";
import { CarouselContext, useCarousel } from "./carousel.context";

export interface CarouselRootProps extends CarouselPrimitiveRootProps {
  recipe?: typeof carouselRecipe;
}

interface CarouselPresetItem {
  content: JSX.Element;
  key?: string;
}

export interface CarouselProps
  extends Omit<CarouselRootProps, "children" | "slideCount"> {
  slides?: CarouselPresetItem[];
}

export function CarouselRoot(props: CarouselRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "spacing",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? carouselRecipe)();

  return (
    <CarouselContext value={{ slots: slots() }}>
      <CarouselPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        spacing={local.spacing ?? "16px"}
      >
        {local.children}
      </CarouselPrimitive.Root>
    </CarouselContext>
  );
}

export function CarouselControl(props: CarouselControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCarousel();
  return (
    <CarouselPrimitive.Control
      {...rest}
      class={slots.control({ class: local.class })}
    />
  );
}

export function CarouselPrevTrigger(
  props: CarouselPrevTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCarousel();
  return (
    <CarouselPrimitive.PrevTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({
            class: slots.prevTrigger({ class: local.class }),
          })}
          aria-label="Previous"
          clickEffect={false}
          pill
          size="icon-md"
          variant="outline"
        >
          <CaretLeftIcon aria-hidden />
        </Button>
      )}
    />
  );
}

export function CarouselNextTrigger(
  props: CarouselNextTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCarousel();
  return (
    <CarouselPrimitive.NextTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({
            class: slots.nextTrigger({ class: local.class }),
          })}
          aria-label="Next"
          clickEffect={false}
          pill
          size="icon-md"
          variant="outline"
        >
          <CaretRightIcon aria-hidden />
        </Button>
      )}
    />
  );
}

export function CarouselIndicatorGroup(
  props: CarouselIndicatorGroupProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCarousel();
  return (
    <CarouselPrimitive.IndicatorGroup
      {...rest}
      class={slots.indicatorGroup({ class: local.class })}
    />
  );
}

export function CarouselIndicator(props: CarouselIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCarousel();
  return (
    <CarouselPrimitive.Indicator
      {...rest}
      class={slots.indicator({ class: local.class })}
    />
  );
}

export function CarouselItemGroup(props: CarouselItemGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCarousel();
  return (
    <CarouselPrimitive.ItemGroup
      {...rest}
      class={slots.itemGroup({ class: local.class })}
    />
  );
}

export function CarouselItem(props: CarouselItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useCarousel();
  return (
    <CarouselPrimitive.Item
      {...rest}
      class={slots.item({ class: local.class })}
    />
  );
}

export function CarouselShorthand(props: CarouselProps): JSX.Element {
  const [local, rest] = splitProps(props, ["slides"]);
  const slides = () => local.slides ?? [];

  return (
    <CarouselRoot {...rest} slideCount={slides().length}>
      <CarouselControl>
        <CarouselPrevTrigger />
        <CarouselNextTrigger />
      </CarouselControl>
      <CarouselItemGroup>
        <For each={slides()}>
          {(slide, index) => (
            <CarouselItem index={index()}>{slide.content}</CarouselItem>
          )}
        </For>
      </CarouselItemGroup>
      <CarouselIndicatorGroup>
        <For each={slides()}>
          {(_, index) => <CarouselIndicator index={index()} />}
        </For>
      </CarouselIndicatorGroup>
    </CarouselRoot>
  );
}
