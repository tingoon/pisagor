<script lang="ts">
import { Card } from "@pisagor/svelte";
import { Accordion } from "@pisagor/svelte/accordion";
import { faqItems } from "./helpers";
</script>

<Card>
      <Card.Header
        description="Common questions about our products, shipping, and returns."
        title="Product information"
      />
      <Card.Content>
        <Accordion items={faqItems()} />
      </Card.Content>
    </Card>
