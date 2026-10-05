<script lang="ts">
import {
  type DialogCloseTriggerProps,
  Dialog as DialogPrimitive,
} from "@ark-ui/svelte/dialog";

let { children, ...rest }: DialogCloseTriggerProps = $props();
</script>

<DialogPrimitive.CloseTrigger {...rest}>
  {@render children?.()}
</DialogPrimitive.CloseTrigger>
