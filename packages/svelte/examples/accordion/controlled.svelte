<script lang="ts">
import { Accordion } from "@pisagor/svelte";
import { shortFaqItems } from "./helpers";

let value = $state(["item-1"]);

</script>

<div>
      <Accordion
        items={shortFaqItems()}
        onValueChange={(d) => { value = d.value }}
        value={value}
      />
      <div class="text-center text-muted-foreground text-sm">{value}</div>
    </div>
