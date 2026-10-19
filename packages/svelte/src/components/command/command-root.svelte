<script lang="ts">
  import type { CommandRootContract } from "@pisagor/contracts";
  import { commandRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { ComponentProps } from "svelte";
  import ComboboxRoot from "../combobox/combobox-root.svelte";
  import { Context } from "./command.context";

  type Props = Omit<ComponentProps<typeof ComboboxRoot>, "recipe"> &
    CommandRootContract;

  let {
    recipe = commandRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
  const slots = $derived(recipe());
  Context.set({
    get slots() {
      return slots;
    },
  });
</script>

<ComboboxRoot
  {...rest}
  class={slots.base({ class: cn(className) })}
  closeOnSelect={false}
  disableLayer
  inputBehavior="autohighlight"
  loopFocus={false}
  open
  selectionBehavior="clear"
  showIndicator={false}
>
  {@render children?.()}
</ComboboxRoot>
