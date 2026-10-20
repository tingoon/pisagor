<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxValueTextProps,
  } from "@ark-ui/svelte";
  import { withListboxContext } from "./listbox.context";

  let { ...rest }: ListboxValueTextProps = $props();
  const part = withListboxContext(() => rest, { name: "ValueText" });
</script>

<ListboxPrimitive.ValueText {...part.props} />
