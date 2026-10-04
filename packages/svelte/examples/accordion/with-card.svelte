<script lang="ts">
import { Accordion, Card } from "@pisagor/svelte";
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
