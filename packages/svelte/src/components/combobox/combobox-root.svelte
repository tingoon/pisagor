<script lang="ts">
  import {
    type CollectionItem,
    Combobox as ComboboxPrimitive,
    type ComboboxRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { ComboboxRootContract } from "@pisagor/contracts";
  import { withProvider } from "./combobox.context";

  type Props = ArkRootProps<CollectionItem> & ComboboxRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root", slot: "base" });
</script>

<ComboboxPrimitive.Root {...root.props}>
  {@render children?.()}
</ComboboxPrimitive.Root>
