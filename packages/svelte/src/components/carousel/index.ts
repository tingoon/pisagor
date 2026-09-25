import CarouselControl from "./carousel-control.svelte";
import CarouselIndicator from "./carousel-indicator.svelte";
import CarouselIndicatorGroup from "./carousel-indicator-group.svelte";
import CarouselItem from "./carousel-item.svelte";
import CarouselItemGroup from "./carousel-item-group.svelte";
import CarouselNextTrigger from "./carousel-next-trigger.svelte";
import CarouselPrevTrigger from "./carousel-prev-trigger.svelte";
import CarouselRoot from "./carousel-root.svelte";
import CarouselShorthand from "./carousel-shorthand.svelte";

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
