/** @jsxImportSource solid-js */
import { Card } from "@pisagor/solid";
import { Accordion } from "@pisagor/solid/accordion";
import { faqItems } from "./helpers";

export function WithCard() {
  return (
    <Card>
      <Card.Header
        description="Common questions about our products, shipping, and returns."
        title="Product information"
      />
      <Card.Content>
        <Accordion items={faqItems()} />
      </Card.Content>
    </Card>
  );
}
