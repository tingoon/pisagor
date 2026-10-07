import type {
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
  CarouselRootProps as CarouselPrimitiveRootProps,
} from "@ark-ui/react/carousel";
import { Carousel as CarouselPrimitive } from "@ark-ui/react/carousel";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import type { CarouselProps as BaseCarouselRootProps } from "@pisagor/props";
import { carouselRecipe } from "@pisagor/recipes";
import type { FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../utils";
import { Button } from "./button";

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
  spacing = "16px",
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
        aria-label="Previous"
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
        aria-label="Next"
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

export const CarouselIndicatorGroup = withContext(
  CarouselPrimitive.IndicatorGroup,
  {
    name: "IndicatorGroup",
  },
);

export const CarouselIndicator = withContext(CarouselPrimitive.Indicator, {
  name: "Indicator",
});

export const CarouselItemGroup = withContext(CarouselPrimitive.ItemGroup, {
  name: "ItemGroup",
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
  Control: CarouselControl,
  Indicator: CarouselIndicator,
  IndicatorGroup: CarouselIndicatorGroup,
  Item: CarouselItem,
  ItemGroup: CarouselItemGroup,
  NextTrigger: CarouselNextTrigger,
  PrevTrigger: CarouselPrevTrigger,
  Root: CarouselRoot,
});
