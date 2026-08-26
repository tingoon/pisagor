import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/react/password-input";
import { EyeIcon, EyeSlashIcon, XIcon } from "@phosphor-icons/react";
import {
  passwordInputInline2Variants,
  passwordInputInlineVariants,
  passwordInputVariants,
} from "@pisagor/styles/ui/password-input";
import type { ComponentProps } from "react";
import { useClearableInput } from "../../hooks";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { InputGroup, type InputGroupButtonProps, type InputGroupProps } from "../input-group";

// #region Types
export type PasswordInputRootProps = Pick<
  ComponentProps<typeof PasswordInputPrimitive.Root>,
  "className" | "defaultVisible" | "invalid" | "onVisibilityChange" | "visible"
>;

export type PasswordInputVisibilityTriggerProps = Omit<
  ComponentProps<typeof PasswordInputPrimitive.VisibilityTrigger>,
  "asChild"
>;

export type PasswordInputIndicatorProps = ComponentProps<typeof PasswordInputPrimitive.Indicator>;

export interface PasswordInputProps
  extends PasswordInputRootProps,
    Omit<ComponentProps<typeof PasswordInputPrimitive.Input>, "className" | "size"> {
  size?: InputGroupProps["size"];
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   *
   * @remarks
   * In controlled mode, pass `value` and update it via `onChange` or `onValueChange` when clearing.
   */
  clearable?: boolean;
  clearButtonProps?: InputGroupButtonProps;
  visibilityTriggerProps?: PasswordInputVisibilityTriggerProps;
  indicatorProps?: PasswordInputIndicatorProps;
  /** Called with the string value when the input changes. */
  onValueChange?: (value: string) => void;
}
// #endregion

// #region Part
export function PasswordInput({
  className,
  size = "md",
  variant,
  visible,
  defaultVisible,
  onVisibilityChange,
  invalid,
  clearable = false,
  clearButtonProps,
  visibilityTriggerProps,
  indicatorProps,
  onValueChange,
  onChange,
  value,
  defaultValue,
  disabled,
  readOnly,
  ref,
  ...inputProps
}: PasswordInputProps) {
  const { fallback, children, ...restIndicatorProps } = indicatorProps ?? {};
  const {
    onClick: onClearClick,
    children: clearButtonChildren,
    ...restClearButtonProps
  } = clearButtonProps ?? {};

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
      className={passwordInputVariants({ className })}
      data-size={size}
      defaultVisible={defaultVisible}
      invalid={invalid}
      onVisibilityChange={onVisibilityChange}
      visible={visible}
    >
      <PasswordInputPrimitive.Control asChild>
        <InputGroup
          className={passwordInputInlineVariants()}
          data-clearable={clearable || undefined}
          variant={variant}
        >
          <PasswordInputPrimitive.Input
            asChild
            defaultValue={defaultValue}
            disabled={disabled}
            onChange={handleChange}
            readOnly={readOnly}
            ref={mergedRef}
            value={value}
            {...inputProps}
          >
            <InputGroup.Input clearable={false} />
          </PasswordInputPrimitive.Input>
          {canClear ? (
            <InputGroup.Addon align="inline-end" className={passwordInputInline2Variants()}>
              <InputGroup.Button
                aria-label="Clear"
                data-part="clear-trigger"
                data-scope="password-input"
                size="icon-xs"
                type="button"
                variant="ghost"
                {...restClearButtonProps}
                onClick={(event) => {
                  handleClear();
                  onClearClick?.(event);
                }}
              >
                {clearButtonChildren ?? <XIcon />}
              </InputGroup.Button>
            </InputGroup.Addon>
          ) : null}
          <InputGroup.Addon align="inline-end">
            <PasswordInputPrimitive.VisibilityTrigger asChild {...visibilityTriggerProps}>
              <InputGroup.Button
                aria-label="Toggle password visibility"
                size="icon-xs"
                variant="ghost"
              >
                <PasswordInputPrimitive.Indicator
                  fallback={fallback ?? <EyeSlashIcon />}
                  {...restIndicatorProps}
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
// #endregion

// #region Display Names
PasswordInput.displayName = "PasswordInput";
// #endregion
