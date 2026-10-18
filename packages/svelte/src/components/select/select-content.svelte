<script lang="ts">
  import {
    Portal,
    Select as SelectPrimitive,
    type SelectContentProps,
  } from "@ark-ui/svelte";
  import { selectRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useSelectRoot } from "./select.context";

  let { class: className, children, ...rest }: SelectContentProps = $props();
  const ctx = useSelectRoot();
  const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<Portal>
  <SelectPrimitive.Positioner>
    <SelectPrimitive.Content
      {...rest}
      class={slots.content({ class: cn(className) })}
    >
      {@render children?.()}
    </SelectPrimitive.Content>
  </SelectPrimitive.Positioner>
</Portal>
