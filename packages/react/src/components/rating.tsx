import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/react";
import type {
  RatingGroupControlProps,
  RatingGroupItemProps,
  RatingGroupRootProps,
} from "@ark-ui/react";
import { StarIcon } from "@phosphor-icons/react";
import type { RatingContract, RatingRootContract } from "@pisagor/contracts";
import { ratingRecipe } from "@pisagor/recipes";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { cloneElement } from "react";
import { createSlotRecipeContext } from "../internal";

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

type RatingRootProps = RatingGroupRootProps & RatingRootContract;

export interface RatingProps
  extends Omit<RatingRootProps, "children" | "onValueChange">, RatingContract {
  /**
   * Initial rating value when uncontrolled.
   *
   * @remarks
   *   Ignored when `value` is set.
   */
  defaultValue?: number;
  /**
   * Controlled rating value.
   *
   * @remarks
   *   When set, `defaultValue` is ignored. Pair with `onValueChange` to handle
   *   updates.
   */
  value?: number;
  icon?: ReactNode;
  /**
   * Called when the rating value changes.
   *
   * @remarks
   *   Receives the numeric value directly, not Ark UI event details.
   */
  onValueChange?: (value: number) => void;
  /** Extra props forwarded to the rating control element */
  controlProps?: Omit<RatingControlProps, "children" | "className">;
  /** Extra props forwarded to each rating item indicator element */
  indicatorProps?: Omit<RatingIndicatorProps, "children" | "className">;
  /** Extra props forwarded to each rating item element */
  itemProps?: Omit<RatingItemProps, "children" | "index" | "className">;
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
function RatingShorthand({
  allowHalf = false,
  count = 5,
  controlProps,
  icon = <StarIcon />,
  indicatorProps,
  itemProps,
  onValueChange,
  className,
  classNames,
  ...rest
}: RatingProps) {
  return (
    <Root
      {...rest}
      allowHalf={allowHalf}
      className={className}
      count={count}
      onValueChange={
        onValueChange ? (details) => onValueChange(details.value) : undefined
      }
    >
      <Control {...controlProps} className={classNames?.control}>
        <RatingGroupPrimitive.Context>
          {({ items }) =>
            items.map((item) => (
              <Item
                {...itemProps}
                className={classNames?.item}
                index={item}
                key={item}
              >
                <RatingGroupPrimitive.ItemContext>
                  {({ half, highlighted }) => (
                    <Indicator
                      {...indicatorProps}
                      className={classNames?.indicator}
                      data-half={half ? "" : undefined}
                      data-highlighted={highlighted ? "" : undefined}
                    >
                      {cloneElement(
                        icon as ReactElement,
                        {
                          "data-bg": "",
                        } as ComponentProps<"svg">,
                      )}

                      {cloneElement(
                        icon as ReactElement,
                        {
                          "data-fg": "",
                          weight: "fill",
                        } as ComponentProps<"svg">,
                      )}
                    </Indicator>
                  )}
                </RatingGroupPrimitive.ItemContext>
              </Item>
            ))
          }
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
