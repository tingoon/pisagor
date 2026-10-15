<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { ProseProps as BaseProseProps } from "@pisagor/props";
import { proseRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
  html?: string;
  /**
   * Sanitizer applied to `html` before injection, e.g.
   * `(html) => DOMPurify.sanitize(html)`. Recommended for user-generated content.
   */
  sanitize?: (html: string) => string;
} & BaseProseProps;

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
  <Ark
    as="div"
    {...rest}
    class={recipe({ class: cn(className) })}
    data-part="root"
    data-scope="prose"
  >
    {@html sanitize ? sanitize(html) : html}
  </Ark>
{:else}
  <Ark
    as="div"
    {...rest}
    class={recipe({ class: cn(className) })}
    data-part="root"
    data-scope="prose"
  >
    {@render children?.()}
  </Ark>
{/if}
