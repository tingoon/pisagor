import { Carousel as CarouselPrimitive } from "@ark-ui/react/carousel";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import {
  carouselControlVariants,
  carouselGroupVariants,
  carouselIndicatorGroupVariants,
  carouselIndicatorVariants,
  carouselItemVariants,
  carouselNextVariants,
  carouselPreviousVariants,
  carouselVariants,
} from "@pisagor/styles/ui/carousel";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";
import { Button } from "../button";

// #region Types
export type CarouselControlProps = ComponentProps<typeof CarouselPrimitive.Control>;

export type CarouselPreviousProps = ComponentProps<typeof CarouselPrimitive.PrevTrigger>;

export type CarouselNextProps = ComponentProps<typeof CarouselPrimitive.NextTrigger>;

export type CarouselIndicatorGroupProps = ComponentProps<typeof CarouselPrimitive.IndicatorGroup>;

export type CarouselIndicatorProps = ComponentProps<typeof CarouselPrimitive.Indicator>;

export type CarouselContentProps = ComponentProps<typeof CarouselPrimitive.ItemGroup>;

export type CarouselItemProps = ComponentProps<typeof CarouselPrimitive.Item>;

export type CarouselRootProps = Omit<ComponentProps<typeof CarouselPrimitive.Root>, "slideCount"> &
  WithTestId;

export interface CarouselProps extends CarouselRootProps {
  /**
   * Shorthand to render a preset layout with controls, items, and indicators.
   *
   * @remarks
   * When provided, `children` is ignored. Prefer compound composition for custom layouts.
   * `slideCount` is inferred from `slides.length` when shorthand is used.
   */
  slides?: Array<{ content: ReactNode; key?: string }>;
  slideCount?: number;
}
// #endregion

// #region Parts
export function CarouselRoot({
  spacing = "16px",
  className,
  slides,
  children,
  slideCount,
  testId,
  ...rest
}: CarouselProps) {
  const computedSlideCount = slides ? slides.length : (slideCount ?? 0);

  return (
    <CarouselPrimitive.Root
      {...rest}
      className={cn(carouselVariants(), className)}
      data-testid={testId}
      slideCount={computedSlideCount}
      spacing={spacing}
    >
      {slides ? (
        <>
          <CarouselControl>
            <CarouselPrevious />
            <CarouselNext />
          </CarouselControl>

          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem index={index} key={slide.key ?? String(index)}>
                {slide.content}
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselIndicatorGroup>
            {slides.map((slide, index) => (
              <CarouselIndicator index={index} key={slide.key ?? String(index)} />
            ))}
          </CarouselIndicatorGroup>
        </>
      ) : (
        children
      )}
    </CarouselPrimitive.Root>
  );
}
CarouselRoot.displayName = "Carousel";

export function CarouselControl({ className, ...rest }: CarouselControlProps) {
  return (
    <CarouselPrimitive.Control {...rest} className={cn(carouselControlVariants(), className)} />
  );
}
CarouselControl.displayName = "Carousel.Control";

export function CarouselPrevious({ className, ...rest }: CarouselPreviousProps) {
  return (
    <CarouselPrimitive.PrevTrigger
      {...rest}
      asChild
      className={cn(carouselPreviousVariants(), className)}
    >
      <Button aria-label="Previous" clickEffect={false} pill size="icon-md" variant="outline">
        <CaretLeftIcon aria-hidden />
      </Button>
    </CarouselPrimitive.PrevTrigger>
  );
}
CarouselPrevious.displayName = "Carousel.Previous";

export function CarouselNext({ className, ...rest }: CarouselNextProps) {
  return (
    <CarouselPrimitive.NextTrigger
      {...rest}
      asChild
      className={cn(carouselNextVariants(), className)}
    >
      <Button aria-label="Next" clickEffect={false} pill size="icon-md" variant="outline">
        <CaretRightIcon aria-hidden />
      </Button>
    </CarouselPrimitive.NextTrigger>
  );
}
CarouselNext.displayName = "Carousel.Next";

export function CarouselIndicatorGroup({ className, ...rest }: CarouselIndicatorGroupProps) {
  return (
    <CarouselPrimitive.IndicatorGroup
      {...rest}
      className={cn(carouselIndicatorGroupVariants(), className)}
    />
  );
}
CarouselIndicatorGroup.displayName = "Carousel.IndicatorGroup";

export function CarouselIndicator({ className, ...rest }: CarouselIndicatorProps) {
  return (
    <CarouselPrimitive.Indicator {...rest} className={cn(carouselIndicatorVariants(), className)} />
  );
}
CarouselIndicator.displayName = "Carousel.Indicator";

export function CarouselContent({ className, ...rest }: CarouselContentProps) {
  return (
    <CarouselPrimitive.ItemGroup {...rest} className={cn(carouselGroupVariants(), className)} />
  );
}
CarouselContent.displayName = "Carousel.Content";

export function CarouselItem({ className, ...rest }: CarouselItemProps) {
  return <CarouselPrimitive.Item {...rest} className={cn(carouselItemVariants(), className)} />;
}
CarouselItem.displayName = "Carousel.Item";
// #endregion
