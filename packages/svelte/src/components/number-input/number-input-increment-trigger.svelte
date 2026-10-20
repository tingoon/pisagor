<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputIncrementTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withContext } from "./number-input.context";

  let { children, ...rest }: NumberInputIncrementTriggerProps = $props();
  const { m } = useLocale();
  const part = withContext(
    () => ({ "aria-label": m("numberInput.increment"), ...rest }),
    { name: "IncrementTrigger" },
  );
</script>

<NumberInputPrimitive.IncrementTrigger {...part.props}>
  {@render children?.()}
</NumberInputPrimitive.IncrementTrigger>
