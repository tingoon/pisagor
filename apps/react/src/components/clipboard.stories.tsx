import { Clipboard } from "@pisagor/react";
import * as Examples from "@pisagor/react/clipboard/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Clipboard,
  parameters: {
    docs: {
      description: {
        component:
          "Copies text to the clipboard with clear feedback so users can reuse values without selecting manually.",
      },
    },
  },
  title: "Components/Actions/Clipboard",
});

export const Playground = meta.story({
  args: {
    value: "https://example.com/docs",
  },
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const CustomTimeout = meta.story({
  render: Examples.CustomTimeout,
});

export const DifferentIcon = meta.story({
  render: Examples.DifferentIcon,
});

export const WithLabel = meta.story({
  render: Examples.WithLabel,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Default = meta.story({
  render: Examples.Default,
});
