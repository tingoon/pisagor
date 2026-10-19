<script lang="ts">
  import { Accordion } from "@pisagor/svelte";
  import { shortFaqItems } from "./helpers";

  const items = shortFaqItems();
</script>

<Accordion defaultValue={["item-1"]} {items} orientation="vertical" />
