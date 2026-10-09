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
import type {
  TagsInputItemProps as BaseTagsInputItemProps,
  TagsInputProps as BaseTagsInputProps,
} from "@pisagor/props";
import { tagsInputItemRecipe, tagsInputRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { XIcon } from "../internal/icons";
import { InputGroup, type InputGroupProps } from "./input-group";

// #region Context
const { Context: TagsInputStylesContext, useStyles: useTagsInput } =
  createSlotRecipeContext({ name: "TagsInput", recipe: tagsInputRecipe });

const { Context: TagsInputItemStylesContext, useStyles: useTagsInputItem } =
  createSlotRecipeContext({ name: "TagsInput", recipe: tagsInputItemRecipe });
// #endregion

export type TagsInputRootProps = Omit<
  TagsInputPrimitiveRootProps,
  "onValueChange"
> &
  Pick<InputGroupProps, "size" | "variant">;

export interface TagsInputProps extends TagsInputRootProps, BaseTagsInputProps {
  clearable?: boolean;
  placeholder?: string;
  onValueChange?: (value: string[]) => void;
}

export interface TagsInputControlProps
  extends TagsInputPrimitiveControlProps,
    Pick<InputGroupProps, "size" | "variant"> {
  clearable?: boolean;
}

export interface TagsInputItemProps
  extends TagsInputPrimitiveItemProps,
    Pick<InputGroupProps, "size">,
    BaseTagsInputItemProps {
  showDelete?: boolean;
}

export interface TagsInputRootProviderProps
  extends TagsInputPrimitiveRootProviderProps,
    Pick<InputGroupProps, "size">,
    BaseTagsInputProps {
  clearable?: boolean;
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
  const size = () => local.size ?? "md";

  const slots = createMemo(() => (local.recipe ?? tagsInputRecipe)());

  return (
    <TagsInputStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
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
    </TagsInputStylesContext>
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
  const styles = useTagsInput();
  const clearable = () => local.clearable ?? false;

  return (
    <TagsInputPrimitive.Control
      asChild={(controlProps) => (
        <InputGroup
          {...controlProps({
            class: styles.slots.control({ class: local.class }),
          })}
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
    "size",
    "recipe",
    "class",
  ]);
  const showDelete = () => local.showDelete ?? true;
  const slots = createMemo(() => (local.recipe ?? tagsInputItemRecipe)());

  return (
    <TagsInputItemStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
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
    </TagsInputItemStylesContext>
  );
}

export function TagsInputItemPreview(
  props: TagsInputItemPreviewProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useTagsInputItem();

  return (
    <TagsInputPrimitive.ItemPreview
      {...rest}
      class={styles.slots.preview({ class: local.class })}
    />
  );
}

export function TagsInputItemText(props: TagsInputItemTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useTagsInputItem();

  return (
    <TagsInputPrimitive.ItemText
      {...rest}
      class={styles.slots.text({ class: local.class })}
    />
  );
}

export function TagsInputItemDeleteTrigger(
  props: TagsInputItemDeleteTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useTagsInputItem();

  return (
    <TagsInputPrimitive.ItemDeleteTrigger
      {...rest}
      asChild={(triggerProps) => (
        <InputGroup.Button
          {...triggerProps({
            class: styles.slots.delete({ class: local.class }),
          })}
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
  const styles = useTagsInputItem();
  return (
    <TagsInputPrimitive.ItemInput
      {...props}
      asChild={(inputProps) => (
        <InputGroup.Input {...inputProps({ class: styles.slots.input() })} />
      )}
    />
  );
}

export function TagsInputInput(props: TagsInputInputProps): JSX.Element {
  const styles = useTagsInput();
  return (
    <TagsInputPrimitive.Input
      {...props}
      asChild={(inputProps) => (
        <InputGroup.Input {...inputProps({ class: styles.slots.input() })} />
      )}
    />
  );
}

export function TagsInputClearTrigger(
  props: TagsInputClearTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useTagsInput();

  return (
    <TagsInputPrimitive.ClearTrigger
      {...rest}
      asChild={(triggerProps) => (
        <InputGroup.Button
          {...triggerProps({
            class: styles.slots.clearTrigger({ class: local.class }),
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
  const size = () => local.size ?? "md";

  const slots = createMemo(() => (local.recipe ?? tagsInputRecipe)());

  return (
    <TagsInputStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
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
    </TagsInputStylesContext>
  );
}

export type {
  TagsInputClearTriggerProps,
  TagsInputInputProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemTextProps,
} from "@ark-ui/solid/tags-input";

export const TagsInput = Object.assign(TagsInputRoot, {
  ClearTrigger: TagsInputClearTrigger,
  Context: TagsInputContext,
  Control: TagsInputControl,
  Input: TagsInputInput,
  Item: TagsInputItem,
  ItemDeleteTrigger: TagsInputItemDeleteTrigger,
  ItemInput: TagsInputItemInput,
  ItemPreview: TagsInputItemPreview,
  ItemText: TagsInputItemText,
  RootProvider: TagsInputRootProvider,
});
