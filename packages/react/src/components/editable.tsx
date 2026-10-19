import { Editable as EditablePrimitive } from "@ark-ui/react";
import type {
  EditableAreaProps,
  EditableCancelTriggerProps,
  EditableControlProps,
  EditableEditTriggerProps,
  EditableInputProps as EditableInputPrimitiveProps,
  EditablePreviewProps as EditablePreviewPrimitiveProps,
  EditableRootProps as EditableRootPrimitiveProps,
  EditableSubmitTriggerProps,
} from "@ark-ui/react";
import { CheckIcon, XIcon } from "@phosphor-icons/react";
import type {
  EditableContract,
  EditableRootContract,
} from "@pisagor/contracts";
import { buttonRecipe, editableRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import { Button, type ButtonProps } from "./button";
import { Input as TextInput, type InputProps } from "./input";
import { useLocale } from "./provider/context";
import { Textarea } from "./textarea";
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

const Area = withContext<EditableAreaProps>(EditablePrimitive.Area, {
  name: "Area",
});

const Input = withContext<EditableInputProps>(EditablePrimitive.Input, {
  name: "Input",
});

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

export function EditableShorthand({
  classNames,
  multiline = false,
  placeholder,
  showControls = true,
  size = "md",
  ...rest
}: EditableShorthandProps) {
  const { m } = useLocale();
  const buttonSize = iconSize[size ?? "md"] ?? "icon-md";

  return (
    <Root {...rest} placeholder={placeholder}>
      <Area className={classNames?.area}>
        <Input asChild className={classNames?.input}>
          {multiline ? <Textarea /> : <TextInput size={size} />}
        </Input>
        <Preview className={classNames?.preview} size={size} />
      </Area>

      {showControls && (
        <Control className={classNames?.control}>
          <CancelTrigger asChild className={classNames?.cancelTrigger}>
            <Button
              aria-label={m("editable.cancel")}
              size={buttonSize}
              variant="outline"
            >
              <XIcon />
            </Button>
          </CancelTrigger>
          <SubmitTrigger asChild className={classNames?.submitTrigger}>
            <Button
              aria-label={m("editable.submit")}
              size={buttonSize}
              variant="outline"
            >
              <CheckIcon />
            </Button>
          </SubmitTrigger>
        </Control>
      )}
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
} from "@ark-ui/react";

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
