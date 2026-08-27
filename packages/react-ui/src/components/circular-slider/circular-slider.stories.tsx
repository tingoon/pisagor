import { ThermometerIcon } from "@phosphor-icons/react";
import { CircularSlider } from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";

const meta = preview.meta({
  component: CircularSlider,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users choose a value by dragging around a circular control instead of a straight track.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Control: CircularSlider.Control,
    Marker: CircularSlider.Marker,
    MarkerGroup: CircularSlider.MarkerGroup,
    Thumb: CircularSlider.Thumb,
    ValueText: CircularSlider.ValueText,
  },
  title: "Components/Forms/Circular Slider",
});

export const Default = meta.story({
  args: {
    "aria-label": "Angle",
    defaultValue: 45,
  },
  render: (args) => (
    <CircularSlider {...args}>
      <CircularSlider.ValueText suffix="°" />
    </CircularSlider>
  ),
});

export const OnSurface = Default.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      {[120, 180, 240].map((size) => (
        <CircularSlider aria-label="Angle" defaultValue={45} key={size} size={size}>
          <CircularSlider.ValueText suffix="°" />
        </CircularSlider>
      ))}
    </div>
  ),
});

export const Step = meta.story({
  args: {
    "aria-label": "Angle",
    defaultValue: 120,
    markers: true,
    markersAtSteps: true,
    step: 60,
  },
});

export const Thickness = meta.story({
  args: {
    "aria-label": "Angle",
    defaultValue: 45,
    thickness: 14,
  },
});

export const WithValue = meta.story({
  args: {
    "aria-label": "Angle",
    defaultValue: 90,
    size: 120,
    thickness: 10,
  },
  render: (args) => (
    <CircularSlider {...args}>
      <CircularSlider.ValueText prefix={<ThermometerIcon className="size-4" />} suffix="°" />
    </CircularSlider>
  ),
});

export const Disabled = meta.story({
  args: {
    "aria-label": "Angle",
    defaultValue: 45,
    disabled: true,
  },
});

export const CustomMarkers = meta.story({
  args: {
    "aria-label": "Angle",
    defaultValue: 45,
    markers: [0, 90, 180, 270],
  },
});

export const WithMarkers = meta.story({
  args: {
    "aria-label": "Angle",
    defaultValue: 45,
    markers: true,
  },
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState(45);

    return (
      <div className="flex flex-col gap-2">
        <div className="text-muted-foreground text-sm">More than: 180</div>
        <CircularSlider aria-label="Angle" onValueChange={setValue} value={value} />
        <div className="text-center text-muted-foreground text-sm">{value > 180 ? "✅" : "❌"}</div>
      </div>
    );
  },
});
