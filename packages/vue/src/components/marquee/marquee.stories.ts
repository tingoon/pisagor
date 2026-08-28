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

function marqueeIconRow() {
  return h(Marquee.Content as ArkPart, null, () =>
    marqueeIcons.map((IconComponent, index) =>
      h(Marquee.Item as ArkPart, { key: index }, () =>
        h(Card as ArkPart, { class: "[--space:--spacing(8)]" }, () =>
          h(Card.Content as ArkPart, null, () => h(IconComponent as ArkPart, { class: "size-10" })),
        ),
      ),
    ),
  );
}

export const Default = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Marquee as ArkPart, {
          items: marqueeIcons.map((IconComponent, index) =>
            h(Card as ArkPart, { class: "[--space:--spacing(8)]", key: index }, () =>
              h(Card.Content as ArkPart, null, () =>
                h(IconComponent as ArkPart, { class: "size-10" }),
              ),
            ),
          ),
        });
    },
  }),
});

export const OrientationHorizontal = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Marquee.Root as ArkPart, { orientation: "horizontal" }, () => marqueeIconRow());
    },
  }),
});

export const OrientationVertical = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Marquee.Root as ArkPart, { class: "max-h-80", orientation: "vertical" }, () =>
          h(Marquee.Content as ArkPart, null, () =>
            marqueeIcons.map((IconComponent, index) =>
              h(Marquee.Item as ArkPart, { key: index }, () =>
                h(Card as ArkPart, null, () =>
                  h(Card.Content as ArkPart, { class: "flex justify-center" }, () =>
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

export const PauseOnHover = meta.story({
  render: () => ({
    setup() {
      return () => h(Marquee.Root as ArkPart, { pauseOnInteraction: true }, () => marqueeIconRow());
    },
  }),
});

export const Reverse = meta.story({
  render: () => ({
    setup() {
      return () => h(Marquee.Root as ArkPart, { reverse: true }, () => marqueeIconRow());
    },
  }),
});

export const Spacing = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Marquee.Root as ArkPart, { pauseOnInteraction: true, spacing: "40px" }, () =>
          marqueeIconRow(),
        );
    },
  }),
});

export const Autofill = meta.story({
  render: () => ({
    setup() {
      return () =>
        h(Marquee.Root as ArkPart, { autoFill: true, speed: 100 }, () => marqueeIconRow());
    },
  }),
});

export const CustomSpeed = meta.story({
  render: () => ({
    setup() {
      return () => h(Marquee.Root as ArkPart, { speed: 10 }, () => marqueeIconRow());
    },
  }),
});

export const Fade = meta.story({
  render: () => ({
    setup() {
      return () =>
        h("div", { class: "flex w-full flex-col gap-6 overflow-hidden" }, [
          h(Marquee.Root as ArkPart, { pauseOnInteraction: true, showEdges: false }, () =>
            marqueeIconRow(),
          ),
          h(Marquee.Root as ArkPart, { pauseOnInteraction: true, reverse: true }, () =>
            marqueeIconRow(),
          ),
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
      return () => h(Marquee.Root as ArkPart, null, () => marqueeIconRow());
    },
  }),
});
