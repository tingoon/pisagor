<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogFooter from "../dialog/dialog-footer.svelte";
import { useSheet } from "./sheet.context";

type Props = ComponentProps<typeof DialogFooter>;
let { class: className, ...rest }: Props = $props();
const { slots } = useSheet();
</script>

<DialogFooter
  {...rest}
  class={slots.footer({ class: className })}
  data-part="footer"
  data-scope="sheet"
/>
