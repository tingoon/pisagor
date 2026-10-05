<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { KbdProps as BaseKbdProps } from "@pisagor/props";
import { kbdRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
} & BaseKbdProps;

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
