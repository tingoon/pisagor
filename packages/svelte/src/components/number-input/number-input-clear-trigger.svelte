<script lang="ts">
  import { NumberInput as NumberInputPrimitive } from "@ark-ui/svelte";
  import InputClearButton from "../input/input-clear-button.svelte";
  import { useStyles } from "./number-input.context";

  const styles = useStyles();
</script>

<NumberInputPrimitive.Context>
  {#snippet render(api)}
    {@const hasValue =
      api().value !== undefined &&
      api().value !== null &&
      String(api().value).length > 0}
    {#if hasValue}
      <InputClearButton
        class={styles.slots.clearTrigger()}
        onClear={() => api().clearValue()}
      />
    {/if}
  {/snippet}
</NumberInputPrimitive.Context>
