import { FloppyDiskIcon } from "@phosphor-icons/react";
import { Button, Kbd, Tooltip } from "@pisagor/react";
import preview from "#/react/preview";

const meta = preview.meta({
  component: Kbd,
  parameters: {
    docs: {
      aliases: ["keyboard"],
      api: "compound",
      checklist: {
        accessibleColor: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Displays keyboard shortcuts in a monospace badge so users know which keys to press.",
      },
      taxonomy: "primitive",
    },
  },
  subcomponents: {
    Group: Kbd.Group,
  },
  title: "Components/Data Display/Kbd",
});

export const Default = meta.story({
  args: {
    children: "K",
  },
});

export const Variants = meta.story({
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Kbd variant="default">K</Kbd>
      <Kbd.Group>
        <Kbd variant="outline">K</Kbd>
        <Kbd variant="outline">⌘</Kbd>
        <Kbd variant="outline">⌃</Kbd>
      </Kbd.Group>
    </div>
  ),
});

export const WithButton = meta.story({
  render: () => (
    <Button variant="outline">
      <FloppyDiskIcon />
      Save
      <Kbd.Group className="translate-x-0.5">
        <Kbd variant="outline">Ctrl+S</Kbd>
      </Kbd.Group>
    </Button>
  ),
});

export const KbdGroup = meta.story({
  render: () => (
    <div className="text-muted-foreground text-sm">
      Use{" "}
      <Kbd.Group>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
      </Kbd.Group>{" "}
      to open the command palette
    </div>
  ),
});

export const WithTooltip = meta.story({
  render: () => (
    <Tooltip
      classNames={{ content: "flex items-center gap-2" }}
      content={
        <>
          Toggle mode
          <Kbd.Group className="ml-1.5 inline">
            <Kbd>D</Kbd>
          </Kbd.Group>
        </>
      }
    >
      <Button size="sm" variant="outline">
        Dark mode
      </Button>
    </Tooltip>
  ),
});
