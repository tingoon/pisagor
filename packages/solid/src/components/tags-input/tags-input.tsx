import type {
  TagsInputClearTriggerProps,
  TagsInputInputProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemTextProps,
  TagsInputControlProps as TagsInputPrimitiveControlProps,
  TagsInputItemProps as TagsInputPrimitiveItemProps,
  TagsInputRootProps as TagsInputPrimitiveRootProps,
  TagsInputRootProviderProps as TagsInputPrimitiveRootProviderProps,
} from "@ark-ui/solid/tags-input";
import {
  TagsInput as TagsInputPrimitive,
  useTagsInputContext,
} from "@ark-ui/solid/tags-input";
import {
  tagsInputItemRecipe,
  tagsInputRecipe,
} from "@pisagor/recipes/tags-input";
import type { ComponentProps, JSX } from "solid-js";
import { For, Show, splitProps } from "solid-js";
import { XIcon } from "../../internal/icons";
import { InputGroup, type InputGroupProps } from "../input-group";
import {
  TagsInputItemContext,
  TagsInputSlotsContext,
  useTagsInput,
  useTagsInputItem,
} from "./tags-input.context";

export type TagsInputRootProps = Omit<
  TagsInputPrimitiveRootProps,
  "onValueChange"
> &
  Pick<InputGroupProps, "size" | "variant">;

export interface TagsInputProps extends TagsInputRootProps {
  clearable?: boolean;
  placeholder?: string;
  onValueChange?: (value: string[]) => void;
  recipe?: typeof tagsInputRecipe;
}

export interface TagsInputControlProps
  extends TagsInputPrimitiveControlProps,
    Pick<InputGroupProps, "size" | "variant"> {
  clearable?: boolean;
}

export interface TagsInputItemProps
  extends TagsInputPrimitiveItemProps,
    Pick<InputGroupProps, "size"> {
  showDelete?: boolean;
  itemRecipe?: typeof tagsInputItemRecipe;
}

export interface TagsInputRootProviderProps
  extends TagsInputPrimitiveRootProviderProps,
    Pick<InputGroupProps, "size"> {
  clearable?: boolean;
  recipe?: typeof tagsInputRecipe;
}

export type TagsInputItemDeleteTriggerProps = ComponentProps<
  typeof TagsInputPrimitive.ItemDeleteTrigger
>;

export const TagsInputContext = TagsInputPrimitive.Context;

export function TagsInputRoot(props: TagsInputProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "clearable",
    "tabIndex",
    "children",
    "editable",
    "placeholder",
    "onValueChange",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? tagsInputRecipe)();
  const size = () => local.size ?? "md";

  return (
    <TagsInputSlotsContext value={{ slots: slots() }}>
      <TagsInputPrimitive.Root
        {...rest}
        class={slots().base({ class: local.class })}
        data-size={size()}
        editable={local.editable ?? false}
        onValueChange={
          local.onValueChange
            ? (details) => local.onValueChange?.(details.value)
            : undefined
        }
      >
        <TagsInputControl clearable={local.clearable} variant={local.variant}>
          <TagsInputPrimitive.Context>
            {(api) => (
              <For each={api().value}>
                {(value, index) => (
                  <TagsInputItem index={index()} value={value} />
                )}
              </For>
            )}
          </TagsInputPrimitive.Context>
          {local.children}
          <TagsInputInput placeholder={local.placeholder} />
        </TagsInputControl>
        <TagsInputPrimitive.HiddenInput tabIndex={local.tabIndex} />
      </TagsInputPrimitive.Root>
    </TagsInputSlotsContext>
  );
}

export function TagsInputControl(props: TagsInputControlProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "clearable",
    "children",
    "class",
  ]);
  const api = useTagsInputContext();
  const { slots } = useTagsInput();
  const clearable = () => local.clearable ?? false;

  return (
    <TagsInputPrimitive.Control
      asChild={(controlProps) => (
        <InputGroup
          {...controlProps({ class: slots.control({ class: local.class }) })}
          {...rest}
          size={local.size}
          variant={local.variant}
        >
          {local.children}
          <Show when={clearable() && api().value.length > 0}>
            <TagsInputClearTrigger aria-label="Clear all tags" />
          </Show>
        </InputGroup>
      )}
    />
  );
}

export function TagsInputItem(props: TagsInputItemProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "showDelete",
    "children",
    "itemRecipe",
    "class",
  ]);
  const slots = () => (local.itemRecipe ?? tagsInputItemRecipe)();
  const showDelete = () => local.showDelete ?? true;

  return (
    <TagsInputItemContext value={{ slots: slots() }}>
      <TagsInputPrimitive.Item
        {...rest}
        class={slots().base({ class: local.class })}
      >
        <TagsInputItemPreview>
          <TagsInputItemText>{local.children}</TagsInputItemText>
          <Show when={showDelete()}>
            <TagsInputItemDeleteTrigger />
          </Show>
        </TagsInputItemPreview>
        <TagsInputItemInput />
      </TagsInputPrimitive.Item>
    </TagsInputItemContext>
  );
}

export function TagsInputItemPreview(
  props: TagsInputItemPreviewProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTagsInputItem();
  return (
    <TagsInputPrimitive.ItemPreview
      {...rest}
      class={slots.preview({ class: local.class })}
    />
  );
}

export function TagsInputItemText(props: TagsInputItemTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useTagsInputItem();
  return (
    <TagsInputPrimitive.ItemText
      {...rest}
      class={slots.text({ class: local.class })}
    />
  );
}

export function TagsInputItemDeleteTrigger(
  props: TagsInputItemDeleteTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useTagsInputItem();

  return (
    <TagsInputPrimitive.ItemDeleteTrigger
      {...rest}
      asChild={(triggerProps) => (
        <InputGroup.Button
          {...triggerProps({ class: slots.delete({ class: local.class }) })}
          aria-label="Remove tag"
          size="icon-xs"
          variant="ghost"
        >
          {local.children ?? <XIcon aria-hidden />}
        </InputGroup.Button>
      )}
    />
  );
}

export function TagsInputItemInput(
  props: TagsInputItemInputProps,
): JSX.Element {
  const { slots } = useTagsInputItem();
  return (
    <TagsInputPrimitive.ItemInput
      {...props}
      asChild={(inputProps) => (
        <InputGroup.Input {...inputProps({ class: slots.input() })} />
      )}
    />
  );
}

export function TagsInputInput(props: TagsInputInputProps): JSX.Element {
  const { slots } = useTagsInput();
  return (
    <TagsInputPrimitive.Input
      {...props}
      asChild={(inputProps) => (
        <InputGroup.Input {...inputProps({ class: slots.input() })} />
      )}
    />
  );
}

export function TagsInputClearTrigger(
  props: TagsInputClearTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useTagsInput();

  return (
    <TagsInputPrimitive.ClearTrigger
      {...rest}
      asChild={(triggerProps) => (
        <InputGroup.Button
          {...triggerProps({
            class: slots.clearTrigger({ class: local.class }),
          })}
          aria-label="Clear"
          size="icon-xs"
          variant="ghost"
        >
          {local.children ?? <XIcon aria-hidden />}
        </InputGroup.Button>
      )}
    />
  );
}

export function TagsInputRootProvider(
  props: TagsInputRootProviderProps,
): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "clearable",
    "children",
    "recipe",
    "class",
  ]);
  const slots = () => (local.recipe ?? tagsInputRecipe)();
  const size = () => local.size ?? "md";

  return (
    <TagsInputSlotsContext value={{ slots: slots() }}>
      <TagsInputPrimitive.RootProvider
        {...rest}
        class={slots().base({ class: local.class })}
        data-size={size()}
      >
        <TagsInputControl clearable={local.clearable}>
          {local.children}
        </TagsInputControl>
        <TagsInputPrimitive.HiddenInput />
      </TagsInputPrimitive.RootProvider>
    </TagsInputSlotsContext>
  );
}
