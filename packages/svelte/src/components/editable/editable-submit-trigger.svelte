<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableSubmitTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./editable.context";

  let { children, ...rest }: EditableSubmitTriggerProps = $props();
  const part = withContext(() => rest, { name: "SubmitTrigger" });
</script>

<EditablePrimitive.SubmitTrigger {...part.props}>
  {@render children?.()}
</EditablePrimitive.SubmitTrigger>
