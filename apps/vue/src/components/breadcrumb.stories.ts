import { Breadcrumb } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/breadcrumb/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          "Shows where the user is within a hierarchy and lets them jump back to earlier levels.",
      },
    },
  },
  title: "Components/Navigation/Breadcrumb",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Collapsed = meta.story({
  render: exampleRender(Examples.Collapsed),
});

export const CustomSeparator = meta.story({
  render: exampleRender(Examples.CustomSeparator),
});

export const WithLink = meta.story({
  render: exampleRender(Examples.WithLink),
});

export const WithMenu = meta.story({
  render: exampleRender(Examples.WithMenu),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
