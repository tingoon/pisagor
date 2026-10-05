<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";
import { useSidebar } from "./sidebar.context";

type Props = HTMLAttributes<HTMLUListElement> & {
  children?: import("svelte").Snippet;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useSidebar();
</script>

<Ark
  as="ul"
  {...rest}
  class={ctx.slots.menu({ class: cn(className) })}
  data-part="menu"
  data-scope="sidebar"
  data-sidebar="menu"
>
  {@render children?.()}
</Ark>
