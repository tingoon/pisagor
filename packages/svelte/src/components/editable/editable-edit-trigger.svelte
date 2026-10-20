<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableEditTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./editable.context";

  let { children, ...rest }: EditableEditTriggerProps = $props();
  const part = withContext(() => rest, { name: "EditTrigger" });
</script>

<EditablePrimitive.EditTrigger {...part.props}>
  {@render children?.()}
</EditablePrimitive.EditTrigger>
