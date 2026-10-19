import { Button, Carousel } from "@pisagor/solid";
import { CaretLeftIcon, CaretRightIcon } from "@squidlab/phosphor-solid/icons";
import { imageSources } from "./helpers";

export function ThumbnailIndicator() {
  const slides = imageSources();

  return (
    <Carousel.Root loop slideCount={slides.length}>
      <Carousel.Control class="relative">
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
