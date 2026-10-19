import { Editable as EditablePrimitive } from "@ark-ui/solid";
import type {
  EditableCancelTriggerProps,
  EditableEditTriggerProps,
  EditableInputProps as EditableInputPrimitiveProps,
  EditablePreviewProps as EditablePreviewPrimitiveProps,
  EditableRootProps as EditableRootPrimitiveProps,
  EditableSubmitTriggerProps,
  EditableValueChangeDetails,
} from "@ark-ui/solid";
import type { EditableRootContract } from "@pisagor/contracts";
import { buttonRecipe, editableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

type FormControlVariant = "primary" | "secondary";
import type { ButtonProps } from "./button";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Editable",
  recipe: editableRecipe,
});
// #endregion

// #region Types
type EditableRootProps = Omit<
  EditableRootPrimitiveProps,
  "onValueChange" | "value" | "defaultValue"
> &
  EditableRootContract;

export interface EditableProps extends EditableRootProps {
  /** The orientation of the editable */
  orientation?: "horizontal" | "vertical";
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export type EditableInputProps = Omit<EditableInputPrimitiveProps, "size">;

export interface EditablePreviewProps extends EditablePreviewPrimitiveProps {
  /** Form shell variant. Defaults to `primary`. */
  controlVariant?: FormControlVariant;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  buttonRecipe?: typeof buttonRecipe;
}
// #endregion

// #region Parts
type EditableRootProviderProps = EditableRootPrimitiveProps &
  EditableRootContract;

const RootBase = withProvider<EditableRootProviderProps>(
  EditablePrimitive.Root,
  { name: "Root" },
);

function Root(props: EditableProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "defaultValue",
    "value",
    "onValueChange",
  ]);

  return (
    <RootBase
      {...rest}
      data-orientation={local.orientation ?? "horizontal"}
      defaultValue={local.defaultValue}
      onValueChange={
        local.onValueChange
          ? (details: EditableValueChangeDetails) =>
              local.onValueChange?.(details.value)
          : undefined
      }
      value={local.value}
    />
  );
}

const Area = withContext(EditablePrimitive.Area, {
  name: "Area",
});

function Input(props: EditableInputProps): JSX.Element {
  return <EditablePrimitive.Input {...props} />;
}

function Preview(props: EditablePreviewProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "controlVariant",
    "size",
    "variant",
    "buttonRecipe",
    "class",
  ]);
  const surfaceVariant = useFormControlSurface();
  const slots = editableRecipe({
    surfaceVariant,
    variant: local.controlVariant ?? "primary",
  });

  return (
    <EditablePrimitive.Preview
      {...rest}
      class={cn(
        (local.buttonRecipe ?? buttonRecipe)({
          clickEffect: false,
          size: local.size ?? "md",
          variant: local.variant ?? "outline",
        }).base(),
        slots.preview(),
        local.class,
      )}
      data-variant={local.controlVariant ?? "primary"}
    />
  );
}

const Control = withContext(EditablePrimitive.Control, {
  name: "Control",
});

function EditTrigger(props: EditableEditTriggerProps): JSX.Element {
  return <EditablePrimitive.EditTrigger {...props} />;
}

function CancelTrigger(props: EditableCancelTriggerProps): JSX.Element {
  return <EditablePrimitive.CancelTrigger {...props} />;
}

function SubmitTrigger(props: EditableSubmitTriggerProps): JSX.Element {
  return <EditablePrimitive.SubmitTrigger {...props} />;
}
// #endregion

export type {
  EditableAreaProps,
  EditableCancelTriggerProps,
  EditableControlProps,
  EditableEditTriggerProps,
  EditableSubmitTriggerProps,
} from "@ark-ui/solid";

export const Editable = Object.assign(Root, {
  Area,
  CancelTrigger,
  Control,
  EditTrigger,
  Input,
  Preview,
  SubmitTrigger,
});
