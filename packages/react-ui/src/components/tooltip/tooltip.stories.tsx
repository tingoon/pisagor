import { TextBIcon } from "@phosphor-icons/react";
import { Button, Kbd, Tooltip } from "@pisagor/react";
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
    metadata: {
      api: "closed",
      taxonomy: "standard",
    },
  },
  title: "Components/Overlay/Tooltip",
});

export const Default = meta.story({
  args: {
    children: (
      <Button size="icon-md" variant="outline">
        <TextBIcon />
      </Button>
    ),
    content: "Bold",
  },
});

export const Disabled = meta.story({
  render: () => (
    <Tooltip content={<p>You can still show a tooltip on an unavailable element</p>}>
      {(props) => (
        <span {...props}>
          <Button disabled variant="outline">
            Unavailable
          </Button>
        </span>
      )}
    </Tooltip>
  ),
});

export const WithKeyboardShortcut = meta.story({
  render: () => (
    <Tooltip
      classNames={{ content: "flex items-center gap-2" }}
      content={
        <>
          <p>Add to library</p>
          <Kbd.Group className="ml-1.5 inline">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </Kbd.Group>
        </>
      }
    >
      <Button variant="outline">Add to library</Button>
    </Tooltip>
  ),
});

export const Placements = meta.story({
  render: () => {
    const placements = ["left", "top", "bottom", "right"] as const;

    return (
      <div className="flex flex-wrap items-center justify-center gap-2">
        {placements.map((placement) => (
          <Tooltip content={<p>Add to library</p>} key={placement} positioning={{ placement }}>
            <Button className="capitalize" variant="outline">
              {placement}
            </Button>
          </Tooltip>
        ))}
      </div>
    );
  },
});
