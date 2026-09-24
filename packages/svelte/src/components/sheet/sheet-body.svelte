<script lang="ts">
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "svelte";
import DialogBody from "../dialog/dialog-body.svelte";
import { useSheet } from "./sheet.context";

type Props = ComponentProps<typeof DialogBody>;
let { class: className, ...rest }: Props = $props();
const { slots } = useSheet();
</script>

<DialogBody
  {...rest}
  class={slots.body({ class: cn(className) })}
  data-part="body"
  data-scope="sheet"
/>
