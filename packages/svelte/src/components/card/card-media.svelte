<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { CardProps as BaseCardProps } from "@pisagor/props";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useCard } from "./card.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
} & BaseCardProps;

let {
  variant = "default",
  children,
  class: className,
  ...rest
}: Props = $props();

const styles = useCard();
const slots = $derived(styles.slots);
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
