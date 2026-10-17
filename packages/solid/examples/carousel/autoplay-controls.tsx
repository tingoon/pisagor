import source from "./autoplay-controls.tsx?raw";
import { Carousel } from "@pisagor/solid";
import { For } from "solid-js";
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
        <For each={slides}>
          {(slide, index) => (
            <Carousel.Item index={index()}>{slide.content}</Carousel.Item>
          )}
        </For>
      </Carousel.ItemGroup>
    </Carousel.Root>
  );
}

export { source as AutoplayControlsSource };
