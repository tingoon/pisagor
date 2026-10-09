import type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemTextProps,
  SegmentGroupItemProps as SegmentGroupPrimitiveItemProps,
  SegmentGroupRootProps as SegmentGroupPrimitiveRootProps,
} from "@ark-ui/solid/segment-group";
import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/solid/segment-group";
import type { SegmentGroupProps as BaseSegmentGroupRootProps } from "@pisagor/props";
import { segmentGroupRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useSegmentGroup,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "SegmentGroup",
  recipe: segmentGroupRecipe,
});
// #endregion

type SegmentGroupVariant = "default" | "underline";

interface SegmentGroupPresetItem {
  value: string;
  label: JSX.Element;
  disabled?: boolean;
}

export interface SegmentGroupRootProps
  extends Omit<SegmentGroupPrimitiveRootProps, "onValueChange">,
    BaseSegmentGroupRootProps {
  variant?: SegmentGroupVariant;
  onValueChange?: (value: string | null) => void;
}

export interface SegmentGroupProps
  extends Omit<SegmentGroupRootProps, "children"> {
  items?: SegmentGroupPresetItem[];
}

export interface SegmentGroupItemProps extends SegmentGroupPrimitiveItemProps {
  text?: JSX.Element;
}

const SegmentGroupRootBase: Component<
  SegmentGroupPrimitiveRootProps & BaseSegmentGroupRootProps
> = withProvider(SegmentGroupPrimitive.Root, {
  name: "Root",
  slot: "base",
});

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
      <SegmentGroupIndicator />
      {local.children}
    </SegmentGroupRootBase>
  );
}

export function SegmentGroupItem(props: SegmentGroupItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "text", "class"]);
  const styles = useSegmentGroup();
  const content = () => local.children ?? local.text;

  return (
    <SegmentGroupPrimitive.Item
      {...rest}
      class={styles.slots.item({ class: local.class })}
    >
      <Show when={content() != null}>
        <SegmentGroupItemText>{content()}</SegmentGroupItemText>
      </Show>
      <SegmentGroupPrimitive.ItemControl />
      <SegmentGroupPrimitive.ItemHiddenInput />
    </SegmentGroupPrimitive.Item>
  );
}

const SegmentGroupItemText: Component<SegmentGroupItemTextProps> = withContext(
  SegmentGroupPrimitive.ItemText,
  {
    defaultProps: { "data-part": "item-text" },
    name: "ItemText",
    slot: "itemText",
  },
);

export const SegmentGroupIndicator: Component<SegmentGroupIndicatorProps> =
  withContext(SegmentGroupPrimitive.Indicator, { name: "Indicator" });

export function SegmentGroupShorthand(props: SegmentGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["items"]);
  return (
    <SegmentGroupRoot {...rest}>
      <For each={local.items ?? []}>
        {(item) => (
          <SegmentGroupItem
            disabled={item.disabled}
            text={item.label}
            value={item.value}
          />
        )}
      </For>
    </SegmentGroupRoot>
  );
}

export type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemTextProps,
} from "@ark-ui/solid/segment-group";

export const SegmentGroup = Object.assign(SegmentGroupShorthand, {
  Indicator: SegmentGroupIndicator,
  Item: SegmentGroupItem,
  Root: SegmentGroupRoot,
});
