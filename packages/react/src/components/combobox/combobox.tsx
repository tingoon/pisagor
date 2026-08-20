import {
  type CollectionItem,
  createListCollection,
  type ListCollection,
} from "@ark-ui/react/collection";
import {
  type ComboboxList as ComboboxListPrimitive,
  Combobox as ComboboxPrimitive,
  type ComboboxRootProps as ComboboxRootPropsPrimitive,
  useComboboxContext as useCombobox,
} from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import {
  type ComboboxItemVariantProps,
  comboboxContentVariants,
  comboboxControlVariants,
  comboboxEmptyVariants,
  comboboxGroupLabelVariants,
  comboboxInline2Variants,
  comboboxInline3Variants,
  comboboxInlineVariants,
  comboboxItemVariants,
  comboboxListVariants,
  comboboxTriggerVariants,
} from "@pisagor/styles/ui/combobox";
import type { InputRootVariantProps } from "@pisagor/styles/ui/input";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { WithTestId } from "../../internal/types";
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
  "collection" | "onValueChange"
> & {
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  collection?: ListCollection<T>;
  onValueChange?: (value: string[]) => void;
} & WithTestId;

export interface ComboboxProps extends Omit<ComboboxRootProps, "children"> {
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

export interface ComboboxGroupProps extends ComponentProps<typeof ComboboxPrimitive.ItemGroup> {
  /** The heading of the group */
  heading?: string | ReactNode;
}

export interface ComboboxItemProps
  extends ComponentProps<typeof ComboboxPrimitive.Item>,
    ComboboxItemVariantProps {}

export type ComboboxControlProps = ComponentProps<typeof ComboboxPrimitive.Control>;

export type ComboboxTriggerProps = ComponentProps<typeof ComboboxPrimitive.Trigger>;

export type ComboboxClearProps = ComponentProps<typeof ComboboxPrimitive.ClearTrigger>;

export type ComboboxFieldInputProps = ComponentProps<typeof ComboboxPrimitive.Input>;

export type ComboboxPositionerProps = ComponentProps<typeof ComboboxPrimitive.Positioner>;

export type ComboboxContentProps = ComponentProps<typeof ComboboxPrimitive.Content>;

export type ComboboxGroupLabelProps = ComponentProps<typeof ComboboxPrimitive.ItemGroupLabel>;

export type ComboboxEmptyProps = ComponentProps<typeof ComboboxPrimitive.Empty>;

export type ComboboxListProps = ComponentProps<typeof ComboboxListPrimitive>;
// #endregion

// #region Parts
export function ComboboxRoot<T extends CollectionItem = CollectionItem>({
  openOnClick = true,
  lazyMount = true,
  unmountOnExit = true,
  collection: collectionProp,
  children,
  onValueChange,
  variant,
  testId,
  ...rest
}: ComboboxRootProps<T>) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };
  const rootContext = { testId: dataTestId ?? testId };

  return (
    <ComboboxRootContext value={rootContext}>
      <FormControlVariantProvider value={variant}>
        <ComboboxPrimitive.Root
          lazyMount={lazyMount}
          onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
          openOnClick={openOnClick}
          unmountOnExit={unmountOnExit}
          {...props}
          collection={collectionProp as ListCollection<T>}
        >
          {children}
        </ComboboxPrimitive.Root>
      </FormControlVariantProvider>
    </ComboboxRootContext>
  );
}
ComboboxRoot.displayName = "Combobox.Root";

export const ComboboxContext = ComboboxPrimitive.Context;

export function ComboboxControl({ className, ...rest }: ComboboxControlProps) {
  const { testId } = useComboboxRoot() ?? {};

  return (
    <ComboboxPrimitive.Control
      {...rest}
      className={cn(comboboxControlVariants(), className)}
      data-testid={testId}
    />
  );
}
ComboboxControl.displayName = "Combobox.Control";

export function ComboboxInput({
  size = "md",
  variant: variantProp,
  showTrigger = true,
  clearable = false,
  children,
  className,
  ...rest
}: ComboboxInputProps) {
  const { inputValue } = useCombobox();

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
              className={comboboxInlineVariants()}
              size="icon-xs"
              variant="ghost"
            >
              <ComboboxTrigger />
            </InputGroup.Button>
          )}
          {clearable && inputValue && (
            <ComboboxClear asChild>
              <InputGroup.Button size="icon-xs" variant="ghost">
                <XIcon />
              </InputGroup.Button>
            </ComboboxClear>
          )}
        </InputGroup.Addon>
      </InputGroup>
    </ComboboxControl>
  );
}
ComboboxInput.displayName = "Combobox.Input";

export function ComboboxTrigger({ className, children, ...rest }: ComboboxTriggerProps) {
  return (
    <ComboboxPrimitive.Trigger
      {...rest}
      asChild
      className={cn(comboboxTriggerVariants(), className)}
    >
      {children ?? (
        <Button className={comboboxInline2Variants()} variant="ghost">
          <CaretUpDownIcon />
        </Button>
      )}
    </ComboboxPrimitive.Trigger>
  );
}
ComboboxTrigger.displayName = "Combobox.Trigger";

export function ComboboxClear({
  "aria-label": ariaLabel = "Clear selected value(s)",
  ...rest
}: ComboboxClearProps) {
  return <ComboboxPrimitive.ClearTrigger aria-label={ariaLabel} {...rest} />;
}
ComboboxClear.displayName = "Combobox.Clear";

/** Composable combobox input for custom controls (e.g. Tags Input). */
export function ComboboxFieldInput(props: ComboboxFieldInputProps) {
  return <ComboboxPrimitive.Input {...props} />;
}
ComboboxFieldInput.displayName = "Combobox.FieldInput";

export function ComboboxPositioner(props: ComboboxPositionerProps) {
  return <ComboboxPrimitive.Positioner {...props} />;
}
ComboboxPositioner.displayName = "Combobox.Positioner";

export function ComboboxContent({ className, children, ...rest }: ComboboxContentProps) {
  return (
    <Portal>
      <ComboboxPositioner>
        <ComboboxPrimitive.Content {...rest} className={cn(comboboxContentVariants(), className)}>
          {children}
        </ComboboxPrimitive.Content>
      </ComboboxPositioner>
    </Portal>
  );
}
ComboboxContent.displayName = "Combobox.Content";

export function ComboboxGroup({ heading, children, ...rest }: ComboboxGroupProps) {
  return (
    <ComboboxPrimitive.ItemGroup {...rest}>
      {!!heading && <ComboboxGroupLabel>{heading}</ComboboxGroupLabel>}

      {children}
    </ComboboxPrimitive.ItemGroup>
  );
}
ComboboxGroup.displayName = "Combobox.Group";

export function ComboboxGroupLabel({ className, ...rest }: ComboboxGroupLabelProps) {
  return (
    <ComboboxPrimitive.ItemGroupLabel
      {...rest}
      className={cn(comboboxGroupLabelVariants(), className)}
    />
  );
}
ComboboxGroupLabel.displayName = "Combobox.GroupLabel";

export function ComboboxItem({
  showIndicator = true,
  className,
  children,
  ...rest
}: ComboboxItemProps) {
  return (
    <ComboboxPrimitive.Item
      {...rest}
      className={cn(comboboxItemVariants({ showIndicator }), className)}
      persistFocus
    >
      {children}

      {showIndicator ? (
        <span className={comboboxInline3Variants()}>
          <ComboboxPrimitive.ItemIndicator>
            <CheckIcon />
          </ComboboxPrimitive.ItemIndicator>
        </span>
      ) : null}
    </ComboboxPrimitive.Item>
  );
}
ComboboxItem.displayName = "Combobox.Item";

export function ComboboxEmpty({ className, children, ...rest }: ComboboxEmptyProps) {
  return (
    <ComboboxPrimitive.Empty {...rest} className={cn(comboboxEmptyVariants(), className)}>
      {children || "No results found. Try a different search."}
    </ComboboxPrimitive.Empty>
  );
}
ComboboxEmpty.displayName = "Combobox.Empty";

export function ComboboxList({ className, ...rest }: ComboboxListProps) {
  return <ComboboxPrimitive.List {...rest} className={cn(comboboxListVariants(), className)} />;
}
ComboboxList.displayName = "Combobox.List";
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
ComboboxShorthand.displayName = "Combobox";
// #endregion
