<script lang="ts">
import type { CollapsibleTriggerProps } from "@ark-ui/svelte/collapsible";
import { Collapsible as CollapsiblePrimitive } from "@ark-ui/svelte/collapsible";
import { cn } from "@pisagor/utils";
import { useCollapsible } from "./collapsible.context";

type Props = Omit<CollapsibleTriggerProps, "class"> & {
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useCollapsible();
</script>

<CollapsiblePrimitive.Trigger {...rest} class={slots.trigger({ class: cn(className) })}>
  {@render children?.()}
</CollapsiblePrimitive.Trigger>
