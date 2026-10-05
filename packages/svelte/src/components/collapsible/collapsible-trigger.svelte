<script lang="ts">
import {
  Collapsible as CollapsiblePrimitive,
  type CollapsibleTriggerProps,
} from "@ark-ui/svelte/collapsible";
import { cn } from "@pisagor/utils";
import { useCollapsible } from "./collapsible.context";

let { class: className, children, ...rest }: CollapsibleTriggerProps = $props();
const { slots } = useCollapsible();
</script>

<CollapsiblePrimitive.Trigger
  {...rest}
  class={slots.trigger({ class: cn(className) })}
>
  {@render children?.()}
</CollapsiblePrimitive.Trigger>
