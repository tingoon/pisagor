import { Editable as EditablePrimitive } from "@ark-ui/react/editable";
import { buttonVariants } from "@pisagor/styles/ui/button";
import { editableVariants } from "@pisagor/styles/ui/editable";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { formControlShellProps } from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { ButtonProps } from "../button";
import { EditableContext, useEditable } from "./editable.context";

// #region Types
export type EditableRootProps = Omit<
  ComponentProps<typeof EditablePrimitive.Root>,
  "onValueChange" | "value" | "defaultValue"
>;

export interface EditableProps extends EditableRootProps {
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

export interface EditablePreviewProps extends ComponentProps<typeof EditablePrimitive.Preview> {
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

export type EditableAreaProps = ComponentProps<typeof EditablePrimitive.Area>;

export type EditableControlProps = ComponentProps<typeof EditablePrimitive.Control>;

export type EditableEditTriggerProps = ComponentProps<typeof EditablePrimitive.EditTrigger>;

export type EditableCancelTriggerProps = ComponentProps<typeof EditablePrimitive.CancelTrigger>;

export type EditableSubmitTriggerProps = ComponentProps<typeof EditablePrimitive.SubmitTrigger>;
// #endregion

// #region Parts
export function EditableRoot({
  orientation = "horizontal",
  value,
  defaultValue,
  onValueChange,
  className,
  ...rest
}: EditableProps) {
  const handleValueChange = onValueChange
    ? (
        details: Parameters<
          NonNullable<ComponentProps<typeof EditablePrimitive.Root>["onValueChange"]>
        >[0],
      ) => onValueChange(details.value)
    : undefined;

  const slots = useMemo(() => editableVariants(), []);

  return (
    <EditableContext value={{ slots }}>
      <EditablePrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-orientation={orientation}
        defaultValue={defaultValue}
        onValueChange={handleValueChange}
        value={value}
      />
    </EditableContext>
  );
}

export function EditableArea({ className, ...rest }: EditableAreaProps) {
  const { slots } = useEditable();

  return <EditablePrimitive.Area {...rest} className={slots.area({ className })} />;
}

export function EditableInput(props: EditableInputProps) {
  return <EditablePrimitive.Input {...props} />;
}

export function EditablePreview({
  size = "md",
  variant = "outline",
  controlVariant,
  className,
  ...rest
}: EditablePreviewProps) {
  const { slots } = useEditable();
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
        slots.preview(),
        previewShellClass ? "dark:hover:bg-transparent" : undefined,
        className,
      )}
    />
  );
}

export function EditableControl({ className, ...rest }: EditableControlProps) {
  const { slots } = useEditable();

  return <EditablePrimitive.Control {...rest} className={slots.control({ className })} />;
}

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
EditableArea.displayName = "Editable.Area";
EditableInput.displayName = "Editable.Input";
EditablePreview.displayName = "Editable.Preview";
EditableControl.displayName = "Editable.Control";
EditableEditTrigger.displayName = "Editable.EditTrigger";
EditableCancelTrigger.displayName = "Editable.CancelTrigger";
EditableSubmitTrigger.displayName = "Editable.SubmitTrigger";
// #endregion
