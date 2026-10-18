<script lang="ts">
  import {
    Collapsible as CollapsiblePrimitive,
    type CollapsibleContentProps,
  } from "@ark-ui/svelte";
  import { useStyles } from "./collapsible.context";

  let {
    class: className,
    children,
    ...rest
  }: CollapsibleContentProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CollapsiblePrimitive.Content {...rest} class={slots.content()}>
  <div class={className}>
    {@render children?.()}
  </div>
</CollapsiblePrimitive.Content>
