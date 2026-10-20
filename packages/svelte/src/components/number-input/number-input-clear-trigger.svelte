<script lang="ts">
  import { NumberInput as NumberInputPrimitive } from "@ark-ui/svelte";
  import InputClearButton from "../input/input-clear-button.svelte";
  import { useStyles } from "./number-input.context";

  // Not an Ark part: clears the value and renders nothing while empty.
  let { class: className }: { class?: string } = $props();
  const styles = useStyles();
</script>

<NumberInputPrimitive.Context>
  {#snippet render(api)}
    {@const value = api().value}
    {#if value !== undefined && value !== null && String(value).length > 0}
      <InputClearButton
        class={styles.slots.clearTrigger({ class: className })}
        onClear={() => api().clearValue()}
      />
    {/if}
  {/snippet}
</NumberInputPrimitive.Context>
