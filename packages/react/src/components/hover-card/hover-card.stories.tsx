import { MapPinIcon } from "@phosphor-icons/react";
import { useState } from "react";
import preview from "#/storybook/preview";
import { Avatar, Button, HoverCard } from "..";

const meta = preview.meta({
  component: HoverCard,
  parameters: {
    docs: {
      description: {
        component:
          "Reveals richer preview content when the user pauses over a trigger, without opening a full overlay.",
      },
    },
    metadata: {
      aliases: ["popover-card"],
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Arrow: HoverCard.Arrow,
    Content: HoverCard.Content,
    Trigger: HoverCard.Trigger,
  },
  title: "Components/Overlay/Hover Card",
});

export const Default = meta.story({
  render: () => (
    <HoverCard>
      <HoverCard.Trigger asChild>
        <Button variant="link">Hover here</Button>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div className="flex gap-2">
          <Avatar fallback="JD" />
          <div className="flex flex-col gap-2">
            <a
              className="font-medium text-sm underline underline-offset-4"
              href="https://example.com/profile/jane.doe"
              rel="noopener"
              target="_blank"
            >
              @jane.doe
            </a>
            <p className="text-muted-foreground text-sm">Frontend Developer</p>

            <p className="flex items-center gap-1 text-muted-foreground text-xs">
              <MapPinIcon className="size-4" />
              Joined in 2016
            </p>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  ),
});

export const Disabled = meta.story({
  render: () => (
    <HoverCard disabled>
      <HoverCard.Trigger asChild>
        <Button variant="link">Hover here</Button>
      </HoverCard.Trigger>
      <HoverCard.Content>IT WILL NOT OPEN</HoverCard.Content>
    </HoverCard>
  ),
});

export const TriggersDelays = meta.story({
  render: () => (
    <HoverCard closeDelay={300} openDelay={200}>
      <HoverCard.Trigger asChild>
        <Button variant="link">Hover here</Button>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div className="flex gap-2">
          <Avatar fallback="JD" />
          <div className="flex flex-col gap-2">
            <a
              className="font-medium text-sm underline underline-offset-4"
              href="https://example.com/profile/jane.doe"
              rel="noopener"
              target="_blank"
            >
              @jane.doe
            </a>
            <p className="text-muted-foreground text-sm">Frontend Developer</p>

            <p className="flex items-center gap-1 text-muted-foreground text-xs">
              <MapPinIcon className="size-4" />
              Joined in 2016
            </p>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col gap-2">
        <HoverCard onOpenChange={({ open: isOpen }) => setOpen(isOpen)} open={open}>
          <HoverCard.Trigger asChild>
            <Button variant="outline">Hover here</Button>
          </HoverCard.Trigger>
          <HoverCard.Content>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">Controlled</h4>
              <p className="text-muted-foreground text-sm">
                The open state is managed externally with <code>open</code> and{" "}
                <code>onOpenChange</code>.
              </p>
            </div>
          </HoverCard.Content>
        </HoverCard>
        <p className="text-center text-muted-foreground text-sm">{open ? "✅" : "❌"}</p>
      </div>
    );
  },
});

export const Placements = meta.story({
  render: () => {
    const placements = ["left", "top", "bottom", "right"] as const;
    return (
      <div className="flex flex-wrap justify-center gap-2">
        {placements.map((placement) => (
          <HoverCard key={placement} positioning={{ placement }}>
            <HoverCard.Trigger asChild>
              <Button className="capitalize" variant="outline">
                {placement}
              </Button>
            </HoverCard.Trigger>
            <HoverCard.Content className="flex flex-col gap-1">
              <h4 className="font-medium">Hover Card</h4>
              <p className="text-muted-foreground text-sm">
                This hover card appears on the {placement} placement of the trigger.
              </p>
            </HoverCard.Content>
          </HoverCard>
        ))}
      </div>
    );
  },
});
