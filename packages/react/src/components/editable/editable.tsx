import { Editable as EditablePrimitive } from "@ark-ui/react/editable";
import { buttonVariants } from "@pisagor/styles/ui/button";
import {
  editableAreaVariants,
  editableControlVariants,
  editablePreviewVariants,
  editableVariants,
} from "@pisagor/styles/ui/editable";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { formControlShellProps } from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import type { ButtonProps } from "../button";

// #region Types
export interface EditableProps
  extends Omit<
      ComponentProps<typeof EditablePrimitive.Root>,
      "onValueChange" | "value" | "defaultValue"
    >,
    WithTestId {
  /** The orientation of the editable */
  orientation?: "horizontal" | "vertical";
  /**
   * Controlled text value.
   *
   * @remarks
   * When set, `defaultValue` is ignored. Pair with `onValueChange` to handle updates.
   */
  value?: string;
  /**
   * Initial text value when uncontrolled.
   *
   * @remarks
   * Ignored when `value` is set.
   */
  defaultValue?: string;
  /**
   * Called when the text value changes.
   *
   * @remarks
   * Receives the string value directly, not Ark UI event details.
   */
  onValueChange?: (value: string) => void;
}

export interface EditableInputProps
  extends Omit<ComponentProps<typeof EditablePrimitive.Input>, "size"> {}

interface EditablePreviewProps extends ComponentProps<typeof EditablePrimitive.Preview> {
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
  /** Form shell variant. When omitted, resolves from the nearest `Surface` context. */
  controlVariant?: FormControlVariant;
}

// #endregion

// #region Components
export function EditableRoot({
  orientation = "horizontal",
  value,
  defaultValue,
  onValueChange,
  className,
  testId,
  ...rest
}: EditableProps) {
  const handleValueChange = onValueChange
    ? (
        details: Parameters<
          NonNullable<ComponentProps<typeof EditablePrimitive.Root>["onValueChange"]>
        >[0],
      ) => onValueChange(details.value)
    : undefined;

  return (
    <EditablePrimitive.Root
      {...rest}
      className={cn(editableVariants(), className)}
      data-orientation={orientation}
      data-testid={testId}
      defaultValue={defaultValue}
      onValueChange={handleValueChange}
      value={value}
    />
  );
}
EditableRoot.displayName = "Editable";

export function EditableArea({
  className,
  ...rest
}: ComponentProps<typeof EditablePrimitive.Area>) {
  return <EditablePrimitive.Area {...rest} className={cn(editableAreaVariants(), className)} />;
}
EditableArea.displayName = "Editable.Area";

export function EditableInput(props: EditableInputProps) {
  return <EditablePrimitive.Input {...props} />;
}
EditableInput.displayName = "Editable.Input";

export function EditablePreview({
  size = "md",
  variant = "outline",
  controlVariant,
  className,
  ...rest
}: EditablePreviewProps) {
  const resolved = useFormControlVariant(controlVariant);
  const controlProps = formControlShellProps(resolved);
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
        buttonVariants({ clickEffect: false, size, variant }),
        previewShellClass,
        editablePreviewVariants(),
        previewShellClass ? "dark:hover:bg-transparent" : undefined,
        className,
      )}
    />
  );
}
EditablePreview.displayName = "Editable.Preview";

export function EditableControl({
  className,
  ...rest
}: ComponentProps<typeof EditablePrimitive.Control>) {
  return (
    <EditablePrimitive.Control {...rest} className={cn(editableControlVariants(), className)} />
  );
}
EditableControl.displayName = "Editable.Control";

export function EditableEditTrigger(props: ComponentProps<typeof EditablePrimitive.EditTrigger>) {
  return <EditablePrimitive.EditTrigger {...props} />;
}
EditableEditTrigger.displayName = "Editable.EditTrigger";

export function EditableCancelTrigger(
  props: ComponentProps<typeof EditablePrimitive.CancelTrigger>,
) {
  return <EditablePrimitive.CancelTrigger {...props} />;
}
EditableCancelTrigger.displayName = "Editable.CancelTrigger";

export function EditableSubmitTrigger(
  props: ComponentProps<typeof EditablePrimitive.SubmitTrigger>,
) {
  return <EditablePrimitive.SubmitTrigger {...props} />;
}
EditableSubmitTrigger.displayName = "Editable.SubmitTrigger";
// #endregion
