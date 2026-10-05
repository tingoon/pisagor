<script lang="ts">
import {
  type EditableEditTriggerProps,
  Editable as EditablePrimitive,
} from "@ark-ui/svelte/editable";

let { children, ...rest }: EditableEditTriggerProps = $props();
</script>

<EditablePrimitive.EditTrigger {...rest}>
  {@render children?.()}
</EditablePrimitive.EditTrigger>
