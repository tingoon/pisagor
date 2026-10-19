import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from "@phosphor-icons/react";
import type {
  StatContract,
  StatRootContract,
  StatTrendRootContract,
} from "@pisagor/contracts";
import { statRecipe, statTrendRecipe } from "@pisagor/recipes";
import type { ComponentProps, ComponentPropsWithRef, ReactNode } from "react";
import { createSlotRecipeContext } from "../internal";
import { useLocale, type MessageKey } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Stat",
  recipe: statRecipe,
});
// #endregion

// #region Parts
export const StatRoot = withProvider("div")<StatRootContract>({
  name: "Root",
  slot: "base",
});

export const StatLabel = withContext("div", {
  name: "Label",
  slot: "label",
});

export const StatValue = withContext("div", {
  name: "Value",
  slot: "value",
});

export const StatDescription = withContext("p", {
  name: "Description",
  slot: "description",
});

const TREND_ICONS = {
  down: <ArrowDownIcon aria-hidden />,
  neutral: <MinusIcon aria-hidden />,
  up: <ArrowUpIcon aria-hidden />,
};

export interface StatTrendOwnProps {
  icon?: ReactNode;
}

export function StatTrend({
  trend = "neutral",
  icon,
  recipe = statTrendRecipe,
  children,
  className,
  ...rest
}: ComponentPropsWithRef<"div"> & StatTrendRootContract & StatTrendOwnProps) {
  const { m } = useLocale();

  return (
    <div
      {...rest}
      className={recipe({ className, trend })}
      data-part="trend"
      data-scope="stat"
      data-trend={trend}
    >
      {icon === undefined ? TREND_ICONS[trend] : icon}
      <span className="sr-only">{m(`stat.trend.${trend}` as MessageKey)}</span>
      {children}
    </div>
  );
}
// #endregion

// #region Types
export type StatRootProps = ComponentProps<typeof StatRoot>;
export type StatLabelProps = ComponentProps<typeof StatLabel>;
export type StatValueProps = ComponentProps<typeof StatValue>;
export type StatDescriptionProps = ComponentProps<typeof StatDescription>;
export type StatTrendProps = ComponentProps<typeof StatTrend>;

export interface StatProps
  extends Omit<StatRootProps, "children">, StatContract {
  description?: ReactNode;
  label?: ReactNode;
  trend?: ReactNode;
  value?: ReactNode;
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
