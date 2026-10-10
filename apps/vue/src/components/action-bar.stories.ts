import { ActionBar } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/action-bar";

const meta = preview.meta({
  component: ActionBar,
  parameters: {
    docs: {
      description: {
        component:
          "Surfaces bulk actions when one or more items are selected, keeping primary tools close without cluttering the page.",
      },
    },
  },
  title: "Components/Actions/Action Bar",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Gutter = meta.story({
  render: exampleRender(Examples.Gutter),
});

export const CloseTrigger = meta.story({
  render: exampleRender(Examples.CloseTrigger),
});

export const WithDialog = meta.story({
  render: exampleRender(Examples.WithDialog),
});

export const WithMenu = meta.story({
  render: exampleRender(Examples.WithMenu),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Placements = meta.story({
  render: exampleRender(Examples.Placements),
});

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
