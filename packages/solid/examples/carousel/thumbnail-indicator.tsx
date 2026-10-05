import { Carousel } from "@pisagor/solid";
import { imageSources } from "./helpers";

export function ThumbnailIndicator() {
  const slides = imageSources();

  return (
    <Carousel.Root loop slideCount={slides.length}>
      <Carousel.Control class="relative">
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>

        <Carousel.ItemGroup>
          {slides.map((slide, index) => (
            <Carousel.Item index={index}>
              <img alt={slide.alt} height={300} src={slide.src} width={500} />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
      </Carousel.Control>
      <Carousel.IndicatorGroup class="mt-4">
        {slides.map((slide, index) => (
          <Carousel.Indicator class="size-10 rounded-md" index={index}>
            <img alt={slide.alt} height={40} src={slide.src} width={40} />
          </Carousel.Indicator>
        ))}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  );
}
