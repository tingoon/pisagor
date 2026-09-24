import { Avatar, AvatarGroup } from "@pisagor/react";
import * as Examples from "@pisagor/react/avatar/examples";
import preview from "#/storybook/preview";

const users = [
  {
    fallback: "JD",
    handle: "jane.doe@example.com",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    fallback: "JD",
    handle: "john.doe@example.com",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    fallback: "JD",
    handle: "jane.doe@example.com",
    name: "Jane Doe",
    src: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    fallback: "JD",
    handle: "john.doe@example.com",
    name: "John Doe",
    src: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const meta = preview.meta({
  component: AvatarGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Shows several people at once by stacking avatars, with an optional count for members that do not fit.",
      },
    },
  },
  subcomponents: {
    Avatar,
    Count: AvatarGroup.Count,
    Root: AvatarGroup.Root,
  },
  title: "Components/Data Display/Avatar Group",
});

export const Playground = meta.story({
  args: {
    max: 4,
    users,
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Group,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Count = meta.story({
  render: Examples.Count,
});
