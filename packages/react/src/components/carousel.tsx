import {
  Carousel as CarouselPrimitive,
  useCarouselContext,
} from "@ark-ui/react";
import type {
  CarouselControlProps,
  CarouselIndicatorGroupProps,
  CarouselIndicatorProps,
  CarouselItemGroupProps,
  CarouselItemProps,
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
  CarouselProgressTextProps,
  CarouselRootProps as CarouselRootPrimitiveProps,
} from "@ark-ui/react";
import {
  CaretLeftIcon,
  CaretRightIcon,
  PauseIcon,
  PlayIcon,
} from "@phosphor-icons/react";
import type {
  CarouselPresetItem as BaseCarouselPresetItem,
  CarouselRootContract,
  CarouselContract,
} from "@pisagor/contracts";
import { carouselRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Carousel",
  recipe: carouselRecipe,
});
// #endregion

// #region Types
export type CarouselRootProps = CarouselRootPrimitiveProps &
  Omit<CarouselRootContract, "slides">;

interface CarouselPresetItem extends Omit<BaseCarouselPresetItem, "content"> {
  content: ReactNode;
}

export interface CarouselProps
  extends
    Omit<CarouselRootProps, "children" | "slideCount" | "recipe">,
    CarouselRootContract,
    CarouselContract {
  slides?: CarouselPresetItem[];
}
// #endregion

// #region Parts
const CarouselRootBase = withProvider<CarouselRootProps>(
  CarouselPrimitive.Root,
  { name: "Root" },
);

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

export const CarouselControl = withContext<CarouselControlProps>(
  CarouselPrimitive.Control,
  {
    name: "Control",
  },
);

export function CarouselPrevTrigger({
  className,
  ...rest
}: CarouselPrevTriggerProps) {
  const { m } = useLocale();
  const { slots } = useStyles();

  return (
    <CarouselPrimitive.PrevTrigger
      {...rest}
      asChild
      className={slots.prevTrigger({ className })}
    >
      <Button
        aria-label={m("carousel.previous")}
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
  const { m } = useLocale();
  const { slots } = useStyles();

  return (
    <CarouselPrimitive.NextTrigger
      {...rest}
      asChild
      className={slots.nextTrigger({ className })}
    >
      <Button
        aria-label={m("carousel.next")}
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
  const { m } = useLocale();
  const carousel = useCarouselContext();

  return (
    <CarouselPrimitive.AutoplayTrigger {...rest} asChild className={className}>
      <Button
        aria-label={m(carousel.isPlaying ? "carousel.pause" : "carousel.play")}
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

export const CarouselProgressText = withContext<CarouselProgressTextProps>(
  CarouselPrimitive.ProgressText,
  { name: "ProgressText" },
);

export const CarouselIndicatorGroup = withContext<CarouselIndicatorGroupProps>(
  CarouselPrimitive.IndicatorGroup,
  { name: "IndicatorGroup" },
);

export const CarouselIndicator = withContext<CarouselIndicatorProps>(
  CarouselPrimitive.Indicator,
  {
    name: "Indicator",
  },
);

export const CarouselItemGroup = withContext<CarouselItemGroupProps>(
  CarouselPrimitive.ItemGroup,
  { name: "ItemGroup" },
);

export const CarouselItem = withContext<CarouselItemProps>(
  CarouselPrimitive.Item,
  {
    name: "Item",
  },
);
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

// #endregion

export type {
  CarouselControlProps,
  CarouselIndicatorGroupProps,
  CarouselIndicatorProps,
  CarouselItemGroupProps,
  CarouselItemProps,
  CarouselNextTriggerProps,
  CarouselPrevTriggerProps,
} from "@ark-ui/react";

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
