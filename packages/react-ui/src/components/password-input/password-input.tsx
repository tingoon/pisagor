import { PasswordInput as PasswordInputPrimitive } from "@ark-ui/react/password-input";
import { EyeIcon, EyeSlashIcon, XIcon } from "@phosphor-icons/react";
import { passwordInputVariants } from "@pisagor/recipes/password-input";
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
  /** Called with the string value when the input changes. */
  onValueChange?: (value: string) => void;
  clearButtonProps?: InputGroupButtonProps;
  indicatorProps?: PasswordInputIndicatorProps;
  visibilityTriggerProps?: PasswordInputVisibilityTriggerProps;
}
// #endregion

// #region Part
export function PasswordInput({
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
  className,
  ...inputProps
}: PasswordInputProps) {
  const { fallback, children, ...restIndicatorProps } = indicatorProps ?? {};
  const {
    onClick: onClearClick,
    children: clearButtonChildren,
    ...restClearButtonProps
  } = clearButtonProps ?? {};

  const slots = passwordInputVariants();

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
                aria-label="Clear"
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
            <PasswordInputPrimitive.VisibilityTrigger {...visibilityTriggerProps} asChild>
              <InputGroup.Button
                aria-label="Toggle password visibility"
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
// #endregion

// #region Display Names
PasswordInput.displayName = "PasswordInput";
// #endregion
