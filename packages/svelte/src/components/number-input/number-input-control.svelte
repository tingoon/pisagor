<script lang="ts">
  import {
    NumberInput as NumberInputPrimitive,
    type NumberInputControlProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./number-input.context";

  type Props = NumberInputControlProps & {
    clearable?: boolean;
  };

  let { clearable = false, children, ...rest }: Props = $props();

  const part = withContext(
    () => ({
      ...rest,
      "data-clearable": clearable || undefined,
    }),
    { name: "Control" },
  );
</script>

<NumberInputPrimitive.Control {...part.props}>
  {@render children?.()}
</NumberInputPrimitive.Control>
