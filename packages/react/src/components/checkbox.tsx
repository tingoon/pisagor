import { Checkbox as CheckboxPrimitive } from "@ark-ui/react";
import type {
  CheckboxControlProps,
  CheckboxGroupProps as CheckboxGroupPrimitiveProps,
  CheckboxIndicatorProps,
  CheckboxLabelProps,
  CheckboxRootProps as CheckboxRootPrimitiveProps,
} from "@ark-ui/react";
import { CheckIcon, MinusIcon } from "@phosphor-icons/react";
import type {
  CheckboxContract,
  CheckboxGroupRootContract,
  CheckboxRootContract,
} from "@pisagor/contracts";
import { checkboxGroupRecipe, checkboxRecipe } from "@pisagor/recipes";
import type { ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "Checkbox",
  recipe: checkboxRecipe,
});
// #endregion

// #region Types
export interface CheckboxGroupProps
  extends
    Omit<CheckboxGroupPrimitiveProps, "onValueChange">,
    CheckboxGroupRootContract {
  onValueChange?: (value: string[]) => void;
}

type CheckboxRootProps = CheckboxRootPrimitiveProps & CheckboxRootContract;

export interface CheckboxProps
  extends Omit<CheckboxRootProps, "children">, CheckboxContract {
  /** Visible label rendered next to the control. */
  label?: ReactNode;
}
// #endregion

// #region Parts
function Group({
  onValueChange,
  recipe = checkboxGroupRecipe,
  className,
  ...rest
}: CheckboxGroupProps) {
  return (
    <CheckboxPrimitive.Group
      {...rest}
      className={recipe({ className })}
      onValueChange={onValueChange}
    />
  );
}

const Root = withProvider<CheckboxRootProps>(CheckboxPrimitive.Root, {
  name: "Root",
  slot: "root",
});

const ControlBase = withContext<CheckboxControlProps>(
  CheckboxPrimitive.Control,
  {
    name: "Control",
    slot: "base",
  },
);

/**
 * Control; mirrors the root `variant` as `data-variant`. Render your own
 * indicators.
 */
function Control(props: CheckboxControlProps) {
  const { variants } = useStyles();
  const variant =
    (variants as CheckboxRootContract).variant ?? ("primary" as const);

  return <ControlBase {...props} data-variant={variant} />;
}

const Indicator = withContext<CheckboxIndicatorProps>(
  CheckboxPrimitive.Indicator,
  {
    name: "Indicator",
  },
);

const Label = withContext<CheckboxLabelProps>(CheckboxPrimitive.Label, {
  name: "Label",
});
// #endregion

// #region Shorthand
export function CheckboxShorthand({
  classNames,
  label,
  tabIndex,
  ...rest
}: CheckboxProps) {
  return (
    <Root {...rest}>
      <Control className={classNames?.base}>
        <Indicator className={classNames?.indicator}>
          <CheckIcon />
        </Indicator>
        <Indicator className={classNames?.indicator} indeterminate>
          <MinusIcon />
        </Indicator>
      </Control>
      {label ? <Label className={classNames?.label}>{label}</Label> : null}
      <CheckboxPrimitive.HiddenInput tabIndex={tabIndex} />
    </Root>
  );
}

CheckboxShorthand.displayName = "Checkbox";
// #endregion

export type { CheckboxCheckedState } from "@ark-ui/react";
export type { CheckboxRootProps };

export const Checkbox = Object.assign(CheckboxShorthand, {
  Control,
  Group,
  HiddenInput: CheckboxPrimitive.HiddenInput,
  Indicator,
  Label,
  Root,
});
