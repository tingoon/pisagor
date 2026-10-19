import {
  Portal,
  Select as SelectPrimitive,
  createListCollection,
} from "@ark-ui/react";
import type {
  CollectionItem,
  SelectClearTriggerProps,
  SelectContentProps,
  SelectControlProps,
  SelectIndicatorProps,
  SelectItemGroupLabelProps,
  SelectItemGroupProps,
  SelectItemIndicatorProps,
  SelectItemProps,
  SelectItemTextProps,
  SelectPositionerProps,
  SelectRootProps as SelectRootPrimitiveProps,
  SelectTriggerProps,
  SelectValueTextProps,
} from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import type {
  SelectContract,
  SelectPresetItem as BaseSelectPresetItem,
  SelectRootContract,
} from "@pisagor/contracts";
import { selectRecipe } from "@pisagor/recipes";
import type { ComponentPropsWithRef } from "react";
import { createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";
import { Separator, type SeparatorProps } from "./separator";

// #region Context
const { withContext, withProvider, useStyles } = createSlotRecipeContext({
  name: "Select",
  recipe: selectRecipe,
});
// #endregion

// #region Types
interface SelectPresetItem extends Omit<BaseSelectPresetItem, "label"> {
  label: string;
}

export type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  SelectRootPrimitiveProps<T>,
  "onValueChange"
> &
  SelectRootContract & {
    onValueChange?: (value: string | string[]) => void;
  };

export interface SelectProps
  extends
    Omit<SelectRootProps, "children" | "collection">,
    Omit<SelectContract, "items" | "placeholder"> {
  /**
   * Whether to show a clear button when a value is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  items?: Array<SelectPresetItem | string>;
  placeholder?: string;
}

type SelectEmptyProps = ComponentPropsWithRef<"div">;
// #endregion

// #region Parts
const SelectContext = SelectPrimitive.Context;

const RootBase = withProvider<
  SelectRootPrimitiveProps<CollectionItem> & SelectRootContract
>(SelectPrimitive.Root, { name: "Root", slot: "base" });

function Root<T extends CollectionItem = CollectionItem>({
  children,
  onValueChange,
  ...rest
}: SelectRootProps<T>) {
  return (
    <RootBase
      {...rest}
      onValueChange={
        onValueChange ? (details) => onValueChange(details.value) : undefined
      }
    >
      {children}

      <SelectPrimitive.HiddenSelect />
    </RootBase>
  );
}

const Control = withContext<SelectControlProps>(SelectPrimitive.Control, {
  name: "Control",
});

const Trigger = withContext<SelectTriggerProps>(SelectPrimitive.Trigger, {
  name: "Trigger",
});

function Indicator({ children, className, ...rest }: SelectIndicatorProps) {
  const { slots } = useStyles();

  return (
    <div className={slots.triggerActions()}>
      <SelectPrimitive.Indicator {...rest} className={className}>
        {children}
      </SelectPrimitive.Indicator>
    </div>
  );
}

const SeparatorPart = withContext<SeparatorProps>(Separator, {
  defaultProps: { "data-scope": "select" },
  name: "Separator",
});

const ValueText = withContext<SelectValueTextProps>(SelectPrimitive.ValueText, {
  name: "ValueText",
});

function Positioner(props: SelectPositionerProps) {
  return <SelectPrimitive.Positioner {...props} />;
}

const Content = withContext<SelectContentProps>(SelectPrimitive.Content, {
  name: "Content",
});

function ItemGroup(props: SelectItemGroupProps) {
  return <SelectPrimitive.ItemGroup {...props} />;
}

const ItemGroupLabel = withContext<SelectItemGroupLabelProps>(
  SelectPrimitive.ItemGroupLabel,
  { name: "ItemGroupLabel" },
);

const Item = withContext<SelectItemProps>(SelectPrimitive.Item, {
  name: "Item",
});

const ItemText = withContext<SelectItemTextProps>(SelectPrimitive.ItemText, {
  name: "ItemText",
});

const ItemIndicator = withContext<SelectItemIndicatorProps>(
  SelectPrimitive.ItemIndicator,
  { name: "ItemIndicator" },
);

const ClearTrigger = withContext<SelectClearTriggerProps>(
  SelectPrimitive.ClearTrigger,
  { name: "ClearTrigger" },
);

const Empty = withContext<SelectEmptyProps>("div", {
  defaultProps: { role: "presentation" },
  name: "Empty",
});
// #endregion

// #region Shorthand
function SelectShorthand({
  clearable = false,
  items = [],
  placeholder,
  ...rest
}: SelectProps) {
  const { m } = useLocale();
  const normalized = items.map((item) =>
    typeof item === "string" ? { label: item, value: item } : item,
  );
  const collection = createListCollection({ items: normalized });

  return (
    <Root {...rest} collection={collection}>
      <Control>
        <Trigger data-clearable={clearable || undefined}>
          <ValueText placeholder={placeholder} />
          <Indicator>
            <CaretUpDownIcon />
          </Indicator>
        </Trigger>
        {clearable ? (
          <ClearTrigger aria-label={m("select.clear")}>
            <XIcon />
          </ClearTrigger>
        ) : null}
      </Control>

      <Portal>
        <Positioner>
          <Content>
            {normalized.map((item) => (
              <Item item={item} key={item.value}>
                <ItemText>{item.label}</ItemText>
                <ItemIndicator>
                  <CheckIcon />
                </ItemIndicator>
              </Item>
            ))}
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
// #endregion

// #region Display Names
Root.displayName = "Select.Root";
Indicator.displayName = "Select.Indicator";
Positioner.displayName = "Select.Positioner";
ItemGroup.displayName = "Select.ItemGroup";
// #endregion

export type {
  SelectClearTriggerProps,
  SelectContentProps,
  SelectControlProps,
  SelectIndicatorProps,
  SelectItemGroupLabelProps,
  SelectItemGroupProps,
  SelectItemIndicatorProps,
  SelectItemProps,
  SelectItemTextProps,
  SelectPositionerProps,
  SelectTriggerProps,
  SelectValueTextProps,
} from "@ark-ui/react";

export const Select = Object.assign(SelectShorthand, {
  ClearTrigger,
  Content,
  Context: SelectContext,
  Control,
  Empty,
  Indicator,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  ItemText,
  Positioner,
  Root,
  Separator: SeparatorPart,
  Trigger,
  ValueText,
});
