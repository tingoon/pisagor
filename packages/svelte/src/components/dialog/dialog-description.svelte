<script lang="ts">
import {
  type DialogDescriptionProps,
  Dialog as DialogPrimitive,
} from "@ark-ui/svelte/dialog";
import { cn } from "@pisagor/utils";
import { useDialog } from "./dialog.context";

let { children, class: className, ...rest }: DialogDescriptionProps = $props();
const { slots } = useDialog();
</script>

<DialogPrimitive.Description
  {...rest}
  class={slots.description({ class: cn(className) })}
>
  {@render children?.()}
</DialogPrimitive.Description>
