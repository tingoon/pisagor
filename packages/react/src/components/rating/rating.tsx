import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/react/rating-group";
import { StarIcon } from "@phosphor-icons/react";
import { type RatingSlots, ratingVariants } from "@pisagor/styles/ui/rating";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { cloneElement } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { RatingContext, useRating } from "./rating.context";

// #region Types
type RatingControlProps = ComponentProps<typeof RatingGroupPrimitive.Control>;

type RatingItemProps = ComponentProps<typeof RatingGroupPrimitive.Item>;

type RatingIndicatorProps = ComponentProps<"span">;

type RatingClassNames = VariantClassNames<RatingSlots>;

type RatingRootProps = ComponentProps<typeof RatingGroupPrimitive.Root> &
  WithTestId & {
    /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
    variant?: FormControlVariant;
  };

export interface RatingProps extends Omit<RatingRootProps, "children" | "onValueChange"> {
  /** Slot class names */
  classNames?: RatingClassNames;
  /**
   * The icon to use for the rating.
   *
   * @defaultValue <StarIcon />
   */
  icon?: ReactNode;
  /**
   * Controlled rating value.
   *
   * @remarks
   * When set, `defaultValue` is ignored. Pair with `onValueChange` to handle updates.
   */
  value?: number;
  /**
   * Initial rating value when uncontrolled.
   *
   * @remarks
   * Ignored when `value` is set.
   */
  defaultValue?: number;
  /**
   * Called when the rating value changes.
   *
   * @remarks
   * Receives the numeric value directly, not Ark UI event details.
   */
  onValueChange?: (value: number) => void;
  /** Extra props forwarded to the rating control element */
  controlProps?: Omit<RatingControlProps, "children" | "className">;
  /** Extra props forwarded to each rating item element */
  itemProps?: Omit<RatingItemProps, "children" | "index" | "className">;
  /** Extra props forwarded to each rating item indicator element */
  indicatorProps?: Omit<RatingIndicatorProps, "children" | "className">;
}
// #endregion

// #region Parts
function RatingRoot({
  allowHalf = false,
  children,
  className,
  count = 5,
  testId,
  variant: variantProp,
  ...rest
}: RatingRootProps) {
  const resolved = useFormControlVariant(variantProp);
  const slots = ratingVariants();
  const surfaceTone = resolved.variant === "secondary" ? "opacity-90" : undefined;

  return (
    <FormControlVariantProvider value={variantProp}>
      <RatingContext value={{ slots }}>
        <RatingGroupPrimitive.Root
          {...rest}
          allowHalf={allowHalf}
          className={slots.base({ className: cn(surfaceTone, className) })}
          count={count}
          data-testid={testId}
          data-variant={resolved.variant}
        >
          {children}
        </RatingGroupPrimitive.Root>
      </RatingContext>
    </FormControlVariantProvider>
  );
}

function RatingControl({ className, children, ...rest }: RatingControlProps) {
  const { slots } = useRating();

  return (
    <RatingGroupPrimitive.Control {...rest} className={slots.control({ className })}>
      {children}
    </RatingGroupPrimitive.Control>
  );
}

function RatingItem({ className, ...rest }: RatingItemProps) {
  const { slots } = useRating();

  return <RatingGroupPrimitive.Item {...rest} className={slots.item({ className })} />;
}

function RatingIndicator({ className, children, ...rest }: RatingIndicatorProps) {
  const { slots } = useRating();

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

RatingRoot.displayName = "Rating.Root";
RatingControl.displayName = "Rating.Control";
RatingItem.displayName = "Rating.Item";
RatingIndicator.displayName = "Rating.Indicator";
// #endregion

// #region Closed
export function Rating({
  className,
  classNames,
  controlProps,
  icon = <StarIcon />,
  indicatorProps,
  itemProps,
  onValueChange,
  testId,
  variant,
  ...rest
}: RatingProps) {
  return (
    <RatingRoot
      {...rest}
      className={className}
      onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
      testId={testId}
      variant={variant}
    >
      <RatingControl {...controlProps} className={classNames?.control}>
        <RatingGroupPrimitive.Context>
          {({ items }) =>
            items.map((item) => (
              <RatingItem {...itemProps} className={classNames?.item} index={item} key={item}>
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
                          fill: "currentColor",
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
Rating.displayName = "Rating";
// #endregion
