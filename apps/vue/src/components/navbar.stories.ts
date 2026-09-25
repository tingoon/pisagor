import { Navbar } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/navbar/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Navbar,
  parameters: {
    docs: {
      description: {
        component: "Top app bar with brand, navigation, and action regions.",
      },
    },
  },
  title: "Components/Navigation/Navbar",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const WithSidebar = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Dashboard layout combining Navbar and Sidebar with a collapsible start rail.",
      },
    },
  },
  render: exampleRender(Examples.WithSidebar),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
