<script module lang="ts">
  import source from "./non-collapsible.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Accordion } from "@pisagor/svelte";
  import { shortFaqItems } from "./helpers";
</script>

<Accordion
  collapsible={false}
  defaultValue={["item-1"]}
  items={shortFaqItems()}
/>
