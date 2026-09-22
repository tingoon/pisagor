import { Item } from "@pisagor/react";
import * as Examples from "@pisagor/react/item/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Item,
  parameters: {
    docs: {
      description: {
        component:
          "Lays out a row of media, title, description, and actions for lists, menus, and pickers.",
      },
    },
  },
  title: "Components/Data Display/Item",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const Icon = meta.story({
  render: Examples.Icon,
});

export const CustomSpacing = meta.story({
  render: Examples.CustomSpacing,
});

export const WithMedia = meta.story({
  render: Examples.WithMedia,
});

export const WithAvatar = meta.story({
  render: Examples.WithAvatar,
});

export const Image = meta.story({
  render: Examples.Image,
});

export const Link = meta.story({
  render: Examples.Link,
});

export const Group = meta.story({
  render: Examples.Group,
});

export const Header = meta.story({
  render: Examples.Header,
});
