import { SegmentGroup } from "@pisagor/react";
import * as Examples from "@pisagor/react/segment-group/examples";
import { segmentItems } from "#/storybook/fixtures";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: SegmentGroup,
  parameters: {
    docs: {
      description: {
        component:
          "Switches between a few related views or modes with segmented controls that show the current choice.",
      },
    },
  },
  title: "Components/Actions/Segment Group",
});

export const Playground = meta.story({
  args: {
    defaultValue: "profile",
    items: segmentItems,
  },
  tags: ["autodocs"],
});

export const Variants = meta.story({
  render: Examples.Variants,
});

export const OrientationHorizontal = meta.story({
  render: Examples.OrientationHorizontal,
});

export const OrientationVertical = meta.story({
  render: Examples.OrientationVertical,
});

export const DisabledItem = meta.story({
  render: Examples.DisabledItem,
});

export const CustomIndicator = meta.story({
  render: Examples.CustomIndicator,
});

export const IndicatorOnHover = meta.story({
  render: Examples.IndicatorOnHover,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
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
