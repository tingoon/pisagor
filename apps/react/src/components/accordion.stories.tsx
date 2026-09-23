import { Accordion } from "@pisagor/react";
import * as Examples from "@pisagor/react/accordion/examples";
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
  },
  subcomponents: {
    Item: Accordion.Item,
    ItemContent: Accordion.ItemContent,
    ItemTrigger: Accordion.ItemTrigger,
    Root: Accordion.Root,
  },
  title: "Components/Layout/Accordion",
});

export const Playground = meta.story({
  args: {
    defaultValue: ["item-1"],
    items: [
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
              We offer worldwide shipping through trusted courier partners. Standard delivery takes
              3 to 5 business days, while express shipping ensures delivery within 1 to 2 business
              days.
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
              Our hassle-free return process includes free return shipping and full refunds
              processed within 48 hours of receiving the returned item.
            </p>
          </div>
        ),
        title: "Return policy",
        value: "item-3",
      },
    ],
  },
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: Examples.Default,
});

export const Multiple = meta.story({
  render: Examples.Multiple,
});

export const NonCollapsible = meta.story({
  render: Examples.NonCollapsible,
});

export const Disabled = meta.story({
  render: Examples.Disabled,
});

export const Controlled = meta.story({
  render: Examples.Controlled,
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Accordion.Root` when shorthand props are not enough.",
      },
    },
  },
  render: Examples.Compound,
});

export const WithCard = meta.story({
  render: Examples.WithCard,
});
