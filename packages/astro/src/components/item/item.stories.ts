import Item from "./item.astro";
import ItemActions from "./item-actions.astro";
import ItemContent from "./item-content.astro";
import ItemDescription from "./item-description.astro";
import ItemTitle from "./item-title.astro";

export default {
  component: Item,
  parameters: {
    docs: {
      description: {
        component:
          "Lays out a row of media, title, description, and actions for lists, menus, and pickers.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  title: "Components/Data Display/Item",
};

export const Default = {
  render: () => ({
    component: Item,
    props: { variant: "outline" },
    slots: {
      default: [
        {
          component: ItemContent,
          slots: {
            default: [
              { component: ItemTitle, slots: { default: "Basic item" } },
              {
                component: ItemDescription,
                slots: { default: "An item with title and description." },
              },
            ],
          },
        },
        {
          component: ItemActions,
          slots: { default: '<span class="text-muted-foreground text-sm">Action</span>' },
        },
      ],
    },
  }),
};
