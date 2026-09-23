import { TextBIcon } from "@phosphor-icons/react";
import { Button, Tooltip } from "@pisagor/react";
import * as Examples from "@pisagor/react/tooltip/examples";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          "Explains a control or label on hover or focus with a short message that does not block interaction.",
      },
    },
  },
  title: "Components/Overlay/Tooltip",
});

export const Playground = meta.story({
  args: {
    children: (
      <Button aria-label="Bold" size="icon-md" variant="outline">
        <TextBIcon />
      </Button>
    ),
    content: "Bold",
  },
  tags: ["autodocs"],
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const WithKeyboardShortcut = meta.story({
  render: Examples.WithKeyboardShortcut,
});

export const Placements = meta.story({
  render: Examples.Placements,
});

export const Default = meta.story({
  render: Examples.Default,
});
