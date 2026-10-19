import ClipboardShorthand from "./clipboard.svelte";
import ClipboardControl from "./clipboard-control.svelte";
import ClipboardField from "./clipboard-field.svelte";
import ClipboardIndicator from "./clipboard-indicator.svelte";
import ClipboardInput from "./clipboard-input.svelte";
import ClipboardLabel from "./clipboard-label.svelte";
import ClipboardRoot from "./clipboard-root.svelte";
import ClipboardValueText from "./clipboard-value-text.svelte";

export const Clipboard = Object.assign(ClipboardShorthand, {
  Control: ClipboardControl,
  Field: ClipboardField,
  Indicator: ClipboardIndicator,
  Input: ClipboardInput,
  Label: ClipboardLabel,
  Root: ClipboardRoot,
  ValueText: ClipboardValueText,
});
