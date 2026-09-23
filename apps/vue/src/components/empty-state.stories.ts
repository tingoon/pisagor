import { EmptyState } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/empty-state/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component:
          "Shows a centered placeholder when a view has no data and offers the next relevant actions.",
      },
    },
  },
  title: "Components/Feedback/Empty State",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Compact = meta.story({
  render: exampleRender(Examples.Compact),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
