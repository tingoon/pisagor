<script lang="ts">
  import {
    SignaturePad as SignaturePadPrimitive,
    type SignaturePadClearTriggerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { ArrowCounterClockwiseIcon } from "phosphor-svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import { useStyles } from "./signature-pad.context";

  const { m } = useLocale();

  let {
    class: className,
    ...rest
  }: Omit<SignaturePadClearTriggerProps, "asChild" | "children"> = $props();
  const styles = useStyles();
</script>

<SignaturePadPrimitive.ClearTrigger {...rest}>
  {#snippet asChild(props)}
    <Button
      {...props({ class: styles.slots.clear({ class: cn(className) }) })}
      aria-label={m("signaturePad.clearSignature")}
      size="icon-md"
      variant="ghost"
    >
      <ArrowCounterClockwiseIcon />
    </Button>
  {/snippet}
</SignaturePadPrimitive.ClearTrigger>
