<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useCard } from "./card.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useCard();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.footer({ class: className })}
  data-part="footer"
  data-scope="card"
>
  {@render children?.()}
</Ark>
