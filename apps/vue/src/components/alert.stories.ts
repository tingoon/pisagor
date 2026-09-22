import { Alert } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/alert/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          "Shows a brief message that helps users notice important information — such as updates, warnings, or errors — with an optional title, icon, and actions.",
      },
    },
  },
  title: "Components/Feedback/Alert",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const CustomColor = meta.story({
  render: exampleRender(Examples.CustomColor),
});

export const WithAction = meta.story({
  render: exampleRender(Examples.WithAction),
});

export const WithIcon = meta.story({
  render: exampleRender(Examples.WithIcon),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
