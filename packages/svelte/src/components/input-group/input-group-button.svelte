<script lang="ts">
import {
  type InputGroupButtonVariantProps,
  inputGroupButtonRecipe,
} from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import Button from "../button/button.svelte";

type Props = Omit<import("svelte").ComponentProps<typeof Button>, "size" | "recipe"> &
  InputGroupButtonVariantProps & {
    recipe?: typeof inputGroupButtonRecipe;
  };

let {
  size = "xs",
  variant = "ghost",
  recipe = inputGroupButtonRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
</script>

<Button
  {...rest}
  class={recipe({ class: cn(className), size })}
  data-part="button"
  data-scope="input-group"
  data-size={size}
  {variant}
>
  {@render children?.()}
</Button>
