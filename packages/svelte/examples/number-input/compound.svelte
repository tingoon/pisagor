<script lang="ts">
import { NumberInput as ArkNumberInput } from "@ark-ui/svelte/number-input";
import { NumberInput } from "@pisagor/svelte";
import MinusIcon from "phosphor-svelte/lib/MinusIcon";
import PlusIcon from "phosphor-svelte/lib/PlusIcon";
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
