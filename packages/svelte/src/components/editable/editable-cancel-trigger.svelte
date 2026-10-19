<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableCancelTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./editable.context";

  let { children, ...rest }: EditableCancelTriggerProps = $props();
  const part = withContext(() => rest, { name: "CancelTrigger" });
</script>

<EditablePrimitive.CancelTrigger {...part.props}>
  {@render children?.()}
</EditablePrimitive.CancelTrigger>
