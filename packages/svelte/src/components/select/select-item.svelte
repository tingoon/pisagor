<script lang="ts">
import type { SelectItemProps } from "@ark-ui/svelte/select";
import { Select as SelectPrimitive } from "@ark-ui/svelte/select";
import { selectRecipe } from "@pisagor/recipes";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import { useSelectRoot } from "./select.context";

type Props = Omit<SelectItemProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const ctx = useSelectRoot();
const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<SelectPrimitive.Item {...rest} class={slots.item({ class: className })}>
  <SelectPrimitive.ItemText class={slots.itemText()}>
    {@render children?.()}
  </SelectPrimitive.ItemText>
  <span class={slots.itemIndicator()}>
    <SelectPrimitive.ItemIndicator>
      <CheckIcon />
    </SelectPrimitive.ItemIndicator>
  </span>
</SelectPrimitive.Item>
