import {
  CaretLeftIcon,
  CaretRightIcon,
  PauseIcon,
  PlayIcon,
} from "@phosphor-icons/react";
import { Button, Carousel } from "@pisagor/react";
import { numberedSlides } from "./helpers";

export function AutoplayControls() {
  const slides = numberedSlides(8);

  return (
    <Carousel.Root autoplay loop slideCount={slides.length}>
      <Carousel.Control>
        <Carousel.PrevTrigger asChild>
          <Button clickEffect={false} pill size="icon-md" variant="outline">
            <CaretLeftIcon aria-hidden />
          </Button>
        </Carousel.PrevTrigger>
        <Carousel.AutoplayTrigger asChild>
          <Button clickEffect={false} pill size="icon-md" variant="outline">
            <Carousel.AutoplayIndicator fallback={<PlayIcon aria-hidden />}>
              <PauseIcon aria-hidden />
            </Carousel.AutoplayIndicator>
          </Button>
        </Carousel.AutoplayTrigger>
        <Carousel.ProgressText />
        <Carousel.NextTrigger asChild>
          <Button clickEffect={false} pill size="icon-md" variant="outline">
            <CaretRightIcon aria-hidden />
          </Button>
        </Carousel.NextTrigger>
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
