import { Carousel } from "@pisagor/react";
import { numberedSlides } from "./helpers";

export function AutoplayControls() {
  const slides = numberedSlides(8);

  return (
    <Carousel.Root autoplay loop slideCount={slides.length}>
      <Carousel.Control>
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.AutoplayTrigger />
        <Carousel.ProgressText />
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.ItemGroup>
        {slides.map((slide, index) => (
          <Carousel.Item index={index} key={slide.key}>
            {slide.content}
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  );
}
