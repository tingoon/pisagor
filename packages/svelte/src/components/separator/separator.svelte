<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { SeparatorProps as BaseSeparatorProps } from "@pisagor/props";
import { separatorRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLHRElement>, "class"> &
  {
  class?: string | undefined;
  orientation?: "horizontal" | "vertical";
  } & BaseSeparatorProps;

let {
  recipe = separatorRecipe,
  class: className,
  orientation = "horizontal",
  ...rest
}: Props = $props();
</script>

<Ark
  as="hr"
  {...rest}
  aria-orientation={orientation}
  class={recipe({ class: cn(className) })}
  data-orientation={orientation}
  data-part="root"
  data-scope="separator"
/>
