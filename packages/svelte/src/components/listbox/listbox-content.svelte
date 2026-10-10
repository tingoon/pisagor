<script lang="ts">
import {
  type ListboxContentProps,
  Listbox as ListboxPrimitive,
} from "@ark-ui/svelte/listbox";
import { withListboxContext } from "./listbox.context";

let { children, ...rest }: ListboxContentProps = $props();
const part = withListboxContext(() => rest, { name: "Content" });
</script>

<ListboxPrimitive.Content {...part.props}>
  {@render children?.()}
</ListboxPrimitive.Content>
