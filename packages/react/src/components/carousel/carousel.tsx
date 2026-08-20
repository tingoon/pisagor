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
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";
import { Button } from "../button";

// #region Types
interface CarouselPresetItem {
  content: ReactNode;
  key?: string;
}

export type CarouselControlProps = ComponentProps<typeof CarouselPrimitive.Control>;

export type CarouselPreviousProps = ComponentProps<typeof CarouselPrimitive.PrevTrigger>;

export type CarouselNextProps = ComponentProps<typeof CarouselPrimitive.NextTrigger>;

export type CarouselIndicatorGroupProps = ComponentProps<typeof CarouselPrimitive.IndicatorGroup>;

export type CarouselIndicatorProps = ComponentProps<typeof CarouselPrimitive.Indicator>;

export type CarouselContentProps = ComponentProps<typeof CarouselPrimitive.ItemGroup>;

export type CarouselItemProps = ComponentProps<typeof CarouselPrimitive.Item>;

export type CarouselRootProps = ComponentProps<typeof CarouselPrimitive.Root> & WithTestId;

export interface CarouselProps extends Omit<CarouselRootProps, "children" | "slideCount"> {
  slides?: CarouselPresetItem[];
}
// #endregion

// #region Parts
export function CarouselRoot({
  spacing = "16px",
  className,
  children,
  testId,
  ...rest
}: CarouselRootProps) {
  return (
    <CarouselPrimitive.Root
      {...rest}
      className={carouselVariants({ className })}
      data-testid={testId}
      spacing={spacing}
    >
      {children}
    </CarouselPrimitive.Root>
  );
}

export function CarouselControl({ className, ...rest }: CarouselControlProps) {
  return <CarouselPrimitive.Control {...rest} className={carouselControlVariants({ className })} />;
}

export function CarouselPrevious({ className, ...rest }: CarouselPreviousProps) {
  return (
    <CarouselPrimitive.PrevTrigger
      {...rest}
      asChild
      className={carouselPreviousVariants({ className })}
    >
      <Button aria-label="Previous" clickEffect={false} pill size="icon-md" variant="outline">
        <CaretLeftIcon aria-hidden />
      </Button>
    </CarouselPrimitive.PrevTrigger>
  );
}

export function CarouselNext({ className, ...rest }: CarouselNextProps) {
  return (
    <CarouselPrimitive.NextTrigger
      {...rest}
      asChild
      className={carouselNextVariants({ className })}
    >
      <Button aria-label="Next" clickEffect={false} pill size="icon-md" variant="outline">
        <CaretRightIcon aria-hidden />
      </Button>
    </CarouselPrimitive.NextTrigger>
  );
}

export function CarouselIndicatorGroup({ className, ...rest }: CarouselIndicatorGroupProps) {
  return (
    <CarouselPrimitive.IndicatorGroup
      {...rest}
      className={carouselIndicatorGroupVariants({ className })}
    />
  );
}

export function CarouselIndicator({ className, ...rest }: CarouselIndicatorProps) {
  return (
    <CarouselPrimitive.Indicator {...rest} className={carouselIndicatorVariants({ className })} />
  );
}

export function CarouselContent({ className, ...rest }: CarouselContentProps) {
  return <CarouselPrimitive.ItemGroup {...rest} className={carouselGroupVariants({ className })} />;
}

export function CarouselItem({ className, ...rest }: CarouselItemProps) {
  return <CarouselPrimitive.Item {...rest} className={carouselItemVariants({ className })} />;
}
// #endregion

// #region Shorthand
export function CarouselShorthand({ slides = [], ...rest }: CarouselProps) {
  return (
    <CarouselRoot {...rest} slideCount={slides.length}>
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
    </CarouselRoot>
  );
}
// #endregion

// #region Display Names
CarouselRoot.displayName = "Carousel.Root";
CarouselControl.displayName = "Carousel.Control";
CarouselPrevious.displayName = "Carousel.Previous";
CarouselNext.displayName = "Carousel.Next";
CarouselIndicatorGroup.displayName = "Carousel.IndicatorGroup";
CarouselIndicator.displayName = "Carousel.Indicator";
CarouselContent.displayName = "Carousel.Content";
CarouselItem.displayName = "Carousel.Item";
CarouselShorthand.displayName = "Carousel";
// #endregion
