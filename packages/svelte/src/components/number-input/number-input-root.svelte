<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputRootProps,
  } from "@ark-ui/svelte";
  import type { NumberInputRootContract } from "@pisagor/contracts";

  import { withProvider } from "./number-input.context";

  type Props = Omit<NumberInputRootProps, "onValueChange"> &
    NumberInputRootContract & {
      onValueChange?: (value: number) => void;
    };

  let { children, onValueChange, ...rest }: Props = $props();

  const root = withProvider(() => rest, { name: "Root" });

  function handleValueChange(
    details: Parameters<NonNullable<NumberInputRootProps["onValueChange"]>>[0],
  ) {
    onValueChange?.(details.valueAsNumber);
  }
</script>

<NumberInputPrimitive.Root
  {...root.props}
  onValueChange={onValueChange ? handleValueChange : undefined}
>
  {@render children?.()}
</NumberInputPrimitive.Root>
