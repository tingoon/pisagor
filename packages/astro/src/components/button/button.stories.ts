import StoryFrame from "#/storybook/story-frame.astro";
import Button from "./button.astro";

export default {
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Triggers an action or navigation with clear hierarchy and loading feedback.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Actions/Button",
};

export const Default = {
  args: {
    slots: { default: "Button" },
  },
};

export const Sizes = {
  render: () => ({
    component: StoryFrame,
    props: { class: "flex flex-wrap items-center gap-2" },
    slots: {
      default: [
        { component: Button, props: { size: "xs" }, slots: { default: "XSmall" } },
        { component: Button, props: { size: "sm" }, slots: { default: "Small" } },
        { component: Button, props: { size: "md" }, slots: { default: "Medium" } },
        { component: Button, props: { size: "lg" }, slots: { default: "Large" } },
        { component: Button, props: { size: "xl" }, slots: { default: "XLarge" } },
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
        { component: Button, props: { variant: "default" }, slots: { default: "Default" } },
        { component: Button, props: { variant: "secondary" }, slots: { default: "Secondary" } },
        { component: Button, props: { variant: "outline" }, slots: { default: "Outline" } },
        { component: Button, props: { variant: "ghost" }, slots: { default: "Ghost" } },
        { component: Button, props: { variant: "link" }, slots: { default: "Link" } },
        {
          component: Button,
          props: { variant: "destructive" },
          slots: { default: "Destructive" },
        },
      ],
    },
  }),
};

export const Loading = {
  args: {
    loading: true,
    slots: { default: "Saving" },
  },
};

export const Disabled = {
  args: {
    disabled: true,
    slots: { default: "Disabled" },
  },
};
