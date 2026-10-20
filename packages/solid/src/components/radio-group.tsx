import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/solid";
import type {
  RadioGroupItemControlProps,
  RadioGroupItemProps as RadioGroupItemPrimitiveProps,
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
  RadioGroupRootProps as RadioGroupRootPrimitiveProps,
} from "@ark-ui/solid";
import type {
  RadioGroupContract,
  RadioGroupItemRootContract,
  RadioGroupPresetItem as BaseRadioGroupPresetItem,
  RadioGroupRootContract,
} from "@pisagor/contracts";
import {
  fieldRecipe,
  radioGroupItemRecipe,
  radioGroupRecipe,
} from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "RadioGroup",
  recipe: radioGroupItemRecipe,
});
// #endregion

// #region Types
interface RadioGroupPresetItem extends Omit<BaseRadioGroupPresetItem, "label"> {
  label: JSX.Element;
}

export type RadioGroupRootProps = Omit<
  RadioGroupRootPrimitiveProps,
  "onValueChange"
> &
  RadioGroupRootContract & {
    onValueChange?: (value: string | null) => void;
  };

export interface RadioGroupProps
  extends Omit<RadioGroupRootProps, "children">, RadioGroupContract {
  items?: RadioGroupPresetItem[];
}

type RadioGroupItemProps = RadioGroupItemPrimitiveProps &
  RadioGroupItemRootContract;
// #endregion

// #region Parts
function Root(props: RadioGroupRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "children",
    "onValueChange",
    "recipe",
    "class",
  ]);

  return (
    <RadioGroupPrimitive.Root
      {...rest}
      class={(local.recipe ?? radioGroupRecipe)({ class: local.class })}
      onValueChange={
        local.onValueChange
          ? (details) => local.onValueChange?.(details.value)
          : undefined
      }
    >
      {local.children}
    </RadioGroupPrimitive.Root>
  );
}

const Item = withProvider<RadioGroupItemProps>(RadioGroupPrimitive.Item, {
  name: "Item",
  slot: "base",
});

const ItemControl = withContext<RadioGroupItemControlProps>(
  RadioGroupPrimitive.ItemControl,
  {
    name: "ItemControl",
    slot: "control",
  },
);

function ItemText(props: RadioGroupItemTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);

  return (
    <RadioGroupPrimitive.ItemText
      {...rest}
      class={fieldRecipe().label({ class: local.class })}
    >
      {local.children}
    </RadioGroupPrimitive.ItemText>
  );
}

const ItemHiddenInput = RadioGroupPrimitive.ItemHiddenInput;

function Label(props: RadioGroupLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);

  return (
    <RadioGroupPrimitive.Label
      {...rest}
      class={fieldRecipe().label({ class: local.class })}
    >
      {local.children}
    </RadioGroupPrimitive.Label>
  );
}
// #endregion

// #region Shorthand
export function RadioGroupShorthand(props: RadioGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["items"]);

  return (
    <Root {...rest}>
      <For each={local.items ?? []}>
        {(item) => (
          <Item disabled={item.disabled} value={item.value}>
            <ItemControl />
            <ItemText>{item.label}</ItemText>
            <ItemHiddenInput />
          </Item>
        )}
      </For>
    </Root>
  );
}
// #endregion

export type {
  RadioGroupItemControlProps,
  RadioGroupItemHiddenInputProps,
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
} from "@ark-ui/solid";
export type { RadioGroupItemProps };

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item,
  ItemControl,
  ItemHiddenInput,
  ItemText,
  Label,
  Root,
});
