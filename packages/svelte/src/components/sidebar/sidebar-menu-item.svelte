<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLAttributes } from "svelte/elements";
import { useSidebar } from "./sidebar.context";

type Props = Omit<HTMLAttributes<HTMLLIElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useSidebar();
</script>

<Ark
  as="li"
  {...rest}
  class={ctx.slots.menuItem({ class: className })}
  data-part="menu-item"
  data-scope="sidebar"
  data-sidebar="menu-item"
>
  {@render children?.()}
</Ark>
