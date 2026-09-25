import {
  type RatingGroupControlProps,
  type RatingGroupItemProps,
  RatingGroup as RatingGroupPrimitive,
  type RatingGroupRootProps,
} from "@ark-ui/solid/rating-group";
import { type RatingRecipeSlot, ratingRecipe } from "@pisagor/recipes/rating";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { StarIcon } from "../../internal/icons";
import type { VariantClassNames } from "../../internal/types";
import { RatingContext, useRating } from "./rating.context";

type FormControlVariant = "primary" | "secondary";
type RatingControlProps = RatingGroupControlProps;
type RatingItemProps = RatingGroupItemProps;
type RatingIndicatorProps = ComponentProps<"span">;
type RatingClassNames = VariantClassNames<RatingRecipeSlot>;

type RatingRootProps = RatingGroupRootProps & {
  variant?: FormControlVariant;
  recipe?: typeof ratingRecipe;
};

export interface RatingProps extends Omit<RatingRootProps, "children" | "onValueChange"> {
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
    "children",
    "recipe",
    "class",
  ]);
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
  const slots = () => (local.recipe ?? ratingRecipe)();
  const surfaceTone = () => (variant() === "secondary" ? "opacity-90" : undefined);

  return (
    <RatingContext value={{ slots: slots() }}>
      <RatingGroupPrimitive.Root
        {...rest}
        allowHalf={local.allowHalf ?? false}
        class={slots().base({ class: cn(surfaceTone(), local.class) })}
        count={local.count ?? 5}
        data-variant={variant()}
      >
        {local.children}
      </RatingGroupPrimitive.Root>
    </RatingContext>
  );
}

function RatingControl(props: RatingControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useRating();
  return (
    <RatingGroupPrimitive.Control {...rest} class={slots.control({ class: cn(local.class) })}>
      {local.children}
    </RatingGroupPrimitive.Control>
  );
}

function RatingItem(props: RatingItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useRating();
  return <RatingGroupPrimitive.Item {...rest} class={slots.item({ class: cn(local.class) })} />;
}

function RatingIndicator(props: RatingIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useRating();
  return (
    <span
      {...rest}
      class={slots.indicator({ class: cn(local.class) })}
      data-part="item-indicator"
      data-scope="rating"
    >
      {local.children}
    </span>
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
        local.onValueChange ? (details) => local.onValueChange?.(details.value) : undefined
      }
      variant={local.variant}
    >
      <RatingControl {...local.controlProps} class={local.classNames?.control}>
        <RatingGroupPrimitive.Context>
          {(api) => (
            <For each={api().items}>
              {(item) => (
                <RatingItem {...local.itemProps} class={local.classNames?.item} index={item}>
                  <RatingGroupPrimitive.ItemContext>
                    {(itemApi) => {
                      const state = () => itemApi();
                      return (
                        <RatingIndicator
                          {...local.indicatorProps}
                          class={local.classNames?.indicator}
                          data-half={state().half ? "" : undefined}
                          data-highlighted={state().highlighted ? "" : undefined}
                        >
                          <Show keyed when={icon()}>
                            {(node) => (
                              <>
                                <span data-bg="">{node}</span>
                                <span data-fg="" style={{ color: "currentColor" }}>
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
