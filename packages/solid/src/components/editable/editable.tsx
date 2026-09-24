import type {
  EditableAreaProps,
  EditableCancelTriggerProps,
  EditableControlProps,
  EditableEditTriggerProps,
  EditableInputProps as EditablePrimitiveInputProps,
  EditablePreviewProps as EditablePrimitivePreviewProps,
  EditableRootProps as EditablePrimitiveRootProps,
  EditableSubmitTriggerProps,
} from "@ark-ui/solid/editable";
import { Editable as EditablePrimitive } from "@ark-ui/solid/editable";
import { buttonRecipe } from "@pisagor/recipes/button";
import { editableRecipe } from "@pisagor/recipes/editable";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { ButtonProps } from "../button";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { EditableContext, useEditable } from "./editable.context";

type FormControlVariant = "primary" | "secondary";

export type EditableRootProps = Omit<
  EditablePrimitiveRootProps,
  "onValueChange" | "value" | "defaultValue"
>;

export interface EditableProps extends EditableRootProps {
  orientation?: "horizontal" | "vertical";
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  recipe?: typeof editableRecipe;
}

export interface EditableInputProps extends Omit<EditablePrimitiveInputProps, "size"> {}

export interface EditablePreviewProps extends EditablePrimitivePreviewProps {
  controlVariant?: FormControlVariant;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  buttonRecipe?: typeof buttonRecipe;
}

export function EditableRoot(props: EditableProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "defaultValue",
    "value",
    "onValueChange",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? editableRecipe)();
  const orientation = () => local.orientation ?? "horizontal";

  return (
    <EditableContext value={{ slots: slots() }}>
      <EditablePrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-orientation={orientation()}
        defaultValue={local.defaultValue}
        onValueChange={
          local.onValueChange ? (details) => local.onValueChange?.(details.value) : undefined
        }
        value={local.value}
      />
    </EditableContext>
  );
}

export function EditableArea(props: EditableAreaProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useEditable();
  return <EditablePrimitive.Area {...rest} class={slots.area({ class: local.class })} />;
}

export function EditableInput(props: EditableInputProps): JSX.Element {
  return <EditablePrimitive.Input {...props} />;
}

export function EditablePreview(props: EditablePreviewProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "controlVariant",
    "size",
    "variant",
    "buttonRecipe",
    "class",
  ]);
  const { slots } = useEditable();
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? "outline";
  const buttonRecipeProp = () => local.buttonRecipe ?? buttonRecipe;
  const surfaceVariant = useFormControlSurface();
  const controlVariant = () => local.controlVariant ?? ("primary" as FormControlVariant);

  const previewShellClass = () => {
    const resolvedVariant = controlVariant();
    if (resolvedVariant === "secondary" && surfaceVariant === "default") {
      return "bg-muted/40 shadow-none hover:bg-muted/40 dark:hover:bg-muted/40";
    }
    if (resolvedVariant === "secondary" && surfaceVariant) {
      return "bg-background shadow-none hover:bg-background dark:hover:bg-background/90";
    }
    if (resolvedVariant === "secondary") {
      return "bg-muted/40 shadow-none hover:bg-muted/40 dark:hover:bg-muted/40";
    }
    return undefined;
  };

  return (
    <EditablePrimitive.Preview
      {...rest}
      class={cn(
        buttonRecipeProp()({ clickEffect: false, size: size(), variant: variant() }).base(),
        previewShellClass(),
        slots.preview(),
        previewShellClass() ? "dark:hover:bg-transparent" : undefined,
        local.class,
      )}
      data-variant={controlVariant()}
    />
  );
}

export function EditableControl(props: EditableControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useEditable();
  return <EditablePrimitive.Control {...rest} class={slots.control({ class: local.class })} />;
}

export function EditableEditTrigger(props: EditableEditTriggerProps): JSX.Element {
  return <EditablePrimitive.EditTrigger {...props} />;
}

export function EditableCancelTrigger(props: EditableCancelTriggerProps): JSX.Element {
  return <EditablePrimitive.CancelTrigger {...props} />;
}

export function EditableSubmitTrigger(props: EditableSubmitTriggerProps): JSX.Element {
  return <EditablePrimitive.SubmitTrigger {...props} />;
}
