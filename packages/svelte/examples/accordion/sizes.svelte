<script lang="ts">
import { Accordion } from "@pisagor/svelte";
import { faqItems } from "./helpers";

const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-4">
  {#each sizes as size (size)}
    <Accordion items={faqItems()} {size} />
  {/each}
</div>
