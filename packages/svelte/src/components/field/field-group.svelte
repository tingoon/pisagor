<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { FieldProps as BaseFieldProps } from "@pisagor/props";
import { fieldRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { setFieldContext } from "./field.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  {
  children?: Snippet;
  class?: string | undefined;
  } & BaseFieldProps;

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
