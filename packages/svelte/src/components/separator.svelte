<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { SeparatorProps as BaseSeparatorProps } from "@pisagor/props";
import { separatorRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
  /**
   * Purely visual separator: hidden from assistive tech (`role="none"`).
   *
   * @defaultValue false
   */
  decorative?: boolean;
} & BaseSeparatorProps;

let {
  recipe = separatorRecipe,
  class: className,
  orientation = "horizontal",
  decorative = false,
  ...rest
}: Props = $props();
</script>

<Ark
  as="div"
  {...rest}
  aria-orientation={decorative ? undefined : orientation}
  class={recipe({ class: cn(className) })}
  data-orientation={orientation}
  data-part="root"
  data-scope="separator"
  role={decorative ? "none" : "separator"}
/>
