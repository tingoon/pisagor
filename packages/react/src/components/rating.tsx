import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/react";
import type {
  RatingGroupControlProps,
  RatingGroupItemProps,
  RatingGroupRootProps,
} from "@ark-ui/react";
import { StarIcon } from "@phosphor-icons/react";
import type { RatingContract, RatingRootContract } from "@pisagor/contracts";
import { ratingRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { cloneElement } from "react";
import { createSlotRecipeContext } from "../internal";
import type { FormControlVariant } from "../internal";

// #region Context
const {
  Context: RatingStylesContext,
  useStyles,
  withContext,
} = createSlotRecipeContext({
  name: "Rating",
  recipe: ratingRecipe,
});
// #endregion

// #region Types
type RatingControlProps = RatingGroupControlProps;

type RatingItemProps = RatingGroupItemProps;

type RatingIndicatorProps = ComponentProps<"span">;

type RatingRootProps = RatingGroupRootProps & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
} & RatingRootContract;

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
function RatingRoot({
  size = "md",
  variant: variantProp,
  allowHalf = false,
  count = 5,
  children,
  recipe = ratingRecipe,
  className,
  ...rest
}: RatingRootProps) {
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const slots = recipe({ size });
  const surfaceTone =
    resolved.variant === "secondary" ? "opacity-90" : undefined;

  return (
    <RatingStylesContext value={{ slots, variants: {} as never }}>
      <RatingGroupPrimitive.Root
        {...rest}
        allowHalf={allowHalf}
        className={slots.base({ className: cn(surfaceTone, className) })}
        count={count}
        data-variant={resolved.variant}
      >
        {children}
      </RatingGroupPrimitive.Root>
    </RatingStylesContext>
  );
}

const RatingControl = withContext(RatingGroupPrimitive.Control, {
  name: "Control",
});

const RatingItem = withContext(RatingGroupPrimitive.Item, {
  name: "Item",
});

function RatingIndicator({
  children,
  className,
  ...rest
}: RatingIndicatorProps) {
  const { slots } = useStyles();

  return (
    <span
      {...rest}
      className={slots.indicator({ className })}
      data-part="item-indicator"
      data-scope="rating"
    >
      {children}
    </span>
  );
}
// #endregion

// #region Closed
function RatingShorthand({
  variant,
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
    <RatingRoot
      {...rest}
      className={className}
      onValueChange={
        onValueChange ? (details) => onValueChange(details.value) : undefined
      }
      variant={variant}
    >
      <RatingControl {...controlProps} className={classNames?.control}>
        <RatingGroupPrimitive.Context>
          {({ items }) =>
            items.map((item) => (
              <RatingItem
                {...itemProps}
                className={classNames?.item}
                index={item}
                key={item}
              >
                <RatingGroupPrimitive.ItemContext>
                  {({ half, highlighted }) => (
                    <RatingIndicator
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
                    </RatingIndicator>
                  )}
                </RatingGroupPrimitive.ItemContext>
              </RatingItem>
            ))
          }
        </RatingGroupPrimitive.Context>

        <RatingGroupPrimitive.HiddenInput />
      </RatingControl>
    </RatingRoot>
  );
}
// #endregion

// #region Display Names
RatingRoot.displayName = "Rating.Root";
RatingIndicator.displayName = "Rating.Indicator";
RatingShorthand.displayName = "Rating";
// #endregion

export const Rating = Object.assign(RatingShorthand, {
  Context: RatingGroupPrimitive.Context,
  Control: RatingControl,
  HiddenInput: RatingGroupPrimitive.HiddenInput,
  Indicator: RatingIndicator,
  Item: RatingItem,
  ItemContext: RatingGroupPrimitive.ItemContext,
  Root: RatingRoot,
});
