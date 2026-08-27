import {
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditableRoot,
  EditableSubmitTrigger,
} from "./editable";

export type {
  EditableAreaProps,
  EditableCancelTriggerProps,
  EditableControlProps,
  EditableEditTriggerProps,
  EditableInputProps,
  EditablePreviewProps,
  EditableProps,
  EditableRootProps,
  EditableSubmitTriggerProps,
} from "./editable";

export const Editable = Object.assign(EditableRoot, {
  Area: EditableArea,
  CancelTrigger: EditableCancelTrigger,
  Control: EditableControl,
  EditTrigger: EditableEditTrigger,
  Input: EditableInput,
  Preview: EditablePreview,
  SubmitTrigger: EditableSubmitTrigger,
});
