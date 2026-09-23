import { Provider } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/provider/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Provider,
  parameters: {
    docs: {
      description: {
        component: "Wraps the app with locale and shared library context.",
      },
    },
  },
  title: "Components/Utilities/Provider",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
