import { Card } from "@pisagor/react";
import { Accordion } from "..";
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
