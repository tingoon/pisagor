<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import DialogFooter from "../dialog/dialog-footer.svelte";
import { useSheet } from "./sheet.context";

let { class: className, ...rest }: ComponentProps<typeof DialogFooter> =
  $props();
const { slots } = useSheet();
</script>

<DialogFooter
  {...rest}
  class={slots.footer({ class: cn(className) })}
  data-part="footer"
  data-scope="sheet"
/>
