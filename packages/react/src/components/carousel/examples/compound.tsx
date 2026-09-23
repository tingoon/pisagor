import { Carousel } from "..";
import { numberedSlides } from "./helpers";

export function Compound() {
  const slides = numberedSlides(8);

  return (
    <Carousel.Root slideCount={slides.length}>
      <Carousel.Control>
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
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
