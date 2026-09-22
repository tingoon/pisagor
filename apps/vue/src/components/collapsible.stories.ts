import { Collapsible } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/collapsible/examples";
import { exampleRender } from "#/storybook/example-render";
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
  tags: ["autodocs"],
});

export const PartialCollapse = meta.story({
  render: exampleRender(Examples.PartialCollapse),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Nested = meta.story({
  render: exampleRender(Examples.Nested),
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
