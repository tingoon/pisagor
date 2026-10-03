import { BottomNavigation } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/bottom-navigation";

const meta = preview.meta({
  component: BottomNavigation,
  parameters: {
    docs: {
      description: {
        component:
          "Fixed bottom bar for switching between primary app sections on mobile.",
      },
    },
  },
  title: "Components/Navigation/Bottom Navigation",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const IconOnly = meta.story({
  render: exampleRender(Examples.IconOnly),
});

export const WithLinks = meta.story({
  render: exampleRender(Examples.WithLinks),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
