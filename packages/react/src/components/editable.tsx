import { Editable as EditablePrimitive } from "@ark-ui/react";
import type {
  EditableCancelTriggerProps,
  EditableEditTriggerProps,
  EditableInputProps as EditableInputPrimitiveProps,
  EditablePreviewProps as EditablePreviewPrimitiveProps,
  EditableRootProps as EditableRootPrimitiveProps,
  EditableSubmitTriggerProps,
} from "@ark-ui/react";
import type { EditableRootContract } from "@pisagor/contracts";
import { buttonRecipe, editableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import type { ButtonProps } from "./button";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Editable",
  recipe: editableRecipe,
});
// #endregion

// #region Types
type EditableRootBaseProps = EditableRootPrimitiveProps & EditableRootContract;

export interface EditableProps extends Omit<
  EditableRootBaseProps,
  "onValueChange" | "value" | "defaultValue"
> {
  /** The orientation of the editable */
  orientation?: "horizontal" | "vertical";
  /**
   * Initial text value when uncontrolled.
   *
   * @remarks
   *   Ignored when `value` is set.
   */
  defaultValue?: string;
  /**
   * Controlled text value.
   *
   * @remarks
   *   When set, `defaultValue` is ignored. Pair with `onValueChange` to handle
   *   updates.
   */
  value?: string;
  /**
   * Called when the text value changes.
   *
   * @remarks
   *   Receives the string value directly, not Ark UI event details.
   */
  onValueChange?: (value: string) => void;
}

export type EditableRootProps = EditableProps;

export type EditableInputProps = Omit<EditableInputPrimitiveProps, "size">;

export interface EditablePreviewProps extends EditablePreviewPrimitiveProps {
  /** Form shell variant. Defaults to `primary`. */
  controlVariant?: FormControlVariant;
  /**
   * The size of the preview
   *
   * @defaultValue "md"
   */
  size?: ButtonProps["size"];
  /**
   * The variant of the preview
   *
   * @defaultValue "outline"
   */
  variant?: ButtonProps["variant"];
  /**
   * Button style recipe. Defaults to `buttonRecipe` from
   * `@pisagor/recipes/button`.
   *
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
}
// #endregion

// #region Parts
const RootBase = withProvider<EditableRootBaseProps>(EditablePrimitive.Root, {
  name: "Root",
});

function Root({
  orientation = "horizontal",
  defaultValue,
  value,
  onValueChange,
  ...rest
}: EditableProps) {
  return (
    <RootBase
      {...rest}
      data-orientation={orientation}
      defaultValue={defaultValue}
      onValueChange={
        onValueChange
          ? (
              details: Parameters<
                NonNullable<EditableRootPrimitiveProps["onValueChange"]>
              >[0],
            ) => onValueChange(details.value)
          : undefined
      }
      value={value}
    />
  );
}

const Area = withContext(EditablePrimitive.Area, {
  name: "Area",
});

function Input(props: EditableInputProps) {
  return <EditablePrimitive.Input {...props} />;
}

function Preview({
  controlVariant = "primary",
  size = "md",
  variant = "outline",
  buttonRecipe: buttonRecipeProp = buttonRecipe,
  className,
  ...rest
}: EditablePreviewProps) {
  const surfaceVariant = useFormControlSurface();
  const slots = editableRecipe({
    surfaceVariant,
    variant: controlVariant,
  });

  return (
    <EditablePrimitive.Preview
      {...rest}
      className={cn(
        buttonRecipeProp({ clickEffect: false, size, variant }).base(),
        slots.preview(),
        className,
      )}
      data-variant={controlVariant}
    />
  );
}

const Control = withContext(EditablePrimitive.Control, {
  name: "Control",
});

function EditTrigger(props: EditableEditTriggerProps) {
  return <EditablePrimitive.EditTrigger {...props} />;
}

function CancelTrigger(props: EditableCancelTriggerProps) {
  return <EditablePrimitive.CancelTrigger {...props} />;
}

function SubmitTrigger(props: EditableSubmitTriggerProps) {
  return <EditablePrimitive.SubmitTrigger {...props} />;
}
// #endregion

export type {
  EditableAreaProps,
  EditableCancelTriggerProps,
  EditableControlProps,
  EditableEditTriggerProps,
  EditableSubmitTriggerProps,
} from "@ark-ui/react";

export const Editable = Object.assign(Root, {
  Area,
  CancelTrigger,
  Control,
  EditTrigger,
  Input,
  Preview,
  SubmitTrigger,
});
