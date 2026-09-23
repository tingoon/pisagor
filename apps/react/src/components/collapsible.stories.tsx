import { Collapsible } from "@pisagor/react";
import * as Examples from "@pisagor/react/collapsible/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          "Hides and reveals a section of content behind a trigger so users can keep dense pages manageable.",
      },
    },
  },
  title: "Components/Layout/Collapsible",
});

export const Playground = meta.story({
  render: Examples.Default,
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const PartialCollapse = meta.story({
  render: Examples.PartialCollapse,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Nested = meta.story({
  render: Examples.Nested,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});
