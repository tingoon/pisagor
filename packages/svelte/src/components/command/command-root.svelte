<script lang="ts">
import { commandRecipe } from "@pisagor/recipes/command";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import ComboboxRoot from "../combobox/combobox-root.svelte";
import { setCommandContext } from "./command.context";

type Props = Omit<ComponentProps<typeof ComboboxRoot>, "recipe" | "class"> & {
  class?: string | undefined;
  recipe?: typeof commandRecipe;
};

let { recipe = commandRecipe, class: className, children, ...rest }: Props = $props();
const slots = $derived(recipe());
setCommandContext({
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
>
  {@render children?.()}
</ComboboxRoot>
