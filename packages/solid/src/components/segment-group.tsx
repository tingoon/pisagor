import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/solid";
import type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemProps as SegmentGroupItemPrimitiveProps,
  SegmentGroupItemTextProps,
  SegmentGroupRootProps as SegmentGroupRootPrimitiveProps,
} from "@ark-ui/solid";
import type {
  SegmentGroupPresetItem as BaseSegmentGroupPresetItem,
  SegmentGroupRootContract,
  SegmentGroupContract,
} from "@pisagor/contracts";
import { segmentGroupRecipe } from "@pisagor/recipes";
import type { Component, JSX, ComponentProps } from "solid-js";
import { For, splitProps } from "solid-js";
import { cn } from "@pisagor/utils";
import { createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "SegmentGroup",
  recipe: segmentGroupRecipe,
});
// #endregion

// #region Types
type SegmentGroupVariant = "default" | "underline";

interface SegmentGroupPresetItem extends Omit<
  BaseSegmentGroupPresetItem,
  "label"
> {
  label: JSX.Element;
}

export interface SegmentGroupRootProps
  extends
    Omit<SegmentGroupRootPrimitiveProps, "onValueChange">,
    Omit<SegmentGroupRootContract, "items"> {
  variant?: SegmentGroupVariant;
  onValueChange?: (value: string | null) => void;
}

export interface SegmentGroupProps
  extends
    Omit<SegmentGroupRootProps, "children" | "recipe">,
    SegmentGroupRootContract,
    SegmentGroupContract {
  items?: SegmentGroupPresetItem[];
}

export type SegmentGroupItemProps = SegmentGroupItemPrimitiveProps;
// #endregion

// #region Parts
const SegmentGroupRootBase: Component<
  SegmentGroupRootPrimitiveProps & Omit<SegmentGroupRootContract, "items">
> = withProvider<
  ComponentProps<typeof SegmentGroupPrimitive.Root> & SegmentGroupRootContract
>(SegmentGroupPrimitive.Root, { name: "Root" });

export function SegmentGroupRoot(props: SegmentGroupRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "variant",
    "children",
    "onValueChange",
  ]);

  return (
    <SegmentGroupRootBase
      {...rest}
      data-variant={local.variant ?? "default"}
      onValueChange={
        local.onValueChange
          ? (details) => local.onValueChange?.(details.value)
          : undefined
      }
      orientation={local.orientation ?? "horizontal"}
    >
      {local.children}
    </SegmentGroupRootBase>
  );
}

const SegmentGroupItem = withContext<SegmentGroupItemProps>(
  SegmentGroupPrimitive.Item,
  { name: "Item" },
);

const SegmentGroupItemControl = withContext<
  ComponentProps<typeof SegmentGroupPrimitive.ItemControl>
>(SegmentGroupPrimitive.ItemControl, { name: "ItemControl" });

const SegmentGroupItemHiddenInput = SegmentGroupPrimitive.ItemHiddenInput;

const SegmentGroupItemText: Component<SegmentGroupItemTextProps> = withContext<
  ComponentProps<typeof SegmentGroupPrimitive.ItemText>
>(SegmentGroupPrimitive.ItemText, { name: "ItemText" });

const SegmentGroupIndicator: Component<SegmentGroupIndicatorProps> =
  withContext<ComponentProps<typeof SegmentGroupPrimitive.Indicator>>(
    SegmentGroupPrimitive.Indicator,
    { name: "Indicator" },
  );

// #endregion

// #region Shorthand
export function SegmentGroupShorthand(props: SegmentGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "classNames", "items"]);

  return (
    <SegmentGroupRoot {...rest} class={cn(local.classNames?.base, local.class)}>
      <SegmentGroupIndicator class={local.classNames?.indicator} />
      <For each={local.items ?? []}>
        {(item) => (
          <SegmentGroupItem
            class={local.classNames?.item}
            disabled={item.disabled}
            value={item.value}
          >
            <SegmentGroupItemText class={local.classNames?.itemText}>
              {item.label}
            </SegmentGroupItemText>
            <SegmentGroupItemControl class={local.classNames?.itemControl} />
            <SegmentGroupItemHiddenInput />
          </SegmentGroupItem>
        )}
      </For>
    </SegmentGroupRoot>
  );
}
// #endregion

export type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemControlProps,
  SegmentGroupItemHiddenInputProps,
  SegmentGroupItemTextProps,
} from "@ark-ui/solid";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  ItemControl: SegmentGroupItemControl,
  ItemHiddenInput: SegmentGroupItemHiddenInput,
  ItemText: SegmentGroupItemText,
  Root: SegmentGroupRoot,
});
