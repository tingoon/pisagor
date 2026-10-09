import type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchRootProps as SwitchPrimitiveRootProps,
  SwitchThumbProps,
} from "@ark-ui/react/switch";
import { Switch as SwitchPrimitive } from "@ark-ui/react/switch";
import type { SwitchProps as BaseSwitchRootProps } from "@pisagor/props";
import { type SwitchRecipeSlot, switchRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: SwitchStylesContext, withContext } = createSlotRecipeContext({
  name: "Switch",
  recipe: switchRecipe,
});
// #endregion

// #region Types
type FormControlVariant = "primary" | "secondary";

type SwitchClassNames = VariantClassNames<SwitchRecipeSlot>;

type SwitchRootProps = SwitchPrimitiveRootProps & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
} & BaseSwitchRootProps;

export interface SwitchProps extends Omit<SwitchRootProps, "children"> {
  onValueChange?: (value: boolean) => void;
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
  const slots = recipe({ ...shellArgs });

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
export function Switch({
  variant,
  controlProps,
  hiddenInputProps,
  thumbProps,
  onCheckedChange,
  onValueChange,
  className,
  classNames,
  ...rest
}: SwitchProps) {
  const handleCheckedChange =
    onCheckedChange || onValueChange
      ? (
          details: Parameters<
            NonNullable<SwitchRootProps["onCheckedChange"]>
          >[0],
        ) => {
          onCheckedChange?.(details);
          onValueChange?.(details.checked === true);
        }
      : undefined;

  return (
    <SwitchRoot
      {...rest}
      className={className}
      onCheckedChange={handleCheckedChange}
      variant={variant}
    >
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
Switch.displayName = "Switch";

// #endregion

export type {
  SwitchControlProps,
  SwitchHiddenInputProps,
  SwitchThumbProps,
} from "@ark-ui/react/switch";
