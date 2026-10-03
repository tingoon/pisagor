import { Sidebar } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/sidebar";

const meta = preview.meta({
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component:
          "Provides a collapsible application sidebar with keyboard shortcut, mobile sheet fallback, and nested menu primitives.",
      },
    },
  },
  title: "Components/Navigation/Sidebar",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
