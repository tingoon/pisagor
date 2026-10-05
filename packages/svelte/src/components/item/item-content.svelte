<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useItem } from "./item.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useItem();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.content({ class: className })}
  data-part="content"
  data-scope="item"
>
  {@render children?.()}
</Ark>
