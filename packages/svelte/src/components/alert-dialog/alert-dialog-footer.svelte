<script lang="ts">
import type { ComponentProps } from "svelte";
import DialogFooter from "../dialog/dialog-footer.svelte";

type Props = ComponentProps<typeof DialogFooter>;
let props: Props = $props();
</script>

<DialogFooter {...props} data-part="footer" data-scope="alert-dialog" />
