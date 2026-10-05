<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { useMenu } from "./menu.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useMenu();
</script>

<Ark
  as="div"
  {...rest}
  class={slots.groupLabel({ class: className })}
  data-part="group-label"
  data-scope="menu"
>
  {@render children?.()}
</Ark>
