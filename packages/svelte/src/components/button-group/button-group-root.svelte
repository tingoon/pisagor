<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { type ButtonGroupVariantProps, buttonGroupRecipe } from "@pisagor/recipes/button-group";
import { cn } from "@pisagor/utils";
import type { HTMLFieldsetAttributes } from "svelte/elements";
import { setButtonGroupContext } from "./button-group.context";

type Props = Omit<HTMLFieldsetAttributes, "class"> &
  ButtonGroupVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
    recipe?: typeof buttonGroupRecipe;
  };

let {
  orientation,
  children,
  recipe = buttonGroupRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe({ orientation }));

setButtonGroupContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="fieldset"
  {...rest}
  class={slots.base({ class: cn(className) })}
  data-orientation={orientation}
  data-part="root"
  data-scope="button-group"
>
  {@render children?.()}
</Ark>
