<script lang="ts">
import {
  type ListboxContentProps,
  Listbox as ListboxPrimitive,
} from "@ark-ui/svelte/listbox";
import { cn } from "@pisagor/utils";
import { useListbox } from "./listbox.context";

let { class: className, children, ...rest }: ListboxContentProps = $props();
const { slots } = useListbox();
</script>

<ListboxPrimitive.Content
  {...rest}
  class={slots.content({ class: cn(className) })}
>
  {@render children?.()}
</ListboxPrimitive.Content>
