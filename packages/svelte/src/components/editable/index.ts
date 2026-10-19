import EditableShorthand from "./editable.svelte";
import Area from "./editable-area.svelte";
import CancelTrigger from "./editable-cancel-trigger.svelte";
import Control from "./editable-control.svelte";
import EditTrigger from "./editable-edit-trigger.svelte";
import Input from "./editable-input.svelte";
import Preview from "./editable-preview.svelte";
import Root from "./editable-root.svelte";
import SubmitTrigger from "./editable-submit-trigger.svelte";

export type {
  EditableAreaProps,
  EditableCancelTriggerProps,
  EditableControlProps,
  EditableEditTriggerProps,
  EditableSubmitTriggerProps,
} from "@ark-ui/svelte";

export const Editable = Object.assign(EditableShorthand, {
  Area,
  CancelTrigger,
  Control,
  EditTrigger,
  Input,
  Preview,
  Root,
  SubmitTrigger,
});
