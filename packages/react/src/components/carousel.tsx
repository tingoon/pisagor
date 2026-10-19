import {
  Carousel as CarouselPrimitive,
  useCarouselContext,
} from "@ark-ui/react";
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
  CarouselProgressTextProps,
  CarouselRootProps as CarouselRootPrimitiveProps,
} from "@ark-ui/react";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import type {
  CarouselPresetItem as BaseCarouselPresetItem,
  CarouselRootContract,
  CarouselContract,
} from "@pisagor/contracts";
import { carouselRecipe } from "@pisagor/recipes";
import type { ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
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

const CarouselPrevTriggerBase = withContext<CarouselPrevTriggerProps>(
  CarouselPrimitive.PrevTrigger,
  { name: "PrevTrigger" },
);

/**
 * Previous trigger with a localized default `aria-label`; pass your button /
 * icon.
 */
export function CarouselPrevTrigger(props: CarouselPrevTriggerProps) {
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
export function CarouselNextTrigger(props: CarouselNextTriggerProps) {
  const { m } = useLocale();

  return <CarouselNextTriggerBase aria-label={m("carousel.next")} {...props} />;
}

const CarouselAutoplayTriggerBase = withContext<CarouselAutoplayTriggerProps>(
  CarouselPrimitive.AutoplayTrigger,
  { name: "AutoplayTrigger" },
);

/** Autoplay trigger with a localized play / pause `aria-label`. */
export function CarouselAutoplayTrigger(props: CarouselAutoplayTriggerProps) {
  const { m } = useLocale();
  const carousel = useCarouselContext();

  return (
    <CarouselAutoplayTriggerBase
      aria-label={m(carousel.isPlaying ? "carousel.pause" : "carousel.play")}
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
        <CarouselPrevTrigger asChild>
          <Button clickEffect={false} pill size="icon-md" variant="outline">
            <CaretLeftIcon aria-hidden />
          </Button>
        </CarouselPrevTrigger>
        <CarouselNextTrigger asChild>
          <Button clickEffect={false} pill size="icon-md" variant="outline">
            <CaretRightIcon aria-hidden />
          </Button>
        </CarouselNextTrigger>
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
CarouselAutoplayTrigger.displayName = "Carousel.AutoplayTrigger";

// #endregion

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
} from "@ark-ui/react";

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
