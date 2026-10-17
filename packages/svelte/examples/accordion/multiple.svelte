<script module lang="ts">
  import source from "./multiple.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { Accordion } from "@pisagor/svelte";
  import { shortFaqItems } from "./helpers";
</script>

<Accordion items={shortFaqItems()} multiple />
