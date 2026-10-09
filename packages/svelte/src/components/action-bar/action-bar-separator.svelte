<script lang="ts">
import { cn } from "@pisagor/utils";
import Separator from "../separator.svelte";
import { useActionBar } from "./action-bar.context";

type Props = { class?: import("svelte/elements").ClassValue };
let { class: className, ...rest }: Props = $props();
const ctx = useActionBar();
</script>

<Separator
  {...rest}
  class={ctx.slots.separator({ class: cn(className) })}
  data-part="separator"
  data-scope="action-bar"
/>
