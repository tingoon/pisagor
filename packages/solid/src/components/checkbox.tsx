import { Checkbox as CheckboxPrimitive } from "@ark-ui/solid";
import type {
  CheckboxControlProps,
  CheckboxGroupProps as CheckboxGroupPrimitiveProps,
  CheckboxIndicatorProps,
  CheckboxLabelProps,
  CheckboxRootProps as CheckboxRootPrimitiveProps,
} from "@ark-ui/solid";
import type {
  CheckboxContract,
  CheckboxGroupRootContract,
  CheckboxRootContract,
} from "@pisagor/contracts";
import { checkboxGroupRecipe, checkboxRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { CheckIcon, MinusIcon, createSlotRecipeContext } from "../internal";

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
  label?: JSX.Element;
}
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

/**
 * Control; mirrors the root `variant` as `data-variant`. Render your own
 * indicators.
 */
function Control(props: CheckboxControlProps): JSX.Element {
  const styles = useStyles();
  const variant = () =>
    (styles.variants as CheckboxRootContract).variant ?? ("primary" as const);

  return <ControlBase {...props} data-variant={variant()} />;
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
export function CheckboxShorthand(props: CheckboxProps): JSX.Element {
  const [local, rest] = splitProps(props, ["classNames", "label", "tabIndex"]);

  return (
    <Root {...rest}>
      <Control class={local.classNames?.base}>
        <Indicator class={local.classNames?.indicator}>
          <CheckIcon />
        </Indicator>
        <Indicator class={local.classNames?.indicator} indeterminate>
          <MinusIcon />
        </Indicator>
      </Control>
      <Show when={local.label}>
        <Label class={local.classNames?.label}>{local.label}</Label>
      </Show>
      <CheckboxPrimitive.HiddenInput tabIndex={local.tabIndex} />
    </Root>
  );
}
// #endregion

export type { CheckboxCheckedState } from "@ark-ui/solid";
export type { CheckboxRootProps };

export const Checkbox = Object.assign(CheckboxShorthand, {
  Control,
  Group,
  HiddenInput: CheckboxPrimitive.HiddenInput,
  Indicator,
  Label,
  Root,
});
