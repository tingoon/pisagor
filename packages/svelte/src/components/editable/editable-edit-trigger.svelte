<script lang="ts">
import type { EditableEditTriggerProps } from "@ark-ui/svelte/editable";
import { Editable as EditablePrimitive } from "@ark-ui/svelte/editable";

type Props = EditableEditTriggerProps;
let { children, ...rest }: Props = $props();
</script>

<EditablePrimitive.EditTrigger {...rest}> {@render children?.()} </EditablePrimitive.EditTrigger>
