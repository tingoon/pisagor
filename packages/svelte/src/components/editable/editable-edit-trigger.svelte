<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableEditTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: EditableEditTriggerProps = $props();
</script>

<EditablePrimitive.EditTrigger {...rest}>
  {@render children?.()}
</EditablePrimitive.EditTrigger>
