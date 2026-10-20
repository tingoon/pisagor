import { Editable as EditablePrimitive } from "@ark-ui/solid";
import type {
  EditableCancelTriggerProps,
  EditableEditTriggerProps,
  EditableInputProps as EditableInputPrimitiveProps,
  EditablePreviewProps as EditablePreviewPrimitiveProps,
  EditableRootProps as EditableRootPrimitiveProps,
  EditableAreaProps,
  EditableControlProps,
  EditableSubmitTriggerProps,
  EditableValueChangeDetails,
} from "@ark-ui/solid";
import type {
  EditableContract,
  EditableRootContract,
} from "@pisagor/contracts";
import { buttonRecipe, editableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { CheckIcon, XIcon, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { Input as TextInput, type InputProps } from "./input";
import { useLocale } from "./provider/context";
import { useFormControlSurface } from "./surface/use-form-control-surface";
import { Textarea } from "./textarea";

type FormControlVariant = "primary" | "secondary";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Editable",
  recipe: editableRecipe,
});
// #endregion

// #region Types
type EditableRootBaseProps = Omit<
  EditableRootPrimitiveProps,
  "onValueChange" | "value" | "defaultValue"
> &
  EditableRootContract;

export interface EditableProps extends EditableRootBaseProps {
  /** The orientation of the editable */
  orientation?: "horizontal" | "vertical";
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export type EditableRootProps = EditableProps;

export type EditableInputProps = Omit<EditableInputPrimitiveProps, "size">;

export interface EditablePreviewProps extends EditablePreviewPrimitiveProps {
  /** Form shell variant. Defaults to `primary`. */
  controlVariant?: FormControlVariant;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
  buttonRecipe?: typeof buttonRecipe;
}

export interface EditableShorthandProps
  extends Omit<EditableProps, "children">, EditableContract {
  /** Render a `Textarea` instead of a single-line `Input`. */
  multiline?: boolean;
  /**
   * Whether to render cancel and submit buttons.
   *
   * @defaultValue true
   */
  showControls?: boolean;
  /** Input and preview size. */
  size?: InputProps["size"];
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

const Area = withContext<EditableAreaProps>(EditablePrimitive.Area, {
  name: "Area",
});

const Input = withContext<EditableInputProps>(EditablePrimitive.Input, {
  name: "Input",
});

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

const Control = withContext<EditableControlProps>(EditablePrimitive.Control, {
  name: "Control",
});

const EditTrigger = withContext<EditableEditTriggerProps>(
  EditablePrimitive.EditTrigger,
  { name: "EditTrigger" },
);

const CancelTrigger = withContext<EditableCancelTriggerProps>(
  EditablePrimitive.CancelTrigger,
  { name: "CancelTrigger" },
);

const SubmitTrigger = withContext<EditableSubmitTriggerProps>(
  EditablePrimitive.SubmitTrigger,
  { name: "SubmitTrigger" },
);
// #endregion

// #region Shorthand
const iconSize = { lg: "icon-lg", md: "icon-md", sm: "icon-sm" } as const;

export function EditableShorthand(props: EditableShorthandProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "classNames",
    "multiline",
    "showControls",
    "size",
  ]);
  const size = () => local.size ?? "md";
  const buttonSize = () => iconSize[size()] ?? "icon-md";

  return (
    <Root {...rest}>
      <Area class={local.classNames?.area}>
        <Input
          asChild={(inputProps) => (
            <Show
              fallback={<TextInput {...inputProps()} size={size()} />}
              when={local.multiline}
            >
              <Textarea {...inputProps()} />
            </Show>
          )}
          class={local.classNames?.input}
        />
        <Preview class={local.classNames?.preview} size={size()} />
      </Area>

      <Show when={local.showControls ?? true}>
        <Control class={local.classNames?.control}>
          <CancelTrigger
            asChild={(triggerProps) => (
              <Button
                {...triggerProps()}
                aria-label={m("editable.cancel")}
                size={buttonSize()}
                variant="outline"
              >
                <XIcon />
              </Button>
            )}
            class={local.classNames?.cancelTrigger}
          />
          <SubmitTrigger
            asChild={(triggerProps) => (
              <Button
                {...triggerProps()}
                aria-label={m("editable.submit")}
                size={buttonSize()}
                variant="outline"
              >
                <CheckIcon />
              </Button>
            )}
            class={local.classNames?.submitTrigger}
          />
        </Control>
      </Show>
    </Root>
  );
}
// #endregion

export type {
  EditableAreaProps,
  EditableCancelTriggerProps,
  EditableControlProps,
  EditableEditTriggerProps,
  EditableSubmitTriggerProps,
} from "@ark-ui/solid";

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
