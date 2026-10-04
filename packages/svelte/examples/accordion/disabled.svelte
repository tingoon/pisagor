<script lang="ts">
import { Accordion } from "@pisagor/svelte";
import { shortFaqItems } from "./helpers";

const items = shortFaqItems().map((item) =>
  item.value === "item-2" ? { ...item, disabled: true } : item,
);
</script>

<Accordion defaultValue={["item-1"]} {items} />
