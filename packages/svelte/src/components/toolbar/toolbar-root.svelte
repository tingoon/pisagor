<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { ToolbarProps as BaseToolbarProps } from "@pisagor/props";
import { toolbarRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setToolbarContext } from "./toolbar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "title"> & {
  class?: string | undefined;
} & BaseToolbarProps;

let {
  children,
  recipe = toolbarRecipe,
  class: className,
  ...rest
}: Props = $props();
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
