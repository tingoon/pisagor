<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import Separator from "../separator.svelte";
import { useSidebar } from "./sidebar.context";

let { class: className, ...rest }: ComponentProps<typeof Separator> = $props();
const ctx = useSidebar();
</script>

<Separator
  {...rest}
  class={ctx.slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="sidebar"
  data-sidebar="separator"
/>
