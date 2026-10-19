import {
  Combobox as ComboboxPrimitive,
  createListCollection,
  useComboboxContext,
} from "@ark-ui/solid";
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
} from "@ark-ui/solid";
import type {
  ComboboxContract,
  ComboboxPresetItem as BaseComboboxPresetItem,
  ComboboxRootContract,
} from "@pisagor/contracts";
import { comboboxRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import {
  CaretUpDownIcon,
  CheckIcon,
  XIcon,
  createSlotRecipeContext,
} from "../internal";
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
type FormControlVariant = "primary" | "secondary";

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
const Root = withProvider<ComboboxRootProps>(ComboboxPrimitive.Root, {
  name: "Root",
  slot: "base",
});

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
function ComboboxClearButton(): JSX.Element {
  const { m } = useLocale();
  const combobox = useComboboxContext();

  return (
    <Show when={combobox().inputValue}>
      <ClearTrigger
        asChild={(triggerProps) => (
          <InputGroup.Button
            {...triggerProps()}
            aria-label={m("combobox.clear")}
            size="icon-xs"
            variant="ghost"
          >
            <XIcon aria-hidden />
          </InputGroup.Button>
        )}
      />
    </Show>
  );
}

function ComboboxShorthand(props: ComboboxProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "clearable",
    "showTrigger",
    "items",
    "id",
    "placeholder",
    "size",
    "variant",
    "class",
    "classNames",
    "onValueChange",
  ]);
  const normalized = createMemo(() =>
    (local.items ?? []).map((item) =>
      typeof item === "string" ? { label: item, value: item } : item,
    ),
  );
  const collection = createMemo(() =>
    createListCollection({ items: normalized() }),
  );
  const showTrigger = () => local.showTrigger ?? true;

  return (
    <Root
      {...rest}
      collection={collection()}
      onValueChange={
        local.onValueChange
          ? (details) => local.onValueChange?.(details.value)
          : undefined
      }
      openOnClick
    >
      <Control>
        <InputGroup
          class={local.class}
          size={local.size ?? "md"}
          variant={local.variant}
        >
          <Input
            asChild={(inputProps) => (
              <InputGroup.Input
                {...inputProps()}
                id={local.id}
                placeholder={local.placeholder}
              />
            )}
          />
          <InputGroup.Addon align="inline-end">
            <Show when={showTrigger()}>
              <InputGroup.Button
                asChild={(buttonProps) => (
                  <Trigger
                    {...buttonProps({ class: local.classNames?.triggerHidden })}
                  >
                    <Button
                      aria-label={m("combobox.toggle")}
                      class={local.classNames?.triggerButton}
                      variant="ghost"
                    >
                      <CaretUpDownIcon aria-hidden />
                    </Button>
                  </Trigger>
                )}
                size="icon-xs"
                variant="ghost"
              />
            </Show>
            <Show when={local.clearable ?? false}>
              <ComboboxClearButton />
            </Show>
          </InputGroup.Addon>
        </InputGroup>
      </Control>
      <Portal>
        <Positioner>
          <Content class={local.classNames?.content}>
            <List class={local.classNames?.list}>
              <For each={normalized()}>
                {(item) => (
                  <Item class={local.classNames?.item} item={item} persistFocus>
                    {item.label}
                    <ItemIndicator class={local.classNames?.itemIndicator}>
                      <CheckIcon />
                    </ItemIndicator>
                  </Item>
                )}
              </For>
            </List>
            <Empty class={local.classNames?.empty}>{m("combobox.empty")}</Empty>
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
} from "@ark-ui/solid";

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
