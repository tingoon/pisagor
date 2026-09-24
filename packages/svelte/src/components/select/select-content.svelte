<script lang="ts">
import { Portal } from "@ark-ui/svelte/portal";
import type { SelectContentProps } from "@ark-ui/svelte/select";
import { Select as SelectPrimitive } from "@ark-ui/svelte/select";
import { selectRecipe } from "@pisagor/recipes/select";
import { cn } from "@pisagor/utils";
import { useSelectRoot } from "./select.context";

type Props = Omit<SelectContentProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<Portal>
  <SelectPrimitive.Positioner>
    <SelectPrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
      {@render children?.()}
    </SelectPrimitive.Content>
  </SelectPrimitive.Positioner>
</Portal>
