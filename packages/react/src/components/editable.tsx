import type {
  EditableCancelTriggerProps,
  EditableEditTriggerProps,
  EditableInputProps as EditablePrimitiveInputProps,
  EditablePreviewProps as EditablePrimitivePreviewProps,
  EditableRootProps as EditablePrimitiveRootProps,
  EditableSubmitTriggerProps,
} from "@ark-ui/react/editable";
import { Editable as EditablePrimitive } from "@ark-ui/react/editable";
import type { EditableProps as BaseEditableProps } from "@pisagor/props";
import { buttonRecipe, editableRecipe } from "@pisagor/recipes";

import { cn } from "@pisagor/utils";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { ButtonProps } from "./button";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const {
  Context: EditableStylesContext,
  useStyles: useEditable,
  withContext,
} = createSlotRecipeContext({
  name: "Editable",
  recipe: editableRecipe,
});
// #endregion

// #region Types
type FormControlVariant = "primary" | "secondary";

export type EditableRootProps = Omit<
  EditablePrimitiveRootProps,
  "onValueChange" | "value" | "defaultValue"
>;

export interface EditableProps extends EditableRootProps, BaseEditableProps {
  /** The orientation of the editable */
  orientation?: "horizontal" | "vertical";
  /**
   * Initial text value when uncontrolled.
   *
   * @remarks
   * Ignored when `value` is set.
   */
  defaultValue?: string;
  /**
   * Controlled text value.
   *
   * @remarks
   * When set, `defaultValue` is ignored. Pair with `onValueChange` to handle updates.
   */
  value?: string;
  /**
   * Called when the text value changes.
   *
   * @remarks
   * Receives the string value directly, not Ark UI event details.
   */
  onValueChange?: (value: string) => void;
}

export interface EditableInputProps
  extends Omit<EditablePrimitiveInputProps, "size"> {}

export interface EditablePreviewProps extends EditablePrimitivePreviewProps {
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
   * Button style recipe. Defaults to `buttonRecipe` from `@pisagor/recipes/button`.
   *
   * @defaultValue buttonRecipe
   */
  buttonRecipe?: typeof buttonRecipe;
}

// #endregion

// #region Parts
export function EditableRoot({
  orientation = "horizontal",
  defaultValue,
  value,
  onValueChange,
  recipe = editableRecipe,
  className,
  ...rest
}: EditableProps) {
  const handleValueChange = onValueChange
    ? (
        details: Parameters<
          NonNullable<EditablePrimitiveRootProps["onValueChange"]>
        >[0],
      ) => onValueChange(details.value)
    : undefined;

  const slots = recipe();

  return (
    <EditableStylesContext value={{ slots, variants: {} as never }}>
      <EditablePrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-orientation={orientation}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        value={value}
      />
    </EditableStylesContext>
  );
}

export const EditableArea = withContext(EditablePrimitive.Area, {
  name: "Area",
});

export function EditableInput(props: EditableInputProps) {
  return <EditablePrimitive.Input {...props} />;
}

export function EditablePreview({
  controlVariant,
  size = "md",
  variant = "outline",
  buttonRecipe: buttonRecipeProp = buttonRecipe,
  className,
  ...rest
}: EditablePreviewProps) {
  const { slots } = useEditable();
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant: controlVariant ?? ("primary" as FormControlVariant),
  };
  const controlProps = { "data-variant": resolved.variant };
  const previewShellClass =
    resolved.variant === "secondary" && resolved.surfaceVariant === "default"
      ? "bg-muted/40 shadow-none hover:bg-muted/40 dark:hover:bg-muted/40"
      : resolved.variant === "secondary" && resolved.surfaceVariant
        ? "bg-background shadow-none hover:bg-background dark:hover:bg-background/90"
        : resolved.variant === "secondary"
          ? "bg-muted/40 shadow-none hover:bg-muted/40 dark:hover:bg-muted/40"
          : undefined;

  return (
    <EditablePrimitive.Preview
      {...rest}
      {...controlProps}
      className={cn(
        buttonRecipeProp({ clickEffect: false, size, variant }).base(),
        previewShellClass,
        slots.preview(),
        previewShellClass ? "dark:hover:bg-transparent" : undefined,
        className,
      )}
    />
  );
}

export const EditableControl = withContext(EditablePrimitive.Control, {
  name: "Control",
});

export function EditableEditTrigger(props: EditableEditTriggerProps) {
  return <EditablePrimitive.EditTrigger {...props} />;
}

export function EditableCancelTrigger(props: EditableCancelTriggerProps) {
  return <EditablePrimitive.CancelTrigger {...props} />;
}

export function EditableSubmitTrigger(props: EditableSubmitTriggerProps) {
  return <EditablePrimitive.SubmitTrigger {...props} />;
}
// #endregion

// #region Display Names
EditableRoot.displayName = "Editable";
EditableInput.displayName = "Editable.Input";
EditablePreview.displayName = "Editable.Preview";
EditableEditTrigger.displayName = "Editable.EditTrigger";
EditableCancelTrigger.displayName = "Editable.CancelTrigger";
EditableSubmitTrigger.displayName = "Editable.SubmitTrigger";

// #endregion

export type {
  EditableAreaProps,
  EditableCancelTriggerProps,
  EditableControlProps,
  EditableEditTriggerProps,
  EditableSubmitTriggerProps,
} from "@ark-ui/react/editable";

export const Editable = Object.assign(EditableRoot, {
  Area: EditableArea,
  CancelTrigger: EditableCancelTrigger,
  Control: EditableControl,
  EditTrigger: EditableEditTrigger,
  Input: EditableInput,
  Preview: EditablePreview,
  SubmitTrigger: EditableSubmitTrigger,
});
