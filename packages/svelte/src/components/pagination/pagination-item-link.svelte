<script lang="ts">
  import { usePaginationContext } from "@ark-ui/svelte";
  import { buttonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  type Props = Omit<HTMLAnchorAttributes, "href"> & {
    children?: Snippet;
    page?: "previous" | "next" | number;
    /**
     * Builds the link href for a page.
     *
     * @defaultValue (page) => `?page=${page}`
     */
    getHref?: (page: number) => string;
  };

  let {
    page,
    getHref = (value: number) => `?page=${value}`,
    children,
    class: className,
    ...rest
  }: Props = $props();
  const pagination = usePaginationContext();

  const pageValue = $derived.by(() => {
    const api = pagination();
    if (page === "previous") return api.previousPage;
    if (page === "next") return api.nextPage;
    return page;
  });

  const variant = $derived(
    typeof page === "number" ? ("outline" as const) : ("ghost" as const),
  );
  const classes = $derived(
    buttonRecipe({ variant }).base({ class: cn(className) }),
  );
</script>

<a
  aria-current={page === pagination().page ? "page" : undefined}
  class={classes}
  href={getHref(pageValue ?? 1)}
  {...rest}
>
  {@render children?.()}
</a>
