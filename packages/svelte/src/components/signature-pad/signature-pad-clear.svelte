<script lang="ts">
import {
  type SignaturePadClearTriggerProps,
  SignaturePad as SignaturePadPrimitive,
} from "@ark-ui/svelte/signature-pad";
import { cn } from "@pisagor/utils";
import ArrowCounterClockwiseIcon from "phosphor-svelte/lib/ArrowCounterClockwiseIcon";
import Button from "../button.svelte";
import { useSignaturePad } from "./signature-pad.context";

let {
  class: className,
  ...rest
}: Omit<SignaturePadClearTriggerProps, "asChild" | "children"> = $props();
const styles = useSignaturePad();
</script>

<SignaturePadPrimitive.ClearTrigger {...rest}>
  {#snippet asChild(
    props,
  )}
    <Button
      {...props({ class: styles.slots.clear({ class: cn(className) }) })}
      aria-label="Clear signature"
      size="icon-md"
      variant="ghost"
    >
      <ArrowCounterClockwiseIcon />
    </Button>
  {/snippet}
</SignaturePadPrimitive.ClearTrigger>
