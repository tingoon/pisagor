<script lang="ts">
  import {
    Select as SelectPrimitive,
    type SelectClearTriggerProps,
  } from "@ark-ui/svelte";
  import { selectRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useLocale } from "../provider/context";
  import { useSelectRoot } from "./select.context";

  const { m } = useLocale();

  let {
    class: className,
    children,
    ...rest
  }: SelectClearTriggerProps = $props();
  const ctx = useSelectRoot();
  const slots = $derived(ctx?.slots ?? selectRecipe());
</script>

<SelectPrimitive.ClearTrigger
  aria-label={m("select.clear")}
  {...rest}
  class={slots.clearTrigger({ class: cn(className) })}
>
  {@render children?.()}
</SelectPrimitive.ClearTrigger>
