import * as Examples from "@pisagor/vue-form/tanstack/examples";
import { defineComponent } from "vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: defineComponent({ name: "TanStackFormDemo" }),
  parameters: {
    docs: {
      description: {
        component:
          "Shows every connected form field wired to a single form with default values and a submit button.",
      },
    },
  },
  title: "Forms/TanStack Form",
});

export const Playground = meta.story({
  render: exampleRender(Examples.Default),
  tags: ["autodocs"],
});
