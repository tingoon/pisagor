import { Menu } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/menu";

const meta = preview.meta({
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          "Always-visible list of navigation links or actions. For popup menus opened from a trigger, use Dropdown Menu.",
      },
    },
  },
  title: "Components/Navigation/Menu",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const WithGroups = meta.story({
  render: exampleRender(Examples.WithGroups),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
