import { ark } from "@ark-ui/react/factory";
import {
  type StatTrendVariantProps,
  type StatVariantProps,
  statTrendVariants,
  statVariants,
} from "@pisagor/styles/ui/stat";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
type StatLabelProps = ComponentProps<typeof ark.div>;

type StatValueProps = ComponentProps<typeof ark.div>;

type StatTrendProps = ComponentProps<typeof ark.div> & StatTrendVariantProps;

type StatClassNames = VariantClassNames<typeof statVariants>;

type StatRootProps = ComponentProps<typeof ark.div> &
  StatVariantProps &
  WithTestId & {
    /** Slot class names */
    classNames?: StatClassNames;
  };

export interface StatProps extends Omit<StatRootProps, "children"> {
  /** Metric label. */
  label?: ReactNode;
  /** Primary metric value. */
  value?: ReactNode;
  /** Supporting copy below the value. */
  description?: ReactNode;
  /** Trend indicator content. */
  trend?: ReactNode;
  /** Extra props forwarded to the label element */
  labelProps?: Omit<StatLabelProps, "children" | "className">;
  /** Extra props forwarded to the value element */
  valueProps?: Omit<StatValueProps, "children" | "className">;
  /** Extra props forwarded to the description element */
  descriptionProps?: Omit<StatPartProps, "children" | "className">;
  /** Extra props forwarded to the trend element */
  trendProps?: Omit<StatTrendProps, "children" | "className">;
}

interface StatPartProps extends ComponentProps<typeof ark.div> {
  /** Slot class names */
  classNames?: StatClassNames;
}
// #endregion

// #region Parts
export function StatRoot({ variant, className, classNames, testId, ...rest }: StatRootProps) {
  const slots = statVariants({ variant });

  return (
    <ark.div
      {...rest}
      className={slots.base({ className: cn(className, classNames?.base) })}
      data-part="root"
      data-scope="stat"
      data-testid={testId}
      data-variant={variant}
    />
  );
}
StatRoot.displayName = "Stat.Root";

export function StatLabel({ className, classNames, ...rest }: StatPartProps) {
  const slots = statVariants();

  return (
    <ark.div
      {...rest}
      className={slots.label({ className: cn(className, classNames?.label) })}
      data-part="label"
      data-scope="stat"
    />
  );
}
StatLabel.displayName = "Stat.Label";

export function StatValue({ className, classNames, ...rest }: StatPartProps) {
  const slots = statVariants();

  return (
    <ark.div
      {...rest}
      className={slots.value({ className: cn(className, classNames?.value) })}
      data-part="value"
      data-scope="stat"
    />
  );
}
StatValue.displayName = "Stat.Value";

export function StatDescription({ className, classNames, ...rest }: StatPartProps) {
  const slots = statVariants();

  return (
    <ark.p
      {...rest}
      className={slots.description({ className: cn(className, classNames?.description) })}
      data-part="description"
      data-scope="stat"
    />
  );
}
StatDescription.displayName = "Stat.Description";

export function StatTrend({ trend = "neutral", className, ...rest }: StatTrendProps) {
  return (
    <ark.div
      {...rest}
      className={cn(statTrendVariants({ trend }), className)}
      data-part="trend"
      data-scope="stat"
      data-trend={trend}
    />
  );
}
StatTrend.displayName = "Stat.Trend";
// #endregion

// #region Shorthand
export function StatShorthand({
  variant,
  className,
  classNames,
  label,
  value,
  description,
  trend,
  labelProps,
  valueProps,
  descriptionProps,
  trendProps,
  ...rest
}: StatProps) {
  return (
    <StatRoot {...rest} className={className} classNames={classNames} variant={variant}>
      {label !== undefined && <StatLabel {...labelProps}>{label}</StatLabel>}

      {value !== undefined && <StatValue {...valueProps}>{value}</StatValue>}

      {description !== undefined && (
        <StatDescription {...descriptionProps}>{description}</StatDescription>
      )}

      {trend !== undefined && <StatTrend {...trendProps}>{trend}</StatTrend>}
    </StatRoot>
  );
}
StatShorthand.displayName = "Stat";
// #endregion
