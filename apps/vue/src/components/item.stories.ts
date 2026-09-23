import { Item } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/item/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Icon = meta.story({
  render: exampleRender(Examples.Icon),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const WithMedia = meta.story({
  render: exampleRender(Examples.WithMedia),
});

export const WithAvatar = meta.story({
  render: exampleRender(Examples.WithAvatar),
});

export const Image = meta.story({
  render: exampleRender(Examples.Image),
});

export const Link = meta.story({
  render: exampleRender(Examples.Link),
});

export const Group = meta.story({
  render: exampleRender(Examples.Group),
});

export const Header = meta.story({
  render: exampleRender(Examples.Header),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
