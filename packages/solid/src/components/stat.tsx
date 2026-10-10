import { ark } from "@ark-ui/solid/factory";
import type {
  StatProps as BaseStatRootProps,
  StatTrendProps as BaseStatTrendProps,
} from "@pisagor/props";
import {
  type StatRecipeSlot,
  statRecipe,
  statTrendRecipe,
} from "@pisagor/recipes";
import type { Component, ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Stat",
  recipe: statRecipe,
});
// #endregion

// #region Types
export type StatRootProps = ComponentProps<typeof ark.div> & BaseStatRootProps;
export type StatLabelProps = ComponentProps<typeof ark.div>;
export type StatValueProps = ComponentProps<typeof ark.div>;
export type StatDescriptionProps = ComponentProps<typeof ark.p>;
export type StatTrendProps = ComponentProps<typeof ark.div> &
  BaseStatTrendProps;

type StatClassNames = VariantClassNames<StatRecipeSlot>;

export interface StatProps extends Omit<StatRootProps, "children"> {
  description?: JSX.Element;
  label?: JSX.Element;
  trend?: JSX.Element;
  value?: JSX.Element;
  classNames?: StatClassNames;
  descriptionProps?: Omit<StatDescriptionProps, "children" | "class">;
  labelProps?: Omit<StatLabelProps, "children" | "class">;
  trendProps?: Omit<StatTrendProps, "children" | "class">;
  valueProps?: Omit<StatValueProps, "children" | "class">;
}
// #endregion

// #region Parts
export const StatRoot: Component<StatRootProps> = withProvider(ark.div, {
  name: "Root",
  slot: "base",
});

export const StatLabel = withContext(ark.div, { name: "Label" });

export const StatValue = withContext(ark.div, { name: "Value" });

export const StatDescription = withContext(ark.p, { name: "Description" });

/** Leaf with its own recipe (`trend` variant stays on the part). */
export function StatTrend(props: StatTrendProps): JSX.Element {
  const [local, rest] = splitProps(props, ["trend", "recipe", "class"]);
  const trend = () => local.trend ?? "neutral";

  return (
    <ark.div
      {...rest}
      class={(local.recipe ?? statTrendRecipe)({
        class: local.class,
        trend: trend(),
      })}
      data-part="trend"
      data-scope="stat"
      data-trend={trend()}
    />
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
