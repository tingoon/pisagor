import { Listbox } from "@pisagor/react";
import * as Examples from "@pisagor/react/listbox/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Listbox,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose one or more options from a scrollable list with clear selection states.",
      },
    },
  },
  title: "Components/Forms/Listbox",
});

export const Playground = meta.story({
  args: {
    defaultValue: ["br"],
    items: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  },
  tags: ["autodocs"],
});

export const DisabledItem = meta.story({
  render: Examples.DisabledItem,
});

export const Grid = meta.story({
  render: Examples.Grid,
});

export const Grouping = meta.story({
  render: Examples.Grouping,
});

export const Horizontal = meta.story({
  render: Examples.Horizontal,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const ImageExplorer = meta.story({
  render: Examples.ImageExplorer,
});

export const SelectionExtended = meta.story({
  render: Examples.SelectionExtended,
});

export const SelectionMultiple = meta.story({
  render: Examples.SelectionMultiple,
});

export const SelectionNone = meta.story({
  render: Examples.SelectionNone,
});

export const TransferList = meta.story({
  render: Examples.TransferList,
});

export const WithDescription = meta.story({
  render: Examples.WithDescription,
});

export const WithFilter = meta.story({
  render: Examples.WithFilter,
});

export const WithIcon = meta.story({
  render: Examples.WithIcon,
});

export const WithPopover = meta.story({
  render: Examples.WithPopover,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Compound = meta.story({
  render: Examples.Compound,
});

export const Default = meta.story({
  render: Examples.Default,
});
