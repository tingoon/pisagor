import {
  Carousel as CarouselPrimitive,
  type CarouselControlProps,
  type CarouselIndicatorGroupProps,
  type CarouselIndicatorProps,
  type CarouselItemGroupProps,
  type CarouselItemProps,
  type CarouselNextTriggerProps,
  type CarouselPrevTriggerProps,
  type CarouselRootProps as CarouselPrimitiveRootProps,
  useCarouselContext,
} from "@ark-ui/solid";
import type { CarouselProps as BaseCarouselRootProps } from "@pisagor/props";
import { carouselRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import {
  CaretLeftIcon,
  CaretRightIcon,
  PauseIcon,
  PlayIcon,
} from "../internal/icons";
import { Button } from "./button";
import { useTranslation } from "./provider/context";

// #region Context
const {
  useStyles: useCarousel,
  withContext,
  withProvider,
} = createSlotRecipeContext({ name: "Carousel", recipe: carouselRecipe });
// #endregion

export interface CarouselRootProps
  extends CarouselPrimitiveRootProps, BaseCarouselRootProps {}

interface CarouselPresetItem {
  content: JSX.Element;
  key?: string;
}

export interface CarouselProps extends Omit<
  CarouselRootProps,
  "children" | "slideCount"
> {
  slides?: CarouselPresetItem[];
}

const CarouselRootBase: Component<CarouselRootProps> = withProvider(
  CarouselPrimitive.Root,
  { name: "Root", slot: "base" },
);

export function CarouselRoot(props: CarouselRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "spacing"]);

  return (
    <CarouselRootBase
      {...rest}
      spacing={local.spacing ?? "calc(var(--spacing) * 4)"}
    >
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
          aria-label={useTranslation("carousel.previous")}
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
          aria-label={useTranslation("carousel.next")}
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

export function CarouselAutoplayTrigger(
  props: ComponentProps<typeof CarouselPrimitive.AutoplayTrigger>,
): JSX.Element {
  const carousel = useCarouselContext();
  const playLabel = useTranslation("carousel.play");
  const pauseLabel = useTranslation("carousel.pause");

  return (
    <CarouselPrimitive.AutoplayTrigger
      {...props}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps()}
          aria-label={carousel().isPlaying ? pauseLabel : playLabel}
          clickEffect={false}
          pill
          size="icon-md"
          variant="outline"
        >
          <Show fallback={<PlayIcon aria-hidden />} when={carousel().isPlaying}>
            <PauseIcon aria-hidden />
          </Show>
        </Button>
      )}
    />
  );
}

export const CarouselProgressText: Component<
  ComponentProps<typeof CarouselPrimitive.ProgressText>
> = withContext(CarouselPrimitive.ProgressText, {
  defaultProps: { "data-part": "progress-text" },
  name: "ProgressText",
  slot: "progressText",
});

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
} from "@ark-ui/solid";

export const Carousel = Object.assign(CarouselShorthand, {
  AutoplayTrigger: CarouselAutoplayTrigger,
  Control: CarouselControl,
  Indicator: CarouselIndicator,
  IndicatorGroup: CarouselIndicatorGroup,
  Item: CarouselItem,
  ItemGroup: CarouselItemGroup,
  NextTrigger: CarouselNextTrigger,
  PrevTrigger: CarouselPrevTrigger,
  ProgressText: CarouselProgressText,
  Root: CarouselRoot,
});
