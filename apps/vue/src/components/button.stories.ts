import { Button } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/button/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Triggers an action or navigation when clicked, with styles that reflect how important the action is.",
      },
    },
  },
  title: "Components/Actions/Button",
});

export const Playground = meta.story({
  render: () => ({
    components: { Button },
    template: "<Button>Button</Button>",
  }),
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Sizes = meta.story({
  render: exampleRender(Examples.Sizes),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const CustomColor = meta.story({
  render: exampleRender(Examples.CustomColor),
});

export const Pill = meta.story({
  render: exampleRender(Examples.Pill),
});

export const NoClickEffect = meta.story({
  render: exampleRender(Examples.NoClickEffect),
});

export const Icon = meta.story({
  render: exampleRender(Examples.Icon),
});

export const AsChild = meta.story({
  render: exampleRender(Examples.AsChild),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Loading = meta.story({
  render: exampleRender(Examples.Loading),
});

export const WithIcon = meta.story({
  render: exampleRender(Examples.WithIcon),
});
