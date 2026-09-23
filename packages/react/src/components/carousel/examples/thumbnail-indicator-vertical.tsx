import { Carousel } from "..";
import { imageSources } from "./helpers";

export function ThumbnailIndicatorVertical() {
  const slides = imageSources();

  return (
    <Carousel.Root className="h-40" loop orientation="vertical" slideCount={slides.length}>
      <Carousel.Control className="relative">
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>

        <Carousel.ItemGroup>
          {slides.map((slide, index) => (
            <Carousel.Item index={index} key={slide.src}>
              <img alt={slide.alt} height={300} src={slide.src} width={500} />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
      </Carousel.Control>
      <Carousel.IndicatorGroup className="ml-4">
        {slides.map((slide, index) => (
          <Carousel.Indicator className="size-10 rounded-md" index={index} key={slide.src}>
            <img alt={slide.alt} height={40} src={slide.src} width={40} />
          </Carousel.Indicator>
        ))}
      </Carousel.IndicatorGroup>
    </Carousel.Root>
  );
}
