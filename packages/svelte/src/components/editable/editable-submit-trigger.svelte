<script lang="ts">
import type { EditableSubmitTriggerProps } from "@ark-ui/svelte/editable";
import { Editable as EditablePrimitive } from "@ark-ui/svelte/editable";

type Props = EditableSubmitTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<EditablePrimitive.SubmitTrigger {...rest}>
  {@render children?.()}
</EditablePrimitive.SubmitTrigger>
