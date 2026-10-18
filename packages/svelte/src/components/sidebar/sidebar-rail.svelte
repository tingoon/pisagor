<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { useLocale } from "../provider/context";
  import { useSidebar } from "./sidebar.context";

  const { m } = useLocale();

  let { class: className, ...rest }: HTMLButtonAttributes = $props();
  const ctx = useSidebar();
</script>

<Ark
  aria-label={m("sidebar.toggle")}
  as="button"
  {...rest}
  class={ctx.slots.rail({ class: cn(className) })}
  data-part="rail"
  data-scope="sidebar"
  data-sidebar="rail"
  onclick={() => ctx.toggleSidebar()}
  tabindex={-1}
  title={m("sidebar.toggle")}
  type="button"
/>
