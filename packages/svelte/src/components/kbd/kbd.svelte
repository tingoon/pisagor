<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { KbdProps as BaseKbdProps } from "@pisagor/props";
import { kbdRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
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
  class={recipe({ class: className, variant })}
  data-part="root"
  data-scope="kbd"
>
  {@render children?.()}
</Ark>
