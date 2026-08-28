import { ark } from "@ark-ui/react/factory";
import {
  type StatSlots,
  type StatTrendVariantProps,
  type StatVariantProps,
  statTrendVariants,
  statVariants,
} from "@pisagor/recipes/stat";
import type { ComponentProps, ReactNode } from "react";
import type { VariantClassNames } from "../../internal/types";
import { StatContext, useStat } from "./stat.context";

// #region Types
type StatLabelProps = ComponentProps<typeof ark.div>;

type StatValueProps = ComponentProps<typeof ark.div>;

type StatDescriptionProps = ComponentProps<typeof ark.p>;

type StatTrendProps = ComponentProps<typeof ark.div> & StatTrendVariantProps;

type StatClassNames = VariantClassNames<StatSlots>;

type StatRootProps = ComponentProps<typeof ark.div> & StatVariantProps;

export interface StatProps extends Omit<StatRootProps, "children"> {
  /** Supporting copy below the value. */
  description?: ReactNode;
  /** Metric label. */
  label?: ReactNode;
  /** Trend indicator content. */
  trend?: ReactNode;
  /** Primary metric value (display copy — not a controlled input). */
  value?: ReactNode;
  /** Slot class names */
  classNames?: StatClassNames;
  /** Extra props forwarded to the description element */
  descriptionProps?: Omit<StatDescriptionProps, "children" | "className">;
  /** Extra props forwarded to the label element */
  labelProps?: Omit<StatLabelProps, "children" | "className">;
  /** Extra props forwarded to the trend element */
  trendProps?: Omit<StatTrendProps, "children" | "className">;
  /** Extra props forwarded to the value element */
  valueProps?: Omit<StatValueProps, "children" | "className">;
}
// #endregion

// #region Parts
export function StatRoot({ variant, children, className, ...rest }: StatRootProps) {
  const slots = statVariants();

  return (
    <StatContext value={{ slots }}>
      <ark.div
        {...rest}
        className={slots.base({ className, variant })}
        data-part="root"
        data-scope="stat"
        data-variant={variant}
      >
        {children}
      </ark.div>
    </StatContext>
  );
}

export function StatLabel({ className, ...rest }: StatLabelProps) {
  const { slots } = useStat();

  return (
    <ark.div {...rest} className={slots.label({ className })} data-part="label" data-scope="stat" />
  );
}

export function StatValue({ className, ...rest }: StatValueProps) {
  const { slots } = useStat();

  return (
    <ark.div {...rest} className={slots.value({ className })} data-part="value" data-scope="stat" />
  );
}

export function StatDescription({ className, ...rest }: StatDescriptionProps) {
  const { slots } = useStat();

  return (
    <ark.p
      {...rest}
      className={slots.description({ className })}
      data-part="description"
      data-scope="stat"
    />
  );
}

export function StatTrend({ trend = "neutral", className, ...rest }: StatTrendProps) {
  return (
    <ark.div
      {...rest}
      className={statTrendVariants({ className, trend })}
      data-part="trend"
      data-scope="stat"
      data-trend={trend}
    />
  );
}
// #endregion

// #region Shorthand
export function StatShorthand({
  variant,
  value,
  description,
  descriptionProps,
  label,
  labelProps,
  trend,
  trendProps,
  valueProps,
  className,
  classNames,
  ...rest
}: StatProps) {
  return (
    <StatRoot {...rest} className={className} variant={variant}>
      {label !== undefined && (
        <StatLabel {...labelProps} className={classNames?.label}>
          {label}
        </StatLabel>
      )}

      {value !== undefined && (
        <StatValue {...valueProps} className={classNames?.value}>
          {value}
        </StatValue>
      )}

      {description !== undefined && (
        <StatDescription {...descriptionProps} className={classNames?.description}>
          {description}
        </StatDescription>
      )}

      {trend !== undefined && <StatTrend {...trendProps}>{trend}</StatTrend>}
    </StatRoot>
  );
}
// #endregion

// #region Display Names
StatRoot.displayName = "Stat.Root";
StatLabel.displayName = "Stat.Label";
StatValue.displayName = "Stat.Value";
StatDescription.displayName = "Stat.Description";
StatTrend.displayName = "Stat.Trend";
StatShorthand.displayName = "Stat";
// #endregion
