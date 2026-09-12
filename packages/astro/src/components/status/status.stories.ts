import StoryFrame from "#/storybook/story-frame.astro";
import Status from "./status.astro";

export default {
  component: Status,
  parameters: {
    docs: {
      description: {
        component: "Shows a compact status indicator for presence or state.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Feedback/Status",
};

export const Default = {};

export const Variants = {
  render: () => ({
    component: StoryFrame,
    props: { class: "flex flex-wrap items-center gap-3" },
    slots: {
      default: [
        { component: Status, props: { variant: "default" } },
        { component: Status, props: { variant: "info" } },
        { component: Status, props: { variant: "success" } },
        { component: Status, props: { variant: "warning" } },
        { component: Status, props: { variant: "destructive" } },
      ],
    },
  }),
};
