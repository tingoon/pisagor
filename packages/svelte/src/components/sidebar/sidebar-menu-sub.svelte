<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useSidebar } from "./sidebar.context";

type Props = Omit<HTMLAttributes<HTMLUListElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useSidebar();
</script>

<Ark
  as="ul"
  {...rest}
  class={ctx.slots.menuSub({ class: cn(className) })}
  data-part="menu-sub"
  data-scope="sidebar"
  data-sidebar="menu-sub"
>
  {@render children?.()}
</Ark>
