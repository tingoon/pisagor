import { InputOTP } from "@pisagor/react";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/storybook/preview";

const meta = preview.meta({
  component: InputOTP,
  parameters: {
    docs: {
      description: {
        component:
          "Collects one-time passcodes as separate digits so users can enter and review verification codes.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Separator: InputOTP.Separator,
    Slot: InputOTP.Slot,
  },
  title: "Components/Forms/Input OTP",
});

export const Default = meta.story({
  render: () => (
    <InputOTP>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Separator />
      <InputOTP.Slot index={3} />
      <InputOTP.Slot index={4} />
      <InputOTP.Slot index={5} />
    </InputOTP>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-col gap-2">
      <InputOTP variant="primary">
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
        <InputOTP.Separator />
        <InputOTP.Slot index={3} />
        <InputOTP.Slot index={4} />
        <InputOTP.Slot index={5} />
      </InputOTP>
      <InputOTP variant="secondary">
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
        <InputOTP.Separator />
        <InputOTP.Slot index={3} />
        <InputOTP.Slot index={4} />
        <InputOTP.Slot index={5} />
      </InputOTP>
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const BlurOnComplete = meta.story({
  args: {
    blurOnComplete: true,
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  ),
});

export const CustomSize = meta.story({
  args: {
    className: "*:data-[slot=input-otp-input]:size-12 *:data-[slot=input-otp-input]:text-lg",
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  ),
});

export const FourDigits = meta.story({
  render: () => (
    <InputOTP>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  ),
});

export const Mask = meta.story({
  args: {
    mask: true,
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  ),
});

export const Separator = meta.story({
  render: () => (
    <InputOTP>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Separator />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
      <InputOTP.Separator />
      <InputOTP.Slot index={4} />
      <InputOTP.Slot index={5} />
    </InputOTP>
  ),
});

export const WithPlaceholder = meta.story({
  args: {
    placeholder: "○",
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  ),
});

export const Disabled = meta.story({
  args: {
    defaultValue: ["1", "2", "3", "4"],
    disabled: true,
  },
  render: (args) => (
    <InputOTP {...args}>
      <InputOTP.Slot index={0} />
      <InputOTP.Slot index={1} />
      <InputOTP.Slot index={2} />
      <InputOTP.Slot index={3} />
    </InputOTP>
  ),
});

export const Invalid = meta.story({
  render: () => {
    const [value, setValue] = useState([""]);

    const isCorrect = value.join("") === "1234";

    return (
      <InputOTP invalid={!isCorrect} onValueChange={setValue} value={value}>
        <InputOTP.Slot index={0} />
        <InputOTP.Slot index={1} />
        <InputOTP.Slot index={2} />
        <InputOTP.Slot index={3} />
      </InputOTP>
    );
  },
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState([""]);

    const isCorrect = value.join("") === "1234";

    return (
      <div className="flex flex-col gap-2">
        <p className="text-center text-muted-foreground text-sm">Enter the code 1234</p>
        <InputOTP onValueChange={setValue} value={value}>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP>
        <p className="text-center text-muted-foreground text-sm">{isCorrect ? "✅" : "❌"}</p>
      </div>
    );
  },
});
