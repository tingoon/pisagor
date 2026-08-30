import {
  PhArrowRight,
  PhAtom,
  PhDeviceMobile,
  PhGlobe,
  PhLightning,
  PhRobot,
  PhSparkle,
  PhStack,
} from "@phosphor-icons/vue";
import { Card, Marquee } from "@pisagor/vue";
import { type Component, h } from "vue";
import preview from "#/storybook/preview";

type ArkPart = Parameters<typeof h>[0];

const marqueeIcons: Component[] = [
  PhGlobe,
  PhDeviceMobile,
  PhArrowRight,
  PhRobot,
  PhSparkle,
  PhLightning,
  PhStack,
  PhAtom,
];

const marqueeItems = marqueeIcons.map((IconComponent, index) =>
  h(Card as ArkPart, { class: "[--space:--spacing(8)]", key: index }, () =>
    h(Card.Content as ArkPart, null, () => h(IconComponent as ArkPart, { class: "size-10" })),
  ),
);

const meta = preview.meta({
  component: Marquee,
  parameters: {
    docs: {
      description: {
        component:
          "Scrolls content horizontally in a continuous loop for logos, quotes, or promotional strips.",
      },
    },
    metadata: {
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Content: Marquee.Content,
    Edge: Marquee.Edge,
    Item: Marquee.Item,
    Root: Marquee.Root,
  },
  title: "Components/Marketing/Marquee",
});

export const Default = meta.story({
  render: () => ({
    setup() {
      return () => h(Marquee as ArkPart, { items: marqueeItems });
    },
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    setup() {
      return () => h(Marquee as ArkPart, { items: marqueeItems, orientation: "horizontal" });
    },
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Marquee as ArkPart, {
          class: "max-h-80",
          items: marqueeIcons.map((IconComponent, index) =>
            h(Card as ArkPart, { key: index }, () =>
              h(Card.Content as ArkPart, { class: "flex justify-center" }, () =>
                h(IconComponent as ArkPart, { class: "size-10" }),
              ),
            ),
          ),
          orientation: "vertical",
        });
    },
  }),
});

export const PauseOnHover = meta.story({
  render: () => ({
    setup() {
      return () => h(Marquee as ArkPart, { items: marqueeItems, pauseOnInteraction: true });
    },
  }),
});

export const Reverse = meta.story({
  render: () => ({
    setup() {
      return () => h(Marquee as ArkPart, { items: marqueeItems, reverse: true });
    },
  }),
});

export const Spacing = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Marquee as ArkPart, {
          items: marqueeItems,
          pauseOnInteraction: true,
          spacing: "40px",
        });
    },
  }),
});

export const Autofill = meta.story({
  render: () => ({
    setup() {
      return () => h(Marquee as ArkPart, { autoFill: true, items: marqueeItems, speed: 100 });
    },
  }),
});

export const CustomSpeed = meta.story({
  render: () => ({
    setup() {
      return () => h(Marquee as ArkPart, { items: marqueeItems, speed: 10 });
    },
  }),
});

export const Fade = meta.story({
  render: () => ({
    setup() {
      return () =>
        h("div", { class: "flex w-full flex-col gap-2 overflow-hidden" }, [
          h(Marquee as ArkPart, {
            items: marqueeItems,
            pauseOnInteraction: true,
            showEdges: false,
          }),
          h(Marquee as ArkPart, { items: marqueeItems, pauseOnInteraction: true, reverse: true }),
        ]);
    },
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Marquee.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => ({
    setup() {
      return () =>
        h(Marquee.Root as ArkPart, null, () =>
          h(Marquee.Content as ArkPart, null, () =>
            marqueeIcons.map((IconComponent, index) =>
              h(Marquee.Item as ArkPart, { key: index }, () =>
                h(Card as ArkPart, { class: "[--space:--spacing(8)]" }, () =>
                  h(Card.Content as ArkPart, null, () =>
                    h(IconComponent as ArkPart, { class: "size-10" }),
                  ),
                ),
              ),
            ),
          ),
        );
    },
  }),
});
