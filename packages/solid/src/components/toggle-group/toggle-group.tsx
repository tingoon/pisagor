import {
  type ToggleGroupItemProps,
  ToggleGroup as ToggleGroupPrimitive,
  type ToggleGroupRootProps as ToggleGroupPrimitiveRootProps,
} from "@ark-ui/solid/toggle-group";
import { toggleGroupRecipe } from "@pisagor/recipes/toggle-group";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { For, splitProps } from "solid-js";
import { Toggle } from "../toggle";
import {
  ToggleGroupContext,
  type ToggleGroupContextProps,
  useToggleGroup,
} from "./toggle-group.context";

interface ToggleGroupPresetItem {
  value: string;
  children: JSX.Element;
  disabled?: boolean;
}

export interface ToggleGroupRootProps
  extends Omit<ToggleGroupPrimitiveRootProps, "onValueChange">,
    Omit<ToggleGroupContextProps, "slots"> {
  onValueChange?: (value: string[]) => void;
  recipe?: typeof toggleGroupRecipe;
}

export interface ToggleGroupProps
  extends Omit<ToggleGroupRootProps, "children"> {
  items?: ToggleGroupPresetItem[];
}

export function ToggleGroupRoot(props: ToggleGroupRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "size",
    "variant",
    "multiple",
    "children",
    "spacing",
    "onValueChange",
    "recipe",
    "class",
    "style",
  ]);
  const orientation = () => local.orientation ?? "horizontal";
  const size = () => local.size ?? "md";
  const variant = () => local.variant ?? "ghost";
  const multiple = () => local.multiple ?? true;
  const spacing = () => local.spacing ?? 0;
  const slots = () =>
    (local.recipe ?? toggleGroupRecipe)({ orientation: orientation() });

  return (
    <ToggleGroupContext
      value={{
        size: size(),
        slots: slots(),
        spacing: spacing(),
        variant: variant(),
      }}
    >
      <ToggleGroupPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        multiple={multiple()}
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
      >
        {local.children}
      </ToggleGroupPrimitive.Root>
    </ToggleGroupContext>
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
            class: ctx.slots.item({ class: cn(local.class) }),
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
