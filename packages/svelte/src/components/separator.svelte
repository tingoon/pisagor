<script lang="ts">
  import type { SeparatorRootContract } from "@pisagor/contracts";
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
  } & SeparatorRootContract;

  let {
    recipe = separatorRecipe,
    class: className,
    orientation = "horizontal",
    decorative = false,
    ...rest
  }: Props = $props();
</script>

{#if decorative}
  <div
    {...rest}
    class={recipe({ class: cn(className) })}
    data-orientation={orientation}
    data-part="root"
    data-scope="separator"
    role="none"
  ></div>
{:else}
  <!-- biome-ignore lint/a11y/useSemanticElements: mirrors React Separator DOM (div role="separator") -->
  <div
    {...rest}
    aria-orientation={orientation}
    class={recipe({ class: cn(className) })}
    data-orientation={orientation}
    data-part="root"
    data-scope="separator"
    role="separator"
  ></div>
{/if}
