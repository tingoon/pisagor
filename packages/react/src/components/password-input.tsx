import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/react";
import type {
  PasswordInputControlProps,
  PasswordInputIndicatorProps,
  PasswordInputInputProps,
  PasswordInputLabelProps,
  PasswordInputRootProps as PasswordInputRootPrimitiveProps,
  PasswordInputVisibilityTriggerProps as PasswordInputVisibilityTriggerPrimitiveProps,
} from "@ark-ui/react";
import { EyeIcon, EyeSlashIcon, XIcon } from "@phosphor-icons/react";
import type {
  PasswordInputContract,
  PasswordInputRootContract,
} from "@pisagor/contracts";
import { passwordInputRecipe } from "@pisagor/recipes";
import type { RefAttributes } from "react";
import { useClearableInput } from "../hooks";
import { createSlotRecipeContext } from "../internal";
import { InputGroup, type InputGroupButtonProps } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "PasswordInput",
  recipe: passwordInputRecipe,
});
// #endregion

// #region Types

export type PasswordInputRootProps = PasswordInputRootPrimitiveProps & {
  /** Style recipe override. */
  recipe?: PasswordInputRootContract["recipe"];
};

type PasswordInputShorthandRootProps = Pick<
  PasswordInputRootPrimitiveProps,
  "className" | "defaultVisible" | "invalid" | "onVisibilityChange" | "visible"
>;

export type PasswordInputVisibilityTriggerProps =
  PasswordInputVisibilityTriggerPrimitiveProps;

export type {
  PasswordInputControlProps,
  PasswordInputIndicatorProps,
  PasswordInputInputProps,
  PasswordInputLabelProps,
};

export interface PasswordInputProps
  extends
    PasswordInputShorthandRootProps,
    Omit<PasswordInputInputProps, "className" | "size">,
    RefAttributes<HTMLInputElement>,
    PasswordInputRootContract,
    PasswordInputContract {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @remarks
   *   In controlled mode, pass `value` and update it via `onChange` or
   *   `onValueChange` when clearing.
   * @defaultValue false
   */
  clearable?: boolean;
  /** Called with the string value when the input changes. */
  onValueChange?: (value: string) => void;
  clearButtonProps?: InputGroupButtonProps;
  indicatorProps?: PasswordInputIndicatorProps;
  visibilityTriggerProps?: PasswordInputVisibilityTriggerProps;
}
// #endregion

// #region Parts
const Root = withProvider<PasswordInputRootProps>(PasswordInputPrimitive.Root, {
  name: "Root",
  slot: "base",
});

const Label = withContext<PasswordInputLabelProps>(
  PasswordInputPrimitive.Label,
  { name: "Label" },
);

const Control = withContext<PasswordInputControlProps>(
  PasswordInputPrimitive.Control,
  { name: "Control" },
);

const Input = withContext<
  PasswordInputInputProps & RefAttributes<HTMLInputElement>
>(PasswordInputPrimitive.Input, { name: "Input" });

const VisibilityTriggerBase = withContext<PasswordInputVisibilityTriggerProps>(
  PasswordInputPrimitive.VisibilityTrigger,
  { name: "VisibilityTrigger" },
);

/** Visibility trigger with a localized default `aria-label`. */
function VisibilityTrigger(props: PasswordInputVisibilityTriggerProps) {
  const { m } = useLocale();

  return (
    <VisibilityTriggerBase
      aria-label={m("passwordInput.togglePasswordVisibility")}
      {...props}
    />
  );
}

const Indicator = withContext<PasswordInputIndicatorProps>(
  PasswordInputPrimitive.Indicator,
  { name: "Indicator" },
);
// #endregion

// #region Shorthand
export function PasswordInputShorthand({
  size = "md",
  variant,
  classNames,
  clearable = false,
  defaultValue,
  defaultVisible,
  disabled,
  invalid,
  readOnly,
  value,
  clearButtonProps,
  indicatorProps,
  ref,
  visibilityTriggerProps,
  visible,
  onChange,
  onValueChange,
  onVisibilityChange,
  recipe = passwordInputRecipe,
  className,
  surfaceVariant,
  ...inputProps
}: PasswordInputProps) {
  const { m } = useLocale();
  const { fallback, children, ...restIndicatorProps } = indicatorProps ?? {};
  const {
    onClick: onClearClick,
    children: clearButtonChildren,
    ...restClearButtonProps
  } = clearButtonProps ?? {};

  const slots = recipe();

  const { canClear, handleChange, handleClear, mergedRef } = useClearableInput({
    clearable,
    defaultValue,
    disabled,
    onChange,
    onValueChange,
    readOnly,
    ref,
    value,
  });

  return (
    <Root
      className={className}
      data-size={size}
      defaultVisible={defaultVisible}
      invalid={invalid}
      onVisibilityChange={onVisibilityChange}
      recipe={recipe}
      visible={visible}
    >
      <Control asChild className={classNames?.control}>
        <InputGroup
          data-clearable={clearable || undefined}
          size={size}
          surfaceVariant={surfaceVariant}
          variant={variant}
        >
          <Input
            {...inputProps}
            asChild
            className={classNames?.input}
            defaultValue={defaultValue}
            disabled={disabled}
            onChange={handleChange}
            readOnly={readOnly}
            ref={mergedRef}
            value={value}
          >
            <InputGroup.Input clearable={false} />
          </Input>
          {canClear ? (
            <InputGroup.Addon
              align="inline-end"
              className={slots.clearAddon({
                className: classNames?.clearAddon,
              })}
            >
              <InputGroup.Button
                {...restClearButtonProps}
                aria-label={m("passwordInput.clear")}
                data-part="clear-trigger"
                data-scope="password-input"
                onClick={(event) => {
                  handleClear();
                  onClearClick?.(event);
                }}
                size="icon-xs"
                type="button"
                variant="ghost"
              >
                {clearButtonChildren ?? <XIcon />}
              </InputGroup.Button>
            </InputGroup.Addon>
          ) : null}
          <InputGroup.Addon align="inline-end">
            <VisibilityTrigger
              {...visibilityTriggerProps}
              asChild
              className={classNames?.visibilityTrigger}
            >
              <InputGroup.Button size="icon-xs" variant="ghost">
                <Indicator
                  {...restIndicatorProps}
                  className={classNames?.indicator}
                  fallback={fallback ?? <EyeSlashIcon />}
                >
                  {children ?? <EyeIcon />}
                </Indicator>
              </InputGroup.Button>
            </VisibilityTrigger>
          </InputGroup.Addon>
        </InputGroup>
      </Control>
    </Root>
  );
}
// #endregion

// #region Display Names
VisibilityTrigger.displayName = "PasswordInput.VisibilityTrigger";
PasswordInputShorthand.displayName = "PasswordInput";
// #endregion

export const PasswordInput = Object.assign(PasswordInputShorthand, {
  Control,
  Indicator,
  Input,
  Label,
  Root,
  VisibilityTrigger,
});
