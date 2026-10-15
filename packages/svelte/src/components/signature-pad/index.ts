import SignaturePadShorthand from "./signature-pad.svelte";
import SignaturePadClear from "./signature-pad-clear.svelte";
import SignaturePadControl from "./signature-pad-control.svelte";
import SignaturePadGuide from "./signature-pad-guide.svelte";
import SignaturePadRoot from "./signature-pad-root.svelte";
import SignaturePadSegment from "./signature-pad-segment.svelte";

export const SignaturePad = Object.assign(SignaturePadShorthand, {
  Clear: SignaturePadClear,
  Control: SignaturePadControl,
  Guide: SignaturePadGuide,
  Root: SignaturePadRoot,
  Segment: SignaturePadSegment,
});
