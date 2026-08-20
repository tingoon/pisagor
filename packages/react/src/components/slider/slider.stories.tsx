import { Field, Slider } from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: Slider,
  parameters: {
    docs: {
      api: "closed",
      checklist: {
        accessibleColor: true,
        definedBehaviors: true,
        definedOptions: true,
        interactiveStates: true,
        keyboardInteractions: true,
        platformScales: true,
      },
      description: {
        component:
          "Lets users pick a value along a track by dragging a thumb, optionally with labeled steps.",
      },
      taxonomy: "standard",
    },
  },
  title: "Components/Forms/Slider",
});

export const Default = meta.story({
  args: {
    defaultValue: [20],
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <Slider defaultValue={[40]} label="Primary" showValue variant="primary" />
      <Slider defaultValue={[40]} label="Secondary" showValue variant="secondary" />
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const Marks = meta.story({
  args: {
    defaultValue: [5],
    markerInterval: 2,
    max: 12,
    showMarkers: true,
  },
});

export const MinMax = meta.story({
  args: {
    defaultValue: [50],
    label: "Volume",
    max: 200,
    min: 0,
    showValue: true,
  },
});

export const Range = meta.story({
  args: {
    defaultValue: [40, 60],
  },
});

export const Step = meta.story({
  args: {
    defaultValue: [0],
    label: "Storage size",
    markerInterval: 1,
    markerLabels: ["5GB", "25GB", "50GB"],
    max: 2,
    min: 0,
    showMarkers: true,
  },
});

export const Vertical = meta.story({
  render: () => (
    <div className="flex items-center justify-center gap-6">
      <Slider className="h-40" defaultValue={[75]} max={100} orientation="vertical" step={1} />
      <Slider className="h-40" defaultValue={[25]} max={100} orientation="vertical" step={1} />
    </div>
  ),
});

export const WithLabel = meta.story({
  args: {
    defaultValue: [50],
    label: "Opacity",
    showValue: true,
  },
  render: (args) => (
    <Field>
      <Slider {...args} />
    </Field>
  ),
});

export const Invalid = meta.story({
  args: {
    defaultValue: [50],
    invalid: true,
  },
});

export const Disabled = meta.story({
  args: {
    defaultValue: [50],
    disabled: true,
  },
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState<number[]>([40]);

    const isGreaterThan80 = (value[0] ?? 0) > 80;

    return (
      <div className="flex flex-col gap-2">
        <p className="text-center text-sm">Greater than 80</p>
        <Field>
          <Slider label="Temperature" onValueChange={setValue} showValue value={value} />
        </Field>
        <p className="text-center">{isGreaterThan80 ? "✅" : "❌"}</p>
      </div>
    );
  },
});
