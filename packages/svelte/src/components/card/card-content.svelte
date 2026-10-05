<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useCard } from "./card.context";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useCard();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.content({ class: cn(className) })}
  data-part="content"
  data-scope="card"
>
  {@render children?.()}
</Ark>
