import {
  ToggleGroup as ToggleGroupPrimitive,
  type ToggleGroupItemProps,
  type ToggleGroupRootProps as ToggleGroupRootPrimitiveProps,
} from "@ark-ui/solid";
import type {
  ToggleGroupPresetItem as BaseToggleGroupPresetItem,
  ToggleGroupRootContract,
  ToggleGroupContract,
} from "@pisagor/contracts";
import {
  buttonRecipe,
  toggleGroupRecipe,
  toggleRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { createMemo, For, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";
import { createContext } from "../utils";
import type { ToggleProps } from "./toggle";

// #region Context
const { Context: ToggleGroupStylesContext, useStyles } =
  createSlotRecipeContext({
    name: "ToggleGroup",
    recipe: toggleGroupRecipe,
  });

export interface ToggleGroupItemOptions extends Pick<
  ToggleProps,
  "variant" | "size"
> {
  /**
   * Gap between items.
   *
   * @defaultValue 0
   */
  spacing?: number;
}

const { ToggleGroupItemOptionsContext, useToggleGroupItemOptions } =
  createContext("ToggleGroupItemOptions")<ToggleGroupItemOptions>();

function useToggleGroup() {
  const styles = useStyles();
  const options = useToggleGroupItemOptions();

  return {
    get size() {
      return options.size;
    },
    get slots() {
      return styles.slots;
    },
    get spacing() {
      return options.spacing;
    },
    get variant() {
      return options.variant;
    },
  };
}
// #endregion

// #region Types
interface ToggleGroupPresetItem extends Omit<
  BaseToggleGroupPresetItem,
  "content"
> {
  content: JSX.Element;
}

export interface ToggleGroupRootProps
  extends
    Omit<ToggleGroupRootPrimitiveProps, "onValueChange">,
    ToggleGroupItemOptions,
    Omit<ToggleGroupRootContract, "items"> {
  onValueChange?: (value: string[]) => void;
}

export interface ToggleGroupProps
  extends
    Omit<ToggleGroupRootProps, "children" | "recipe">,
    ToggleGroupRootContract,
    ToggleGroupContract {
  items?: ToggleGroupPresetItem[];
}
// #endregion

// #region Parts
export function ToggleGroupRoot(props: ToggleGroupRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "spacing",
    "onValueChange",
    "style",
    "orientation",
    "multiple",
    "recipe",
    "class",
  ]);
  const spacing = () => local.spacing ?? 0;
  const orientation = () => local.orientation ?? "horizontal";
  const slots = createMemo(() =>
    (local.recipe ?? toggleGroupRecipe)({ orientation: orientation() }),
  );

  return (
    <ToggleGroupStylesContext
      value={{
        get slots() {
          return slots();
        },
        get variants() {
          return { orientation: orientation() };
        },
      }}
    >
      <ToggleGroupItemOptionsContext
        value={{
          get size() {
            return local.size ?? "md";
          },
          get spacing() {
            return spacing();
          },
          get variant() {
            return local.variant ?? "ghost";
          },
        }}
      >
        <ToggleGroupPrimitive.Root
          {...rest}
          class={slots().base({ class: local.class })}
          multiple={local.multiple ?? true}
          onValueChange={
            local.onValueChange
              ? (details) => local.onValueChange?.(details.value)
              : undefined
          }
          orientation={orientation()}
          style={{
            ...(typeof local.style === "object" && local.style !== null
              ? local.style
              : {}),
            "--gap": spacing(),
          }}
        />
      </ToggleGroupItemOptionsContext>
    </ToggleGroupStylesContext>
  );
}

/** Item; styled like `Toggle` from the group's `variant` / `size`. */
export function ToggleGroupItem(props: ToggleGroupItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const ctx = useToggleGroup();

  return (
    <ToggleGroupPrimitive.Item
      {...rest}
      class={cn(
        buttonRecipe({ clickEffect: false, variant: ctx.variant }).base(),
        toggleRecipe({ size: ctx.size }),
        ctx.slots.item({ class: local.class }),
      )}
      data-spacing={ctx.spacing}
      data-variant={ctx.variant}
    />
  );
}
// #endregion

// #region Shorthand
export function ToggleGroupShorthand(props: ToggleGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "classNames", "items"]);

  return (
    <ToggleGroupRoot {...rest} class={cn(local.classNames?.base, local.class)}>
      <For each={local.items}>
        {(item) => (
          <ToggleGroupItem
            class={local.classNames?.item}
            disabled={item.disabled}
            value={item.value}
          >
            {item.content}
          </ToggleGroupItem>
        )}
      </For>
    </ToggleGroupRoot>
  );
}
// #endregion

export type { ToggleGroupItemProps } from "@ark-ui/solid";

export const ToggleGroup = Object.assign(ToggleGroupShorthand, {
  Item: ToggleGroupItem,
  Root: ToggleGroupRoot,
});
