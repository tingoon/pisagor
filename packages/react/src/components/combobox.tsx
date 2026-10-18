import {
  Combobox as ComboboxPrimitive,
  Portal,
  createListCollection,
  useComboboxContext,
} from "@ark-ui/react";
import type {
  CollectionItem,
  ComboboxClearTriggerProps,
  ComboboxContentProps as ComboboxPrimitiveContentProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxInputProps as ComboboxPrimitiveInputProps,
  ComboboxItemGroupLabelProps,
  ComboboxItemGroupProps as ComboboxPrimitiveItemGroupProps,
  ComboboxItemProps as ComboboxPrimitiveItemProps,
  ComboboxListProps,
  ComboboxPositionerProps,
  ComboboxRootProps as ComboboxPrimitiveRootProps,
  ComboboxTriggerProps,
} from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import type { ComboboxProps as BaseComboboxRootProps } from "@pisagor/props";
import {
  type ComboboxVariantProps,
  comboboxRecipe,
  type InputRootVariantProps,
} from "@pisagor/recipes";
import type { ReactNode } from "react";
import { createContext, use } from "react";
import { type FormControlVariant, createSlotRecipeContext } from "../internal";
import { Button } from "./button";
import { InputGroup } from "./input-group";
import { useLocale } from "./provider/context";

// #region Context
const { Context: ComboboxStylesContext } = createSlotRecipeContext({
  name: "Combobox",
  recipe: comboboxRecipe,
});

function useComboboxSlots() {
  const styles = use(ComboboxStylesContext);

  return styles?.slots ?? comboboxRecipe();
}

/** Root-level control props (`variant`, `size`) read by `Combobox.Input`. */
const ComboboxControlContext = createContext<InputRootVariantProps>({});
ComboboxControlContext.displayName = "ComboboxControlContext";
/**
 * True inside `Combobox.Control`, so `Combobox.Input` does not render a second
 * control.
 */
const ComboboxInsideControlContext = createContext(false);

/** @deprecated Prefer composing within Combobox.Root; kept for public API. */
export function useComboboxRoot() {
  const styles = use(ComboboxStylesContext);

  return styles ? { slots: styles.slots } : undefined;
}
// #endregion

// #region Types

interface ComboboxPresetItem {
  label: string;
  value: string;
}

export type ComboboxRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ComboboxPrimitiveRootProps<T>,
  "onValueChange"
> & {
  /** Visual shell variant applied to the input. Defaults to `primary`. */
  variant?: FormControlVariant;
  /** Input size. Defaults to `md`. */
  size?: InputRootVariantProps["size"];
  onValueChange?: (value: string[]) => void;
} & BaseComboboxRootProps;

export interface ComboboxProps extends Omit<
  ComboboxRootProps,
  "children" | "collection"
> {
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  items?: Array<ComboboxPresetItem | string>;
}

export interface ComboboxInputProps
  extends Omit<ComboboxPrimitiveInputProps, "size">, InputRootVariantProps {
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

export interface ComboboxItemProps
  extends ComboboxPrimitiveItemProps, ComboboxVariantProps {}

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
  size,
  recipe = comboboxRecipe,
  ...rest
}: ComboboxRootProps<T>) {
  const slots = recipe();

  return (
    <ComboboxStylesContext value={{ slots, variants: {} as never }}>
      <ComboboxControlContext value={{ size, variant }}>
        <ComboboxPrimitive.Root
          {...rest}
          onValueChange={
            onValueChange
              ? (details) => onValueChange(details.value)
              : undefined
          }
          openOnClick={openOnClick}
        >
          {children}
        </ComboboxPrimitive.Root>
      </ComboboxControlContext>
    </ComboboxStylesContext>
  );
}

export const ComboboxContext = ComboboxPrimitive.Context;

export function ComboboxControl({ className, ...rest }: ComboboxControlProps) {
  const slots = useComboboxSlots();

  return (
    <ComboboxInsideControlContext value={true}>
      <ComboboxPrimitive.Control
        {...rest}
        className={slots.control({ className })}
      />
    </ComboboxInsideControlContext>
  );
}

export function ComboboxInput({
  size: sizeProp,
  variant: variantProp,
  clearable = false,
  showTrigger = true,
  children,
  className,
  ...rest
}: ComboboxInputProps) {
  const { m } = useLocale();
  const { inputValue } = useComboboxContext();
  const slots = useComboboxSlots();
  const control = use(ComboboxControlContext);
  const insideControl = use(ComboboxInsideControlContext);
  const size = sizeProp ?? control.size ?? "md";
  const variant = variantProp ?? control.variant;

  const group = (
    <InputGroup className={className} size={size} variant={variant}>
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
            <InputGroup.Button
              aria-label={m("combobox.clear")}
              size="icon-xs"
              variant="ghost"
            >
              <XIcon aria-hidden />
            </InputGroup.Button>
          </ComboboxClearTrigger>
        )}
      </InputGroup.Addon>
    </InputGroup>
  );

  return insideControl ? (
    group
  ) : (
    <ComboboxControl data-size={size}>{group}</ComboboxControl>
  );
}

export function ComboboxTrigger({
  children,
  className,
  ...rest
}: ComboboxTriggerProps) {
  const { m } = useLocale();
  const slots = useComboboxSlots();

  return (
    <ComboboxPrimitive.Trigger
      {...rest}
      asChild
      className={slots.trigger({ className })}
    >
      {children ?? (
        <Button
          aria-label={m("combobox.toggle")}
          className={slots.triggerButton()}
          variant="ghost"
        >
          <CaretUpDownIcon aria-hidden />
        </Button>
      )}
    </ComboboxPrimitive.Trigger>
  );
}

export function ComboboxClearTrigger({
  "aria-label": ariaLabelProp,
  ...rest
}: ComboboxClearTriggerProps) {
  const { m } = useLocale();
  const ariaLabel = m("combobox.clear", ariaLabelProp);

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
  const slots = useComboboxSlots();

  const content = (
    <ComboboxPrimitive.Content
      {...rest}
      className={slots.content({ className })}
    >
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

export function ComboboxItemGroup({
  children,
  heading,
  ...rest
}: ComboboxItemGroupProps) {
  return (
    <ComboboxPrimitive.ItemGroup {...rest}>
      {!!heading && <ComboboxItemGroupLabel>{heading}</ComboboxItemGroupLabel>}

      {children}
    </ComboboxPrimitive.ItemGroup>
  );
}

export function ComboboxItemGroupLabel({
  className,
  ...rest
}: ComboboxItemGroupLabelProps) {
  const slots = useComboboxSlots();

  return (
    <ComboboxPrimitive.ItemGroupLabel
      {...rest}
      className={slots.itemGroupLabel({ className })}
    />
  );
}

export function ComboboxItem({
  showIndicator = true,
  children,
  className,
  ...rest
}: ComboboxItemProps) {
  const slots = useComboboxSlots();

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

export function ComboboxEmpty({
  children,
  className,
  ...rest
}: ComboboxEmptyProps) {
  const { m } = useLocale();
  const slots = useComboboxSlots();

  return (
    <ComboboxPrimitive.Empty {...rest} className={slots.empty({ className })}>
      {children || m("combobox.empty")}
    </ComboboxPrimitive.Empty>
  );
}

export function ComboboxList({ className, ...rest }: ComboboxListProps) {
  const slots = useComboboxSlots();

  return (
    <ComboboxPrimitive.List {...rest} className={slots.list({ className })} />
  );
}
// #endregion

// #region Shorthand
export function ComboboxShorthand({
  clearable = false,
  items = [],
  id,
  ...rest
}: ComboboxProps) {
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

export type {
  ComboboxClearTriggerProps,
  ComboboxControlProps,
  ComboboxEmptyProps,
  ComboboxItemGroupLabelProps,
  ComboboxListProps,
  ComboboxPositionerProps,
  ComboboxTriggerProps,
} from "@ark-ui/react";

export const Combobox = Object.assign(ComboboxShorthand, {
  ClearTrigger: ComboboxClearTrigger,
  Content: ComboboxContent,
  Context: ComboboxContext,
  Control: ComboboxControl,
  Empty: ComboboxEmpty,
  FieldInput: ComboboxFieldInput,
  Input: ComboboxInput,
  Item: ComboboxItem,
  ItemGroup: ComboboxItemGroup,
  ItemGroupLabel: ComboboxItemGroupLabel,
  List: ComboboxList,
  Positioner: ComboboxPositioner,
  Root: ComboboxRoot,
  Trigger: ComboboxTrigger,
});
