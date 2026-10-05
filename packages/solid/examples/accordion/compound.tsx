import { Accordion } from "@pisagor/solid";
import { For, type JSX } from "solid-js";

type CompoundItem = {
  content: JSX.Element;
  title: string;
  value: string;
};

const items: CompoundItem[] = [
  {
    content: (
      <>
        <p>
          Our flagship product combines cutting-edge technology with sleek
          design. Built with premium materials, it offers unparalleled
          performance and reliability.
        </p>
        <p>
          Key features include advanced processing capabilities, and an
          intuitive user interface designed for both beginners and experts.
        </p>
      </>
    ),
    title: "Product information",
    value: "item-1",
  },
  {
    content: (
      <p>
        We offer worldwide shipping through trusted courier partners. Standard
        delivery takes 3 to 5 business days, while express shipping ensures
        delivery within 1 to 2 business days.
      </p>
    ),
    title: "Shipping details",
    value: "item-2",
  },
  {
    content: (
      <p>
        We stand behind our products with a comprehensive 30-day return policy.
        If you&apos;re not completely satisfied, return the item in its original
        condition.
      </p>
    ),
    title: "Return policy",
    value: "item-3",
  },
];

export function Compound() {
  return (
    <Accordion.Root defaultValue={["item-1"]}>
      <For each={items}>
        {(item) => (
          <Accordion.Item value={item.value}>
            <Accordion.ItemTrigger>{item.title}</Accordion.ItemTrigger>
            <Accordion.ItemContent class="flex flex-col gap-2 text-muted-foreground">
              {item.content}
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </For>
    </Accordion.Root>
  );
}
