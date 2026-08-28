import { useState } from "react";
import preview from "#/storybook/preview";
import { Card, Carousel } from "..";

const meta = preview.meta({
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component:
          "Steps through a set of slides or images so users can browse one item at a time without leaving the page.",
      },
    },
    metadata: {
      aliases: ["slideshow"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Control: Carousel.Control,
    Indicator: Carousel.Indicator,
    IndicatorGroup: Carousel.IndicatorGroup,
    Item: Carousel.Item,
    ItemGroup: Carousel.ItemGroup,
    NextTrigger: Carousel.NextTrigger,
    PrevTrigger: Carousel.PrevTrigger,
    Root: Carousel.Root,
  },
  title: "Components/Media/Carousel",
});

export const Default = meta.story({
  render: () => <Carousel slides={numberedSlides(8)} />,
});

export const Autoplay = meta.story({
  render: () => <Carousel autoplay loop slides={numberedSlides(8)} />,
});

export const Loop = meta.story({
  render: () => <Carousel autoplay loop slides={numberedSlides(4)} />,
});

export const MouseDrag = meta.story({
  render: () => <Carousel allowMouseDrag slides={numberedSlides(8)} />,
});

export const OrientationHorizontal = meta.story({
  render: () => <Carousel slides={imageSlides()} />,
});

export const OrientationVertical = meta.story({
  render: () => <Carousel className="h-40" orientation="vertical" slides={imageSlides()} />,
});

export const Spacing = meta.story({
  render: () => <Carousel slides={numberedSlides(8)} slidesPerPage={2} spacing="64px" />,
});

export const SlidesPerPage = meta.story({
  render: () => (
    <Carousel
      slides={Array.from({ length: 16 }, (_, slideIndex) => ({
        content: (
          <Card>
            <Card.Content className="flex h-40 items-center justify-center">
              <span className="font-semibold text-2xl">{slideIndex + 1}</span>
            </Card.Content>
          </Card>
        ),
        key: `slide-${slideIndex + 1}`,
      }))}
      slidesPerPage={3}
    />
  ),
});

export const ThumbnailIndicatorVertical = meta.story({
  render: () => {
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
  },
});

export const ThumbnailIndicator = meta.story({
  render: () => {
    const slides = imageSources();

    return (
      <Carousel.Root loop slideCount={slides.length}>
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
        <Carousel.IndicatorGroup className="mt-4">
          {slides.map((slide, index) => (
            <Carousel.Indicator className="size-10 rounded-md" index={index} key={slide.src}>
              <img alt={slide.alt} height={40} src={slide.src} width={40} />
            </Carousel.Indicator>
          ))}
        </Carousel.IndicatorGroup>
      </Carousel.Root>
    );
  },
});

export const Controlled = meta.story({
  render: () => {
    const [page, setPage] = useState(0);
    const slides = numberedSlides(8);

    return (
      <div className="flex flex-col gap-2">
        <Carousel onPageChange={({ page }) => setPage(page)} page={page} slides={slides} />
        <p className="text-center text-muted-foreground text-sm">Current page: {page + 1} of 5</p>
      </div>
    );
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Carousel.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => {
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
  },
});

function numberedSlides(count: number) {
  return Array.from({ length: count }, (_, slideIndex) => ({
    content: (
      <Card>
        <Card.Content className="flex aspect-square items-center justify-center">
          <span className="font-semibold text-4xl">{slideIndex + 1}</span>
        </Card.Content>
      </Card>
    ),
    key: `slide-${slideIndex + 1}`,
  }));
}

function imageSources() {
  return [
    { alt: "Nature landscape", src: "https://picsum.photos/seed/1/500/300" },
    { alt: "City skyline", src: "https://picsum.photos/seed/2/500/300" },
    { alt: "Mountain view", src: "https://picsum.photos/seed/3/500/300" },
    { alt: "Ocean sunset", src: "https://picsum.photos/seed/4/500/300" },
    { alt: "Forest path", src: "https://picsum.photos/seed/5/500/300" },
  ];
}

function imageSlides() {
  return imageSources().map((slide) => ({
    content: <img alt={slide.alt} height={300} src={slide.src} width={500} />,
    key: slide.src,
  }));
}
