import { ark } from "@ark-ui/react/factory";
import type {
  StatProps as BaseStatRootProps,
  StatTrendProps as BaseStatTrendProps,
} from "@pisagor/props";
import {
  type StatRecipeSlot,
  statRecipe,
  statTrendRecipe,
} from "@pisagor/recipes";
import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Stat",
  recipe: statRecipe,
});
// #endregion

// #region Parts
export const StatRoot = withProvider(ark.div, {
  name: "Root",
  slot: "base",
}) as FunctionComponent<ComponentProps<typeof ark.div> & BaseStatRootProps>;

export const StatLabel = withContext(ark.div, {
  name: "Label",
  slot: "label",
});

export const StatValue = withContext(ark.div, {
  name: "Value",
  slot: "value",
});

export const StatDescription = withContext(ark.p, {
  name: "Description",
  slot: "description",
});

export function StatTrend({
  trend = "neutral",
  recipe = statTrendRecipe,
  className,
  ...rest
}: ComponentProps<typeof ark.div> & BaseStatTrendProps) {
  return (
    <ark.div
      {...rest}
      className={recipe({ className, trend })}
      data-part="trend"
      data-scope="stat"
      data-trend={trend}
    />
  );
}
// #endregion

// #region Types
export type StatRootProps = ComponentProps<typeof StatRoot>;
export type StatLabelProps = ComponentProps<typeof StatLabel>;
export type StatValueProps = ComponentProps<typeof StatValue>;
export type StatDescriptionProps = ComponentProps<typeof StatDescription>;
export type StatTrendProps = ComponentProps<typeof StatTrend>;

type StatClassNames = VariantClassNames<StatRecipeSlot>;

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
        <StatDescription
          {...descriptionProps}
          className={classNames?.description}
        >
          {description}
        </StatDescription>
      )}

      {trend !== undefined && <StatTrend {...trendProps}>{trend}</StatTrend>}
    </StatRoot>
  );
}

StatShorthand.displayName = "Stat";
StatTrend.displayName = "Stat.Trend";
// #endregion

export const Stat = Object.assign(StatShorthand, {
  Description: StatDescription,
  Label: StatLabel,
  Root: StatRoot,
  Trend: StatTrend,
  Value: StatValue,
});
