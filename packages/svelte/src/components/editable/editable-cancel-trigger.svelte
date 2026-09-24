<script lang="ts">
import type { EditableCancelTriggerProps } from "@ark-ui/svelte/editable";
import { Editable as EditablePrimitive } from "@ark-ui/svelte/editable";

type Props = EditableCancelTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<EditablePrimitive.CancelTrigger {...rest}>
  {@render children?.()}
</EditablePrimitive.CancelTrigger>
