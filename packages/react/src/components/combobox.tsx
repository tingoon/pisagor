import {
  Combobox as ComboboxPrimitive,
  Portal,
  createListCollection,
  useComboboxContext,
} from "@ark-ui/react";
import type {
  CollectionItem,
  ComboboxClearTriggerProps,
  ComboboxContentProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxInputProps,
  ComboboxItemGroupLabelProps,
  ComboboxItemGroupProps,
  ComboboxItemIndicatorProps,
  ComboboxItemProps,
  ComboboxListProps,
  ComboboxPositionerProps,
  ComboboxRootProps as ComboboxRootPrimitiveProps,
  ComboboxTriggerProps,
} from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import type {
  ComboboxContract,
  ComboboxPresetItem as BaseComboboxPresetItem,
  ComboboxRootContract,
} from "@pisagor/contracts";
import { comboboxRecipe } from "@pisagor/recipes";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { InputGroup } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Combobox",
  recipe: comboboxRecipe,
});
// #endregion

// #region Types
interface ComboboxPresetItem extends Omit<BaseComboboxPresetItem, "label"> {
  label: string;
}

export type ComboboxRootProps<T extends CollectionItem = CollectionItem> =
  ComboboxRootPrimitiveProps<T> & ComboboxRootContract;

export interface ComboboxProps
  extends
    Omit<ComboboxRootProps, "children" | "collection" | "onValueChange">,
    Omit<ComboboxContract, "items" | "placeholder"> {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Input id forwarded to the shorthand field. */
  id?: string;
  items?: Array<ComboboxPresetItem | string>;
  /** Placeholder for the shorthand field. */
  placeholder?: string;
  /**
   * Whether to show the toggle trigger.
   *
   * @defaultValue true
   */
  showTrigger?: boolean;
  /** Input size. Defaults to `md`. */
  size?: "sm" | "md" | "lg";
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: string[]) => void;
}
// #endregion

// #region Parts
const Root = withProvider<ComboboxRootProps<CollectionItem>>(
  ComboboxPrimitive.Root,
  {
    name: "Root",
    slot: "base",
  },
);

const Control = withContext<ComboboxControlProps>(ComboboxPrimitive.Control, {
  name: "Control",
});

const Input = withContext<ComboboxInputProps>(ComboboxPrimitive.Input, {
  name: "Input",
});

const Trigger = withContext<ComboboxTriggerProps>(ComboboxPrimitive.Trigger, {
  name: "Trigger",
});

const ClearTrigger = withContext<ComboboxClearTriggerProps>(
  ComboboxPrimitive.ClearTrigger,
  {
    name: "ClearTrigger",
  },
);

const Positioner = withContext<ComboboxPositionerProps>(
  ComboboxPrimitive.Positioner,
  {
    name: "Positioner",
  },
);

const Content = withContext<ComboboxContentProps>(ComboboxPrimitive.Content, {
  name: "Content",
});

const ItemGroup = withContext<ComboboxItemGroupProps>(
  ComboboxPrimitive.ItemGroup,
  {
    name: "ItemGroup",
  },
);

const ItemGroupLabel = withContext<ComboboxItemGroupLabelProps>(
  ComboboxPrimitive.ItemGroupLabel,
  {
    name: "ItemGroupLabel",
  },
);

const Item = withContext<ComboboxItemProps>(ComboboxPrimitive.Item, {
  name: "Item",
});

const ItemIndicator = withContext<ComboboxItemIndicatorProps>(
  ComboboxPrimitive.ItemIndicator,
  {
    name: "ItemIndicator",
  },
);

const Empty = withContext<ComboboxEmptyProps>(ComboboxPrimitive.Empty, {
  name: "Empty",
});

const List = withContext<ComboboxListProps>(ComboboxPrimitive.List, {
  name: "List",
});
// #endregion

// #region Shorthand
function ComboboxClearButton() {
  const { m } = useLocale();
  const { inputValue } = useComboboxContext();

  if (!inputValue) {
    return null;
  }

  return (
    <ClearTrigger asChild>
      <InputGroup.Button
        aria-label={m("combobox.clear")}
        size="icon-xs"
        variant="ghost"
      >
        <XIcon aria-hidden />
      </InputGroup.Button>
    </ClearTrigger>
  );
}

function ComboboxShorthand({
  clearable = false,
  showTrigger = true,
  items = [],
  id,
  placeholder,
  size = "md",
  variant,
  className,
  classNames,
  onValueChange,
  ...rest
}: ComboboxProps) {
  const { m } = useLocale();
  const normalized = items.map((item) =>
    typeof item === "string" ? { label: item, value: item } : item,
  );
  const collection = createListCollection({ items: normalized });

  return (
    <Root
      {...rest}
      collection={collection}
      onValueChange={
        onValueChange ? (details) => onValueChange(details.value) : undefined
      }
      openOnClick
    >
      <Control>
        <InputGroup className={className} size={size} variant={variant}>
          <Input asChild>
            <InputGroup.Input id={id} placeholder={placeholder} />
          </Input>
          <InputGroup.Addon align="inline-end">
            {showTrigger ? (
              <InputGroup.Button
                asChild
                className={classNames?.triggerHidden}
                size="icon-xs"
                variant="ghost"
              >
                <Trigger>
                  <Button
                    aria-label={m("combobox.toggle")}
                    className={classNames?.triggerButton}
                    variant="ghost"
                  >
                    <CaretUpDownIcon aria-hidden />
                  </Button>
                </Trigger>
              </InputGroup.Button>
            ) : null}
            {clearable ? <ComboboxClearButton /> : null}
          </InputGroup.Addon>
        </InputGroup>
      </Control>
      <Portal>
        <Positioner>
          <Content className={classNames?.content}>
            <List className={classNames?.list}>
              {normalized.map((item) => (
                <Item
                  className={classNames?.item}
                  item={item}
                  key={item.value}
                  persistFocus
                >
                  {item.label}
                  <ItemIndicator className={classNames?.itemIndicator}>
                    <CheckIcon />
                  </ItemIndicator>
                </Item>
              ))}
            </List>
            <Empty className={classNames?.empty}>{m("combobox.empty")}</Empty>
          </Content>
        </Positioner>
      </Portal>
    </Root>
  );
}
// #endregion

export type {
  ComboboxClearTriggerProps,
  ComboboxContentProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxInputProps,
  ComboboxItemGroupLabelProps,
  ComboboxItemGroupProps,
  ComboboxItemIndicatorProps,
  ComboboxItemProps,
  ComboboxListProps,
  ComboboxPositionerProps,
  ComboboxTriggerProps,
} from "@ark-ui/react";

export const Combobox = Object.assign(ComboboxShorthand, {
  ClearTrigger,
  Content,
  Context: ComboboxPrimitive.Context,
  Control,
  Empty,
  Input,
  Item,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  List,
  Positioner,
  Root,
  Trigger,
});
