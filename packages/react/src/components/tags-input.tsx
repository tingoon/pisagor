import {
  TagsInput as TagsInputPrimitive,
  useTagsInputContext,
} from "@ark-ui/react";
import type {
  TagsInputClearTriggerProps,
  TagsInputControlProps as TagsInputControlPrimitiveProps,
  TagsInputInputProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemProps as TagsInputItemPrimitiveProps,
  TagsInputItemTextProps,
  TagsInputRootProps as TagsInputRootPrimitiveProps,
  TagsInputRootProviderProps as TagsInputRootProviderPrimitiveProps,
} from "@ark-ui/react";
import { XIcon } from "@phosphor-icons/react";
import type {
  TagsInputItemRootContract,
  TagsInputRootContract,
} from "@pisagor/contracts";
import { tagsInputItemRecipe, tagsInputRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { createSlotRecipeContext } from "../internal";
import { InputGroup } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { Context: TagsInputStylesContext, useStyles: useTagsInput } =
  createSlotRecipeContext({
    name: "TagsInput",
    recipe: tagsInputRecipe,
  });

const { Context: TagsInputItemStylesContext, useStyles: useTagsInputItem } =
  createSlotRecipeContext({
    name: "TagsInput",
    recipe: tagsInputItemRecipe,
  });
// #endregion

// #region Types
export type TagsInputRootProps = Omit<
  TagsInputRootPrimitiveProps,
  "onValueChange"
> &
  TagsInputRootContract;

export interface TagsInputProps extends TagsInputRootProps {
  /**
   * Whether to show the clear button.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /** Placeholder for the shorthand input. Defaults to empty. */
  placeholder?: string;
  onValueChange?: (value: string[]) => void;
}

export type TagsInputControlProps = TagsInputControlPrimitiveProps &
  TagsInputRootContract;

export type TagsInputItemProps = TagsInputItemPrimitiveProps &
  TagsInputItemRootContract;

export type TagsInputRootProviderProps = TagsInputRootProviderPrimitiveProps &
  TagsInputRootContract;

export type TagsInputItemDeleteTriggerProps = ComponentProps<
  typeof TagsInputPrimitive.ItemDeleteTrigger
>;

// #endregion

// #region Parts
export const TagsInputContext = TagsInputPrimitive.Context;

export function TagsInputRoot({
  size = "md",
  variant,
  clearable,
  tabIndex,
  children,
  editable = false,
  placeholder,
  onValueChange,
  recipe = tagsInputRecipe,
  className,
  ...rest
}: TagsInputProps) {
  const slots = recipe();

  return (
    <TagsInputStylesContext value={{ slots, variants: {} as never }}>
      <TagsInputPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        data-size={size}
        editable={editable}
        onValueChange={
          onValueChange ? (details) => onValueChange(details.value) : undefined
        }
      >
        <TagsInputControl size={size} variant={variant}>
          <TagsInputPrimitive.Context>
            {(api) =>
              api.value.map((value, index) => (
                <TagsInputItem index={index} key={value} value={value} />
              ))
            }
          </TagsInputPrimitive.Context>
          {children}
          <TagsInputInput placeholder={placeholder} />
          {clearable ? <TagsInputClearAll /> : null}
        </TagsInputControl>

        <TagsInputPrimitive.HiddenInput tabIndex={tabIndex} />
      </TagsInputPrimitive.Root>
    </TagsInputStylesContext>
  );
}

function TagsInputClearAll() {
  const api = useTagsInputContext();

  if (api.value.length === 0) {
    return null;
  }

  return <TagsInputClearTrigger />;
}

export function TagsInputControl({
  size,
  variant,
  children,
  className,
  ...rest
}: TagsInputControlProps) {
  const { slots } = useTagsInput();

  return (
    <TagsInputPrimitive.Control asChild>
      <InputGroup
        {...rest}
        className={slots.control({ className })}
        size={size}
        variant={variant}
      >
        {children}
      </InputGroup>
    </TagsInputPrimitive.Control>
  );
}

export function TagsInputItem({
  children,
  recipe = tagsInputItemRecipe,
  className,
  ...rest
}: TagsInputItemProps) {
  const slots = recipe();

  return (
    <TagsInputItemStylesContext value={{ slots, variants: {} as never }}>
      <TagsInputPrimitive.Item {...rest} className={slots.base({ className })}>
        <TagsInputItemPreview>
          <TagsInputItemText>{children}</TagsInputItemText>
          <TagsInputItemDeleteTrigger />
        </TagsInputItemPreview>
        <TagsInputItemInput />
      </TagsInputPrimitive.Item>
    </TagsInputItemStylesContext>
  );
}

export function TagsInputItemPreview({
  className,
  ...rest
}: TagsInputItemPreviewProps) {
  const { slots } = useTagsInputItem();

  return (
    <TagsInputPrimitive.ItemPreview
      {...rest}
      className={slots.preview({ className })}
    />
  );
}

export function TagsInputItemText({
  className,
  ...rest
}: TagsInputItemTextProps) {
  const { slots } = useTagsInputItem();

  return (
    <TagsInputPrimitive.ItemText
      {...rest}
      className={slots.text({ className })}
    />
  );
}

export function TagsInputItemDeleteTrigger({
  children,
  className,
  ...rest
}: TagsInputItemDeleteTriggerProps) {
  const { m } = useLocale();
  const { slots } = useTagsInputItem();

  return (
    <TagsInputPrimitive.ItemDeleteTrigger {...rest} asChild>
      <InputGroup.Button
        aria-label={m("tagsInput.removeTag")}
        className={slots.delete({ className })}
        size="icon-xs"
        variant="ghost"
      >
        {children ?? <XIcon aria-hidden />}
      </InputGroup.Button>
    </TagsInputPrimitive.ItemDeleteTrigger>
  );
}

export function TagsInputItemInput(props: TagsInputItemInputProps) {
  const { slots } = useTagsInputItem();

  return (
    <TagsInputPrimitive.ItemInput {...props} asChild>
      <InputGroup.Input className={slots.input()} />
    </TagsInputPrimitive.ItemInput>
  );
}

export function TagsInputInput(props: TagsInputInputProps) {
  const { slots } = useTagsInput();

  return (
    <TagsInputPrimitive.Input {...props} asChild>
      <InputGroup.Input className={slots.input()} />
    </TagsInputPrimitive.Input>
  );
}

export function TagsInputClearTrigger({
  children,
  className,
  ...rest
}: TagsInputClearTriggerProps) {
  const { m } = useLocale();
  const { slots } = useTagsInput();

  return (
    <TagsInputPrimitive.ClearTrigger {...rest} asChild>
      <InputGroup.Button
        aria-label={m("tagsInput.clear")}
        className={slots.clearTrigger({ className })}
        size="icon-xs"
        variant="ghost"
      >
        {children ?? <XIcon aria-hidden />}
      </InputGroup.Button>
    </TagsInputPrimitive.ClearTrigger>
  );
}

export function TagsInputRootProvider({
  size = "md",
  children,
  recipe = tagsInputRecipe,
  className,
  ...rest
}: TagsInputRootProviderProps) {
  const slots = recipe();

  return (
    <TagsInputStylesContext value={{ slots, variants: {} as never }}>
      <TagsInputPrimitive.RootProvider
        {...rest}
        className={slots.base({ className })}
        data-size={size}
      >
        <TagsInputControl>{children}</TagsInputControl>
        <TagsInputPrimitive.HiddenInput />
      </TagsInputPrimitive.RootProvider>
    </TagsInputStylesContext>
  );
}
// #endregion

// #region Display Names
TagsInputRoot.displayName = "TagsInput";
TagsInputControl.displayName = "TagsInput.Control";
TagsInputItem.displayName = "TagsInput.Item";
TagsInputItemPreview.displayName = "TagsInput.ItemPreview";
TagsInputItemText.displayName = "TagsInput.ItemText";
TagsInputItemDeleteTrigger.displayName = "TagsInput.ItemDeleteTrigger";
TagsInputItemInput.displayName = "TagsInput.ItemInput";
TagsInputInput.displayName = "TagsInput.Input";
TagsInputClearTrigger.displayName = "TagsInput.ClearTrigger";
TagsInputRootProvider.displayName = "TagsInput.RootProvider";

// #endregion

export type {
  TagsInputClearTriggerProps,
  TagsInputInputProps,
  TagsInputItemInputProps,
  TagsInputItemPreviewProps,
  TagsInputItemTextProps,
} from "@ark-ui/react";

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
