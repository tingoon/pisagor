import { CurrencyDollarIcon } from "@phosphor-icons/react";
import { Button, Card } from "@pisagor/react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Card,
  parameters: {
    docs: {
      api: "compound",
      checklist: {
        definedBehaviors: true,
        definedOptions: true,
        platformScales: true,
      },
      description: {
        component:
          "Groups related content and actions into a contained surface that people can scan and compare.",
      },
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Action: Card.Action,
    Content: Card.Content,
    Description: Card.Description,
    Footer: Card.Footer,
    Header: Card.Header,
    Media: Card.Media,
    Title: Card.Title,
  },
  title: "Components/Layout/Card",
});

export const Default = meta.story({
  render: () => (
    <Card>
      <Card.Header description="Brief description about the card" title="Card header" />
      <Card.Content>
        <p className="text-muted-foreground text-sm">Card content</p>
      </Card.Content>
      <Card.Footer>
        <p className="text-muted-foreground text-sm">Footer</p>
      </Card.Footer>
    </Card>
  ),
});

export const CustomSpacing = meta.story({
  render: () => (
    <Card className="[--space:--spacing(2)] md:[--space:--spacing(8)]">
      <Card.Header description="Brief description about the card" title="Card header" />
      <Card.Content>
        <p className="text-muted-foreground text-sm">Card content</p>
      </Card.Content>
      <Card.Footer>
        <p className="text-muted-foreground text-sm">Footer</p>
      </Card.Footer>
    </Card>
  ),
});

export const Icon = meta.story({
  render: () => (
    <Card>
      <Card.Media variant="icon">
        <CurrencyDollarIcon />
      </Card.Media>
      <Card.Header
        description="Minimum purchase of $100 required. Use code at checkout."
        title="Get 15% off"
      />
      <Card.Content>
        <pre className="rounded-md bg-muted p-2 text-center font-medium text-sm">
          <code>15OFF</code>
        </pre>
      </Card.Content>
      <Card.Footer className="flex-row-reverse">
        <Button size="sm">Copy code</Button>
      </Card.Footer>
    </Card>
  ),
});

export const Product = meta.story({
  render: () => (
    <Card className="overflow-hidden">
      <Card.Media className="h-32 bg-muted" variant="image" />
      <Card.Header description="Product description" title="Product title" />
      <Card.Footer>
        <p className="text-muted-foreground text-sm">Footer actions</p>
      </Card.Footer>
    </Card>
  ),
});
