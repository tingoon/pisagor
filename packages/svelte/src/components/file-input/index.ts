import FileInputShorthand from "./file-input.svelte";
import FileInputControl from "./file-input-control.svelte";
import FileInputLabel from "./file-input-label.svelte";
import FileInputRoot from "./file-input-root.svelte";

export const FileInput = Object.assign(FileInputShorthand, {
  Control: FileInputControl,
  Label: FileInputLabel,
  Root: FileInputRoot,
});
