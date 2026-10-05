<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { InputGroupTextProps as BaseInputGroupTextProps } from "@pisagor/props";
import { inputGroupTextRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children?: import("svelte").Snippet;
} & BaseInputGroupTextProps;

let {
  recipe = inputGroupTextRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
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
