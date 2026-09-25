import type {
  SegmentGroupIndicatorProps,
  SegmentGroupItemTextProps,
  SegmentGroupItemProps as SegmentGroupPrimitiveItemProps,
  SegmentGroupRootProps as SegmentGroupPrimitiveRootProps,
} from "@ark-ui/solid/segment-group";
import { SegmentGroup as SegmentGroupPrimitive } from "@ark-ui/solid/segment-group";
import { segmentGroupRecipe } from "@pisagor/recipes/segment-group";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { SegmentGroupContext, useSegmentGroup } from "./segment-group.context";

type SegmentGroupVariant = "default" | "underline";

interface SegmentGroupPresetItem {
  value: string;
  label: JSX.Element;
  disabled?: boolean;
}

export interface SegmentGroupRootProps
  extends Omit<SegmentGroupPrimitiveRootProps, "onValueChange"> {
  variant?: SegmentGroupVariant;
  onValueChange?: (value: string | null) => void;
  recipe?: typeof segmentGroupRecipe;
}

export interface SegmentGroupProps extends Omit<SegmentGroupRootProps, "children"> {
  items?: SegmentGroupPresetItem[];
}

export interface SegmentGroupItemProps extends SegmentGroupPrimitiveItemProps {
  text?: JSX.Element;
}

export function SegmentGroupRoot(props: SegmentGroupRootProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "orientation",
    "variant",
    "children",
    "onValueChange",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? segmentGroupRecipe)();

  return (
    <SegmentGroupContext value={{ slots: slots() }}>
      <SegmentGroupPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        data-variant={local.variant ?? "default"}
        onValueChange={
          local.onValueChange ? (details) => local.onValueChange?.(details.value) : undefined
        }
        orientation={local.orientation ?? "horizontal"}
      >
        <SegmentGroupIndicator />
        {local.children}
      </SegmentGroupPrimitive.Root>
    </SegmentGroupContext>
  );
}

export function SegmentGroupItem(props: SegmentGroupItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "text", "class"]);
  const { slots } = useSegmentGroup();
  const content = () => local.children ?? local.text;

  return (
    <SegmentGroupPrimitive.Item {...rest} class={slots.item({ class: local.class })}>
      <Show when={content() != null}>
        <SegmentGroupItemText>{content()}</SegmentGroupItemText>
      </Show>
      <SegmentGroupPrimitive.ItemControl />
      <SegmentGroupPrimitive.ItemHiddenInput />
    </SegmentGroupPrimitive.Item>
  );
}

function SegmentGroupItemText(props: SegmentGroupItemTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSegmentGroup();
  return (
    <SegmentGroupPrimitive.ItemText {...rest} class={slots.itemText({ class: local.class })} />
  );
}

export function SegmentGroupIndicator(props: SegmentGroupIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useSegmentGroup();
  return (
    <SegmentGroupPrimitive.Indicator {...rest} class={slots.indicator({ class: local.class })} />
  );
}

export function SegmentGroupShorthand(props: SegmentGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["items"]);
  return (
    <SegmentGroupRoot {...rest}>
      <For each={local.items ?? []}>
        {(item) => (
          <SegmentGroupItem disabled={item.disabled} text={item.label} value={item.value} />
        )}
      </For>
    </SegmentGroupRoot>
  );
}
