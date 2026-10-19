<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxContentProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./combobox.context";

  let { children, ...rest }: ComboboxContentProps = $props();
  const part = withContext(() => rest, { name: "Content" });
</script>

<ComboboxPrimitive.Content {...part.props}>
  {@render children?.()}
</ComboboxPrimitive.Content>
