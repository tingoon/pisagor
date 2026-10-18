import {
  Switch as SwitchPrimitive,
  type SwitchControlProps,
  type SwitchHiddenInputProps,
  type SwitchRootProps as SwitchPrimitiveRootProps,
  type SwitchThumbProps,
} from "@ark-ui/react";
import type { SwitchProps as BaseSwitchRootProps } from "@pisagor/props";
import { type SwitchRecipeSlot, switchRecipe } from "@pisagor/recipes";
import {
  type FormControlVariant,
  type SizeScaleProps,
  type VariantClassNames,
  createSlotRecipeContext,
} from "../internal";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: SwitchStylesContext, withContext } = createSlotRecipeContext({
  name: "Switch",
  recipe: switchRecipe,
});
// #endregion

// #region Types

type SwitchClassNames = VariantClassNames<SwitchRecipeSlot>;

type SwitchRootProps = SwitchPrimitiveRootProps & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
} & BaseSwitchRootProps &
  SizeScaleProps;

export interface SwitchProps extends Omit<SwitchRootProps, "children"> {
  /** Slot class names */
  classNames?: SwitchClassNames;
  /** Extra props forwarded to the switch control element */
  controlProps?: Omit<SwitchControlProps, "children" | "className">;
  /** Extra props forwarded to the hidden input element (e.g. tabIndex) */
  hiddenInputProps?: Omit<SwitchHiddenInputProps, "className">;
  /** Extra props forwarded to the switch thumb element */
  thumbProps?: Omit<SwitchThumbProps, "children" | "className">;
}
// #endregion

// #region Parts
function SwitchRoot({
  size = "md",
  variant: variantProp,
  children,
  recipe = switchRecipe,
  className,
  ...rest
}: SwitchRootProps) {
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlShellProps = { "data-variant": resolved.variant };
  const slots = recipe({ ...shellArgs, size });

  return (
    <SwitchStylesContext value={{ slots, variants: shellArgs as never }}>
      <SwitchPrimitive.Root
        {...rest}
        {...controlShellProps}
        className={slots.base({ className })}
      >
        {children}
      </SwitchPrimitive.Root>
    </SwitchStylesContext>
  );
}

const SwitchControl = withContext(SwitchPrimitive.Control, {
  name: "Control",
});

const SwitchThumb = withContext(SwitchPrimitive.Thumb, {
  name: "Thumb",
});

function SwitchHiddenInput(props: SwitchHiddenInputProps) {
  return <SwitchPrimitive.HiddenInput {...props} />;
}
// #endregion

// #region Closed
function SwitchShorthand({
  size,
  variant,
  controlProps,
  hiddenInputProps,
  thumbProps,
  className,
  classNames,
  ...rest
}: SwitchProps) {
  return (
    <SwitchRoot {...rest} className={className} size={size} variant={variant}>
      <SwitchControl {...controlProps} className={classNames?.control}>
        <SwitchThumb {...thumbProps} className={classNames?.thumb} />
      </SwitchControl>

      <SwitchHiddenInput {...hiddenInputProps} />
    </SwitchRoot>
  );
}
// #endregion

// #region Display Names
SwitchRoot.displayName = "Switch.Root";
SwitchHiddenInput.displayName = "Switch.HiddenInput";
SwitchShorthand.displayName = "Switch";
SwitchControl.displayName = "Switch.Control";
SwitchThumb.displayName = "Switch.Thumb";

// #endregion

export type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchThumbProps,
} from "@ark-ui/react";

export const Switch = Object.assign(SwitchShorthand, {
  Control: SwitchControl,
  HiddenInput: SwitchHiddenInput,
  Root: SwitchRoot,
  Thumb: SwitchThumb,
});
