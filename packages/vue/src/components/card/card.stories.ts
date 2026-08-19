import { PhCurrencyDollar } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue/button";
import { Card } from "@pisagor/vue/card";
import preview from "#/vue/preview";

const meta = preview.meta({
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "Groups related content and actions into a contained surface that people can scan and compare.",
      },
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
  render: () => ({
    components: { Button, Card },
    template: `
      <div class="w-96">
        <Card>
          <Card.Header description="Brief description about the card" title="Card header" />
          <Card.Content>
            <p class="text-muted-foreground text-sm">Card content</p>
          </Card.Content>
          <Card.Footer>
            <p class="text-muted-foreground text-sm">Footer</p>
          </Card.Footer>
        </Card>
      </div>
    `,
  }),
});

export const CustomSpacing = meta.story({
  render: () => ({
    components: { Card },
    template: `
      <Card class="[--space:--spacing(2)] md:[--space:--spacing(8)]">
        <Card.Header description="Brief description about the card" title="Card header" />
        <Card.Content>
          <p class="text-muted-foreground text-sm">Card content</p>
        </Card.Content>
        <Card.Footer>
          <p class="text-muted-foreground text-sm">Footer</p>
        </Card.Footer>
      </Card>
    `,
  }),
});

export const Icon = meta.story({
  render: () => ({
    components: { Button, Card, PhCurrencyDollar },
    template: `
      <Card>
        <Card.Media variant="icon">
          <PhCurrencyDollar />
        </Card.Media>
        <Card.Header
          description="Minimum purchase of $100 required. Use code at checkout."
          title="Get 15% off"
        />
        <Card.Content>
          <pre class="rounded-md bg-muted p-2 text-center font-medium text-sm">
            <code>15OFF</code>
          </pre>
        </Card.Content>
        <Card.Footer class="flex-row-reverse">
          <Button size="sm">Copy code</Button>
        </Card.Footer>
      </Card>
    `,
  }),
});

export const Product = meta.story({
  render: () => ({
    components: { Card },
    template: `
      <Card class="overflow-hidden">
        <Card.Media class="h-32 bg-muted" variant="image" />
        <Card.Header description="Product description" title="Product title" />
        <Card.Footer>
          <p class="text-muted-foreground text-sm">Footer actions</p>
        </Card.Footer>
      </Card>
    `,
  }),
});
