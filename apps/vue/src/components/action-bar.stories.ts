import { ActionBar } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/action-bar/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const CustomSpacing = meta.story({
  render: exampleRender(Examples.CustomSpacing),
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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
