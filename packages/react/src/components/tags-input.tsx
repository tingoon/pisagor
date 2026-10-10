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
} from "@ark-ui/react/tags-input";
import {
  TagsInput as TagsInputPrimitive,
  useTagsInputContext,
} from "@ark-ui/react/tags-input";
import { XIcon } from "@phosphor-icons/react";
import type {
  TagsInputItemProps as BaseTagsInputItemProps,
  TagsInputProps as BaseTagsInputProps,
  TagsInputProps as BaseTagsInputRootProviderProps,
} from "@pisagor/props";
import { tagsInputItemRecipe, tagsInputRecipe } from "@pisagor/recipes";
import type { ComponentProps } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { InputGroup, type InputGroupProps } from "./input-group";

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
  TagsInputPrimitiveRootProps,
  "onValueChange"
> &
  Pick<InputGroupProps, "size" | "variant">;

export interface TagsInputProps extends TagsInputRootProps, BaseTagsInputProps {
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

export interface TagsInputControlProps
  extends TagsInputPrimitiveControlProps,
    Pick<InputGroupProps, "size" | "variant"> {
  /**
   * Whether to show the clear button.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface TagsInputItemProps
  extends TagsInputPrimitiveItemProps,
    Pick<InputGroupProps, "size">,
    BaseTagsInputItemProps {
  /**
   * Whether to show the clear trigger.
   *
   * @defaultValue false
   */
  showDelete?: boolean;
}

export interface TagsInputRootProviderProps
  extends TagsInputPrimitiveRootProviderProps,
    Pick<InputGroupProps, "size">,
    BaseTagsInputRootProviderProps {
  /**
   * Whether to show the clear button.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

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
        <TagsInputControl clearable={clearable} variant={variant}>
          <TagsInputPrimitive.Context>
            {(api) =>
              api.value.map((value, index) => (
                <TagsInputItem index={index} key={value} value={value} />
              ))
            }
          </TagsInputPrimitive.Context>
          {children}
          <TagsInputInput placeholder={placeholder} />
        </TagsInputControl>

        <TagsInputPrimitive.HiddenInput tabIndex={tabIndex} />
      </TagsInputPrimitive.Root>
    </TagsInputStylesContext>
  );
}

export function TagsInputControl({
  size,
  variant,
  clearable = false,
  children,
  className,
  ...rest
}: TagsInputControlProps) {
  const api = useTagsInputContext();
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
        {clearable && api.value.length > 0 && (
          <TagsInputClearTrigger aria-label="Clear all tags" />
        )}
      </InputGroup>
    </TagsInputPrimitive.Control>
  );
}

export function TagsInputItem({
  showDelete = true,
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
          {showDelete && <TagsInputItemDeleteTrigger />}
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
  const { slots } = useTagsInputItem();

  return (
    <TagsInputPrimitive.ItemDeleteTrigger {...rest} asChild>
      <InputGroup.Button
        aria-label="Remove tag"
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
  const { slots } = useTagsInput();

  return (
    <TagsInputPrimitive.ClearTrigger {...rest} asChild>
      <InputGroup.Button
        aria-label="Clear"
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
  clearable,
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
        <TagsInputControl clearable={clearable}>{children}</TagsInputControl>
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
} from "@ark-ui/react/tags-input";

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
