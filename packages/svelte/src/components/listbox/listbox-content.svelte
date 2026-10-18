<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxContentProps,
  } from "@ark-ui/svelte";
  import { withListboxContext } from "./listbox.context";

  let { children, ...rest }: ListboxContentProps = $props();
  const part = withListboxContext(() => rest, { name: "Content" });
</script>

<ListboxPrimitive.Content {...part.props}>
  {@render children?.()}
</ListboxPrimitive.Content>
