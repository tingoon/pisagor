import { TagsInput as TagsInputPrimitive, useTagsInputContext } from "@ark-ui/react/tags-input";
import { XIcon } from "@phosphor-icons/react";
import { tagsInputItemVariants, tagsInputVariants } from "@pisagor/recipes/tags-input";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import { InputGroup, type InputGroupProps } from "../input-group";
import {
  TagsInputItemContext,
  TagsInputSlotsContext,
  useTagsInput,
  useTagsInputItem,
} from "./tags-input.context";

// #region Types
export type TagsInputRootProps = Omit<
  ComponentProps<typeof TagsInputPrimitive.Root>,
  "onValueChange"
> &
  Pick<InputGroupProps, "size" | "variant">;

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

export type TagsInputControlProps = ComponentProps<typeof TagsInputPrimitive.Control> &
  Pick<InputGroupProps, "size" | "variant"> & {
    /**
     * Whether to show the clear button.
     *
     * @defaultValue false
     */
    clearable?: boolean;
  };

export type TagsInputItemProps = ComponentProps<typeof TagsInputPrimitive.Item> &
  Pick<InputGroupProps, "size"> & {
    /**
     * Whether to show the clear trigger.
     *
     * @defaultValue false
     */
    showDelete?: boolean;
  };

export type TagsInputRootProviderProps = ComponentProps<typeof TagsInputPrimitive.RootProvider> &
  Pick<InputGroupProps, "size"> & {
    /**
     * Whether to show the clear button.
     *
     * @defaultValue false
     */
    clearable?: boolean;
  };

export type TagsInputItemPreviewProps = ComponentProps<typeof TagsInputPrimitive.ItemPreview>;

export type TagsInputItemTextProps = ComponentProps<typeof TagsInputPrimitive.ItemText>;

export type TagsInputItemDeleteTriggerProps = ComponentProps<
  typeof TagsInputPrimitive.ItemDeleteTrigger
>;

export type TagsInputItemInputProps = ComponentProps<typeof TagsInputPrimitive.ItemInput>;

export type TagsInputInputProps = ComponentProps<typeof TagsInputPrimitive.Input>;

export type TagsInputClearTriggerProps = ComponentProps<typeof TagsInputPrimitive.ClearTrigger>;
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
  className,
  ...rest
}: TagsInputProps) {
  const slots = useMemo(() => tagsInputVariants(), []);

  return (
    <TagsInputSlotsContext value={{ slots }}>
      <FormControlVariantProvider value={variant}>
        <TagsInputPrimitive.Root
          {...rest}
          className={slots.base({ className })}
          data-size={size}
          editable={editable}
          onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
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
      </FormControlVariantProvider>
    </TagsInputSlotsContext>
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
      <InputGroup {...rest} className={slots.control({ className })} size={size} variant={variant}>
        {children}
        {clearable && api.value.length > 0 && <TagsInputClearTrigger aria-label="Clear all tags" />}
      </InputGroup>
    </TagsInputPrimitive.Control>
  );
}

export function TagsInputItem({
  showDelete = true,
  children,
  className,
  ...rest
}: TagsInputItemProps) {
  const slots = useMemo(() => tagsInputItemVariants(), []);

  return (
    <TagsInputItemContext value={{ slots }}>
      <TagsInputPrimitive.Item {...rest} className={slots.base({ className })}>
        <TagsInputItemPreview>
          <TagsInputItemText>{children}</TagsInputItemText>
          {showDelete && <TagsInputItemDeleteTrigger />}
        </TagsInputItemPreview>
        <TagsInputItemInput />
      </TagsInputPrimitive.Item>
    </TagsInputItemContext>
  );
}

export function TagsInputItemPreview({ className, ...rest }: TagsInputItemPreviewProps) {
  const { slots } = useTagsInputItem();

  return <TagsInputPrimitive.ItemPreview {...rest} className={slots.preview({ className })} />;
}

export function TagsInputItemText({ className, ...rest }: TagsInputItemTextProps) {
  const { slots } = useTagsInputItem();

  return <TagsInputPrimitive.ItemText {...rest} className={slots.text({ className })} />;
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
  className,
  ...rest
}: TagsInputRootProviderProps) {
  const slots = useMemo(() => tagsInputVariants(), []);

  return (
    <TagsInputSlotsContext value={{ slots }}>
      <TagsInputPrimitive.RootProvider
        {...rest}
        className={slots.base({ className })}
        data-size={size}
      >
        <TagsInputControl clearable={clearable}>{children}</TagsInputControl>
        <TagsInputPrimitive.HiddenInput />
      </TagsInputPrimitive.RootProvider>
    </TagsInputSlotsContext>
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
// #endregion
