<script lang="ts">
import {
  type EditableCancelTriggerProps,
  Editable as EditablePrimitive,
} from "@ark-ui/svelte/editable";

let { children, ...rest }: EditableCancelTriggerProps = $props();
</script>

<EditablePrimitive.CancelTrigger {...rest}>
  {@render children?.()}
</EditablePrimitive.CancelTrigger>
