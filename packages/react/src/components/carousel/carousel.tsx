import { Carousel as CarouselPrimitive } from "@ark-ui/react/carousel";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { carouselRecipe } from "@pisagor/recipes/carousel";
import type { ComponentProps, ReactNode } from "react";
import { Button } from "../button";
import { CarouselContext, useCarousel } from "./carousel.context";

// #region Types
interface CarouselPresetItem {
  content: ReactNode;
  key?: string;
}

export type CarouselControlProps = ComponentProps<typeof CarouselPrimitive.Control>;

export type CarouselPrevTriggerProps = ComponentProps<typeof CarouselPrimitive.PrevTrigger>;

export type CarouselNextTriggerProps = ComponentProps<typeof CarouselPrimitive.NextTrigger>;

export type CarouselIndicatorGroupProps = ComponentProps<typeof CarouselPrimitive.IndicatorGroup>;

export type CarouselIndicatorProps = ComponentProps<typeof CarouselPrimitive.Indicator>;

export type CarouselItemGroupProps = ComponentProps<typeof CarouselPrimitive.ItemGroup>;

export type CarouselItemProps = ComponentProps<typeof CarouselPrimitive.Item>;

export type CarouselRootProps = ComponentProps<typeof CarouselPrimitive.Root>;

export interface CarouselProps extends Omit<CarouselRootProps, "children" | "slideCount"> {
  slides?: CarouselPresetItem[];
}
// #endregion

// #region Parts
export function CarouselRoot({
  children,
  spacing = "16px",
  className,
  ...rest
}: CarouselRootProps) {
  const slots = carouselRecipe();

  return (
    <CarouselContext value={{ slots }}>
      <CarouselPrimitive.Root {...rest} className={slots.base({ className })} spacing={spacing}>
        {children}
      </CarouselPrimitive.Root>
    </CarouselContext>
  );
}

export function CarouselControl({ className, ...rest }: CarouselControlProps) {
  const { slots } = useCarousel();

  return <CarouselPrimitive.Control {...rest} className={slots.control({ className })} />;
}

export function CarouselPrevTrigger({ className, ...rest }: CarouselPrevTriggerProps) {
  const { slots } = useCarousel();

  return (
    <CarouselPrimitive.PrevTrigger {...rest} asChild className={slots.prevTrigger({ className })}>
      <Button aria-label="Previous" clickEffect={false} pill size="icon-md" variant="outline">
        <CaretLeftIcon aria-hidden />
      </Button>
    </CarouselPrimitive.PrevTrigger>
  );
}

export function CarouselNextTrigger({ className, ...rest }: CarouselNextTriggerProps) {
  const { slots } = useCarousel();

  return (
    <CarouselPrimitive.NextTrigger {...rest} asChild className={slots.nextTrigger({ className })}>
      <Button aria-label="Next" clickEffect={false} pill size="icon-md" variant="outline">
        <CaretRightIcon aria-hidden />
      </Button>
    </CarouselPrimitive.NextTrigger>
  );
}

export function CarouselIndicatorGroup({ className, ...rest }: CarouselIndicatorGroupProps) {
  const { slots } = useCarousel();

  return (
    <CarouselPrimitive.IndicatorGroup {...rest} className={slots.indicatorGroup({ className })} />
  );
}

export function CarouselIndicator({ className, ...rest }: CarouselIndicatorProps) {
  const { slots } = useCarousel();

  return <CarouselPrimitive.Indicator {...rest} className={slots.indicator({ className })} />;
}

export function CarouselItemGroup({ className, ...rest }: CarouselItemGroupProps) {
  const { slots } = useCarousel();

  return <CarouselPrimitive.ItemGroup {...rest} className={slots.itemGroup({ className })} />;
}

export function CarouselItem({ className, ...rest }: CarouselItemProps) {
  const { slots } = useCarousel();

  return <CarouselPrimitive.Item {...rest} className={slots.item({ className })} />;
}
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
CarouselControl.displayName = "Carousel.Control";
CarouselPrevTrigger.displayName = "Carousel.PrevTrigger";
CarouselNextTrigger.displayName = "Carousel.NextTrigger";
CarouselIndicatorGroup.displayName = "Carousel.IndicatorGroup";
CarouselIndicator.displayName = "Carousel.Indicator";
CarouselItemGroup.displayName = "Carousel.ItemGroup";
CarouselItem.displayName = "Carousel.Item";
CarouselShorthand.displayName = "Carousel";
// #endregion
