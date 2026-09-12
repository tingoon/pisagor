import StoryFrame from "#/storybook/story-frame.astro";
import Avatar from "./avatar.astro";

export default {
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: "Shows a user or entity with an image or fallback initials.",
      },
    },
    metadata: {
      api: "closed",
      taxonomy: "primitive",
    },
  },
  title: "Components/Data Display/Avatar",
};

export const Default = {
  args: {
    fallback: "AB",
  },
};

export const WithImage = {
  args: {
    alt: "Ada Lovelace",
    src: "https://placehold.co/80x80",
  },
};

export const Sizes = {
  render: () => ({
    component: StoryFrame,
    props: { class: "flex items-center gap-3" },
    slots: {
      default: [
        { component: Avatar, props: { fallback: "SM", size: "sm" } },
        { component: Avatar, props: { fallback: "MD", size: "md" } },
        { component: Avatar, props: { fallback: "LG", size: "lg" } },
      ],
    },
  }),
};
