import {
  Carousel as CarouselPrimitive,
  useCarouselContext,
} from "@ark-ui/solid";
import type {
  CarouselControlProps,
  CarouselIndicatorGroupProps,
  CarouselIndicatorProps,
  CarouselItemGroupProps,
  CarouselItemProps,
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
  CarouselRootProps as CarouselRootPrimitiveProps,
} from "@ark-ui/solid";
import type {
  CarouselPresetItem as BaseCarouselPresetItem,
  CarouselRootContract,
  CarouselContract,
} from "@pisagor/contracts";
import { carouselRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import {
  CaretLeftIcon,
  CaretRightIcon,
  PauseIcon,
  PlayIcon,
  createSlotRecipeContext,
} from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Carousel",
  recipe: carouselRecipe,
});
// #endregion

export type CarouselRootProps = CarouselRootPrimitiveProps &
  Omit<CarouselRootContract, "slides">;

interface CarouselPresetItem extends Omit<BaseCarouselPresetItem, "content"> {
  content: JSX.Element;
}

export interface CarouselProps
  extends
    Omit<CarouselRootProps, "children" | "slideCount" | "recipe">,
    CarouselRootContract,
    CarouselContract {
  slides?: CarouselPresetItem[];
}

const CarouselRootBase: Component<CarouselRootProps> =
  withProvider<CarouselRootContract>(CarouselPrimitive.Root, { name: "Root" });

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
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <CarouselPrimitive.PrevTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({
            class: styles.slots.prevTrigger({ class: local.class }),
          })}
          aria-label={m("carousel.previous")}
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
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <CarouselPrimitive.NextTrigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({
            class: styles.slots.nextTrigger({ class: local.class }),
          })}
          aria-label={m("carousel.next")}
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
  const { m } = useLocale();
  const carousel = useCarouselContext();

  return (
    <CarouselPrimitive.AutoplayTrigger
      {...props}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps()}
          aria-label={
            carousel().isPlaying ? m("carousel.pause") : m("carousel.play")
          }
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
> = withContext(CarouselPrimitive.ProgressText, { name: "ProgressText" });

export const CarouselIndicatorGroup: Component<CarouselIndicatorGroupProps> =
  withContext(CarouselPrimitive.IndicatorGroup, { name: "IndicatorGroup" });

export const CarouselIndicator: Component<CarouselIndicatorProps> = withContext(
  CarouselPrimitive.Indicator,
  { name: "Indicator" },
);

export const CarouselItemGroup: Component<CarouselItemGroupProps> = withContext(
  CarouselPrimitive.ItemGroup,
  { name: "ItemGroup" },
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
