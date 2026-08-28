import preview from "#/storybook/preview";
import { Button, Field, Input, Popover } from "..";

const meta = preview.meta({
  component: Popover,
  parameters: {
    docs: {
      description: {
        component:
          "Anchors extra content to a trigger for compact forms, menus, or details without a full modal.",
      },
    },
    metadata: {
      aliases: ["flyout"],
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Anchor: Popover.Anchor,
    Arrow: Popover.Arrow,
    Body: Popover.Body,
    CloseTrigger: Popover.CloseTrigger,
    Content: Popover.Content,
    Description: Popover.Description,
    Footer: Popover.Footer,
    Header: Popover.Header,
    Positioner: Popover.Positioner,
    Title: Popover.Title,
    Trigger: Popover.Trigger,
  },
  title: "Components/Overlay/Popover",
});

export const Default = meta.story({
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Content className="w-80">
        <Popover.Header description="Set the dimensions for the layer." title="Dimensions" />
        <Popover.Body>
          <Field.Group className="gap-2">
            <Field className="grid grid-cols-3 items-center gap-2">
              <Field.Label>Width</Field.Label>
              <Input className="col-span-2" defaultValue="100%" />
            </Field>
            <Field className="grid grid-cols-3 items-center gap-2">
              <Field.Label>Max. width</Field.Label>
              <Input className="col-span-2" defaultValue="300px" />
            </Field>
            <Field className="grid grid-cols-3 items-center gap-2">
              <Field.Label>Height</Field.Label>
              <Input className="col-span-2" defaultValue="25px" />
            </Field>
            <Field className="grid grid-cols-3 items-center gap-2">
              <Field.Label>Max. height</Field.Label>
              <Input className="col-span-2" defaultValue="none" />
            </Field>
          </Field.Group>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  ),
});

export const CustomSpacing = meta.story({
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Content className="w-80 [--space:--spacing(2)] sm:[--space:--spacing(5)]">
        <Popover.Header description="Set the dimensions for the layer." title="Dimensions" />
        <Popover.Body>
          <Field.Group className="gap-2">
            <Field className="grid grid-cols-3 items-center gap-2">
              <Field.Label>Width</Field.Label>
              <Input className="col-span-2" defaultValue="100%" />
            </Field>
            <Field className="grid grid-cols-3 items-center gap-2">
              <Field.Label>Max. width</Field.Label>
              <Input className="col-span-2" defaultValue="300px" />
            </Field>
          </Field.Group>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  ),
});

export const Anchor = meta.story({
  render: () => (
    <div>
      <Popover>
        <div className="flex items-center gap-2">
          <Popover.Trigger asChild>
            <Button variant="outline">Open</Button>
          </Popover.Trigger>
          <Popover.Anchor asChild>
            <Input className="w-full" placeholder="jane.doe@example.com" />
          </Popover.Anchor>
          <Popover.Content className="w-56">
            <Popover.Header
              description="We'll send you a link to reset your password."
              title="Enter your email"
            />
          </Popover.Content>
        </div>
      </Popover>
    </div>
  ),
});

export const CloseButton = meta.story({
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Content className="w-72" showCloseButton>
        <Popover.Header
          description="You're all caught up. Check back later for new notifications."
          title="Notifications"
        />
      </Popover.Content>
    </Popover>
  ),
});

export const Nested = meta.story({
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Header description="Check your notifications." title="Notifications" />
        <Popover.Body>
          <Popover>
            <Popover.Trigger asChild>
              <Button size="sm" variant="outline">
                Open nested
              </Button>
            </Popover.Trigger>
            <Popover.Content className="w-56">
              <Popover.Header
                description="You're all caught up. Check back later for new notifications."
                title="Nested popover"
              />
            </Popover.Content>
          </Popover>
        </Popover.Body>
      </Popover.Content>
    </Popover>
  ),
});

export const Modal = meta.story({
  render: () => (
    <Popover modal>
      <Popover.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Header
          description="You're all caught up. Check back later for new notifications."
          title="Notifications"
        />
      </Popover.Content>
    </Popover>
  ),
});

export const ScrollArea = meta.story({
  render: () => {
    const items = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      label: `Item ${i + 1}`,
    }));
    return (
      <Popover>
        <Popover.Trigger asChild>
          <Button variant="outline">Open</Button>
        </Popover.Trigger>
        <Popover.Content className="h-80 w-72">
          <Popover.Header title="Scrollable content" />
          <Popover.Body>
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li className="rounded-md px-2 py-1.5 text-sm hover:bg-muted" key={item.id}>
                  {item.label}
                </li>
              ))}
            </ul>
          </Popover.Body>
          <Popover.Footer>
            <Popover.CloseTrigger asChild>
              <Button>Close</Button>
            </Popover.CloseTrigger>
          </Popover.Footer>
        </Popover.Content>
      </Popover>
    );
  },
});

export const CloseBehavior = meta.story({
  render: () => (
    <div className="flex flex-wrap justify-center gap-2">
      <Popover closeOnInteractOutside={false}>
        <Popover.Trigger asChild>
          <Button variant="outline">Open outside click</Button>
        </Popover.Trigger>
        <Popover.Content showCloseButton>
          <Popover.Header
            description="Clicking outside does not close this popover. Press ESC to close."
            title="Stays on outside click"
          />
        </Popover.Content>
      </Popover>
      <Popover closeOnEscape={false}>
        <Popover.Trigger asChild>
          <Button variant="outline">Open escape</Button>
        </Popover.Trigger>
        <Popover.Content showCloseButton>
          <Popover.Header
            description="Pressing escape does not close this popover. Click outside to close."
            title="Escape key unavailable"
          />
        </Popover.Content>
      </Popover>
    </div>
  ),
});

export const Placements = meta.story({
  render: () => {
    const placements = ["left", "top", "bottom", "right"] as const;
    return (
      <div className="flex flex-wrap justify-center gap-2">
        {placements.map((placement) => (
          <Popover key={placement} positioning={{ placement }}>
            <Popover.Trigger asChild>
              <Button className="capitalize" variant="outline">
                {placement}
              </Button>
            </Popover.Trigger>
            <Popover.Content className="w-56">
              <Popover.Header
                description={`This popover appears on the ${placement} placement of the trigger.`}
                title="Popover"
              />
            </Popover.Content>
          </Popover>
        ))}
      </div>
    );
  },
});
