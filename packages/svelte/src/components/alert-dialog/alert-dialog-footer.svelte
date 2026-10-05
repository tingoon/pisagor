<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogFooter from "../dialog/dialog-footer.svelte";

let props: ComponentProps<typeof DialogFooter> = $props();
</script>

<DialogFooter {...props} data-part="footer" data-scope="alert-dialog" />
