import { NavigationMenu } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/navigation-menu";

const meta = preview.meta({
  component: NavigationMenu,
  parameters: {
    docs: {
      description: {
        component:
          "Horizontal list of navigation links for primary site sections.",
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
