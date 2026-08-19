import {
  CarouselContent,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselRoot,
} from "./carousel";

export type { CarouselProps } from "./carousel";

export const Carousel = Object.assign(CarouselRoot, {
  Content: CarouselContent,
  Control: CarouselControl,
  Indicator: CarouselIndicator,
  IndicatorGroup: CarouselIndicatorGroup,
  Item: CarouselItem,
  Next: CarouselNext,
  Previous: CarouselPrevious,
});
