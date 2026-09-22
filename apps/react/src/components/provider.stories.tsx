import { Provider } from "@pisagor/react";
import * as Examples from "@pisagor/react/provider/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Provider,
  parameters: {
    docs: {
      description: {
        component: "Wraps the app with locale, icons, and toasts.",
      },
    },
  },
  title: "Components/Utilities/Provider",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});
