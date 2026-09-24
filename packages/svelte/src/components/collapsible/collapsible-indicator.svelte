<script lang="ts">
import type { CollapsibleIndicatorProps } from "@ark-ui/svelte/collapsible";
import { Collapsible as CollapsiblePrimitive } from "@ark-ui/svelte/collapsible";
import { cn } from "@pisagor/utils";
import CaretDownIcon from "phosphor-svelte/lib/CaretDownIcon";
import { useCollapsible } from "./collapsible.context";

type Props = Omit<CollapsibleIndicatorProps, "class"> & {
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const { slots } = useCollapsible();
</script>

<CollapsiblePrimitive.Indicator {...rest} class={slots.indicator({ class: cn(className) })}>
  {#if children}
    {@render children()}
  {:else}
    <CaretDownIcon class={slots.icon()} />
  {/if}
</CollapsiblePrimitive.Indicator>
