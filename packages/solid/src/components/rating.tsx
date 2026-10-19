import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/solid";
import type {
  RatingGroupControlProps,
  RatingGroupItemProps,
  RatingGroupRootProps,
} from "@ark-ui/solid";
import type { RatingContract, RatingRootContract } from "@pisagor/contracts";
import { ratingRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { StarIcon, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Rating",
  recipe: ratingRecipe,
});
// #endregion

// #region Types
type RatingControlProps = RatingGroupControlProps;

type RatingItemProps = RatingGroupItemProps;

type RatingIndicatorProps = ComponentProps<"span">;

type RatingIconProps = {
  "data-bg"?: string;
  "data-fg"?: string;
  weight?: "fill" | "regular";
};

type RatingRootProps = RatingGroupRootProps & RatingRootContract;

export interface RatingProps
  extends Omit<RatingRootProps, "children" | "onValueChange">, RatingContract {
  defaultValue?: number;
  value?: number;
  icon?: Component<RatingIconProps>;
  onValueChange?: (value: number) => void;
  /** Extra props forwarded to the rating control element */
  controlProps?: Omit<RatingControlProps, "children" | "class">;
  /** Extra props forwarded to each rating item indicator element */
  indicatorProps?: Omit<RatingIndicatorProps, "children" | "class">;
  /** Extra props forwarded to each rating item element */
  itemProps?: Omit<RatingItemProps, "children" | "index" | "class">;
}
// #endregion

// #region Parts
const Root = withProvider<RatingRootProps>(RatingGroupPrimitive.Root, {
  name: "Root",
});

const Control = withContext<RatingControlProps>(RatingGroupPrimitive.Control, {
  name: "Control",
});

const Item = withContext<RatingItemProps>(RatingGroupPrimitive.Item, {
  name: "Item",
});

const Indicator = withContext<RatingIndicatorProps>("span", {
  name: "Indicator",
  part: "item-indicator",
});
// #endregion

// #region Closed
function RatingShorthand(props: RatingProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "allowHalf",
    "count",
    "controlProps",
    "icon",
    "indicatorProps",
    "itemProps",
    "onValueChange",
    "class",
    "classNames",
  ]);
  const Icon = () => local.icon ?? StarIcon;

  return (
    <Root
      {...rest}
      allowHalf={local.allowHalf ?? false}
      class={local.class}
      count={local.count ?? 5}
      onValueChange={
        local.onValueChange
          ? (details) => local.onValueChange?.(details.value)
          : undefined
      }
    >
      <Control {...local.controlProps} class={local.classNames?.control}>
        <RatingGroupPrimitive.Context>
          {(api) => (
            <For each={api().items}>
              {(item) => (
                <Item
                  {...local.itemProps}
                  class={local.classNames?.item}
                  index={item}
                >
                  <RatingGroupPrimitive.ItemContext>
                    {(itemApi) => {
                      const state = () => itemApi();

                      return (
                        <Indicator
                          {...local.indicatorProps}
                          class={local.classNames?.indicator}
                          data-half={state().half ? "" : undefined}
                          data-highlighted={
                            state().highlighted ? "" : undefined
                          }
                        >
                          <Dynamic component={Icon()} data-bg="" />
                          <Dynamic
                            component={Icon()}
                            data-fg=""
                            weight="fill"
                          />
                        </Indicator>
                      );
                    }}
                  </RatingGroupPrimitive.ItemContext>
                </Item>
              )}
            </For>
          )}
        </RatingGroupPrimitive.Context>
        <RatingGroupPrimitive.HiddenInput />
      </Control>
    </Root>
  );
}
// #endregion

export const Rating = Object.assign(RatingShorthand, {
  Context: RatingGroupPrimitive.Context,
  Control,
  HiddenInput: RatingGroupPrimitive.HiddenInput,
  Indicator,
  Item,
  ItemContext: RatingGroupPrimitive.ItemContext,
  Root,
});
