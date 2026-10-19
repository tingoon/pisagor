<script lang="ts">
  import { NumberInput } from "@pisagor/svelte";
</script>

<NumberInput.Root defaultValue="1">
  <NumberInput.Control>
    <NumberInput.DecrementTrigger />
    <NumberInput.Input />
    <NumberInput.IncrementTrigger />
  </NumberInput.Control>
</NumberInput.Root>
