<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputInputProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./number-input.context";

  let { class: className, ...rest }: NumberInputInputProps = $props();
  const styles = useStyles();
</script>

<NumberInputPrimitive.Input
  {...rest}
  class={styles.slots.input({ class: cn(className) })}
/>
