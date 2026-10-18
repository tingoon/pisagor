<script lang="ts">
  import {
    Dialog as AlertDialogPrimitive,
    type DialogTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: DialogTriggerProps = $props();
</script>

<AlertDialogPrimitive.Trigger {...rest}>
  {@render children?.()}
</AlertDialogPrimitive.Trigger>
