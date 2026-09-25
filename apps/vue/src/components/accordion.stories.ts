import { Accordion } from "@pisagor/vue";
import * as Examples from "@pisagor/vue/accordion/examples";
import { h } from "vue";
import { exampleRender } from "#/storybook/example-render";
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
  title: "Components/Layout/Accordion",
});

const playgroundItems = [
  {
    content: h("div", { class: "flex flex-col gap-2 text-muted-foreground" }, [
      h(
        "p",
        "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
      ),
      h(
        "p",
        "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
      ),
    ]),
    title: "Product information",
    value: "item-1",
  },
  {
    content: h("div", { class: "flex flex-col gap-2 text-muted-foreground" }, [
      h(
        "p",
        "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3 to 5 business days, while express shipping ensures delivery within 1 to 2 business days.",
      ),
    ]),
    title: "Shipping details",
    value: "item-2",
  },
  {
    content: h("div", { class: "flex flex-col gap-2 text-muted-foreground" }, [
      h(
        "p",
        "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, return the item in its original condition.",
      ),
    ]),
    title: "Return policy",
    value: "item-3",
  },
];

export const Playground = meta.story({
  args: {
    collapsible: true,
    defaultValue: ["item-1"],
    multiple: false,
  },
  render: (args) => ({
    components: { Accordion },
    setup: () => ({ args, items: playgroundItems }),
    template:
      '<Accordion :collapsible="args.collapsible" :default-value="args.defaultValue" :items="items" :multiple="args.multiple" />',
  }),
  tags: ["autodocs"],
});

export const Default = meta.story({
  render: exampleRender(Examples.Default),
});

export const Multiple = meta.story({
  render: exampleRender(Examples.Multiple),
});

export const NonCollapsible = meta.story({
  render: exampleRender(Examples.NonCollapsible),
});

export const Disabled = meta.story({
  render: exampleRender(Examples.Disabled),
});

export const Controlled = meta.story({
  render: exampleRender(Examples.Controlled),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story:
          "Manual composition with `Accordion.Root` when shorthand props are not enough.",
      },
    },
  },
  render: exampleRender(Examples.Compound),
});

export const WithCard = meta.story({
  render: exampleRender(Examples.WithCard),
});
