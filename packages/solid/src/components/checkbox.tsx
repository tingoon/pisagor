import { Checkbox as CheckboxPrimitive } from "@ark-ui/solid";
import type {
  CheckboxControlProps,
  CheckboxGroupProps as CheckboxGroupPrimitiveProps,
  CheckboxIndicatorProps,
  CheckboxLabelProps,
  CheckboxRootProps as CheckboxRootPrimitiveProps,
} from "@ark-ui/solid";
import type {
  CheckboxGroupRootContract,
  CheckboxRootContract,
} from "@pisagor/contracts";
import { checkboxGroupRecipe, checkboxRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { CheckIcon, MinusIcon, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
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
function Group(props: CheckboxGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["onValueChange", "recipe", "class"]);

  return (
    <CheckboxPrimitive.Group
      {...rest}
      class={(local.recipe ?? checkboxGroupRecipe)({ class: local.class })}
      onValueChange={local.onValueChange}
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

function Control(
  props: CheckboxControlProps & Pick<CheckboxRootContract, "size" | "variant">,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "variant"]);

  return (
    <ControlBase {...rest} data-variant={local.variant ?? "primary"}>
      {local.children ?? (
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
function CheckboxShorthand(props: CheckboxProps): JSX.Element {
  const [local, rest] = splitProps(props, ["tabIndex", "class"]);

  return (
    <Root {...rest} class={local.class}>
      <Control />
      <CheckboxPrimitive.HiddenInput tabIndex={local.tabIndex} />
    </Root>
  );
}
// #endregion

export type { CheckboxCheckedState, CheckboxRootProps } from "@ark-ui/solid";

export const Checkbox = Object.assign(CheckboxShorthand, {
  Control,
  Group,
  HiddenInput: CheckboxPrimitive.HiddenInput,
  Indicator,
  Label,
  Root,
});
