<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { SkipNavProps as BaseSkipNavProps } from "@pisagor/props";
import { skipNavRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

const SKIP_NAV_ID = "skip-nav-content";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class" | "id"> &
  {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  id?: string;
  } & BaseSkipNavProps;

let {
  id = SKIP_NAV_ID,
  recipe = skipNavRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
</script>

<Ark
  as="div"
  {...rest}
  class={slots.content({ class: cn(className) })}
  data-part="content"
  data-scope="skip-nav"
  {id}
  tabindex={-1}
>
  {@render children?.()}
</Ark>
