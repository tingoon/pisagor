import { useState } from "react";
import preview from "#/storybook/preview";
import { Badge, Button, Card, Clipboard, Collapsible } from "..";

const meta = preview.meta({
  component: Collapsible,
  parameters: {
    docs: {
      description: {
        component:
          "Hides and reveals a section of content behind a trigger so users can keep dense pages manageable.",
      },
    },
    metadata: {
      api: "compound",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Content: Collapsible.Content,
    Indicator: Collapsible.Indicator,
    Trigger: Collapsible.Trigger,
  },
  title: "Components/Layout/Collapsible",
});

export const Default = meta.story({
  render: () => (
    <Card className="w-96">
      <Collapsible>
        <Card.Header title="Total visits">
          <Card.Description>
            <div className="flex items-center gap-1">
              <Badge variant="success">22.3%</Badge>
              <Badge variant="info">10.1%</Badge>
              <Badge variant="warning">6.8%</Badge>
              <Badge variant="destructive">1.4%</Badge>
            </div>
          </Card.Description>
          <Card.Action>
            <Collapsible.Trigger asChild>
              <Button size="sm" variant="outline">
                Details
                <Collapsible.Indicator />
              </Button>
            </Collapsible.Trigger>
          </Card.Action>
        </Card.Header>
        <Collapsible.Content className="text-sm">
          <div className="mt-(--space) grid gap-3 px-(--space)">
            <div className="grid grid-cols-3 items-center gap-2">
              <div className="col-span-2 text-muted-foreground">Google</div>
              <div className="place-self-end">
                <Badge variant="success">22.3%</Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-2">
              <div className="col-span-2 text-muted-foreground">Facebook</div>
              <div className="place-self-end">
                <Badge variant="destructive">-10.1%</Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-2">
              <div className="col-span-2 text-muted-foreground">TikTok</div>
              <div className="place-self-end">
                <Badge variant="warning">6.8%</Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-2">
              <div className="col-span-2 text-muted-foreground">Instagram</div>
              <div className="place-self-end">
                <Badge variant="info">1.4%</Badge>
              </div>
            </div>
          </div>
        </Collapsible.Content>
      </Collapsible>
    </Card>
  ),
});

export const PartialCollapse = meta.story({
  render: () => (
    <Collapsible className="w-96" collapsedHeight="50px">
      <Collapsible.Trigger asChild>
        <Button className="w-full" variant="outline">
          Read more
          <Collapsible.Indicator />
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content className="space-y-2 p-2">
        <p className="text-muted-foreground text-sm">
          This is the first paragraph of content. When collapsed, only a portion of this content
          will be visible.
        </p>
        <p className="text-muted-foreground text-sm">
          This is the second paragraph. It will be hidden when the collapsible is in its collapsed
          state.
        </p>
        <p className="text-muted-foreground text-sm">
          This is the third paragraph. Expand the collapsible to see all the content.
        </p>
        <p className="text-muted-foreground text-sm">
          This is the fourth paragraph. The collapsedHeight prop controls how much content is
          visible when collapsed.
        </p>
        <Collapsible.Trigger asChild>
          <Button className="w-full" variant="outline">
            Collapse (cannot be focused when collapsed)
            <Collapsible.Indicator />
          </Button>
        </Collapsible.Trigger>
      </Collapsible.Content>
    </Collapsible>
  ),
});

export const Disabled = meta.story({
  render: () => (
    <div>
      <Collapsible disabled>
        <Collapsible.Trigger asChild>
          <Button className="w-full" variant="outline">
            Disabled collapsible
            <Collapsible.Indicator />
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content className="pt-2">
          <p className="text-muted-foreground text-sm">
            This content cannot be accessed because the collapsible is unavailable.
          </p>
        </Collapsible.Content>
      </Collapsible>
    </div>
  ),
});

export const Nested = meta.story({
  render: () => (
    <Card className="w-80">
      <Card.Header description="We'll help you get started" title="Getting started" />

      <Card.Content>
        <Collapsible>
          <Collapsible.Trigger asChild>
            <Button className="w-full" variant="outline">
              View details
              <Collapsible.Indicator />
            </Button>
          </Collapsible.Trigger>
          <Collapsible.Content className="flex flex-col gap-2 p-2">
            <p className="text-muted-foreground text-sm">
              Here you can find the documentation for all the components and how to use them.
            </p>
            <Collapsible>
              <Collapsible.Trigger asChild>
                <Button className="w-full" size="sm" variant="outline">
                  Install dependencies
                  <Collapsible.Indicator />
                </Button>
              </Collapsible.Trigger>
              <Collapsible.Content className="flex flex-col gap-2 p-2">
                <p className="text-muted-foreground text-sm">Copy the following code:</p>

                <pre className="relative rounded-md bg-muted p-2 text-muted-foreground text-xs">
                  <code>bun add ui</code>

                  <Clipboard
                    buttonSize="icon-sm"
                    buttonVariant="ghost"
                    className="absolute inset-e-1.5 top-0.5"
                    value="bun add ui"
                    variant="button"
                  />
                </pre>
              </Collapsible.Content>
            </Collapsible>
          </Collapsible.Content>
        </Collapsible>
      </Card.Content>
    </Card>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-64 space-y-2">
        <Collapsible onOpenChange={({ open }) => setOpen(open)} open={open}>
          <Collapsible.Trigger asChild>
            <Button className="w-full" variant="outline">
              {open ? "Collapse" : "Expand"}
              <Collapsible.Indicator />
            </Button>
          </Collapsible.Trigger>
          <Collapsible.Content className="p-2">
            <p className="text-muted-foreground text-sm">
              This collapsible is controlled. The state is managed externally.
            </p>
          </Collapsible.Content>
        </Collapsible>
        <p className="text-center text-muted-foreground text-sm">{open ? "✅" : "❌"}</p>
      </div>
    );
  },
});
