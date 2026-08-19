import { SparkleIcon } from "@phosphor-icons/react";
import { Button } from "@pisagor/react/button";
import { Clipboard } from "@pisagor/react/clipboard";
import { useState } from "react";
import preview, { SurfaceDecorator } from "#/react/preview";

const meta = preview.meta({
  component: Clipboard,
  parameters: {
    docs: {
      aliases: ["copy"],
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
          "Copies text to the clipboard with clear feedback so users can reuse values without selecting manually.",
      },
      taxonomy: "standard",
    },
  },
  title: "Components/Actions/Clipboard",
});

export const Default = meta.story({
  args: {
    value: "https://example.com/docs",
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Clipboard value="https://example.com/docs" variant="input" />
      <Clipboard value="https://example.com/docs" variant="button" />
      <Clipboard value="https://example.com/docs" variant="value" />
    </div>
  ),
});

export const OnSurface = Variants.extend({
  decorators: [SurfaceDecorator],
  parameters: { layout: "fullscreen" },
});

export const CustomTimeout = meta.story({
  args: {
    timeout: 5000,
    value: "https://example.com/docs",
  },
});

export const DifferentIcon = meta.story({
  args: {
    copiedIcon: <SparkleIcon />,
    copyIcon: <SparkleIcon />,
    value: "https://example.com/docs",
    variant: "button",
  },
});

export const WithLabel = meta.story({
  args: {
    buttonVariant: "outline",
    label: "Install",
    value: "bun add ui",
  },
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState("https://example.com/docs");

    return (
      <div className="flex flex-col gap-2">
        <Clipboard value={value} />
        <Button onClick={() => setValue("https://example.com/docs/alternate")} variant="secondary">
          Change URL
        </Button>
      </div>
    );
  },
});
