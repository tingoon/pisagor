<script lang="ts">
import type { CollapsibleContentProps } from "@ark-ui/svelte/collapsible";
import { Collapsible as CollapsiblePrimitive } from "@ark-ui/svelte/collapsible";
import { cn } from "@pisagor/utils";
import { useCollapsible } from "./collapsible.context";

type Props = Omit<CollapsibleContentProps, "class"> & {
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useCollapsible();
</script>

<CollapsiblePrimitive.Content {...rest} class={slots.content()}>
  <div class={cn(className)}>
    {@render children?.()}
  </div>
</CollapsiblePrimitive.Content>
