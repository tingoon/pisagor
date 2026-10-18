import { RatingGroup as RatingGroupPrimitive } from "@ark-ui/solid";
import type {
  RatingGroupControlProps,
  RatingGroupItemProps,
  RatingGroupRootProps,
} from "@ark-ui/solid";
import type { RatingProps as BaseRatingProps } from "@pisagor/props";
import { type RatingRecipeSlot, ratingRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, For, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import {
  StarIcon,
  type VariantClassNames,
  createSlotRecipeContext,
} from "../internal";

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

type FormControlVariant = "primary" | "secondary";
type RatingControlProps = RatingGroupControlProps;
type RatingItemProps = RatingGroupItemProps;
type RatingIndicatorProps = ComponentProps<"span">;
type RatingClassNames = VariantClassNames<RatingRecipeSlot>;
type RatingIconProps = {
  "data-bg"?: string;
  "data-fg"?: string;
  weight?: "fill" | "regular";
};

type RatingRootProps = RatingGroupRootProps &
  BaseRatingProps & {
    variant?: FormControlVariant;
  };

export interface RatingProps extends Omit<
  RatingRootProps,
  "children" | "onValueChange"
> {
  defaultValue?: number;
  value?: number;
  /**
   * Icon component for each rating item.
   *
   * @defaultValue StarIcon
   */
  icon?: Component<RatingIconProps>;
  onValueChange?: (value: number) => void;
  classNames?: RatingClassNames;
  controlProps?: Omit<RatingControlProps, "children" | "class">;
  indicatorProps?: Omit<RatingIndicatorProps, "children" | "class">;
  itemProps?: Omit<RatingItemProps, "children" | "index" | "class">;
}

function RatingRoot(props: RatingRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "allowHalf",
    "count",
    "recipe",
    "size",
    "class",
  ]);
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const slots = createMemo(() =>
    (local.recipe ?? ratingRecipe)({ size: local.size ?? "md" }),
  );
  const surfaceTone = () =>
    variant() === "secondary" ? "opacity-90" : undefined;

  return (
    <RatingStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <RatingGroupPrimitive.Root
        {...rest}
        allowHalf={local.allowHalf ?? false}
        class={slots().base({ class: cn(surfaceTone(), local.class) })}
        count={local.count ?? 5}
        data-variant={variant()}
      />
    </RatingStylesContext>
  );
}

const RatingControl: Component<RatingControlProps> = withContext(
  RatingGroupPrimitive.Control,
  { name: "Control" },
);

const RatingItem: Component<RatingItemProps> = withContext(
  RatingGroupPrimitive.Item,
  { name: "Item" },
);

function RatingIndicator(props: RatingIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useStyles();

  return (
    <span
      {...rest}
      class={styles.slots.indicator({ class: local.class })}
      data-part="item-indicator"
      data-scope="rating"
    />
  );
}

function RatingShorthand(props: RatingProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "variant",
    "controlProps",
    "icon",
    "indicatorProps",
    "itemProps",
    "onValueChange",
    "class",
    "classNames",
  ]);
  const Icon = () => local.icon ?? StarIcon;

  return (
    <RatingRoot
      {...rest}
      class={local.class}
      onValueChange={
        local.onValueChange
          ? (details) => local.onValueChange?.(details.value)
          : undefined
      }
      variant={local.variant}
    >
      <RatingControl {...local.controlProps} class={local.classNames?.control}>
        <RatingGroupPrimitive.Context>
          {(api) => (
            <For each={api().items}>
              {(item) => (
                <RatingItem
                  {...local.itemProps}
                  class={local.classNames?.item}
                  index={item}
                >
                  <RatingGroupPrimitive.ItemContext>
                    {(itemApi) => {
                      const state = () => itemApi();

                      return (
                        <RatingIndicator
                          {...local.indicatorProps}
                          class={local.classNames?.indicator}
                          data-half={state().half ? "" : undefined}
                          data-highlighted={
                            state().highlighted ? "" : undefined
                          }
                        >
                          <Dynamic component={Icon()} data-bg="" />
                          <Dynamic
                            component={Icon()}
                            data-fg=""
                            weight="fill"
                          />
                        </RatingIndicator>
                      );
                    }}
                  </RatingGroupPrimitive.ItemContext>
                </RatingItem>
              )}
            </For>
          )}
        </RatingGroupPrimitive.Context>
        <RatingGroupPrimitive.HiddenInput />
      </RatingControl>
    </RatingRoot>
  );
}

export const Rating = Object.assign(RatingShorthand, {
  Context: RatingGroupPrimitive.Context,
  Control: RatingControl,
  HiddenInput: RatingGroupPrimitive.HiddenInput,
  Indicator: RatingIndicator,
  Item: RatingItem,
  ItemContext: RatingGroupPrimitive.ItemContext,
  Root: RatingRoot,
});
