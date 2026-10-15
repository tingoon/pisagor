import type {
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
  CarouselRootProps as CarouselPrimitiveRootProps,
} from "@ark-ui/react/carousel";
import {
  Carousel as CarouselPrimitive,
  useCarouselContext,
} from "@ark-ui/react/carousel";
import {
  CaretLeftIcon,
  CaretRightIcon,
  PauseIcon,
  PlayIcon,
} from "@phosphor-icons/react";
import type { CarouselProps as BaseCarouselRootProps } from "@pisagor/props";
import { carouselRecipe } from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Button } from "./button";
import { getMessage } from "./provider/provider.context";

// #region Context
const {
  useStyles: useCarousel,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Carousel",
  recipe: carouselRecipe,
});
// #endregion

// #region Types
export interface CarouselRootProps
  extends CarouselPrimitiveRootProps,
    BaseCarouselRootProps {}

interface CarouselPresetItem {
  content: ReactNode;
  key?: string;
}

export interface CarouselProps
  extends Omit<CarouselRootProps, "children" | "slideCount"> {
  slides?: CarouselPresetItem[];
}
// #endregion

// #region Parts
const CarouselRootBase = withProvider(CarouselPrimitive.Root, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<CarouselRootProps>;

export function CarouselRoot({
  children,
  spacing = "calc(var(--spacing) * 4)",
  ...rest
}: CarouselRootProps) {
  return (
    <CarouselRootBase {...rest} spacing={spacing}>
      {children}
    </CarouselRootBase>
  );
}

export const CarouselControl = withContext(CarouselPrimitive.Control, {
  name: "Control",
});

export function CarouselPrevTrigger({
  className,
  ...rest
}: CarouselPrevTriggerProps) {
  const { slots } = useCarousel();

  return (
    <CarouselPrimitive.PrevTrigger
      {...rest}
      asChild
      className={slots.prevTrigger({ className })}
    >
      <Button
        aria-label={getMessage("carousel.previous")}
        clickEffect={false}
        pill
        size="icon-md"
        variant="outline"
      >
        <CaretLeftIcon aria-hidden />
      </Button>
    </CarouselPrimitive.PrevTrigger>
  );
}

export function CarouselNextTrigger({
  className,
  ...rest
}: CarouselNextTriggerProps) {
  const { slots } = useCarousel();

  return (
    <CarouselPrimitive.NextTrigger
      {...rest}
      asChild
      className={slots.nextTrigger({ className })}
    >
      <Button
        aria-label={getMessage("carousel.next")}
        clickEffect={false}
        pill
        size="icon-md"
        variant="outline"
      >
        <CaretRightIcon aria-hidden />
      </Button>
    </CarouselPrimitive.NextTrigger>
  );
}

export function CarouselAutoplayTrigger({
  className,
  ...rest
}: ComponentProps<typeof CarouselPrimitive.AutoplayTrigger>) {
  const carousel = useCarouselContext();

  return (
    <CarouselPrimitive.AutoplayTrigger {...rest} asChild className={className}>
      <Button
        aria-label={getMessage(
          carousel.isPlaying ? "carousel.pause" : "carousel.play",
        )}
        clickEffect={false}
        pill
        size="icon-md"
        variant="outline"
      >
        {carousel.isPlaying ? (
          <PauseIcon aria-hidden />
        ) : (
          <PlayIcon aria-hidden />
        )}
      </Button>
    </CarouselPrimitive.AutoplayTrigger>
  );
}

export const CarouselProgressText = withContext(
  CarouselPrimitive.ProgressText,
  {
    defaultProps: { "data-part": "progress-text" },
    name: "ProgressText",
    slot: "progressText",
  },
);

export const CarouselIndicatorGroup = withContext(
  CarouselPrimitive.IndicatorGroup,
  {
    defaultProps: { "data-part": "indicator-group" },
    name: "IndicatorGroup",
    slot: "indicatorGroup",
  },
);

export const CarouselIndicator = withContext(CarouselPrimitive.Indicator, {
  name: "Indicator",
});

export const CarouselItemGroup = withContext(CarouselPrimitive.ItemGroup, {
  defaultProps: { "data-part": "item-group" },
  name: "ItemGroup",
  slot: "itemGroup",
});

export const CarouselItem = withContext(CarouselPrimitive.Item, {
  name: "Item",
});
// #endregion

// #region Shorthand
export function CarouselShorthand({ slides = [], ...rest }: CarouselProps) {
  return (
    <CarouselRoot {...rest} slideCount={slides.length}>
      <CarouselControl>
        <CarouselPrevTrigger />
        <CarouselNextTrigger />
      </CarouselControl>

      <CarouselItemGroup>
        {slides.map((slide, index) => (
          <CarouselItem index={index} key={slide.key ?? String(index)}>
            {slide.content}
          </CarouselItem>
        ))}
      </CarouselItemGroup>

      <CarouselIndicatorGroup>
        {slides.map((slide, index) => (
          <CarouselIndicator index={index} key={slide.key ?? String(index)} />
        ))}
      </CarouselIndicatorGroup>
    </CarouselRoot>
  );
}
// #endregion

// #region Display Names
CarouselRoot.displayName = "Carousel.Root";
CarouselPrevTrigger.displayName = "Carousel.PrevTrigger";
CarouselNextTrigger.displayName = "Carousel.NextTrigger";
CarouselShorthand.displayName = "Carousel";

// #endregion

export type {
  CarouselControlProps,
  CarouselIndicatorGroupProps,
  CarouselIndicatorProps,
  CarouselItemGroupProps,
  CarouselItemProps,
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
} from "@ark-ui/react/carousel";

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
