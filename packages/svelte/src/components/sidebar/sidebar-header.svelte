<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useSidebar } from "./sidebar.context";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useSidebar();
</script>

<Ark
  as="div"
  {...rest}
  class={ctx.slots.header({ class: cn(className) })}
  data-part="header"
  data-scope="sidebar"
  data-sidebar="header"
>
  {@render children?.()}
</Ark>
