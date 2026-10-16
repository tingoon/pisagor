<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { cn } from "@pisagor/utils";
import type { HTMLButtonAttributes } from "svelte/elements";
import { useMessageResolver } from "../provider/context";
import { useSidebar } from "./sidebar.context";

const t = useMessageResolver();

let { class: className, ...rest }: HTMLButtonAttributes = $props();
const ctx = useSidebar();
</script>

<Ark
  aria-label={t("sidebar.toggle")}
  as="button"
  {...rest}
  class={ctx.slots.rail({ class: cn(className) })}
  data-part="rail"
  data-scope="sidebar"
  data-sidebar="rail"
  onclick={() => ctx.toggleSidebar()}
  tabindex={-1}
  title={t("sidebar.toggle")}
  type="button"
/>
