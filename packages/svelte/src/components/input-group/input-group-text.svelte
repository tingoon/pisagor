<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { inputGroupTextRecipe } from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLSpanElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof inputGroupTextRecipe;
};

let { recipe = inputGroupTextRecipe, class: className, children, ...rest }: Props = $props();
</script>

<Ark
  as="span"
  {...rest}
  class={recipe({ class: cn(className) })}
  data-part="text"
  data-scope="input-group"
>
  {@render children?.()}
</Ark>
