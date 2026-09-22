import { Listbox } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/listbox/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Listbox,
  parameters: {
    docs: {
      description: {
        component: "Lets users choose an option from a static list.",
      },
    },
  },
  title: "Components/Forms/Listbox",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const DisabledItem = meta.story({
  render: exampleRender(Examples.DisabledItem),
});

export const Grid = meta.story({
  render: exampleRender(Examples.Grid),
});

export const Grouping = meta.story({
  render: exampleRender(Examples.Grouping),
});

export const Horizontal = meta.story({
  render: exampleRender(Examples.Horizontal),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const ImageExplorer = meta.story({
  render: exampleRender(Examples.ImageExplorer),
});

export const SelectionExtended = meta.story({
  render: exampleRender(Examples.SelectionExtended),
});

export const SelectionMultiple = meta.story({
  render: exampleRender(Examples.SelectionMultiple),
});

export const SelectionNone = meta.story({
  render: exampleRender(Examples.SelectionNone),
});

export const TransferList = meta.story({
  render: exampleRender(Examples.TransferList),
});

export const WithDescription = meta.story({
  render: exampleRender(Examples.WithDescription),
});

export const WithFilter = meta.story({
  render: exampleRender(Examples.WithFilter),
});

export const WithIcon = meta.story({
  render: exampleRender(Examples.WithIcon),
});

export const WithPopover = meta.story({
  render: exampleRender(Examples.WithPopover),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});
