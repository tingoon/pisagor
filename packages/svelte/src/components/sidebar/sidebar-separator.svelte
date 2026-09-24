<script lang="ts">
import type { ComponentProps } from "svelte";
import Separator from "../separator/separator.svelte";
import { useSidebar } from "./sidebar.context";

type Props = ComponentProps<typeof Separator>;

let { class: className, ...rest }: Props = $props();
const ctx = useSidebar();
</script>

<Separator
  {...rest}
  class={ctx.slots.separator({ class: className })}
  data-part="separator"
  data-scope="sidebar"
  data-sidebar="separator"
/>
