/** @jsxImportSource solid-js */
import { Accordion, Card } from "@pisagor/solid";
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
