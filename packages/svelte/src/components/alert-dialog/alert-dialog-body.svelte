<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import { useDialog } from "../dialog/dialog.context";
import DialogBody from "../dialog/dialog-body.svelte";

let { class: className, ...rest }: ComponentProps<typeof DialogBody> = $props();
const { slots } = useDialog();
</script>

<DialogBody
  {...rest}
  class={slots.alertBody({ class: cn(className) })}
  data-part="body"
  data-scope="alert-dialog"
/>
