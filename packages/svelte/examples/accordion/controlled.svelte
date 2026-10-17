<script lang="ts">
  import { Accordion } from "@pisagor/svelte";
  import { shortFaqItems } from "./helpers";

  let value = $state(["item-1"]);
</script>

<div>
  <Accordion
    items={shortFaqItems()}
    onValueChange={(d) => (value = d.value)}
    {value}
  />
  <div class="text-muted-foreground text-center text-sm">{value}</div>
</div>
