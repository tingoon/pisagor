import { Avatar } from "@pisagor/react";
import * as Examples from "@pisagor/react/avatar/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "Shows who a user is in the interface — usually a profile photo, or initials or an icon when there is no image or it has not loaded yet.",
      },
    },
  },
  title: "Components/Data Display/Avatar",
});

export const Playground = meta.story({
  args: {
    alt: "Jane Doe",
    fallback: "JD",
    src: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  tags: ["autodocs"],
});

export const Sizes = meta.story({
  render: Examples.Sizes,
});

export const Shapes = meta.story({
  render: Examples.Shapes,
});

export const Fallbacks = meta.story({
  render: Examples.Fallbacks,
});

export const Default = meta.story({
  render: Examples.Default,
});
