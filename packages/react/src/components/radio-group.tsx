import { RadioGroup as RadioGroupPrimitive } from "@ark-ui/react";
import type {
  RadioGroupItemControlProps,
  RadioGroupItemHiddenInputProps,
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

const ItemRoot = withProvider<RadioGroupItemProps>(RadioGroupPrimitive.Item, {
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

function Item({ tabIndex, children, ...rest }: RadioGroupItemProps) {
  return (
    <ItemRoot {...rest}>
      <ItemControl />

      <ItemText>{children}</ItemText>

      <ItemHiddenInput tabIndex={tabIndex} />
    </ItemRoot>
  );
}

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

function ItemHiddenInput(props: RadioGroupItemHiddenInputProps) {
  return <RadioGroupPrimitive.ItemHiddenInput {...props} />;
}

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
function RadioGroupShorthand({ items = [], ...rest }: RadioGroupProps) {
  return (
    <Root {...rest}>
      {items.map((item) => (
        <Item disabled={item.disabled} key={item.value} value={item.value}>
          {item.label}
        </Item>
      ))}
    </Root>
  );
}
// #endregion

export type {
  RadioGroupItemTextProps,
  RadioGroupLabelProps,
} from "@ark-ui/react";

export const RadioGroup = Object.assign(RadioGroupShorthand, {
  Item,
  ItemControl,
  ItemHiddenInput,
  ItemText,
  Label,
  Root,
});
