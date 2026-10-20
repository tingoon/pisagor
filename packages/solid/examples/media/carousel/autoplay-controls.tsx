import { Button, Carousel } from "@pisagor/solid";
import {
  CaretLeftIcon,
  CaretRightIcon,
  PauseIcon,
  PlayIcon,
} from "@squidlab/phosphor-solid/icons";
import { For } from "solid-js";
import { numberedSlides } from "./helpers";

export function AutoplayControls() {
  const slides = numberedSlides(8);

  return (
    <Carousel.Root autoplay loop slideCount={slides.length}>
      <Carousel.Control>
        <Carousel.PrevTrigger
          asChild={(triggerProps) => (
            <Button
              {...triggerProps()}
              clickEffect={false}
              pill
              size="icon-md"
              variant="outline"
            >
              <CaretLeftIcon aria-hidden />
            </Button>
          )}
        />
        <Carousel.AutoplayTrigger
          asChild={(triggerProps) => (
            <Button
              {...triggerProps()}
              clickEffect={false}
              pill
              size="icon-md"
              variant="outline"
            >
              <Carousel.AutoplayIndicator fallback={<PlayIcon aria-hidden />}>
                <PauseIcon aria-hidden />
              </Carousel.AutoplayIndicator>
            </Button>
          )}
        />
        <Carousel.ProgressText />
        <Carousel.NextTrigger
          asChild={(triggerProps) => (
            <Button
              {...triggerProps()}
              clickEffect={false}
              pill
              size="icon-md"
              variant="outline"
            >
              <CaretRightIcon aria-hidden />
            </Button>
          )}
        />
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
