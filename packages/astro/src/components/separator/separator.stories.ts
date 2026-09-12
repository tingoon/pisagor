import StoryFrame from "#/storybook/story-frame.astro";
import Separator from "./separator.astro";

export default {
  component: Separator,
  parameters: {
    docs: {
      description: {
        component: "Visually divides related content into clear sections.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Layout/Separator",
};

export const Default = {};

export const Vertical = {
  render: () => ({
    component: StoryFrame,
    props: { class: "flex h-12 items-center gap-4" },
    slots: {
      default: [
        "<span>Left</span>",
        { component: Separator, props: { orientation: "vertical" } },
        "<span>Right</span>",
      ],
    },
  }),
};
