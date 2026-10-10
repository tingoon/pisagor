import { Item } from "@pisagor/astro";
import * as Examples from "#/astro/examples/item";
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
  render: () => ({
    component: Item,
    props: { variant: "outline" },
    slots: {
      default: [
        {
          component: Item.Content,
          slots: {
            default: [
              { component: Item.Title, slots: { default: "Basic item" } },
              {
                component: Item.Description,
                slots: { default: "An item with title and description." },
              },
            ],
          },
        },
        {
          component: Item.Actions,
          slots: {
            default:
              '<span class="text-muted-foreground text-sm">Action</span>',
          },
        },
      ],
    },
  }),
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Variants = meta.story({
  render: () => ({ component: Examples.Variants }),
});

export const Icon = meta.story({
  render: () => ({ component: Examples.Icon }),
});

export const Image = meta.story({
  render: () => ({ component: Examples.Image }),
});

export const WithMedia = meta.story({
  render: () => ({ component: Examples.WithMedia }),
});

export const Header = meta.story({
  render: () => ({ component: Examples.Header }),
});

export const Group = meta.story({
  render: () => ({ component: Examples.Group }),
});

export const WithAvatar = meta.story({
  render: () => ({ component: Examples.WithAvatar }),
});

export const Link = meta.story({
  render: () => ({ component: Examples.Link }),
});

export const CustomSpacing = meta.story({
  render: () => ({ component: Examples.CustomSpacing }),
});

export const CustomRecipe = meta.story({
  render: () => ({ component: Examples.CustomRecipe }),
});
