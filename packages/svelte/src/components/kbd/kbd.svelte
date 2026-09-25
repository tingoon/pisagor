<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { type KbdVariantProps, kbdRecipe } from "@pisagor/recipes/kbd";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> &
  KbdVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
    recipe?: typeof kbdRecipe;
  };

let {
  variant = "default",
  recipe = kbdRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
</script>

<Ark
  as="kbd"
  {...rest}
  class={recipe({ class: cn(className), variant })}
  data-part="root"
  data-scope="kbd"
>
  {@render children?.()}
</Ark>
