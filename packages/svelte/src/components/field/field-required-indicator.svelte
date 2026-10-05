<script lang="ts">
import {
  Field as FieldPrimitive,
  type FieldRequiredIndicatorProps,
} from "@ark-ui/svelte/field";
import { cn } from "@pisagor/utils";
import { useFieldSlots } from "./field.context";

let {
  children,
  class: className,
  ...rest
}: FieldRequiredIndicatorProps = $props();
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
