<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputDecrementTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./number-input.context";

  let { children, ...rest }: NumberInputDecrementTriggerProps = $props();
  const { m } = useLocale();
  const part = withContext(
    () => ({ "aria-label": m("numberInput.decrement"), ...rest }),
    { name: "DecrementTrigger" },
  );
</script>

<NumberInputPrimitive.DecrementTrigger {...part.props}>
  {@render children?.()}
</NumberInputPrimitive.DecrementTrigger>
