import {
  type CollectionItem,
  createListCollection,
} from "@ark-ui/solid/collection";
import type {
  ComboboxClearTriggerProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxItemGroupLabelProps,
  ComboboxListProps,
  ComboboxPositionerProps,
  ComboboxContentProps as ComboboxPrimitiveContentProps,
  ComboboxInputProps as ComboboxPrimitiveInputProps,
  ComboboxItemGroupProps as ComboboxPrimitiveItemGroupProps,
  ComboboxItemProps as ComboboxPrimitiveItemProps,
  ComboboxRootProps as ComboboxPrimitiveRootProps,
  ComboboxTriggerProps,
} from "@ark-ui/solid/combobox";
import {
  Combobox as ComboboxPrimitive,
  useComboboxContext,
} from "@ark-ui/solid/combobox";
import {
  type ComboboxVariantProps,
  comboboxRecipe,
} from "@pisagor/recipes/combobox";
import type { InputRootVariantProps } from "@pisagor/recipes/input";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { CaretUpDownIcon, CheckIcon, XIcon } from "../../internal/icons";
import { Button } from "../button";
import { InputGroup } from "../input-group";
import { ComboboxRootContext, useComboboxRoot } from "./combobox.context";

type FormControlVariant = "primary" | "secondary";

interface ComboboxPresetItem {
  label: string;
  value: string;
}

export type ComboboxRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ComboboxPrimitiveRootProps<T>,
  "onValueChange"
> & {
  variant?: FormControlVariant;
  onValueChange?: (value: string[]) => void;
  recipe?: typeof comboboxRecipe;
};

export interface ComboboxProps
  extends Omit<ComboboxRootProps, "children" | "collection"> {
  clearable?: boolean;
  items?: Array<ComboboxPresetItem | string>;
}

export interface ComboboxInputProps
  extends Omit<ComboboxPrimitiveInputProps, "size">,
    InputRootVariantProps {
  clearable?: boolean;
  disabled?: boolean;
  showTrigger?: boolean;
}

export interface ComboboxItemGroupProps
  extends ComboboxPrimitiveItemGroupProps {
  heading?: string | JSX.Element;
}

export interface ComboboxItemProps
  extends ComboboxPrimitiveItemProps,
    ComboboxVariantProps {}

export type ComboboxFieldInputProps = ComboboxPrimitiveInputProps;

export interface ComboboxContentProps extends ComboboxPrimitiveContentProps {
  portalled?: boolean;
}

export function ComboboxRoot<T extends CollectionItem = CollectionItem>(
  props: ComboboxRootProps<T>,
): JSX.Element {
  const [local, rest] = splitProps(props as ComboboxRootProps, [
    "openOnClick",
    "children",
    "onValueChange",
    "variant",
    "recipe",
  ]);
  const slots = () => (local.recipe ?? comboboxRecipe)();

  return (
    <ComboboxRootContext value={{ slots: slots() }}>
      <ComboboxPrimitive.Root
        {...rest}
        onValueChange={
          local.onValueChange
            ? (details) => local.onValueChange?.(details.value)
            : undefined
        }
        openOnClick={local.openOnClick ?? true}
      >
        {local.children}
      </ComboboxPrimitive.Root>
    </ComboboxRootContext>
  );
}

export const ComboboxContext = ComboboxPrimitive.Context;

export function ComboboxControl(props: ComboboxControlProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const root = useComboboxRoot();
  const slots = () => root?.slots ?? comboboxRecipe();
  return (
    <ComboboxPrimitive.Control
      {...rest}
      class={slots().control({ class: local.class })}
    />
  );
}

export function ComboboxInput(props: ComboboxInputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "clearable",
    "showTrigger",
    "children",
    "class",
  ]);
  const combobox = useComboboxContext();
  const root = useComboboxRoot();
  const slots = () => root?.slots ?? comboboxRecipe();
  const size = () => local.size ?? "md";
  const clearable = () => local.clearable ?? false;
  const showTrigger = () => local.showTrigger ?? true;

  return (
    <ComboboxControl data-size={size()}>
      <InputGroup class={cn(local.class)} size={size()} variant={local.variant}>
        {local.children}
        <ComboboxPrimitive.Input
          asChild={(inputProps) => (
            <InputGroup.Input {...inputProps()} {...rest} />
          )}
        />
        <InputGroup.Addon align="inline-end">
          <Show when={showTrigger()}>
            <ComboboxPrimitive.Trigger
              asChild={(triggerProps) => (
                <InputGroup.Button
                  {...triggerProps({ class: slots().triggerHidden() })}
                  size="icon-xs"
                  variant="ghost"
                >
                  <CaretUpDownIcon aria-hidden />
                </InputGroup.Button>
              )}
            />
          </Show>
          <Show when={clearable() && !!combobox().inputValue}>
            <ComboboxClearTrigger
              asChild={(triggerProps) => (
                <InputGroup.Button
                  {...triggerProps()}
                  aria-label="Clear"
                  size="icon-xs"
                  variant="ghost"
                >
                  <XIcon aria-hidden />
                </InputGroup.Button>
              )}
            />
          </Show>
        </InputGroup.Addon>
      </InputGroup>
    </ComboboxControl>
  );
}

export function ComboboxTrigger(props: ComboboxTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class", "asChild"]);
  const root = useComboboxRoot();
  const slots = () => root?.slots ?? comboboxRecipe();

  if (local.asChild) {
    return (
      <ComboboxPrimitive.Trigger
        {...rest}
        asChild={local.asChild}
        class={slots().trigger({ class: local.class })}
      />
    );
  }

  return (
    <ComboboxPrimitive.Trigger
      {...rest}
      asChild={(triggerProps) => (
        <Button
          {...triggerProps({ class: cn(slots().trigger(), local.class) })}
          aria-label="Toggle"
          class={slots().triggerButton()}
          variant="ghost"
        >
          {local.children ?? <CaretUpDownIcon aria-hidden />}
        </Button>
      )}
    />
  );
}

export function ComboboxClearTrigger(
  props: ComboboxClearTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["aria-label"]);
  return (
    <ComboboxPrimitive.ClearTrigger
      {...rest}
      aria-label={local["aria-label"] ?? "Clear selected value(s)"}
    />
  );
}

export function ComboboxFieldInput(
  props: ComboboxFieldInputProps,
): JSX.Element {
  return <ComboboxPrimitive.Input {...props} />;
}

export function ComboboxPositioner(
  props: ComboboxPositionerProps,
): JSX.Element {
  return <ComboboxPrimitive.Positioner {...props} />;
}

export function ComboboxContent(props: ComboboxContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["portalled", "children", "class"]);
  const root = useComboboxRoot();
  const slots = () => root?.slots ?? comboboxRecipe();
  const portalled = () => local.portalled ?? true;

  const content = (
    <ComboboxPrimitive.Content
      {...rest}
      class={slots().content({ class: local.class })}
    >
      {local.children}
    </ComboboxPrimitive.Content>
  );

  return (
    <Show fallback={content} when={portalled()}>
      <Portal>
        <ComboboxPositioner>{content}</ComboboxPositioner>
      </Portal>
    </Show>
  );
}

export function ComboboxItemGroup(props: ComboboxItemGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "heading"]);
  return (
    <ComboboxPrimitive.ItemGroup {...rest}>
      <Show when={!!local.heading}>
        <ComboboxItemGroupLabel>{local.heading}</ComboboxItemGroupLabel>
      </Show>
      {local.children}
    </ComboboxPrimitive.ItemGroup>
  );
}

export function ComboboxItemGroupLabel(
  props: ComboboxItemGroupLabelProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const root = useComboboxRoot();
  const slots = () => root?.slots ?? comboboxRecipe();
  return (
    <ComboboxPrimitive.ItemGroupLabel
      {...rest}
      class={slots().itemGroupLabel({ class: local.class })}
    />
  );
}

export function ComboboxItem(props: ComboboxItemProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "showIndicator",
    "children",
    "class",
  ]);
  const root = useComboboxRoot();
  const slots = () => root?.slots ?? comboboxRecipe();
  const showIndicator = () => local.showIndicator ?? true;

  return (
    <ComboboxPrimitive.Item
      {...rest}
      class={slots().item({
        class: local.class,
        showIndicator: showIndicator(),
      })}
      persistFocus
    >
      {local.children}
      <Show when={showIndicator()}>
        <span class={slots().itemIndicator()}>
          <ComboboxPrimitive.ItemIndicator>
            <CheckIcon />
          </ComboboxPrimitive.ItemIndicator>
        </span>
      </Show>
    </ComboboxPrimitive.Item>
  );
}

export function ComboboxEmpty(props: ComboboxEmptyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const root = useComboboxRoot();
  const slots = () => root?.slots ?? comboboxRecipe();
  return (
    <ComboboxPrimitive.Empty
      {...rest}
      class={slots().empty({ class: local.class })}
    >
      {local.children || "No results found. Try a different search."}
    </ComboboxPrimitive.Empty>
  );
}

export function ComboboxList(props: ComboboxListProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const root = useComboboxRoot();
  const slots = () => root?.slots ?? comboboxRecipe();
  return (
    <ComboboxPrimitive.List
      {...rest}
      class={slots().list({ class: local.class })}
    />
  );
}

export function ComboboxShorthand(props: ComboboxProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "items", "id"]);
  const normalized = createMemo(() =>
    (local.items ?? []).map((item) =>
      typeof item === "string" ? { label: item, value: item } : item,
    ),
  );
  const collection = createMemo(() =>
    createListCollection({ items: normalized() }),
  );

  return (
    <ComboboxRoot {...rest} collection={collection()}>
      <ComboboxInput clearable={local.clearable ?? false} id={local.id} />
      <ComboboxContent>
        <ComboboxList>
          <For each={normalized()}>
            {(item) => <ComboboxItem item={item}>{item.label}</ComboboxItem>}
          </For>
        </ComboboxList>
      </ComboboxContent>
    </ComboboxRoot>
  );
}
