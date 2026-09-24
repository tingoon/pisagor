<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { fieldRecipe } from "@pisagor/recipes/field";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { setFieldContext } from "./field.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
  recipe?: typeof fieldRecipe;
};

let { recipe = fieldRecipe, class: className, children, ...rest }: Props = $props();
const slots = $derived(recipe());
setFieldContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.group({ class: cn(className) })}
  data-part="group"
  data-scope="field"
>
  {@render children?.()}
</Ark>
