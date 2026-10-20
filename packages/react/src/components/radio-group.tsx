import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/react";
import type {
  RadioGroupItemControlProps,
  RadioGroupItemProps as RadioGroupItemPrimitiveProps,
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
  RadioGroupRootProps as RadioGroupRootPrimitiveProps,
} from "@ark-ui/react";
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
import type { ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "RadioGroup",
  recipe: radioGroupItemRecipe,
});
// #endregion

// #region Types
interface RadioGroupPresetItem extends Omit<BaseRadioGroupPresetItem, "label"> {
  label: ReactNode;
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
function Root({
  children,
  onValueChange,
  recipe = radioGroupRecipe,
  className,
  ...rest
}: RadioGroupRootProps) {
  return (
    <RadioGroupPrimitive.Root
      {...rest}
      className={recipe({ className })}
      onValueChange={
        onValueChange ? (details) => onValueChange(details.value) : undefined
      }
    >
      {children}
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

function ItemText({ children, className, ...rest }: RadioGroupItemTextProps) {
  return (
    <RadioGroupPrimitive.ItemText
      {...rest}
      className={fieldRecipe().label({ className })}
    >
      {children}
    </RadioGroupPrimitive.ItemText>
  );
}

const ItemHiddenInput = RadioGroupPrimitive.ItemHiddenInput;

function Label({ children, className, ...rest }: RadioGroupLabelProps) {
  return (
    <RadioGroupPrimitive.Label
      {...rest}
      className={fieldRecipe().label({ className })}
    >
      {children}
    </RadioGroupPrimitive.Label>
  );
}
// #endregion

// #region Shorthand
export function RadioGroupShorthand({ items = [], ...rest }: RadioGroupProps) {
  return (
    <Root {...rest}>
      {items.map((item) => (
        <Item disabled={item.disabled} key={item.value} value={item.value}>
          <ItemControl />
          <ItemText>{item.label}</ItemText>
          <ItemHiddenInput />
        </Item>
      ))}
    </Root>
  );
}

RadioGroupShorthand.displayName = "RadioGroup";
// #endregion

export type {
  RadioGroupItemControlProps,
  RadioGroupItemHiddenInputProps,
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
} from "@ark-ui/react";
export type { RadioGroupItemProps };

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item,
  ItemControl,
  ItemHiddenInput,
  ItemText,
  Label,
  Root,
});
