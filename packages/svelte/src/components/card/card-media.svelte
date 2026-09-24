<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { CardVariantProps } from "@pisagor/recipes/card";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useCard } from "./card.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> &
  CardVariantProps & {
    children?: import("svelte").Snippet;
    class?: string | undefined;
  };

let { variant = "default", children, class: className, ...rest }: Props = $props();

const { slots } = useCard();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.media({ class: cn(className), variant })}
  data-part="media"
  data-scope="card"
  data-variant={variant}
>
  {@render children?.()}
</Ark>
