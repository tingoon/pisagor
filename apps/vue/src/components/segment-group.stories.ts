import { SegmentGroup } from "@pisagor/vue";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";
import * as Examples from "#/vue/examples/segment-group";

const meta = preview.meta({
  component: SegmentGroup,
  parameters: {
    docs: {
      description: {
        component: "Lets users switch between discrete options.",
      },
    },
  },
  title: "Components/Forms/Segment Group",
});

export const Playground = meta.story({
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const Compound = meta.story({
  render: exampleRender(Examples.Compound),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const DisabledItem = meta.story({
  render: exampleRender(Examples.DisabledItem),
});

export const IndicatorOnHover = meta.story({
  render: exampleRender(Examples.IndicatorOnHover),
});

export const CustomIndicator = meta.story({
  render: exampleRender(Examples.CustomIndicator),
});

export const CustomRecipe = meta.story({
  render: exampleRender(Examples.CustomRecipe),
});
