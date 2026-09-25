import { ark } from "@ark-ui/solid/factory";
import {
  type StatRecipeSlot,
  type StatTrendVariantProps,
  type StatVariantProps,
  statRecipe,
  statTrendRecipe,
} from "@pisagor/recipes/stat";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import type { VariantClassNames } from "../../internal/types";
import { StatContext, useStat } from "./stat.context";

type StatLabelProps = ComponentProps<typeof ark.div>;
type StatValueProps = ComponentProps<typeof ark.div>;
type StatDescriptionProps = ComponentProps<typeof ark.p>;

type StatTrendProps = ComponentProps<typeof ark.div> &
  StatTrendVariantProps & {
    recipe?: typeof statTrendRecipe;
  };

type StatClassNames = VariantClassNames<StatRecipeSlot>;

type StatRootProps = ComponentProps<typeof ark.div> &
  StatVariantProps & {
    recipe?: typeof statRecipe;
  };

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

export function StatRoot(props: StatRootProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "recipe", "class"]);
  const slots = () => (local.recipe ?? statRecipe)();

  return (
    <StatContext value={{ slots: slots() }}>
      <ark.div
        {...rest}
        class={slots().base({ class: cn(local.class), variant: local.variant })}
        data-part="root"
        data-scope="stat"
        data-variant={local.variant}
      >
        {local.children}
      </ark.div>
    </StatContext>
  );
}

export function StatLabel(props: StatLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useStat();

  return (
    <ark.div
      {...rest}
      class={slots.label({ class: cn(local.class) })}
      data-part="label"
      data-scope="stat"
    />
  );
}

export function StatValue(props: StatValueProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useStat();

  return (
    <ark.div
      {...rest}
      class={slots.value({ class: cn(local.class) })}
      data-part="value"
      data-scope="stat"
    />
  );
}

export function StatDescription(props: StatDescriptionProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useStat();

  return (
    <ark.p
      {...rest}
      class={slots.description({ class: cn(local.class) })}
      data-part="description"
      data-scope="stat"
    />
  );
}

export function StatTrend(props: StatTrendProps): JSX.Element {
  const [local, rest] = splitProps(props, ["trend", "recipe", "class"]);

  return (
    <ark.div
      {...rest}
      class={(local.recipe ?? statTrendRecipe)({
        class: cn(local.class),
        trend: local.trend ?? "neutral",
      })}
      data-part="trend"
      data-scope="stat"
      data-trend={local.trend ?? "neutral"}
    />
  );
}

export function StatShorthand(props: StatProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "value",
    "description",
    "descriptionProps",
    "label",
    "labelProps",
    "trend",
    "trendProps",
    "valueProps",
    "class",
    "classNames",
  ]);

  return (
    <StatRoot {...rest} class={local.class} variant={local.variant}>
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
        <StatDescription {...local.descriptionProps} class={local.classNames?.description}>
          {local.description}
        </StatDescription>
      </Show>
      <Show when={local.trend !== undefined}>
        <StatTrend {...local.trendProps}>{local.trend}</StatTrend>
      </Show>
    </StatRoot>
  );
}
