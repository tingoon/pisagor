import { Item } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/item";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const Icon = meta.story({
  render: exampleRender(Examples.Icon),
});

export const Image = meta.story({
  render: exampleRender(Examples.Image),
});

export const WithMedia = meta.story({
  render: exampleRender(Examples.WithMedia),
});

export const Header = meta.story({
  render: exampleRender(Examples.Header),
});

export const Group = meta.story({
  render: exampleRender(Examples.Group),
});

export const WithAvatar = meta.story({
  render: exampleRender(Examples.WithAvatar),
});

export const Link = meta.story({
  render: exampleRender(Examples.Link),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
