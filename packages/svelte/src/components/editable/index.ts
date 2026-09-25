import EditableArea from "./editable-area.svelte";
import EditableCancelTrigger from "./editable-cancel-trigger.svelte";
import EditableControl from "./editable-control.svelte";
import EditableEditTrigger from "./editable-edit-trigger.svelte";
import EditableInput from "./editable-input.svelte";
import EditablePreview from "./editable-preview.svelte";
import EditableRoot from "./editable-root.svelte";
import EditableSubmitTrigger from "./editable-submit-trigger.svelte";

export const Editable = Object.assign(EditableRoot, {
  Area: EditableArea,
  CancelTrigger: EditableCancelTrigger,
  Control: EditableControl,
  EditTrigger: EditableEditTrigger,
  Input: EditableInput,
  Preview: EditablePreview,
  Root: EditableRoot,
  SubmitTrigger: EditableSubmitTrigger,
});
