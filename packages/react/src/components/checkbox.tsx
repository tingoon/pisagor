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
  CheckboxGroupRootContract,
  CheckboxRootContract,
} from "@pisagor/contracts";
import { checkboxGroupRecipe, checkboxRecipe } from "@pisagor/recipes";
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

export type CheckboxProps = CheckboxRootProps;
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

function Control({ children, ...rest }: CheckboxControlProps) {
  const { variants } = useStyles();
  const variant =
    (variants as CheckboxRootContract).variant ?? ("primary" as const);

  return (
    <ControlBase {...rest} data-variant={variant}>
      {children ?? (
        <>
          <Indicator>
            <CheckIcon />
          </Indicator>
          <Indicator indeterminate>
            <MinusIcon />
          </Indicator>
        </>
      )}
    </ControlBase>
  );
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

// #region Closed
function CheckboxShorthand({ tabIndex, className, ...rest }: CheckboxProps) {
  return (
    <Root {...rest} className={className}>
      <Control />
      <CheckboxPrimitive.HiddenInput tabIndex={tabIndex} />
    </Root>
  );
}
// #endregion

export type { CheckboxCheckedState, CheckboxRootProps } from "@ark-ui/react";

export const Checkbox = Object.assign(CheckboxShorthand, {
  Control,
  Group,
  HiddenInput: CheckboxPrimitive.HiddenInput,
  Indicator,
  Label,
  Root,
});
