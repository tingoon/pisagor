import { Collapsible } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/collapsible";

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

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const PartialCollapse = meta.story({
  render: exampleRender(Examples.PartialCollapse),
});

export const Nested = meta.story({
  render: exampleRender(Examples.Nested),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
