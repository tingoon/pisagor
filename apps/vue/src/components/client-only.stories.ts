import { ClientOnly } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/client-only";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Fallback = meta.story({
  render: exampleRender(Examples.Fallback),
});
