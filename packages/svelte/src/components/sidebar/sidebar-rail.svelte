<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useSidebar } from "./sidebar.context";

type Props = Omit<HTMLButtonAttributes, "class"> & {
  class?: string | undefined;
};

let { class: className, ...rest }: Props = $props();
const ctx = useSidebar();
</script>

<Ark
  as="button"
  {...rest}
  aria-label="Toggle sidebar"
  class={ctx.slots.rail({ class: className })}
  data-part="rail"
  data-scope="sidebar"
  data-sidebar="rail"
  onclick={() => ctx.toggleSidebar()}
  tabindex={-1}
  title="Toggle sidebar"
  type="button"
/>
