import { SegmentGroup } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/segment-group/examples";
import { exampleRender } from "#/storybook/example-render";
import preview from "#/storybook/preview";

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

export const Variants = meta.story({
  render: exampleRender(Examples.Variants),
});

export const OrientationHorizontal = meta.story({
  render: exampleRender(Examples.OrientationHorizontal),
});

export const OrientationVertical = meta.story({
  render: exampleRender(Examples.OrientationVertical),
});

export const DisabledItem = meta.story({
  render: exampleRender(Examples.DisabledItem),
});

export const CustomIndicator = meta.story({
  render: exampleRender(Examples.CustomIndicator),
});

export const IndicatorOnHover = meta.story({
  render: exampleRender(Examples.IndicatorOnHover),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
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
