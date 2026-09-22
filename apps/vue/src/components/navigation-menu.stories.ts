import { NavigationMenu } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/navigation-menu/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: NavigationMenu,
  parameters: {
    docs: {
      description: {
        component: "Horizontal list of navigation links for primary site sections.",
      },
    },
  },
  title: "Components/Navigation/Navigation Menu",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Wrapping = meta.story({
  render: exampleRender(Examples.Wrapping),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
