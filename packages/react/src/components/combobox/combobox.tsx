import { type CollectionItem, createListCollection } from "@ark-ui/react/collection";
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
} from "@ark-ui/react/combobox";
import { Combobox as ComboboxPrimitive, useComboboxContext } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import { type ComboboxVariantProps, comboboxRecipe } from "@pisagor/recipes/combobox";
import type { InputRootVariantProps } from "@pisagor/recipes/input";
import { cn } from "@pisagor/utils";
import type { ReactNode } from "react";
import { Button } from "../button";
import { InputGroup } from "../input-group";
import { ComboboxRootContext, useComboboxRoot } from "./combobox.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

interface ComboboxPresetItem {
  label: string;
  value: string;
}

export type ComboboxRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ComboboxPrimitiveRootProps<T>,
  "onValueChange"
> & {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  onValueChange?: (value: string[]) => void;
  /**
   * Style recipe. Defaults to `comboboxRecipe` from `@pisagor/recipes/combobox`.
   *
   * @defaultValue comboboxRecipe
   */
  recipe?: typeof comboboxRecipe;
};

export interface ComboboxProps extends Omit<ComboboxRootProps, "children" | "collection"> {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  items?: Array<ComboboxPresetItem | string>;
}

export interface ComboboxInputProps
  extends Omit<ComboboxPrimitiveInputProps, "size">,
    InputRootVariantProps {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /**
   * Whether the control is disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Whether to show the trigger button.
   *
   * @defaultValue true
   */
  showTrigger?: boolean;
}

export interface ComboboxItemGroupProps extends ComboboxPrimitiveItemGroupProps {
  /** The heading of the group */
  heading?: string | ReactNode;
}

export interface ComboboxItemProps extends ComboboxPrimitiveItemProps, ComboboxVariantProps {}

export type ComboboxFieldInputProps = ComboboxPrimitiveInputProps;

export interface ComboboxContentProps extends ComboboxPrimitiveContentProps {
  /**
   * Whether to render the content in a portal with a positioner.
   *
   * @defaultValue true
   */
  portalled?: boolean;
}

// #endregion

// #region Parts
export function ComboboxRoot<T extends CollectionItem = CollectionItem>({
  openOnClick = true,
  children,
  onValueChange,
  variant,
  recipe = comboboxRecipe,
  ...rest
}: ComboboxRootProps<T>) {
  const slots = recipe();

  return (
    <ComboboxRootContext value={{ slots }}>
      <ComboboxPrimitive.Root
        {...rest}
        onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
        openOnClick={openOnClick}
      >
        {children}
      </ComboboxPrimitive.Root>
    </ComboboxRootContext>
  );
}

export const ComboboxContext = ComboboxPrimitive.Context;

export function ComboboxControl({ className, ...rest }: ComboboxControlProps) {
  const { slots = comboboxRecipe() } = useComboboxRoot() ?? {};

  return <ComboboxPrimitive.Control {...rest} className={slots.control({ className })} />;
}

export function ComboboxInput({
  size = "md",
  variant: variantProp,
  clearable = false,
  showTrigger = true,
  children,
  className,
  ...rest
}: ComboboxInputProps) {
  const { inputValue } = useComboboxContext();
  const { slots = comboboxRecipe() } = useComboboxRoot() ?? {};

  return (
    <ComboboxControl data-size={size}>
      <InputGroup className={cn(className)} size={size} variant={variantProp}>
        {children}
        <ComboboxPrimitive.Input asChild>
          <InputGroup.Input {...rest} />
        </ComboboxPrimitive.Input>
        <InputGroup.Addon align="inline-end">
          {showTrigger && (
            <InputGroup.Button
              asChild
              className={slots.triggerHidden()}
              size="icon-xs"
              variant="ghost"
            >
              <ComboboxTrigger />
            </InputGroup.Button>
          )}
          {clearable && inputValue && (
            <ComboboxClearTrigger asChild>
              <InputGroup.Button aria-label="Clear" size="icon-xs" variant="ghost">
                <XIcon aria-hidden />
              </InputGroup.Button>
            </ComboboxClearTrigger>
          )}
        </InputGroup.Addon>
      </InputGroup>
    </ComboboxControl>
  );
}

export function ComboboxTrigger({ children, className, ...rest }: ComboboxTriggerProps) {
  const { slots = comboboxRecipe() } = useComboboxRoot() ?? {};

  return (
    <ComboboxPrimitive.Trigger {...rest} asChild className={slots.trigger({ className })}>
      {children ?? (
        <Button aria-label="Toggle" className={slots.triggerButton()} variant="ghost">
          <CaretUpDownIcon aria-hidden />
        </Button>
      )}
    </ComboboxPrimitive.Trigger>
  );
}

export function ComboboxClearTrigger({
  "aria-label": ariaLabel = "Clear selected value(s)",
  ...rest
}: ComboboxClearTriggerProps) {
  return <ComboboxPrimitive.ClearTrigger {...rest} aria-label={ariaLabel} />;
}

/** Composable combobox input for custom controls (e.g. Tags Input). */
export function ComboboxFieldInput(props: ComboboxFieldInputProps) {
  return <ComboboxPrimitive.Input {...props} />;
}

export function ComboboxPositioner(props: ComboboxPositionerProps) {
  return <ComboboxPrimitive.Positioner {...props} />;
}

export function ComboboxContent({
  portalled = true,
  children,
  className,
  ...rest
}: ComboboxContentProps) {
  const { slots = comboboxRecipe() } = useComboboxRoot() ?? {};

  const content = (
    <ComboboxPrimitive.Content {...rest} className={slots.content({ className })}>
      {children}
    </ComboboxPrimitive.Content>
  );

  if (!portalled) {
    return content;
  }

  return (
    <Portal>
      <ComboboxPositioner>{content}</ComboboxPositioner>
    </Portal>
  );
}

export function ComboboxItemGroup({ children, heading, ...rest }: ComboboxItemGroupProps) {
  return (
    <ComboboxPrimitive.ItemGroup {...rest}>
      {!!heading && <ComboboxItemGroupLabel>{heading}</ComboboxItemGroupLabel>}

      {children}
    </ComboboxPrimitive.ItemGroup>
  );
}

export function ComboboxItemGroupLabel({ className, ...rest }: ComboboxItemGroupLabelProps) {
  const { slots = comboboxRecipe() } = useComboboxRoot() ?? {};

  return (
    <ComboboxPrimitive.ItemGroupLabel {...rest} className={slots.itemGroupLabel({ className })} />
  );
}

export function ComboboxItem({
  showIndicator = true,
  children,
  className,
  ...rest
}: ComboboxItemProps) {
  const { slots = comboboxRecipe() } = useComboboxRoot() ?? {};

  return (
    <ComboboxPrimitive.Item
      {...rest}
      className={slots.item({ className, showIndicator })}
      persistFocus
    >
      {children}

      {showIndicator ? (
        <span className={slots.itemIndicator()}>
          <ComboboxPrimitive.ItemIndicator>
            <CheckIcon />
          </ComboboxPrimitive.ItemIndicator>
        </span>
      ) : null}
    </ComboboxPrimitive.Item>
  );
}

export function ComboboxEmpty({ children, className, ...rest }: ComboboxEmptyProps) {
  const { slots = comboboxRecipe() } = useComboboxRoot() ?? {};

  return (
    <ComboboxPrimitive.Empty {...rest} className={slots.empty({ className })}>
      {children || "No results found. Try a different search."}
    </ComboboxPrimitive.Empty>
  );
}

export function ComboboxList({ className, ...rest }: ComboboxListProps) {
  const { slots = comboboxRecipe() } = useComboboxRoot() ?? {};

  return <ComboboxPrimitive.List {...rest} className={slots.list({ className })} />;
}
// #endregion

// #region Shorthand
export function ComboboxShorthand({ clearable = false, items = [], id, ...rest }: ComboboxProps) {
  const normalized = items.map((item) =>
    typeof item === "string" ? { label: item, value: item } : item,
  );
  const collection = createListCollection({ items: normalized });

  return (
    <ComboboxRoot {...rest} collection={collection}>
      <ComboboxInput clearable={clearable} id={id} />
      <ComboboxContent>
        <ComboboxList>
          {normalized.map((item) => (
            <ComboboxItem item={item} key={item.value}>
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </ComboboxRoot>
  );
}
// #endregion

// #region Display Names
ComboboxRoot.displayName = "Combobox.Root";
ComboboxControl.displayName = "Combobox.Control";
ComboboxInput.displayName = "Combobox.Input";
ComboboxTrigger.displayName = "Combobox.Trigger";
ComboboxClearTrigger.displayName = "Combobox.ClearTrigger";
ComboboxFieldInput.displayName = "Combobox.FieldInput";
ComboboxPositioner.displayName = "Combobox.Positioner";
ComboboxContent.displayName = "Combobox.Content";
ComboboxItemGroup.displayName = "Combobox.ItemGroup";
ComboboxItemGroupLabel.displayName = "Combobox.ItemGroupLabel";
ComboboxItem.displayName = "Combobox.Item";
ComboboxEmpty.displayName = "Combobox.Empty";
ComboboxList.displayName = "Combobox.List";
ComboboxShorthand.displayName = "Combobox";
// #endregion
