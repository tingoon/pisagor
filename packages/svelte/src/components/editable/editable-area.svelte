<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableAreaProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./editable.context";

  let { children, ...rest }: EditableAreaProps = $props();
  const part = withContext(() => rest, { name: "Area" });
</script>

<EditablePrimitive.Area {...part.props}>
  {@render children?.()}
</EditablePrimitive.Area>
