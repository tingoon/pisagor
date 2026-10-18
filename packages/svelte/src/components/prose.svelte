<script lang="ts">
  import type { ProseRootContract } from "@pisagor/props";
  import { proseRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
    html?: string;
    /**
     * Sanitizer applied to `html` before injection, e.g. `(html) =>
     * DOMPurify.sanitize(html)`. Recommended for user-generated content.
     */
    sanitize?: (html: string) => string;
  } & ProseRootContract;

  let {
    html,
    sanitize,
    recipe = proseRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
</script>

{#if html}
  <div
    {...rest}
    class={recipe({ class: cn(className) })}
    data-part="root"
    data-scope="prose"
  >
    {@html sanitize ? sanitize(html) : html}
  </div>{:else}
  <div
    {...rest}
    class={recipe({ class: cn(className) })}
    data-part="root"
    data-scope="prose"
  >
    {@render children?.()}
  </div>{/if}
