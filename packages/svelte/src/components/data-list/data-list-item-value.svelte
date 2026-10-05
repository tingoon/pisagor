<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useDataListItem } from "./data-list.context";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { children, class: className, ...rest }: Props = $props();

const { slots } = useDataListItem();
</script>

<Ark
  as="dd"
  {...rest}
  class={slots.value({ class: className })}
  data-part="item-value"
  data-scope="data-list"
>
  {@render children?.()}
</Ark>
