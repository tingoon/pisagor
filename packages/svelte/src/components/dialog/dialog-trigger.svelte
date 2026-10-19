<script lang="ts">
  import {
    Dialog as DialogPrimitive,
    type DialogTriggerProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./dialog.context";

  let { children, ...rest }: DialogTriggerProps = $props();
  const part = withContext(() => rest, { name: "Trigger" });
</script>

<DialogPrimitive.Trigger {...part.props}>
  {@render children?.()}
</DialogPrimitive.Trigger>
