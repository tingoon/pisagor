import { Alert } from "@pisagor/react";
import * as Examples from "@pisagor/react/alert/examples";
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
  args: {
    description:
      "You can add icons to alerts to provide visual context and improve user experience.",
    title: "Icons improve context",
  },
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const CustomColor = meta.story({
  render: Examples.CustomColor,
});

export const WithAction = meta.story({
  render: Examples.WithAction,
});

export const WithIcon = meta.story({
  render: Examples.WithIcon,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
