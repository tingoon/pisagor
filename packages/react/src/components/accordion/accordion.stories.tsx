import { Accordion, Card } from "@pisagor/react";
import { useState } from "react";
import preview from "#/storybook/preview";

const meta = preview.meta({
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          "Lets users expand and collapse sections of content so they can scan headings and open only what they need.",
      },
    },
    metadata: {
      aliases: ["disclosure"],
      api: "compound-shorthand",
      taxonomy: "standard",
    },
  },
  subcomponents: {
    Item: Accordion.Item,
    ItemContent: Accordion.ItemContent,
    ItemTrigger: Accordion.ItemTrigger,
    Root: Accordion.Root,
  },
  title: "Components/Layout/Accordion",
});

export const Default = meta.story({
  args: {
    defaultValue: ["item-1"],
    items: faqItems(),
  },
});

export const Multiple = meta.story({
  args: {
    items: shortFaqItems(),
    multiple: true,
  },
});

export const NonCollapsible = meta.story({
  args: {
    collapsible: false,
    defaultValue: ["item-1"],
    items: shortFaqItems(),
  },
});

export const Disabled = meta.story({
  args: {
    defaultValue: ["item-1"],
    items: shortFaqItems().map((item) =>
      item.value === "item-2" ? { ...item, disabled: true } : item,
    ),
  },
});

export const WithCard = meta.story({
  args: {
    defaultValue: ["item-1"],
    items: faqItems(),
  },
  render: (args) => (
    <Card>
      <Card.Header>
        <Card.Title>Product information</Card.Title>
        <Card.Description>
          Common questions about our products, shipping, and returns.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Accordion {...args} />
      </Card.Content>
    </Card>
  ),
});

export const Controlled = meta.story({
  render: () => {
    const [value, setValue] = useState(["item-1"]);

    return (
      <div>
        <Accordion
          items={shortFaqItems()}
          onValueChange={({ value }) => setValue(value)}
          value={value}
        />
        <div className="text-center text-muted-foreground text-sm">{value}</div>
      </div>
    );
  },
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Accordion.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => (
    <Accordion.Root defaultValue={["item-1"]}>
      <Accordion.Item value="item-1">
        <Accordion.ItemTrigger>Product information</Accordion.ItemTrigger>
        <Accordion.ItemContent className="flex flex-col gap-2 text-muted-foreground">
          <p>
            Our flagship product combines cutting-edge technology with sleek design. Built with
            premium materials, it offers unparalleled performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an intuitive user interface
            designed for both beginners and experts.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.ItemTrigger>Shipping details</Accordion.ItemTrigger>
        <Accordion.ItemContent className="flex flex-col gap-2 text-muted-foreground">
          <p>
            We offer worldwide shipping through trusted courier partners. Standard delivery takes 3
            to 5 business days, while express shipping ensures delivery within 1 to 2 business days.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.ItemTrigger>Return policy</Accordion.ItemTrigger>
        <Accordion.ItemContent className="flex flex-col gap-2 text-muted-foreground">
          <p>
            We stand behind our products with a comprehensive 30-day return policy. If you&apos;re
            not completely satisfied, return the item in its original condition.
          </p>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  ),
});

function faqItems() {
  return [
    {
      content: (
        <div className="flex flex-col gap-2 text-muted-foreground">
          <p>
            Our flagship product combines cutting-edge technology with sleek design. Built with
            premium materials, it offers unparalleled performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an intuitive user interface
            designed for both beginners and experts.
          </p>
        </div>
      ),
      title: "Product information",
      value: "item-1",
    },
    {
      content: (
        <div className="flex flex-col gap-2 text-muted-foreground">
          <p>
            We offer worldwide shipping through trusted courier partners. Standard delivery takes 3
            to 5 business days, while express shipping ensures delivery within 1 to 2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your shipment in real-time
            through our dedicated tracking portal.
          </p>
        </div>
      ),
      title: "Shipping details",
      value: "item-2",
    },
    {
      content: (
        <div className="flex flex-col gap-2 text-muted-foreground">
          <p>
            We stand behind our products with a comprehensive 30-day return policy. If you&apos;re
            not completely satisfied, return the item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and full refunds processed
            within 48 hours of receiving the returned item.
          </p>
        </div>
      ),
      title: "Return policy",
      value: "item-3",
    },
  ];
}

function shortFaqItems() {
  return [
    {
      content: (
        <p className="text-muted-foreground">
          Our flagship product combines cutting-edge technology with sleek design. Built with
          premium materials, it offers unparalleled performance and reliability.
        </p>
      ),
      title: "Product information",
      value: "item-1",
    },
    {
      content: (
        <p className="text-muted-foreground">
          We offer worldwide shipping through trusted courier partners. Standard delivery takes 3 to
          5 business days.
        </p>
      ),
      title: "Shipping details",
      value: "item-2",
    },
    {
      content: (
        <p className="text-muted-foreground">
          We stand behind our products with a comprehensive 30-day return policy. If you&apos;re not
          completely satisfied, return the item in its original condition.
        </p>
      ),
      title: "Return policy",
      value: "item-3",
    },
  ];
}
