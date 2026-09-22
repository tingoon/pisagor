import { ClientOnly } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/client-only/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const Fallback = meta.story({
  render: exampleRender(Examples.Fallback),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
