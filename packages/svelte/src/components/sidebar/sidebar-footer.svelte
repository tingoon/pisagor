<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
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
  class={ctx.slots.footer({ class: className })}
  data-part="footer"
  data-scope="sidebar"
  data-sidebar="footer"
>
  {@render children?.()}
</Ark>
