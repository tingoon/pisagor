<script lang="ts">
import { usePaginationContext } from "@ark-ui/svelte/pagination";
import { buttonRecipe } from "@pisagor/recipes/button";
import { cn } from "@pisagor/utils";
import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";

type Props = Omit<HTMLAnchorAttributes, "class" | "href"> & {
  children?: Snippet;
  class?: string | undefined;
  page?: "previous" | "next" | number;
};

let { page, children, class: className, ...rest }: Props = $props();
const pagination = usePaginationContext();

const pageValue = $derived.by(() => {
  const api = pagination();
  if (page === "previous") return api.previousPage;
  if (page === "next") return api.nextPage;
  return page;
});

const variant = $derived(typeof page === "number" ? ("outline" as const) : ("ghost" as const));
const classes = $derived(buttonRecipe({ variant }).base({ class: cn(className) }));
</script>

<a class={classes} href={`?page=${pageValue}`} {...rest}> {@render children?.()} </a>
