<script lang="ts">
import {
  type DialogDescriptionProps,
  Dialog as DialogPrimitive,
} from "@ark-ui/svelte/dialog";
import { withContext } from "./dialog.context";

let { children, ...rest }: DialogDescriptionProps = $props();
const part = withContext(() => rest, { name: "Description" });
</script>

<DialogPrimitive.Description {...part.props}>
  {@render children?.()}
</DialogPrimitive.Description>
