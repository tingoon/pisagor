import {
  Carousel as CarouselPrimitive,
  useCarouselContext,
} from "@ark-ui/solid";
import type {
  CarouselAutoplayIndicatorProps,
  CarouselAutoplayTriggerProps,
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
import { For, splitProps } from "solid-js";
import {
  CaretLeftIcon,
  CaretRightIcon,
  createSlotRecipeContext,
} from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
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

const CarouselPrevTriggerBase = withContext<CarouselPrevTriggerProps>(
  CarouselPrimitive.PrevTrigger,
  { name: "PrevTrigger" },
);

/**
 * Previous trigger with a localized default `aria-label`; pass your button /
 * icon.
 */
export function CarouselPrevTrigger(
  props: CarouselPrevTriggerProps,
): JSX.Element {
  const { m } = useLocale();

  return (
    <CarouselPrevTriggerBase aria-label={m("carousel.previous")} {...props} />
  );
}

const CarouselNextTriggerBase = withContext<CarouselNextTriggerProps>(
  CarouselPrimitive.NextTrigger,
  { name: "NextTrigger" },
);

/** Next trigger with a localized default `aria-label`; pass your button / icon. */
export function CarouselNextTrigger(
  props: CarouselNextTriggerProps,
): JSX.Element {
  const { m } = useLocale();

  return <CarouselNextTriggerBase aria-label={m("carousel.next")} {...props} />;
}

const CarouselAutoplayTriggerBase = withContext<CarouselAutoplayTriggerProps>(
  CarouselPrimitive.AutoplayTrigger,
  { name: "AutoplayTrigger" },
);

/** Autoplay trigger with a localized play / pause `aria-label`. */
export function CarouselAutoplayTrigger(
  props: CarouselAutoplayTriggerProps,
): JSX.Element {
  const { m } = useLocale();
  const carousel = useCarouselContext();

  return (
    <CarouselAutoplayTriggerBase
      aria-label={m(carousel().isPlaying ? "carousel.pause" : "carousel.play")}
      {...props}
    />
  );
}

/** Shows `children` while playing and `fallback` while paused. */
export const CarouselAutoplayIndicator =
  withContext<CarouselAutoplayIndicatorProps>(
    CarouselPrimitive.AutoplayIndicator,
    { name: "AutoplayIndicator" },
  );

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
        <CarouselPrevTrigger
          asChild={(triggerProps) => (
            <Button
              {...triggerProps()}
              clickEffect={false}
              pill
              size="icon-md"
              variant="outline"
            >
              <CaretLeftIcon aria-hidden />
            </Button>
          )}
        />
        <CarouselNextTrigger
          asChild={(triggerProps) => (
            <Button
              {...triggerProps()}
              clickEffect={false}
              pill
              size="icon-md"
              variant="outline"
            >
              <CaretRightIcon aria-hidden />
            </Button>
          )}
        />
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
  CarouselAutoplayIndicatorProps,
  CarouselAutoplayTriggerProps,
  CarouselControlProps,
  CarouselIndicatorGroupProps,
  CarouselIndicatorProps,
  CarouselItemGroupProps,
  CarouselItemProps,
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
} from "@ark-ui/solid";

export const Carousel = Object.assign(CarouselShorthand, {
  AutoplayIndicator: CarouselAutoplayIndicator,
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
