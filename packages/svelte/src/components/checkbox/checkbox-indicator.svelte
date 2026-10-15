<script lang="ts">
import {
  type CheckboxIndicatorProps,
  Checkbox as CheckboxPrimitive,
} from "@ark-ui/svelte/checkbox";
import { checkboxRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";

type Props = CheckboxIndicatorProps & { recipe?: typeof checkboxRecipe };

let {
  children,
  recipe = checkboxRecipe,
  class: className,
  ...rest
}: Props = $props();
</script>

<CheckboxPrimitive.Indicator
  {...rest}
  class={recipe().indicator({ class: cn(className) })}
>
  {@render children?.()}
</CheckboxPrimitive.Indicator>
