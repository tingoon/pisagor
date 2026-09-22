import { ClientOnly } from "@pisagor/react";
import * as Examples from "@pisagor/react/client-only/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: ClientOnly,
  parameters: {
    docs: {
      description: {
        component:
          "Renders content only in the browser so server output stays stable when a feature depends on client APIs.",
      },
    },
  },
  title: "Components/Utilities/Client Only",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Fallback = meta.story({
  render: Examples.Fallback,
});
