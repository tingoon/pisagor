<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { KbdGroupProps as BaseKbdGroupProps } from "@pisagor/props";
import { kbdGroupRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
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
  class={recipe({ class: cn(className) })}
  data-part="group"
  data-scope="kbd"
>
  {@render children?.()}
</Ark>
