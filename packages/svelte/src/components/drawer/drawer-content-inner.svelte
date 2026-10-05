<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useDrawer } from "./drawer.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useDrawer();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.contentInner({ class: className })}
  data-part="content-inner"
  data-scope="drawer"
>
  {@render children?.()}
</Ark>
