<script lang="ts">
  import {
    Editable as EditablePrimitive,
    type EditableInputProps,
  } from "@ark-ui/svelte";

  type Props = Omit<EditableInputProps, "size">;
  let props: Props = $props();
</script>

<EditablePrimitive.Input {...props} />
