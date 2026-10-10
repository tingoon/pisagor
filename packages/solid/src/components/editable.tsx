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
import type { EditableProps as BaseEditableProps } from "@pisagor/props";
import { buttonRecipe, editableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Component, JSX } from "solid-js";
import { createMemo, splitProps } from "solid-js";
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

type FormControlVariant = "primary" | "secondary";

export type EditableRootProps = Omit<
  EditablePrimitiveRootProps,
  "onValueChange" | "value" | "defaultValue"
>;

export interface EditableProps extends EditableRootProps, BaseEditableProps {
  orientation?: "horizontal" | "vertical";
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export interface EditableInputProps
  extends Omit<EditablePrimitiveInputProps, "size"> {}

export interface EditablePreviewProps extends EditablePrimitivePreviewProps {
  controlVariant?: FormControlVariant;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  buttonRecipe?: typeof buttonRecipe;
}

/** Maps Ark's `{ value }` details to a plain string `onValueChange`. */
export function EditableRoot(props: EditableProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "onValueChange",
    "recipe",
    "class",
  ]);

  const slots = createMemo(() => (local.recipe ?? editableRecipe)());

  return (
    <EditableStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <EditablePrimitive.Root
        {...rest}
        class={slots().base({ class: local.class })}
        data-orientation={local.orientation ?? "horizontal"}
        onValueChange={
          local.onValueChange
            ? (details) => local.onValueChange?.(details.value)
            : undefined
        }
      />
    </EditableStylesContext>
  );
}

export const EditableArea: Component<EditableAreaProps> = withContext(
  EditablePrimitive.Area,
  { name: "Area" },
);

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
  const styles = useEditable();
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? "outline";
  const buttonRecipeProp = () => local.buttonRecipe ?? buttonRecipe;
  const surfaceVariant = useFormControlSurface();
  const controlVariant = () =>
    local.controlVariant ?? ("primary" as FormControlVariant);

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
        buttonRecipeProp()({
          clickEffect: false,
          size: size(),
          variant: variant(),
        }).base(),
        previewShellClass(),
        styles.slots.preview(),
        previewShellClass() ? "dark:hover:bg-transparent" : undefined,
        local.class,
      )}
      data-variant={controlVariant()}
    />
  );
}

export const EditableControl: Component<EditableControlProps> = withContext(
  EditablePrimitive.Control,
  { name: "Control" },
);

export function EditableEditTrigger(
  props: EditableEditTriggerProps,
): JSX.Element {
  return <EditablePrimitive.EditTrigger {...props} />;
}

export function EditableCancelTrigger(
  props: EditableCancelTriggerProps,
): JSX.Element {
  return <EditablePrimitive.CancelTrigger {...props} />;
}

export function EditableSubmitTrigger(
  props: EditableSubmitTriggerProps,
): JSX.Element {
  return <EditablePrimitive.SubmitTrigger {...props} />;
}

export type {
  EditableAreaProps,
  EditableCancelTriggerProps,
  EditableControlProps,
  EditableEditTriggerProps,
  EditableSubmitTriggerProps,
} from "@ark-ui/solid/editable";

export const Editable = Object.assign(EditableRoot, {
  Area: EditableArea,
  CancelTrigger: EditableCancelTrigger,
  Control: EditableControl,
  EditTrigger: EditableEditTrigger,
  Input: EditableInput,
  Preview: EditablePreview,
  SubmitTrigger: EditableSubmitTrigger,
});
