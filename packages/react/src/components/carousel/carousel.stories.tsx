import { Card, Carousel } from "@pisagor/react";
import { useState } from "react";
import preview from "#/storybook/preview";

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
    Content: Carousel.Content,
    Control: Carousel.Control,
    Indicator: Carousel.Indicator,
    IndicatorGroup: Carousel.IndicatorGroup,
    Item: Carousel.Item,
    Next: Carousel.Next,
    Previous: Carousel.Previous,
  },
  title: "Components/Media/Carousel",
});

export const Default = meta.story({
  render: () => {
    const slides = Array.from({ length: 8 }, (_, slideIndex) => ({
      content: (
        <Card>
          <Card.Content className="flex aspect-square items-center justify-center">
            <span className="font-semibold text-4xl">{slideIndex + 1}</span>
          </Card.Content>
        </Card>
      ),
      key: `slide-${slideIndex + 1}`,
    }));

    return <Carousel slides={slides} />;
  },
});

export const Compound = meta.story({
  render: () => {
    const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);

    return (
      <Carousel slideCount={slides.length}>
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          {slides.map((slideId, index) => (
            <Carousel.Item index={index} key={slideId}>
              <Card>
                <Card.Content className="flex aspect-square items-center justify-center">
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel>
    );
  },
});

export const Autoplay = meta.story({
  render: () => {
    const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);

    return (
      <Carousel autoplay loop slideCount={slides.length}>
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          {slides.map((slideId, index) => (
            <Carousel.Item index={index} key={slideId}>
              <Card>
                <Card.Content className="flex aspect-square items-center justify-center">
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel>
    );
  },
});

export const Loop = meta.story({
  render: () => {
    const slides = Array.from({ length: 4 }, (_, slideIndex) => `slide-${slideIndex + 1}`);

    return (
      <Carousel autoplay loop slideCount={slides.length}>
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          {slides.map((slideId, index) => (
            <Carousel.Item index={index} key={slideId}>
              <Card>
                <Card.Content className="flex aspect-square items-center justify-center">
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel>
    );
  },
});

export const MouseDrag = meta.story({
  render: () => {
    const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);

    return (
      <Carousel allowMouseDrag slideCount={slides.length}>
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          {slides.map((slideId, index) => (
            <Carousel.Item index={index} key={slideId}>
              <Card>
                <Card.Content className="flex aspect-square items-center justify-center">
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel>
    );
  },
});

export const OrientationHorizontal = meta.story({
  render: () => {
    const slides = [
      { alt: "Nature landscape", src: "https://picsum.photos/seed/1/500/300" },
      { alt: "City skyline", src: "https://picsum.photos/seed/2/500/300" },
      { alt: "Mountain view", src: "https://picsum.photos/seed/3/500/300" },
      { alt: "Ocean sunset", src: "https://picsum.photos/seed/4/500/300" },
      { alt: "Forest path", src: "https://picsum.photos/seed/5/500/300" },
    ];

    return (
      <Carousel slideCount={slides.length}>
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          {slides.map((slide, index) => (
            <Carousel.Item index={index} key={slide.src}>
              <img alt={slide.alt} height={300} src={slide.src} width={500} />
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel>
    );
  },
});

export const OrientationVertical = meta.story({
  render: () => {
    const slides = [
      { alt: "Nature landscape", src: "https://picsum.photos/seed/1/500/300" },
      { alt: "City skyline", src: "https://picsum.photos/seed/2/500/300" },
      { alt: "Mountain view", src: "https://picsum.photos/seed/3/500/300" },
      { alt: "Ocean sunset", src: "https://picsum.photos/seed/4/500/300" },
      { alt: "Forest path", src: "https://picsum.photos/seed/5/500/300" },
    ];

    return (
      <Carousel className="h-40" orientation="vertical" slideCount={slides.length}>
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          {slides.map((slide, index) => (
            <Carousel.Item index={index} key={slide.src}>
              <img alt={slide.alt} height={300} src={slide.src} width={500} />
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel>
    );
  },
});

export const Spacing = meta.story({
  render: () => {
    const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);

    return (
      <Carousel slideCount={slides.length} slidesPerPage={2} spacing="64px">
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          {slides.map((slideId, index) => (
            <Carousel.Item index={index} key={slideId}>
              <Card>
                <Card.Content className="flex aspect-square items-center justify-center">
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel>
    );
  },
});

export const SlidesPerPage = meta.story({
  render: () => {
    const slides = Array.from({ length: 16 }, (_, slideIndex) => `slide-${slideIndex + 1}`);

    return (
      <Carousel slideCount={slides.length} slidesPerPage={3}>
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          {slides.map((slideId, index) => (
            <Carousel.Item index={index} key={slideId}>
              <Card>
                <Card.Content className="flex h-40 items-center justify-center">
                  <span className="font-semibold text-2xl">{index + 1}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel.Content>
      </Carousel>
    );
  },
});

export const ThumbnailIndicatorVertical = meta.story({
  render: () => {
    const slides = [
      { alt: "Nature landscape", src: "https://picsum.photos/seed/1/500/300" },
      { alt: "City skyline", src: "https://picsum.photos/seed/2/500/300" },
      { alt: "Mountain view", src: "https://picsum.photos/seed/3/500/300" },
      { alt: "Ocean sunset", src: "https://picsum.photos/seed/4/500/300" },
      { alt: "Forest path", src: "https://picsum.photos/seed/5/500/300" },
    ];

    return (
      <Carousel className="h-40" loop orientation="vertical" slideCount={slides.length}>
        <Carousel.Control className="relative">
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>

          <Carousel.Content>
            {slides.map((slide, index) => (
              <Carousel.Item index={index} key={slide.src}>
                <img alt={slide.alt} height={300} src={slide.src} width={500} />
              </Carousel.Item>
            ))}
          </Carousel.Content>
        </Carousel.Control>
        <Carousel.IndicatorGroup className="ml-4">
          {slides.map((slide) => (
            <Carousel.Indicator
              className="size-10 rounded-md"
              index={slides.indexOf(slide)}
              key={slide.src}
            >
              <img alt={slide.alt} height={40} src={slide.src} width={40} />
            </Carousel.Indicator>
          ))}
        </Carousel.IndicatorGroup>
      </Carousel>
    );
  },
});

export const ThumbnailIndicator = meta.story({
  render: () => {
    const slides = [
      { alt: "Nature landscape", src: "https://picsum.photos/seed/1/500/300" },
      { alt: "City skyline", src: "https://picsum.photos/seed/2/500/300" },
      { alt: "Mountain view", src: "https://picsum.photos/seed/3/500/300" },
      { alt: "Ocean sunset", src: "https://picsum.photos/seed/4/500/300" },
      { alt: "Forest path", src: "https://picsum.photos/seed/5/500/300" },
    ];

    return (
      <Carousel loop slideCount={slides.length}>
        <Carousel.Control className="relative">
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>

          <Carousel.Content>
            {slides.map((slide, index) => (
              <Carousel.Item index={index} key={slide.src}>
                <img alt={slide.alt} height={300} src={slide.src} width={500} />
              </Carousel.Item>
            ))}
          </Carousel.Content>
        </Carousel.Control>
        <Carousel.IndicatorGroup className="mt-4">
          {slides.map((slide) => (
            <Carousel.Indicator
              className="size-10 rounded-md"
              index={slides.indexOf(slide)}
              key={slide.src}
            >
              <img alt={slide.alt} height={40} src={slide.src} width={40} />
            </Carousel.Indicator>
          ))}
        </Carousel.IndicatorGroup>
      </Carousel>
    );
  },
});

export const Controlled = meta.story({
  render: () => {
    const [page, setPage] = useState(0);

    const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);

    return (
      <div className="flex flex-col gap-2">
        <Carousel onPageChange={({ page }) => setPage(page)} page={page} slideCount={slides.length}>
          <Carousel.Control>
            <Carousel.Previous>Previous</Carousel.Previous>
            <Carousel.Next>Next</Carousel.Next>
          </Carousel.Control>
          <Carousel.Content>
            {slides.map((slideId, index) => (
              <Carousel.Item index={index} key={slideId}>
                <Card>
                  <Card.Content className="flex aspect-square items-center justify-center">
                    <span className="font-semibold text-4xl">{index + 1}</span>
                  </Card.Content>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel.Content>
        </Carousel>
        <p className="text-center text-muted-foreground text-sm">Current page: {page + 1} of 5</p>
      </div>
    );
  },
});
