<script lang="ts">
import {
  type CollapsibleContentProps,
  Collapsible as CollapsiblePrimitive,
} from "@ark-ui/svelte/collapsible";
import { useCollapsible } from "./collapsible.context";

let { class: className, children, ...rest }: CollapsibleContentProps = $props();
const styles = useCollapsible();
const slots = $derived(styles.slots);
</script>

<CollapsiblePrimitive.Content {...rest} class={slots.content()}>
  <div class={className}>
    {@render children?.()}
  </div>
</CollapsiblePrimitive.Content>
