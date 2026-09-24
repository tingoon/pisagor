<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { type StatVariantProps, statRecipe } from "@pisagor/recipes/stat";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { setStatContext } from "./stat.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  StatVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
    recipe?: typeof statRecipe;
  };

let { variant, children, recipe = statRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(recipe());

setStatContext({
  get slots() {
    return slots;
  },
});
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: cn(className), variant })}
  data-part="root"
  data-scope="stat"
  data-variant={variant}
>
  {@render children?.()}
</Ark>
