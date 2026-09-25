<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { toolbarRecipe } from "@pisagor/recipes/toolbar";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setToolbarContext } from "./toolbar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "title"> & {
  class?: string | undefined;
  recipe?: typeof toolbarRecipe;
};

let { children, recipe = toolbarRecipe, class: className, ...rest }: Props = $props();
const slots = $derived(recipe());
setToolbarContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="toolbar"
>
  {@render children?.()}
</Ark>
