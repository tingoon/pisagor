import { Item } from "@pisagor/astro/item";

export default {
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
};

export const Playground = {
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
          slots: { default: '<span class="text-muted-foreground text-sm">Action</span>' },
        },
      ],
    },
  }),
  tags: ["autodocs"],
};
