<script lang="ts">
import type { FieldErrorTextProps } from "@ark-ui/svelte/field";
import { Field as FieldPrimitive } from "@ark-ui/svelte/field";
import { useFieldSlots } from "./field.context";

type Props = Omit<FieldErrorTextProps, "class"> & {
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const slots = useFieldSlots();
</script>

<FieldPrimitive.ErrorText {...rest} class={slots.error({ class: className })}>
  {@render children?.()}
</FieldPrimitive.ErrorText>
