<script lang="ts">
import {
  Dialog as DialogPrimitive,
  type DialogTriggerProps,
} from "@ark-ui/svelte/dialog";

let { children, ...rest }: DialogTriggerProps = $props();
</script>

<DialogPrimitive.Trigger {...rest}>
  {@render children?.()}
</DialogPrimitive.Trigger>
