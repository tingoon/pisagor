import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/react/rating-group";
import { StarIcon } from "@phosphor-icons/react";
import { ratingVariants } from "@pisagor/styles/ui/rating";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import { cloneElement } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
export type RatingControlProps = ComponentProps<typeof RatingGroupPrimitive.Control>;

export type RatingItemProps = ComponentProps<typeof RatingGroupPrimitive.Item>;

export type RatingIndicatorProps = ComponentProps<"span">;

type RatingClassNames = VariantClassNames<typeof ratingVariants>;

export type RatingRootProps = Omit<
  ComponentProps<typeof RatingGroupPrimitive.Root>,
  "onValueChange"
>;

export interface RatingProps extends RatingRootProps, WithTestId {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
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

// #region Part
export function Rating({
  icon = <StarIcon />,
  className,
  classNames,
  allowHalf = false,
  count = 5,
  controlProps,
  itemProps,
  indicatorProps,
  onValueChange,
  variant: variantProp,
  testId,
  ...rest
}: RatingProps) {
  const resolved = useFormControlVariant(variantProp);
  const slots = ratingVariants();
  const surfaceTone = resolved.variant === "secondary" ? "opacity-90" : undefined;

  return (
    <FormControlVariantProvider value={variantProp}>
      <RatingGroupPrimitive.Root
        {...rest}
        allowHalf={allowHalf}
        className={cn(slots.root(), surfaceTone, className, classNames?.root)}
        count={count}
        data-testid={testId}
        data-variant={resolved.variant}
        onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
      >
        <RatingGroupPrimitive.Control
          {...controlProps}
          className={cn(slots.control(), classNames?.control)}
        >
          <RatingGroupPrimitive.Context>
            {({ items }) =>
              items.map((item) => (
                <RatingItem
                  {...itemProps}
                  className={cn(slots.item(), classNames?.item)}
                  index={item}
                  key={item}
                >
                  <RatingGroupPrimitive.ItemContext>
                    {({ half, highlighted }) => (
                      <span
                        {...indicatorProps}
                        className={cn(slots.indicator(), classNames?.indicator)}
                        data-half={half ? "" : undefined}
                        data-highlighted={highlighted ? "" : undefined}
                        data-part="item-indicator"
                        data-scope="rating"
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
                      </span>
                    )}
                  </RatingGroupPrimitive.ItemContext>
                </RatingItem>
              ))
            }
          </RatingGroupPrimitive.Context>

          <RatingGroupPrimitive.HiddenInput />
        </RatingGroupPrimitive.Control>
      </RatingGroupPrimitive.Root>
    </FormControlVariantProvider>
  );
}

function RatingItem({ className, ...rest }: RatingItemProps) {
  return <RatingGroupPrimitive.Item {...rest} className={className} />;
}
// #endregion
