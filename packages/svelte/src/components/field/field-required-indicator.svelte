<script lang="ts">
import type { FieldRequiredIndicatorProps } from "@ark-ui/svelte/field";
import { Field as FieldPrimitive } from "@ark-ui/svelte/field";
import { cn } from "@pisagor/utils";
import { useFieldSlots } from "./field.context";

type Props = Omit<FieldRequiredIndicatorProps, "class"> & { class?: string | undefined };

let { children, class: className, ...rest }: Props = $props();
const slots = useFieldSlots();
</script>

<FieldPrimitive.RequiredIndicator
  {...rest}
  aria-hidden="true"
  class={slots.requiredIndicator({ class: cn(className) })}
>
  {#if children}
    {@render children()}
  {:else}
    *
  {/if}
</FieldPrimitive.RequiredIndicator>
