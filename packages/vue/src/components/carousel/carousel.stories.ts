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

export const Default = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      const slides = numberedCardSlides(8);
      return { slides };
    },
    template: `<Carousel :slides="slides" />`,
  }),
});

export const Compound = meta.story({
  render: () => ({
    components: { Card, Carousel },
    setup() {
      const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);
      return { slides };
    },
    template: `
      <Carousel :slide-count="slides.length">
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          <Carousel.Item v-for="(slideId, index) in slides" :index="index" :key="slideId">
            <Card>
              <Card.Content class="flex aspect-square items-center justify-center">
                <span class="font-semibold text-4xl">{{ index + 1 }}</span>
              </Card.Content>
            </Card>
          </Carousel.Item>
        </Carousel.Content>
      </Carousel>
    `,
  }),
});

export const Autoplay = meta.story({
  render: () => ({
    components: { Card, Carousel },
    setup() {
      const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);
      return { slides };
    },
    template: `
      <Carousel autoplay loop :slide-count="slides.length">
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          <Carousel.Item v-for="(slideId, index) in slides" :index="index" :key="slideId">
            <Card>
              <Card.Content class="flex aspect-square items-center justify-center">
                <span class="font-semibold text-4xl">{{ index + 1 }}</span>
              </Card.Content>
            </Card>
          </Carousel.Item>
        </Carousel.Content>
      </Carousel>
    `,
  }),
});

export const Loop = meta.story({
  render: () => ({
    components: { Card, Carousel },
    setup() {
      const slides = Array.from({ length: 4 }, (_, slideIndex) => `slide-${slideIndex + 1}`);
      return { slides };
    },
    template: `
      <Carousel autoplay loop :slide-count="slides.length">
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          <Carousel.Item v-for="(slideId, index) in slides" :index="index" :key="slideId">
            <Card>
              <Card.Content class="flex aspect-square items-center justify-center">
                <span class="font-semibold text-4xl">{{ index + 1 }}</span>
              </Card.Content>
            </Card>
          </Carousel.Item>
        </Carousel.Content>
      </Carousel>
    `,
  }),
});

export const MouseDrag = meta.story({
  render: () => ({
    components: { Card, Carousel },
    setup() {
      const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);
      return { slides };
    },
    template: `
      <Carousel allow-mouse-drag :slide-count="slides.length">
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          <Carousel.Item v-for="(slideId, index) in slides" :index="index" :key="slideId">
            <Card>
              <Card.Content class="flex aspect-square items-center justify-center">
                <span class="font-semibold text-4xl">{{ index + 1 }}</span>
              </Card.Content>
            </Card>
          </Carousel.Item>
        </Carousel.Content>
      </Carousel>
    `,
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      const slides = [
        { alt: "Nature landscape", src: "https://picsum.photos/seed/1/500/300" },
        { alt: "City skyline", src: "https://picsum.photos/seed/2/500/300" },
        { alt: "Mountain view", src: "https://picsum.photos/seed/3/500/300" },
        { alt: "Ocean sunset", src: "https://picsum.photos/seed/4/500/300" },
        { alt: "Forest path", src: "https://picsum.photos/seed/5/500/300" },
      ];
      return { slides };
    },
    template: `
      <Carousel :slide-count="slides.length">
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          <Carousel.Item v-for="(slide, index) in slides" :index="index" :key="slide.src">
            <img :alt="slide.alt" :height="300" :src="slide.src" :width="500" />
          </Carousel.Item>
        </Carousel.Content>
      </Carousel>
    `,
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      const slides = [
        { alt: "Nature landscape", src: "https://picsum.photos/seed/1/500/300" },
        { alt: "City skyline", src: "https://picsum.photos/seed/2/500/300" },
        { alt: "Mountain view", src: "https://picsum.photos/seed/3/500/300" },
        { alt: "Ocean sunset", src: "https://picsum.photos/seed/4/500/300" },
        { alt: "Forest path", src: "https://picsum.photos/seed/5/500/300" },
      ];
      return { slides };
    },
    template: `
      <Carousel class="h-40" orientation="vertical" :slide-count="slides.length">
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          <Carousel.Item v-for="(slide, index) in slides" :index="index" :key="slide.src">
            <img :alt="slide.alt" :height="300" :src="slide.src" :width="500" />
          </Carousel.Item>
        </Carousel.Content>
      </Carousel>
    `,
  }),
});

export const Spacing = meta.story({
  render: () => ({
    components: { Card, Carousel },
    setup() {
      const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);
      return { slides };
    },
    template: `
      <Carousel :slide-count="slides.length" :slides-per-page="2" spacing="64px">
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          <Carousel.Item v-for="(slideId, index) in slides" :index="index" :key="slideId">
            <Card>
              <Card.Content class="flex aspect-square items-center justify-center">
                <span class="font-semibold text-4xl">{{ index + 1 }}</span>
              </Card.Content>
            </Card>
          </Carousel.Item>
        </Carousel.Content>
      </Carousel>
    `,
  }),
});

export const SlidesPerPage = meta.story({
  render: () => ({
    components: { Card, Carousel },
    setup() {
      const slides = Array.from({ length: 16 }, (_, slideIndex) => `slide-${slideIndex + 1}`);
      return { slides };
    },
    template: `
      <Carousel :slide-count="slides.length" :slides-per-page="3">
        <Carousel.Control>
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>
        </Carousel.Control>
        <Carousel.Content>
          <Carousel.Item v-for="(slideId, index) in slides" :index="index" :key="slideId">
            <Card>
              <Card.Content class="flex h-40 items-center justify-center">
                <span class="font-semibold text-2xl">{{ index + 1 }}</span>
              </Card.Content>
            </Card>
          </Carousel.Item>
        </Carousel.Content>
      </Carousel>
    `,
  }),
});

export const ThumbnailIndicatorVertical = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      const slides = [
        { alt: "Nature landscape", src: "https://picsum.photos/seed/1/500/300" },
        { alt: "City skyline", src: "https://picsum.photos/seed/2/500/300" },
        { alt: "Mountain view", src: "https://picsum.photos/seed/3/500/300" },
        { alt: "Ocean sunset", src: "https://picsum.photos/seed/4/500/300" },
        { alt: "Forest path", src: "https://picsum.photos/seed/5/500/300" },
      ];
      return { slides };
    },
    template: `
      <Carousel class="h-40" loop orientation="vertical" :slide-count="slides.length">
        <Carousel.Control class="relative">
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>

          <Carousel.Content>
            <Carousel.Item v-for="(slide, index) in slides" :index="index" :key="slide.src">
              <img :alt="slide.alt" :height="300" :src="slide.src" :width="500" />
            </Carousel.Item>
          </Carousel.Content>
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
      </Carousel>
    `,
  }),
});

export const ThumbnailIndicator = meta.story({
  render: () => ({
    components: { Carousel },
    setup() {
      const slides = [
        { alt: "Nature landscape", src: "https://picsum.photos/seed/1/500/300" },
        { alt: "City skyline", src: "https://picsum.photos/seed/2/500/300" },
        { alt: "Mountain view", src: "https://picsum.photos/seed/3/500/300" },
        { alt: "Ocean sunset", src: "https://picsum.photos/seed/4/500/300" },
        { alt: "Forest path", src: "https://picsum.photos/seed/5/500/300" },
      ];
      return { slides };
    },
    template: `
      <Carousel loop :slide-count="slides.length">
        <Carousel.Control class="relative">
          <Carousel.Previous>Previous</Carousel.Previous>
          <Carousel.Next>Next</Carousel.Next>

          <Carousel.Content>
            <Carousel.Item v-for="(slide, index) in slides" :index="index" :key="slide.src">
              <img :alt="slide.alt" :height="300" :src="slide.src" :width="500" />
            </Carousel.Item>
          </Carousel.Content>
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
      </Carousel>
    `,
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Card, Carousel },
    setup() {
      const page = ref(0);
      const slides = Array.from({ length: 8 }, (_, slideIndex) => `slide-${slideIndex + 1}`);
      return { page, slides };
    },
    template: `
      <div class="flex flex-col gap-2">
        <Carousel v-model:page="page" :slide-count="slides.length">
          <Carousel.Control>
            <Carousel.Previous>Previous</Carousel.Previous>
            <Carousel.Next>Next</Carousel.Next>
          </Carousel.Control>
          <Carousel.Content>
            <Carousel.Item v-for="(slideId, index) in slides" :index="index" :key="slideId">
              <Card>
                <Card.Content class="flex aspect-square items-center justify-center">
                  <span class="font-semibold text-4xl">{{ index + 1 }}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>
          </Carousel.Content>
        </Carousel>
        <p class="text-center text-muted-foreground text-sm">Current page: {{ page + 1 }} of 5</p>
      </div>
    `,
  }),
});
