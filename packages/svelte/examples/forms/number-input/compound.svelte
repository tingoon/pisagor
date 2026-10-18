<script lang="ts">
  import { NumberInput as ArkNumberInput } from "@ark-ui/svelte";
  import { NumberInput } from "@pisagor/svelte";
  import { MinusIcon, PlusIcon } from "phosphor-svelte";
</script>

<NumberInput defaultValue="1">
  <ArkNumberInput.Control class="flex items-center">
    <ArkNumberInput.DecrementTrigger aria-label="Decrement">
      <MinusIcon />
    </ArkNumberInput.DecrementTrigger>
    <ArkNumberInput.Input />
    <ArkNumberInput.IncrementTrigger aria-label="Increment">
      <PlusIcon />
    </ArkNumberInput.IncrementTrigger>
  </ArkNumberInput.Control>
</NumberInput>
