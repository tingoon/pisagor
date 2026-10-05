<script lang="ts">
import {
  Editable as EditablePrimitive,
  type EditableSubmitTriggerProps,
} from "@ark-ui/svelte/editable";

let { children, ...rest }: EditableSubmitTriggerProps = $props();
</script>

<EditablePrimitive.SubmitTrigger {...rest}>
  {@render children?.()}
</EditablePrimitive.SubmitTrigger>
