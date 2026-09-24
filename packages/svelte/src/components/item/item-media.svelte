<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { ItemVariantProps } from "@pisagor/recipes/item";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useItem } from "./item.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  ItemVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
  };

let { variant = "default", children, class: className, ...rest }: Props = $props();

const { slots } = useItem();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.media({ class: cn(className), variant })}
  data-part="media"
  data-scope="item"
  data-variant={variant}
>
  {@render children?.()}
</Ark>
