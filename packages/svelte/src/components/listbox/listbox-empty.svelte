<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxEmptyProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withListboxContext } from "./listbox.context";

  /** Empty state with localized default text. */
  let { children, ...rest }: ListboxEmptyProps = $props();
  const { m } = useLocale();
  const part = withListboxContext(() => rest, { name: "Empty" });
</script>

<ListboxPrimitive.Empty {...part.props}>
  {#if children}
    {@render children()}
  {:else}
    {m("listbox.empty")}
  {/if}
</ListboxPrimitive.Empty>
