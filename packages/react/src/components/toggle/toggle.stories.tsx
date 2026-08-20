import { TextBIcon, TextItalicIcon, TextUnderlineIcon } from "@phosphor-icons/react";
import { Toggle } from "@pisagor/react";
import { useState } from "react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Toggle,
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
          "Stays pressed or released to turn a single option on or off, similar to a checkbox styled as a button.",
      },
      taxonomy: "primitive",
    },
  },
  title: "Components/Actions/Toggle",
});

export const Default = meta.story({
  args: {
    children: "Toggle",
  },
});

export const Sizes = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="sm" variant="outline">
        Small
      </Toggle>
      <Toggle size="md" variant="outline">
        Medium
      </Toggle>
      <Toggle size="lg" variant="outline">
        Large
      </Toggle>
    </div>
  ),
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="ghost">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
    </div>
  ),
});

export const Disabled = meta.story({
  args: {
    children: "Unavailable",
    disabled: true,
    variant: "outline",
  },
});

export const IconGroup = meta.story({
  render: () => (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Toggle bold" variant="outline">
        <TextBIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" variant="outline">
        <TextItalicIcon />
      </Toggle>
      <Toggle aria-label="Toggle underline" variant="outline">
        <TextUnderlineIcon />
      </Toggle>
    </div>
  ),
});

export const WithIcon = meta.story({
  args: {
    "aria-label": "Toggle bold",
    children: <TextBIcon />,
    variant: "outline",
  },
});

export const Controlled = meta.story({
  render: () => {
    const [pressed, setPressed] = useState(false);

    return (
      <div className="flex flex-col items-center gap-2">
        <Toggle onPressedChange={setPressed} pressed={pressed} variant="outline">
          Toggle
        </Toggle>
        <p className="text-muted-foreground text-sm">{pressed ? "✅" : "❌"}</p>
      </div>
    );
  },
});
