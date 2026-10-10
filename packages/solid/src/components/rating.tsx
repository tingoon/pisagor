import {
  type RatingGroupControlProps,
  type RatingGroupItemProps,
  RatingGroup as RatingGroupPrimitive,
  type RatingGroupRootProps,
} from "@ark-ui/solid/rating-group";
import type { RatingProps as BaseRatingProps } from "@pisagor/props";
import { type RatingRecipeSlot, ratingRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { Component, ComponentProps, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { StarIcon } from "../internal/icons";
import type { VariantClassNames } from "../internal/types";

// #region Context
const {
  Context: RatingStylesContext,
  useStyles: useRating,
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

type RatingRootProps = RatingGroupRootProps &
  BaseRatingProps & {
    variant?: FormControlVariant;
  };

export interface RatingProps
  extends Omit<RatingRootProps, "children" | "onValueChange"> {
  defaultValue?: number;
  value?: number;
  icon?: JSX.Element;
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
    "class",
  ]);
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const slots = createMemo(() => (local.recipe ?? ratingRecipe)());
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
  const styles = useRating();

  return (
    <span
      {...rest}
      class={styles.slots.indicator({ class: local.class })}
      data-part="item-indicator"
      data-scope="rating"
    />
  );
}

export function Rating(props: RatingProps): JSX.Element {
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
  const icon = () => local.icon ?? <StarIcon />;

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
                          <Show keyed when={icon()}>
                            {(node) => (
                              <>
                                <span data-bg="">{node}</span>
                                <span
                                  data-fg=""
                                  style={{ color: "currentColor" }}
                                >
                                  {node}
                                </span>
                              </>
                            )}
                          </Show>
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
