<script lang="ts">
import { NumberInput } from "@pisagor/svelte";

let value = $state("1");

const isNumberFive = $derived(value === "3");
</script>

<div class="flex flex-col gap-2 text-center text-sm">
  <p>Select the number 3</p>
  <NumberInput onValueChange={(v) => (value = String(v))} {value} />
  <p class="text-center">{isNumberFive ? "✅" : "❌"}</p>
</div>
