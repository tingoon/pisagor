<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { CardProps as BaseCardProps } from "@pisagor/props";
import type { HTMLAttributes } from "svelte/elements";
import { useCard } from "./card.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
} & BaseCardProps;

let {
  variant = "default",
  children,
  class: className,
  ...rest
}: Props = $props();

const { slots } = useCard();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.media({ class: className, variant })}
  data-part="media"
  data-scope="card"
  data-variant={variant}
>
  {@render children?.()}
</Ark>
