import StoryFrame from "#/storybook/story-frame.astro";
import Highlight from "./highlight.astro";

export default {
  component: Highlight,
  parameters: {
    docs: {
      description: {
        component:
          "Emphasizes matching words inside text so search results and queries are easier to spot.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Data Display/Highlight",
};

export const Default = {
  render: () => ({
    component: StoryFrame,
    props: { class: "text-base text-foreground leading-relaxed" },
    slots: {
      default: {
        component: Highlight,
        props: {
          query: "component",
          text: "Acme UI is a design system for building accessible web applications.",
        },
      },
    },
  }),
};

export const Multiple = {
  render: () => ({
    component: StoryFrame,
    props: { class: "text-base text-foreground leading-relaxed" },
    slots: {
      default: {
        component: Highlight,
        props: {
          query: ["spotlight", "emphasize", "accentuate"],
          text: "With the Highlight component, you can spotlight, emphasize and accentuate words.",
        },
      },
    },
  }),
};
