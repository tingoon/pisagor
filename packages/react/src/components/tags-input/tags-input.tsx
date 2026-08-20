import { TagsInput as TagsInputPrimitive, useTagsInputContext } from "@ark-ui/react/tags-input";
import { XIcon } from "@phosphor-icons/react";
import {
  tagsInputInline2Variants,
  tagsInputInline3Variants,
  tagsInputInline4Variants,
  tagsInputInline5Variants,
  tagsInputInlineVariants,
  tagsInputItemPreviewVariants,
  tagsInputItemTextVariants,
  tagsInputItemVariants,
  tagsInputRootProviderVariants,
  tagsInputVariants,
} from "@pisagor/styles/ui/tags-input";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { WithTestId } from "../../internal/types";
import { InputGroup, type InputGroupProps } from "../input-group";

// #region Types
export type TagsInputRootProps = Omit<
  ComponentProps<typeof TagsInputPrimitive.Root>,
  "onValueChange"
> &
  Pick<InputGroupProps, "size" | "variant"> &
  WithTestId;

export interface TagsInputProps extends TagsInputRootProps {
  /**
   * Whether to show the clear button.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  onValueChange?: (value: string[]) => void;
  /** Placeholder for the shorthand input. Defaults to empty. */
  placeholder?: string;
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
  Pick<InputGroupProps, "size"> &
  WithTestId & {
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
  editable = false,
  tabIndex,
  className,
  children,
  onValueChange,
  placeholder,
  testId,
  ...rest
}: TagsInputProps) {
  return (
    <FormControlVariantProvider value={variant}>
      <TagsInputPrimitive.Root
        {...rest}
        className={cn(tagsInputVariants(), className)}
        data-size={size}
        data-testid={testId}
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
  );
}
TagsInputRoot.displayName = "TagsInput";

export function TagsInputControl({
  size,
  variant,
  clearable = false,
  className,
  children,
  ...rest
}: TagsInputControlProps) {
  const api = useTagsInputContext();

  return (
    <TagsInputPrimitive.Control asChild>
      <InputGroup
        {...rest}
        className={cn(tagsInputInlineVariants(), className)}
        size={size}
        variant={variant}
      >
        {children}
        {clearable && api.value.length > 0 && <TagsInputClearTrigger aria-label="Clear all tags" />}
      </InputGroup>
    </TagsInputPrimitive.Control>
  );
}
TagsInputControl.displayName = "TagsInput.Control";

export function TagsInputItem({
  showDelete = true,
  className,
  children,
  ...rest
}: TagsInputItemProps) {
  return (
    <TagsInputPrimitive.Item {...rest} className={cn(tagsInputItemVariants(), className)}>
      <TagsInputItemPreview>
        <TagsInputItemText>{children}</TagsInputItemText>
        {showDelete && <TagsInputItemDeleteTrigger />}
      </TagsInputItemPreview>
      <TagsInputItemInput />
    </TagsInputPrimitive.Item>
  );
}
TagsInputItem.displayName = "TagsInput.Item";

export function TagsInputItemPreview({ className, ...rest }: TagsInputItemPreviewProps) {
  return (
    <TagsInputPrimitive.ItemPreview
      {...rest}
      className={cn(tagsInputItemPreviewVariants(), className)}
    />
  );
}
TagsInputItemPreview.displayName = "TagsInput.ItemPreview";

export function TagsInputItemText({ className, ...rest }: TagsInputItemTextProps) {
  return (
    <TagsInputPrimitive.ItemText {...rest} className={cn(tagsInputItemTextVariants(), className)} />
  );
}
TagsInputItemText.displayName = "TagsInput.ItemText";

export function TagsInputItemDeleteTrigger({
  className,
  children,
  ...rest
}: TagsInputItemDeleteTriggerProps) {
  return (
    <TagsInputPrimitive.ItemDeleteTrigger {...rest} asChild>
      <InputGroup.Button
        aria-label="Remove tag"
        className={cn(tagsInputInline2Variants(), className)}
        size="icon-xs"
        variant="ghost"
      >
        {children ?? <XIcon aria-hidden />}
      </InputGroup.Button>
    </TagsInputPrimitive.ItemDeleteTrigger>
  );
}
TagsInputItemDeleteTrigger.displayName = "TagsInput.ItemDeleteTrigger";

export function TagsInputItemInput(props: TagsInputItemInputProps) {
  return (
    <TagsInputPrimitive.ItemInput asChild {...props}>
      <InputGroup.Input className={cn(tagsInputInline3Variants())} />
    </TagsInputPrimitive.ItemInput>
  );
}
TagsInputItemInput.displayName = "TagsInput.ItemInput";

export function TagsInputInput(props: TagsInputInputProps) {
  return (
    <TagsInputPrimitive.Input asChild {...props}>
      <InputGroup.Input className={cn(tagsInputInline4Variants())} />
    </TagsInputPrimitive.Input>
  );
}
TagsInputInput.displayName = "TagsInput.Input";

export function TagsInputClearTrigger({
  className,
  children,
  ...rest
}: TagsInputClearTriggerProps) {
  return (
    <TagsInputPrimitive.ClearTrigger {...rest} asChild>
      <InputGroup.Button
        className={cn(tagsInputInline5Variants(), className)}
        size="icon-xs"
        variant="ghost"
      >
        {children ?? <XIcon aria-hidden />}
      </InputGroup.Button>
    </TagsInputPrimitive.ClearTrigger>
  );
}
TagsInputClearTrigger.displayName = "TagsInput.ClearTrigger";

export function TagsInputRootProvider({
  size = "md",
  clearable,
  className,
  testId,
  children,
  ...rest
}: TagsInputRootProviderProps) {
  return (
    <TagsInputPrimitive.RootProvider
      {...rest}
      className={cn(tagsInputRootProviderVariants(), className)}
      data-size={size}
      data-testid={testId}
    >
      <TagsInputControl clearable={clearable}>{children}</TagsInputControl>
      <TagsInputPrimitive.HiddenInput />
    </TagsInputPrimitive.RootProvider>
  );
}
// #endregion
