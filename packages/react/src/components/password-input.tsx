import {
  PasswordInput as PasswordInputPrimitive,
  type PasswordInputIndicatorProps,
  type PasswordInputInputProps,
  type PasswordInputRootProps as PasswordInputPrimitiveRootProps,
  type PasswordInputVisibilityTriggerProps as PasswordInputPrimitiveVisibilityTriggerProps,
} from "@ark-ui/react";
import { EyeIcon, EyeSlashIcon, XIcon } from "@phosphor-icons/react";
import type { PasswordInputProps as BasePasswordInputProps } from "@pisagor/props";
import { passwordInputRecipe } from "@pisagor/recipes";
import type { RefAttributes } from "react";
import { useClearableInput } from "../hooks";
import type { FormControlVariant } from "../internal/types";
import {
  InputGroup,
  type InputGroupButtonProps,
  type InputGroupProps,
} from "./input-group";
import { useMessage } from "./provider/context";

// #region Types

export type PasswordInputRootProps = Pick<
  PasswordInputPrimitiveRootProps,
  "className" | "defaultVisible" | "invalid" | "onVisibilityChange" | "visible"
>;

export type PasswordInputVisibilityTriggerProps = Omit<
  PasswordInputPrimitiveVisibilityTriggerProps,
  "asChild"
>;

export interface PasswordInputProps
  extends
    PasswordInputRootProps,
    Omit<PasswordInputInputProps, "className" | "size">,
    RefAttributes<HTMLInputElement>,
    BasePasswordInputProps {
  size?: InputGroupProps["size"];
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
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

// #region Component
function PasswordInputShorthand({
  size = "md",
  variant,
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
  ...inputProps
}: PasswordInputProps) {
  const passwordInputClearMessage = useMessage("passwordInput.clear");
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
    <PasswordInputPrimitive.Root
      className={slots.base({ className })}
      data-size={size}
      defaultVisible={defaultVisible}
      invalid={invalid}
      onVisibilityChange={onVisibilityChange}
      visible={visible}
    >
      <PasswordInputPrimitive.Control asChild>
        <InputGroup
          className={slots.control()}
          data-clearable={clearable || undefined}
          size={size}
          variant={variant}
        >
          <PasswordInputPrimitive.Input
            {...inputProps}
            asChild
            defaultValue={defaultValue}
            disabled={disabled}
            onChange={handleChange}
            readOnly={readOnly}
            ref={mergedRef}
            value={value}
          >
            <InputGroup.Input clearable={false} />
          </PasswordInputPrimitive.Input>
          {canClear ? (
            <InputGroup.Addon align="inline-end" className={slots.clearAddon()}>
              <InputGroup.Button
                {...restClearButtonProps}
                aria-label={passwordInputClearMessage}
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
            <PasswordInputPrimitive.VisibilityTrigger
              {...visibilityTriggerProps}
              asChild
            >
              <InputGroup.Button
                aria-label={useMessage(
                  "passwordInput.togglePasswordVisibility",
                )}
                size="icon-xs"
                variant="ghost"
              >
                <PasswordInputPrimitive.Indicator
                  {...restIndicatorProps}
                  fallback={fallback ?? <EyeSlashIcon />}
                >
                  {children ?? <EyeIcon />}
                </PasswordInputPrimitive.Indicator>
              </InputGroup.Button>
            </PasswordInputPrimitive.VisibilityTrigger>
          </InputGroup.Addon>
        </InputGroup>
      </PasswordInputPrimitive.Control>
    </PasswordInputPrimitive.Root>
  );
}

// #region Parts
function PasswordInputRoot({
  recipe = passwordInputRecipe,
  className,
  ...rest
}: PasswordInputPrimitiveRootProps & { recipe?: typeof passwordInputRecipe }) {
  return (
    <PasswordInputPrimitive.Root
      {...rest}
      className={recipe().base({ className })}
    />
  );
}

function PasswordInputControl({ className, ...rest }: InputGroupProps) {
  return (
    <PasswordInputPrimitive.Control asChild>
      <InputGroup
        {...rest}
        className={passwordInputRecipe().control({ className })}
      />
    </PasswordInputPrimitive.Control>
  );
}

function PasswordInputInput(props: PasswordInputInputProps) {
  return (
    <PasswordInputPrimitive.Input {...props} asChild>
      <InputGroup.Input clearable={false} />
    </PasswordInputPrimitive.Input>
  );
}

function PasswordInputVisibilityTrigger({
  children,
  ...rest
}: PasswordInputPrimitiveVisibilityTriggerProps) {
  return (
    <InputGroup.Addon align="inline-end">
      <PasswordInputPrimitive.VisibilityTrigger {...rest} asChild>
        <InputGroup.Button
          aria-label={useMessage("passwordInput.togglePasswordVisibility")}
          size="icon-xs"
          variant="ghost"
        >
          {children ?? (
            <PasswordInputPrimitive.Indicator fallback={<EyeSlashIcon />}>
              <EyeIcon />
            </PasswordInputPrimitive.Indicator>
          )}
        </InputGroup.Button>
      </PasswordInputPrimitive.VisibilityTrigger>
    </InputGroup.Addon>
  );
}
// #endregion

// #region Display Names
PasswordInputShorthand.displayName = "PasswordInput";
PasswordInputRoot.displayName = "PasswordInput.Root";
PasswordInputControl.displayName = "PasswordInput.Control";
PasswordInputInput.displayName = "PasswordInput.Input";
PasswordInputVisibilityTrigger.displayName = "PasswordInput.VisibilityTrigger";
// #endregion

export const PasswordInput = Object.assign(PasswordInputShorthand, {
  Control: PasswordInputControl,
  Indicator: PasswordInputPrimitive.Indicator,
  Input: PasswordInputInput,
  Root: PasswordInputRoot,
  VisibilityTrigger: PasswordInputVisibilityTrigger,
});

export type { PasswordInputIndicatorProps } from "@ark-ui/react";
