<script lang="ts">
  import type { SignaturePadRootProps } from "@ark-ui/svelte";
  import type {
    SignaturePadContract,
    SignaturePadRootContract,
  } from "@pisagor/props";

  import SignaturePadClear from "./signature-pad-clear.svelte";
  import SignaturePadControl from "./signature-pad-control.svelte";
  import SignaturePadGuide from "./signature-pad-guide.svelte";
  import SignaturePadRoot from "./signature-pad-root.svelte";
  import SignaturePadSegment from "./signature-pad-segment.svelte";

  type FormControlVariant = "primary" | "secondary";

  type Props = Omit<SignaturePadRootProps, "children"> & {
    /** Marks the control as invalid for styling and assistive tech. */
    invalid?: boolean;
    /** Visual shell variant. Defaults to `primary`. */
    variant?: FormControlVariant;
  } & SignaturePadRootContract &
    SignaturePadContract;

  let { variant, invalid = false, classNames, ...rest }: Props = $props();
</script>

<SignaturePadRoot {...rest} {invalid}>
  <SignaturePadControl class={classNames?.control} {invalid} {variant}>
    <SignaturePadSegment class={classNames?.segment} />
    <SignaturePadClear class={classNames?.clear} />
    <SignaturePadGuide class={classNames?.guide} />
  </SignaturePadControl>
</SignaturePadRoot>
