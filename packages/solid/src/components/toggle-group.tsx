import {
  type ToggleGroupItemProps,
  ToggleGroup as ToggleGroupPrimitive,
  type ToggleGroupRootProps as ToggleGroupPrimitiveRootProps,
} from "@ark-ui/solid/toggle-group";
import type { ToggleGroupProps as BaseToggleGroupRootProps } from "@pisagor/props";
import { toggleGroupRecipe } from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { createMemo, For, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { createContext } from "../utils";
import { Toggle, type ToggleProps } from "./toggle";

// #region Context
const { Context: ToggleGroupStylesContext, useStyles: useToggleGroupStyles } =
  createSlotRecipeContext({
    name: "ToggleGroup",
    recipe: toggleGroupRecipe,
  });

export interface ToggleGroupItemOptions
  extends Pick<ToggleProps, "variant" | "size"> {
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
  const styles = useToggleGroupStyles();
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

interface ToggleGroupPresetItem {
  value: string;
  children: JSX.Element;
  disabled?: boolean;
}

export interface ToggleGroupRootProps
  extends Omit<ToggleGroupPrimitiveRootProps, "onValueChange">,
    ToggleGroupItemOptions,
    BaseToggleGroupRootProps {
  onValueChange?: (value: string[]) => void;
}

export interface ToggleGroupProps
  extends Omit<ToggleGroupRootProps, "children"> {
  items?: ToggleGroupPresetItem[];
}

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

export function ToggleGroupItem(props: ToggleGroupItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["value", "class"]);
  const ctx = useToggleGroup();

  return (
    <ToggleGroupPrimitive.Item
      asChild={(itemProps) => (
        <Toggle
          {...itemProps({
            class: ctx.slots.item({ class: local.class }),
          })}
          {...rest}
          data-spacing={ctx.spacing}
          data-variant={ctx.variant}
          size={ctx.size}
          variant={ctx.variant}
        />
      )}
      value={local.value}
    />
  );
}

export function ToggleGroupShorthand(props: ToggleGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["items"]);

  return (
    <ToggleGroupRoot {...rest}>
      <For each={local.items}>
        {(item) => (
          <ToggleGroupItem disabled={item.disabled} value={item.value}>
            {item.children}
          </ToggleGroupItem>
        )}
      </For>
    </ToggleGroupRoot>
  );
}

export type { ToggleGroupItemProps } from "@ark-ui/solid/toggle-group";

export const ToggleGroup = Object.assign(ToggleGroupShorthand, {
  Item: ToggleGroupItem,
  Root: ToggleGroupRoot,
});
