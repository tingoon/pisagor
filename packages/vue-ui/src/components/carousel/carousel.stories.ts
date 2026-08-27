import { Card, Carousel } from "@pisagor/vue";
import { h, ref } from "vue";
import preview from "#/storybook/preview";

type ArkPart = Parameters<typeof h>[0];

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
  render: () => ({
    components: { Carousel },
    setup() {
      return { slides: numberedCardSlides(8) };
    },
    template: `<Carousel :slides="slides" />`,
  }),
});

export const Autoplay = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      return { slides: numberedCardSlides(8) };
    },
    template: `<Carousel autoplay loop :slides="slides" />`,
  }),
});

export const Loop = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      return { slides: numberedCardSlides(4) };
    },
    template: `<Carousel autoplay loop :slides="slides" />`,
  }),
});

export const MouseDrag = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      return { slides: numberedCardSlides(8) };
    },
    template: `<Carousel allow-mouse-drag :slides="slides" />`,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      return { slides: imageSlides() };
    },
    template: `<Carousel :slides="slides" />`,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      return { slides: imageSlides() };
    },
    template: `<Carousel class="h-40" orientation="vertical" :slides="slides" />`,
  }),
});

export const Spacing = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      return { slides: numberedCardSlides(8) };
    },
    template: `<Carousel :slides="slides" :slides-per-page="2" spacing="64px" />`,
  }),
});

export const SlidesPerPage = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      return {
        slides: Array.from({ length: 16 }, (_, slideIndex) => ({
          content: h(Card, null, () =>
            h(Card.Content as ArkPart, { class: "flex h-40 items-center justify-center" }, () =>
              h("span", { class: "font-semibold text-2xl" }, String(slideIndex + 1)),
            ),
          ),
          key: `slide-${slideIndex + 1}`,
        })),
      };
    },
    template: `<Carousel :slides="slides" :slides-per-page="3" />`,
  }),
});

export const ThumbnailIndicatorVertical = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      return { slides: imageSources() };
    },
    template: `
      <Carousel.Root class="h-40" loop orientation="vertical" :slide-count="slides.length">
        <Carousel.Control class="relative">
          <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
          <Carousel.NextTrigger>Next</Carousel.NextTrigger>

          <Carousel.ItemGroup>
            <Carousel.Item v-for="(slide, index) in slides" :index="index" :key="slide.src">
              <img :alt="slide.alt" :height="300" :src="slide.src" :width="500" />
            </Carousel.Item>
          </Carousel.ItemGroup>
        </Carousel.Control>
        <Carousel.IndicatorGroup class="ml-4">
          <Carousel.Indicator
            v-for="(slide, index) in slides"
            class="size-10 rounded-md"
            :index="index"
            :key="slide.src"
          >
            <img :alt="slide.alt" :height="40" :src="slide.src" :width="40" />
          </Carousel.Indicator>
        </Carousel.IndicatorGroup>
      </Carousel.Root>
    `,
  }),
});

export const ThumbnailIndicator = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      return { slides: imageSources() };
    },
    template: `
      <Carousel.Root loop :slide-count="slides.length">
        <Carousel.Control class="relative">
          <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
          <Carousel.NextTrigger>Next</Carousel.NextTrigger>

          <Carousel.ItemGroup>
            <Carousel.Item v-for="(slide, index) in slides" :index="index" :key="slide.src">
              <img :alt="slide.alt" :height="300" :src="slide.src" :width="500" />
            </Carousel.Item>
          </Carousel.ItemGroup>
        </Carousel.Control>
        <Carousel.IndicatorGroup class="mt-4">
          <Carousel.Indicator
            v-for="(slide, index) in slides"
            class="size-10 rounded-md"
            :index="index"
            :key="slide.src"
          >
            <img :alt="slide.alt" :height="40" :src="slide.src" :width="40" />
          </Carousel.Indicator>
        </Carousel.IndicatorGroup>
      </Carousel.Root>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      const page = ref(0);
      return { page, slides: numberedCardSlides(8) };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Carousel v-model:page="page" :slides="slides" />
        <p class="text-center text-muted-foreground text-sm">Current page: {{ page + 1 }} of 5</p>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Carousel.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => ({
    components: { Card, Carousel },
    setup() {
      const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);
      return { slides };
    },
    template: `
      <Carousel.Root :slide-count="slides.length">
        <Carousel.Control>
          <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
          <Carousel.NextTrigger>Next</Carousel.NextTrigger>
        </Carousel.Control>
        <Carousel.ItemGroup>
          <Carousel.Item v-for="(slideId, index) in slides" :index="index" :key="slideId">
            <Card>
              <Card.Content class="flex aspect-square items-center justify-center">
                <span class="font-semibold text-4xl">{{ index + 1 }}</span>
              </Card.Content>
            </Card>
          </Carousel.Item>
        </Carousel.ItemGroup>
      </Carousel.Root>
    `,
  }),
});

function numberedCardSlides(count: number) {
  return Array.from({ length: count }, (_, slideIndex) => ({
    content: h(Card, null, () =>
      h(Card.Content as ArkPart, { class: "flex aspect-square items-center justify-center" }, () =>
        h("span", { class: "font-semibold text-4xl" }, String(slideIndex + 1)),
      ),
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
    content: h("img", { alt: slide.alt, height: 300, src: slide.src, width: 500 }),
    key: slide.src,
  }));
}
