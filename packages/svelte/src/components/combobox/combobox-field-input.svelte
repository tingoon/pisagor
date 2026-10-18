<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxInputProps,
  } from "@ark-ui/svelte";

  let props: ComboboxInputProps = $props();
</script>

<ComboboxPrimitive.Input {...props} />
