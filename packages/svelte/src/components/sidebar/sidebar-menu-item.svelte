<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
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
  class={ctx.slots.menuItem({ class: cn(className) })}
  data-part="menu-item"
  data-scope="sidebar"
  data-sidebar="menu-item"
>
  {@render children?.()}
</Ark>
