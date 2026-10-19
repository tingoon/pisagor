<script lang="ts">
  import type { SignaturePadRootProps } from "@ark-ui/svelte";
  import type {
    SignaturePadContract,
    SignaturePadRootContract,
  } from "@pisagor/contracts";

  import { ArrowCounterClockwiseIcon } from "phosphor-svelte";
  import Button from "../button.svelte";
  import { useLocale } from "../provider/context";
  import SignaturePadClearTrigger from "./signature-pad-clear-trigger.svelte";
  import SignaturePadControl from "./signature-pad-control.svelte";
  import SignaturePadGuide from "./signature-pad-guide.svelte";
  import SignaturePadRoot from "./signature-pad-root.svelte";
  import SignaturePadSegment from "./signature-pad-segment.svelte";

  type Props = Omit<SignaturePadRootProps, "children"> & {
    /**
     * Whether to show the clear button.
     *
     * @defaultValue true
     */
    clearable?: boolean;
    /** Marks the control as invalid for styling and assistive tech. */
    invalid?: boolean;
  } & SignaturePadRootContract &
    SignaturePadContract;

  let {
    clearable = true,
    invalid = false,
    classNames,
    ...rest
  }: Props = $props();
  const { m } = useLocale();
</script>

<SignaturePadRoot {...rest} {invalid}>
  <SignaturePadControl class={classNames?.control} {invalid}>
    <SignaturePadSegment class={classNames?.segment} />
    {#if clearable}
      <SignaturePadClearTrigger class={classNames?.clearTrigger}>
        {#snippet asChild(props)}
          <Button
            {...props()}
            aria-label={m("signaturePad.clearSignature")}
            size="icon-md"
            variant="ghost"
          >
            <ArrowCounterClockwiseIcon />
          </Button>
        {/snippet}
      </SignaturePadClearTrigger>
    {/if}
    <SignaturePadGuide class={classNames?.guide} />
  </SignaturePadControl>
</SignaturePadRoot>
