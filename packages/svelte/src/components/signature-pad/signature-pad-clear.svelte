<script lang="ts">
  import {
    SignaturePad as SignaturePadPrimitive,
    type SignaturePadClearTriggerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { ArrowCounterClockwiseIcon } from "phosphor-svelte";
  import Button from "../button.svelte";
  import { useMessageResolver } from "../provider/context";
  import { useSignaturePad } from "./signature-pad.context";

  const t = useMessageResolver();

  let {
    class: className,
    ...rest
  }: Omit<SignaturePadClearTriggerProps, "asChild" | "children"> = $props();
  const styles = useSignaturePad();
</script>

<SignaturePadPrimitive.ClearTrigger {...rest}>
  {#snippet asChild(props)}
    <Button
      {...props({ class: styles.slots.clear({ class: cn(className) }) })}
      aria-label={t("signaturePad.clearSignature")}
      size="icon-md"
      variant="ghost"
    >
      <ArrowCounterClockwiseIcon />
    </Button>
  {/snippet}
</SignaturePadPrimitive.ClearTrigger>
