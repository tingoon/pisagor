import { Accordion } from "@pisagor/vue";
import { h, ref } from "vue";
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
  render: () => ({
    components: { Accordion },
    setup() {
      return { items: faqItems() };
    },
    template: '<Accordion :default-value="[\'item-1\']" :items="items" />',
  }),
});

export const Multiple = meta.story({
  render: () => ({
    components: { Accordion },
    setup() {
      return { items: shortFaqItems() };
    },
    template: '<Accordion multiple :items="items" />',
  }),
});

export const NonCollapsible = meta.story({
  render: () => ({
    components: { Accordion },
    setup() {
      return { items: shortFaqItems() };
    },
    template: '<Accordion :collapsible="false" :default-value="[\'item-1\']" :items="items" />',
  }),
});

export const Disabled = meta.story({
  render: () => ({
    components: { Accordion },
    setup() {
      const items = shortFaqItems().map((item) =>
        item.value === "item-2" ? { ...item, disabled: true } : item,
      );
      return { items };
    },
    template: '<Accordion :default-value="[\'item-1\']" :items="items" />',
  }),
});

export const Controlled = meta.story({
  render: () => ({
    components: { Accordion },
    setup() {
      const items = shortFaqItems();
      const value = ref(["item-1"]);
      const onValueChange = (details: { value: string[] }) => {
        value.value = details.value;
      };
      return { items, onValueChange, value };
    },
    template: `
      <div>
        <Accordion :items="items" :onValueChange="onValueChange" :value="value" />
        <div class="text-center text-muted-foreground text-sm">{{ value }}</div>
      </div>
    `,
  }),
});

export const Compound = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Manual composition with `Accordion.Root` when shorthand props are not enough.",
      },
    },
  },
  render: () => ({
    components: { Accordion },
    template: `
      <Accordion.Root :default-value="['item-1']">
        <Accordion.Item value="item-1">
          <Accordion.ItemTrigger>Product information</Accordion.ItemTrigger>
          <Accordion.ItemContent class="flex flex-col gap-2 text-muted-foreground">
            <p>
              Our flagship product combines cutting-edge technology with sleek design. Built with
              premium materials, it offers unparalleled performance and reliability.
            </p>
            <p>
              Key features include advanced processing capabilities, and an intuitive user
              interface designed for both beginners and experts.
            </p>
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.ItemTrigger>Shipping details</Accordion.ItemTrigger>
          <Accordion.ItemContent class="flex flex-col gap-2 text-muted-foreground">
            <p>
              We offer worldwide shipping through trusted courier partners. Standard delivery
              takes 3 to 5 business days, while express shipping ensures delivery within 1 to 2
              business days.
            </p>
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.ItemTrigger>Return policy</Accordion.ItemTrigger>
          <Accordion.ItemContent class="flex flex-col gap-2 text-muted-foreground">
            <p>
              We stand behind our products with a comprehensive 30-day return policy. If you're
              not completely satisfied, return the item in its original condition.
            </p>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    `,
  }),
});

function faqItems() {
  return [
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
}

function shortFaqItems() {
  return [
    {
      content: h(
        "p",
        { class: "text-muted-foreground" },
        "Our flagship product combines cutting-edge technology with sleek design.",
      ),
      title: "Product information",
      value: "item-1",
    },
    {
      content: h(
        "p",
        { class: "text-muted-foreground" },
        "We offer worldwide shipping through trusted courier partners.",
      ),
      title: "Shipping details",
      value: "item-2",
    },
    {
      content: h(
        "p",
        { class: "text-muted-foreground" },
        "We stand behind our products with a comprehensive 30-day return policy.",
      ),
      title: "Return policy",
      value: "item-3",
    },
  ];
}
