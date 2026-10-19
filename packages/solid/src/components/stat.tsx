import type {
  StatContract,
  StatRootContract,
  StatTrendRootContract,
} from "@pisagor/contracts";
import { statRecipe, statTrendRecipe } from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  MinusIcon,
  createSlotRecipeContext,
} from "../internal";
import { type MessageKey, useLocale } from "./provider/context";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Stat",
  recipe: statRecipe,
});
// #endregion

// #region Types
export type StatRootProps = ComponentProps<"div"> & StatRootContract;
export type StatLabelProps = ComponentProps<"div">;
export type StatValueProps = ComponentProps<"div">;
export type StatDescriptionProps = ComponentProps<"p">;
export type StatTrendProps = ComponentProps<"div"> &
  StatTrendRootContract & {
    icon?: JSX.Element;
  };

export interface StatProps
  extends Omit<StatRootProps, "children">, StatContract {
  description?: JSX.Element;
  label?: JSX.Element;
  trend?: JSX.Element;
  value?: JSX.Element;
  descriptionProps?: Omit<StatDescriptionProps, "children" | "class">;
  labelProps?: Omit<StatLabelProps, "children" | "class">;
  trendProps?: Omit<StatTrendProps, "children" | "class">;
  valueProps?: Omit<StatValueProps, "children" | "class">;
}
// #endregion

// #region Parts
export const StatRoot: Component<StatRootProps> = withProvider<
  ComponentProps<"div"> & StatRootContract
>("div", { name: "Root" });

export const StatLabel = withContext<ComponentProps<"div">>("div", {
  name: "Label",
});

export const StatValue = withContext<ComponentProps<"div">>("div", {
  name: "Value",
});

export const StatDescription = withContext<ComponentProps<"p">>("p", {
  name: "Description",
});

/** Leaf with its own recipe (`trend` variant stays on the part). */
export function StatTrend(props: StatTrendProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, [
    "trend",
    "recipe",
    "class",
    "icon",
    "children",
  ]);
  const trend = () => local.trend ?? "neutral";

  return (
    <div
      {...rest}
      class={(local.recipe ?? statTrendRecipe)({
        class: local.class,
        trend: trend(),
      })}
      data-part="trend"
      data-scope="stat"
      data-trend={trend()}
    >
      {"icon" in local ? (
        local.icon
      ) : trend() === "up" ? (
        <ArrowUpIcon aria-hidden />
      ) : trend() === "down" ? (
        <ArrowDownIcon aria-hidden />
      ) : (
        <MinusIcon aria-hidden />
      )}
      <span class="sr-only">{m(`stat.trend.${trend()}` as MessageKey)}</span>
      {local.children}
    </div>
  );
}
// #endregion

// #region Shorthand
export function StatShorthand(props: StatProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "value",
    "description",
    "descriptionProps",
    "label",
    "labelProps",
    "trend",
    "trendProps",
    "valueProps",
    "classNames",
  ]);

  return (
    <StatRoot {...rest}>
      <Show when={local.label !== undefined}>
        <StatLabel {...local.labelProps} class={local.classNames?.label}>
          {local.label}
        </StatLabel>
      </Show>
      <Show when={local.value !== undefined}>
        <StatValue {...local.valueProps} class={local.classNames?.value}>
          {local.value}
        </StatValue>
      </Show>
      <Show when={local.description !== undefined}>
        <StatDescription
          {...local.descriptionProps}
          class={local.classNames?.description}
        >
          {local.description}
        </StatDescription>
      </Show>
      <Show when={local.trend !== undefined}>
        <StatTrend {...local.trendProps}>{local.trend}</StatTrend>
      </Show>
    </StatRoot>
  );
}
// #endregion

export const Stat = Object.assign(StatShorthand, {
  Description: StatDescription,
  Label: StatLabel,
  Root: StatRoot,
  Trend: StatTrend,
  Value: StatValue,
});
