import { Accordion } from "..";

export function Compound() {
  return (
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
  );
}
