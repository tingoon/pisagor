<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import DialogBody from "../dialog/dialog-body.svelte";
import { useSheet } from "./sheet.context";

let { class: className, ...rest }: ComponentProps<typeof DialogBody> = $props();
const styles = useSheet();
const slots = $derived(styles.slots);
</script>

<DialogBody
  {...rest}
  class={slots.body({ class: cn(className) })}
  data-part="body"
  data-scope="sheet"
/>
