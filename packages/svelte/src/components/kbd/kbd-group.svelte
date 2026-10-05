<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { KbdGroupProps as BaseKbdGroupProps } from "@pisagor/props";
import { kbdGroupRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
} & BaseKbdGroupProps;

let {
  recipe = kbdGroupRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
</script>

<Ark
  as="div"
  {...rest}
  class={recipe({ class: className })}
  data-part="group"
  data-scope="kbd"
>
  {@render children?.()}
</Ark>
