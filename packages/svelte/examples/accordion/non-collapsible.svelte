<script lang="ts">
import { Accordion } from "@pisagor/svelte/accordion";
import { shortFaqItems } from "./helpers";
</script>

<Accordion
      collapsible={false}
      defaultValue={["item-1"]}
      items={shortFaqItems()}
    />
