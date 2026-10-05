<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useSidebar } from "./sidebar.context";

let { class: className, ...rest }: HTMLButtonAttributes = $props();
const ctx = useSidebar();
</script>

<Ark
  as="button"
  {...rest}
  aria-label="Toggle sidebar"
  class={ctx.slots.rail({ class: cn(className) })}
  data-part="rail"
  data-scope="sidebar"
  data-sidebar="rail"
  onclick={() => ctx.toggleSidebar()}
  tabindex={-1}
  title="Toggle sidebar"
  type="button"
/>
