import { Button, Carousel } from "@pisagor/solid";
import { CaretLeftIcon, CaretRightIcon } from "@squidlab/phosphor-solid/icons";
import { numberedSlides } from "./helpers";

export function Compound() {
  const slides = numberedSlides(8);

  return (
    <Carousel.Root slideCount={slides.length}>
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
        {slides.map((slide, index) => (
          <Carousel.Item index={index}>{slide.content}</Carousel.Item>
        ))}
      </Carousel.ItemGroup>
    </Carousel.Root>
  );
}
