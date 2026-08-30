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
  EditableSubmitTriggerProps,
} from "@ark-ui/react/editable";

export type {
  EditableInputProps,
  EditablePreviewProps,
  EditableProps,
  EditableRootProps,
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
