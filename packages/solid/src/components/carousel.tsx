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
import type { CarouselProps as BaseCarouselRootProps } from "@pisagor/props";
import { carouselRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { CaretLeftIcon, CaretRightIcon } from "../internal/icons";
import { Button } from "./button";

// #region Context
const {
  useStyles: useCarousel,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "Carousel", recipe: carouselRecipe });
// #endregion

export interface CarouselRootProps
  extends CarouselPrimitiveRootProps,
    BaseCarouselRootProps {}

interface CarouselPresetItem {
  content: JSX.Element;
  key?: string;
}

export interface CarouselProps
  extends Omit<CarouselRootProps, "children" | "slideCount"> {
  slides?: CarouselPresetItem[];
}

const CarouselRootBase: Component<CarouselRootProps> = withProvider(
  CarouselPrimitive.Root,
  { name: "Root", slot: "base" },
);

export function CarouselRoot(props: CarouselRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "spacing"]);

  return (
    <CarouselRootBase {...rest} spacing={local.spacing ?? "16px"}>
      {local.children}
    </CarouselRootBase>
  );
}

export const CarouselControl: Component<CarouselControlProps> = withContext(
  CarouselPrimitive.Control,
  { name: "Control" },
);

export function CarouselPrevTrigger(
  props: CarouselPrevTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useCarousel();
  return (
    <CarouselPrimitive.PrevTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({
            class: styles.slots.prevTrigger({ class: local.class }),
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
  const styles = useCarousel();
  return (
    <CarouselPrimitive.NextTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({
            class: styles.slots.nextTrigger({ class: local.class }),
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

export const CarouselIndicatorGroup: Component<CarouselIndicatorGroupProps> =
  withContext(CarouselPrimitive.IndicatorGroup, {
    defaultProps: { "data-part": "indicator-group" },
    name: "IndicatorGroup",
    slot: "indicatorGroup",
  });

export const CarouselIndicator: Component<CarouselIndicatorProps> = withContext(
  CarouselPrimitive.Indicator,
  { name: "Indicator" },
);

export const CarouselItemGroup: Component<CarouselItemGroupProps> = withContext(
  CarouselPrimitive.ItemGroup,
  {
    defaultProps: { "data-part": "item-group" },
    name: "ItemGroup",
    slot: "itemGroup",
  },
);

export const CarouselItem: Component<CarouselItemProps> = withContext(
  CarouselPrimitive.Item,
  { name: "Item" },
);

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

export type {
  CarouselControlProps,
  CarouselIndicatorGroupProps,
  CarouselIndicatorProps,
  CarouselItemGroupProps,
  CarouselItemProps,
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
} from "@ark-ui/solid/carousel";

export const Carousel = Object.assign(CarouselShorthand, {
  Control: CarouselControl,
  Indicator: CarouselIndicator,
  IndicatorGroup: CarouselIndicatorGroup,
  Item: CarouselItem,
  ItemGroup: CarouselItemGroup,
  NextTrigger: CarouselNextTrigger,
  PrevTrigger: CarouselPrevTrigger,
  Root: CarouselRoot,
});
