import { Alert } from "@pisagor/astro";
import * as Examples from "#/astro/examples/alert";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          "Surfaces status, warning, or actionable feedback within page flow.",
      },
    },
  },
  title: "Components/Feedback/Alert",
});

export const Playground = meta.story({
  args: {
    description: "You can add components to your app using the cli.",
    title: "Heads up!",
  },
  tags: ["autodocs"],
});

export const Compound = meta.story({
  render: () => ({ component: Examples.Compound }),
});

export const Default = meta.story({
  render: () => ({ component: Examples.Default }),
});

export const Variants = meta.story({
  render: () => ({ component: Examples.Variants }),
});

export const CustomColor = meta.story({
  render: () => ({ component: Examples.CustomColor }),
});

export const WithIcon = meta.story({
  render: () => ({ component: Examples.WithIcon }),
});
