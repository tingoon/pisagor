import { type CollectionItem, createListCollection } from "@ark-ui/react/collection";
import {
  type ComboboxList as ComboboxListPrimitive,
  Combobox as ComboboxPrimitive,
  type ComboboxRootProps as ComboboxRootPropsPrimitive,
  useComboboxContext,
} from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import { type ComboboxVariantProps, comboboxVariants } from "@pisagor/recipes/combobox";
import type { InputRootVariantProps } from "@pisagor/recipes/input";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { useMemo } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import { Button } from "../button";
import { InputGroup } from "../input-group";
import { ComboboxRootContext, useComboboxRoot } from "./combobox.context";

// #region Types
interface ComboboxPresetItem {
  label: string;
  value: string;
}

export type ComboboxRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ComboboxRootPropsPrimitive<T>,
  "onValueChange"
> & {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  onValueChange?: (value: string[]) => void;
};

export interface ComboboxProps extends Omit<ComboboxRootProps, "children" | "collection"> {
  items?: Array<ComboboxPresetItem | string>;
  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface ComboboxInputProps
  extends Omit<ComponentProps<typeof ComboboxPrimitive.Input>, "size">,
    InputRootVariantProps {
  /** Visual shell variant override for this input. */
  variant?: FormControlVariant;
  /**
   * Whether the control is disabled.
   *
   * @defaultValue false
   */
  disabled?: boolean;

  /**
   * Whether to show a clear button when the input has a value.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  /**
   * Whether to show the trigger button.
   *
   * @defaultValue true
   */
  showTrigger?: boolean;
}

export interface ComboboxItemGroupProps extends ComponentProps<typeof ComboboxPrimitive.ItemGroup> {
  /** The heading of the group */
  heading?: string | ReactNode;
}

export interface ComboboxItemProps
  extends ComponentProps<typeof ComboboxPrimitive.Item>,
    ComboboxVariantProps {}

export type ComboboxControlProps = ComponentProps<typeof ComboboxPrimitive.Control>;

export type ComboboxTriggerProps = ComponentProps<typeof ComboboxPrimitive.Trigger>;

export type ComboboxClearTriggerProps = ComponentProps<typeof ComboboxPrimitive.ClearTrigger>;

export type ComboboxFieldInputProps = ComponentProps<typeof ComboboxPrimitive.Input>;

export type ComboboxPositionerProps = ComponentProps<typeof ComboboxPrimitive.Positioner>;

export type ComboboxContentProps = ComponentProps<typeof ComboboxPrimitive.Content>;

export type ComboboxItemGroupLabelProps = ComponentProps<typeof ComboboxPrimitive.ItemGroupLabel>;

export type ComboboxEmptyProps = ComponentProps<typeof ComboboxPrimitive.Empty>;

export type ComboboxListProps = ComponentProps<typeof ComboboxListPrimitive>;
// #endregion

// #region Parts
export function ComboboxRoot<T extends CollectionItem = CollectionItem>({
  openOnClick = true,
  children,
  onValueChange,
  variant,
  ...rest
}: ComboboxRootProps<T>) {
  const slots = useMemo(() => comboboxVariants(), []);

  return (
    <ComboboxRootContext value={{ slots }}>
      <FormControlVariantProvider value={variant}>
        <ComboboxPrimitive.Root
          onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
          openOnClick={openOnClick}
          {...rest}
        >
          {children}
        </ComboboxPrimitive.Root>
      </FormControlVariantProvider>
    </ComboboxRootContext>
  );
}

export const ComboboxContext = ComboboxPrimitive.Context;

export function ComboboxControl({ className, ...rest }: ComboboxControlProps) {
  const { slots = comboboxVariants() } = useComboboxRoot() ?? {};

  return <ComboboxPrimitive.Control {...rest} className={slots.control({ className })} />;
}

export function ComboboxInput({
  size = "md",
  variant: variantProp,
  showTrigger = true,
  clearable = false,
  children,
  className,
  ...rest
}: ComboboxInputProps) {
  const { inputValue } = useComboboxContext();
  const { slots = comboboxVariants() } = useComboboxRoot() ?? {};

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
              <InputGroup.Button size="icon-xs" variant="ghost">
                <XIcon />
              </InputGroup.Button>
            </ComboboxClearTrigger>
          )}
        </InputGroup.Addon>
      </InputGroup>
    </ComboboxControl>
  );
}

export function ComboboxTrigger({ className, children, ...rest }: ComboboxTriggerProps) {
  const { slots = comboboxVariants() } = useComboboxRoot() ?? {};

  return (
    <ComboboxPrimitive.Trigger {...rest} asChild className={slots.trigger({ className })}>
      {children ?? (
        <Button className={slots.triggerButton()} variant="ghost">
          <CaretUpDownIcon />
        </Button>
      )}
    </ComboboxPrimitive.Trigger>
  );
}

export function ComboboxClearTrigger({
  "aria-label": ariaLabel = "Clear selected value(s)",
  ...rest
}: ComboboxClearTriggerProps) {
  return <ComboboxPrimitive.ClearTrigger aria-label={ariaLabel} {...rest} />;
}

/** Composable combobox input for custom controls (e.g. Tags Input). */
export function ComboboxFieldInput(props: ComboboxFieldInputProps) {
  return <ComboboxPrimitive.Input {...props} />;
}

export function ComboboxPositioner(props: ComboboxPositionerProps) {
  return <ComboboxPrimitive.Positioner {...props} />;
}

export function ComboboxContent({ className, children, ...rest }: ComboboxContentProps) {
  const { slots = comboboxVariants() } = useComboboxRoot() ?? {};

  return (
    <Portal>
      <ComboboxPositioner>
        <ComboboxPrimitive.Content {...rest} className={slots.content({ className })}>
          {children}
        </ComboboxPrimitive.Content>
      </ComboboxPositioner>
    </Portal>
  );
}

export function ComboboxItemGroup({ heading, children, ...rest }: ComboboxItemGroupProps) {
  return (
    <ComboboxPrimitive.ItemGroup {...rest}>
      {!!heading && <ComboboxItemGroupLabel>{heading}</ComboboxItemGroupLabel>}

      {children}
    </ComboboxPrimitive.ItemGroup>
  );
}

export function ComboboxItemGroupLabel({ className, ...rest }: ComboboxItemGroupLabelProps) {
  const { slots = comboboxVariants() } = useComboboxRoot() ?? {};

  return (
    <ComboboxPrimitive.ItemGroupLabel {...rest} className={slots.itemGroupLabel({ className })} />
  );
}

export function ComboboxItem({
  showIndicator = true,
  className,
  children,
  ...rest
}: ComboboxItemProps) {
  const { slots = comboboxVariants() } = useComboboxRoot() ?? {};

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

export function ComboboxEmpty({ className, children, ...rest }: ComboboxEmptyProps) {
  const { slots = comboboxVariants() } = useComboboxRoot() ?? {};

  return (
    <ComboboxPrimitive.Empty {...rest} className={slots.empty({ className })}>
      {children || "No results found. Try a different search."}
    </ComboboxPrimitive.Empty>
  );
}

export function ComboboxList({ className, ...rest }: ComboboxListProps) {
  const { slots = comboboxVariants() } = useComboboxRoot() ?? {};

  return <ComboboxPrimitive.List {...rest} className={slots.list({ className })} />;
}
// #endregion

// #region Shorthand
export function ComboboxShorthand({ items = [], clearable = false, id, ...rest }: ComboboxProps) {
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
