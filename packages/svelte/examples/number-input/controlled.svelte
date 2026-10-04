<script lang="ts">
import { NumberInput } from "@pisagor/svelte";

let value = $state("1");

const isNumberFive = value === "3";
</script>

<div class="flex flex-col gap-2 text-center text-sm">
  <p>Select the number 3</p>
  <NumberInput onValueChange={(value) => (value = String(value))} {value}>
    <NumberInput.Control>
      <NumberInput.DecrementTrigger />
      <NumberInput.Input />
      <NumberInput.IncrementTrigger />
    </NumberInput.Control>
  </NumberInput>
  <p class="text-center">{isNumberFive ? "✅" : "❌"}</p>
</div>
