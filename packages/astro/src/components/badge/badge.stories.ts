import StoryFrame from "#/storybook/story-frame.astro";
import Badge from "./badge.astro";

export default {
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "Labels content with a compact status, category, or count so users can scan it quickly.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Data Display/Badge",
};

export const Default = {
  args: {
    slots: { default: "Badge" },
  },
};

export const Sizes = {
  render: () => ({
    component: StoryFrame,
    props: { class: "flex flex-wrap items-center gap-2" },
    slots: {
      default: [
        { component: Badge, props: { size: "sm" }, slots: { default: "Small" } },
        { component: Badge, props: { size: "md" }, slots: { default: "Medium" } },
        { component: Badge, props: { size: "lg" }, slots: { default: "Large" } },
      ],
    },
  }),
};

export const Variants = {
  render: () => ({
    component: StoryFrame,
    props: { class: "flex flex-wrap gap-2" },
    slots: {
      default: [
        { component: Badge, props: { variant: "default" }, slots: { default: "Default" } },
        { component: Badge, props: { variant: "secondary" }, slots: { default: "Secondary" } },
        { component: Badge, props: { variant: "outline" }, slots: { default: "Outline" } },
        {
          component: Badge,
          props: { variant: "destructive" },
          slots: { default: "Destructive" },
        },
        { component: Badge, props: { variant: "info" }, slots: { default: "Info" } },
        { component: Badge, props: { variant: "success" }, slots: { default: "Success" } },
        { component: Badge, props: { variant: "warning" }, slots: { default: "Warning" } },
      ],
    },
  }),
};

export const Pill = {
  args: {
    pill: true,
    slots: { default: "Badge" },
  },
};
