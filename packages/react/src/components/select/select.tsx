import { Portal } from "@ark-ui/react";
import { type CollectionItem, createListCollection } from "@ark-ui/react/collection";
import { ark } from "@ark-ui/react/factory";
import {
  Select as SelectPrimitive,
  type SelectRootProps as SelectRootPropsPrimitive,
  useSelectContext,
} from "@ark-ui/react/select";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import { formControlShellVariants } from "@pisagor/recipes/form-control";
import type { InputRootVariantProps } from "@pisagor/recipes/input";
import { selectVariants } from "@pisagor/recipes/select";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "../../internal/utils";
import { Separator, type SeparatorProps } from "../separator";
import { SelectRootContext, useSelectRoot } from "./select.context";

// #region Types
type FormControlVariant = "primary" | "secondary";

interface SelectPresetItem {
  label: string;
  value: string;
}

export type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  SelectRootPropsPrimitive<T>,
  "onValueChange"
> & {
  /**
   * Visual shell variant. Defaults to `primary`.
   */
  variant?: FormControlVariant;
  onValueChange?: (value: string | string[]) => void;
};

export interface SelectProps extends Omit<SelectRootProps, "children" | "collection"> {
  /**
   * Whether to show a clear button when a value is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  items?: Array<SelectPresetItem | string>;
  placeholder?: string;
}

export interface SelectTriggerProps
  extends ComponentProps<typeof SelectPrimitive.Trigger>,
    InputRootVariantProps {
  /** Visual shell variant override for this trigger. */
  variant?: FormControlVariant;
  /**
   * Whether to show a clear button when a value is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface SelectItemGroupProps extends ComponentProps<typeof SelectPrimitive.ItemGroup> {
  /** The heading of the group */
  heading?: string | ReactNode;
}

export type SelectValueTextProps = ComponentProps<typeof SelectPrimitive.ValueText>;

export type SelectContentProps = ComponentProps<typeof SelectPrimitive.Content>;

export type SelectItemGroupLabelProps = ComponentProps<typeof SelectPrimitive.ItemGroupLabel>;

export type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>;

export type SelectClearTriggerProps = ComponentProps<typeof SelectPrimitive.ClearTrigger>;

export type SelectEmptyProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export const SelectContext = SelectPrimitive.Context;

export function SelectRoot<T extends CollectionItem = CollectionItem>({
  children,
  onValueChange,
  variant,
  ...rest
}: SelectRootProps<T>) {
  const slots = selectVariants();

  return (
    <SelectRootContext value={{ slots }}>
      <SelectPrimitive.Root
        {...rest}
        onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
      >
        {children}

        <SelectPrimitive.HiddenSelect />
      </SelectPrimitive.Root>
    </SelectRootContext>
  );
}

export function SelectTrigger({
  size = "md",
  variant: variantProp,
  clearable = false,
  children,
  className,
  ...rest
}: SelectTriggerProps) {
  const { slots = selectVariants() } = useSelectRoot() ?? {};
  const resolved = {
    surfaceVariant: undefined,
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = { variant: resolved.variant };
  const controlProps = { "data-variant": resolved.variant };

  return (
    <SelectPrimitive.Control>
      <SelectPrimitive.Trigger
        {...rest}
        {...controlProps}
        className={cn(formControlShellVariants({ size, ...shellArgs }), slots.trigger(), className)}
      >
        {children}

        <div className={slots.triggerActions()}>
          {clearable && (
            <SelectClearTrigger>
              <XIcon />
            </SelectClearTrigger>
          )}
          <SelectPrimitive.Indicator>
            <CaretUpDownIcon />
          </SelectPrimitive.Indicator>
        </div>
      </SelectPrimitive.Trigger>
    </SelectPrimitive.Control>
  );
}

export function SelectSeparator({ className, ...rest }: SeparatorProps) {
  const { slots = selectVariants() } = useSelectRoot() ?? {};

  return (
    <Separator
      {...rest}
      className={slots.separator({ className })}
      data-part="separator"
      data-scope="select"
    />
  );
}

export function SelectValueText({ className, ...rest }: SelectValueTextProps) {
  const { slots = selectVariants() } = useSelectRoot() ?? {};

  return <SelectPrimitive.ValueText {...rest} className={slots.valueText({ className })} />;
}

export function SelectContent({ className, ...rest }: SelectContentProps) {
  const { slots = selectVariants() } = useSelectRoot() ?? {};

  return (
    <Portal>
      <SelectPrimitive.Positioner>
        <SelectPrimitive.Content {...rest} className={slots.content({ className })} />
      </SelectPrimitive.Positioner>
    </Portal>
  );
}

export function SelectItemGroup({ children, heading, ...rest }: SelectItemGroupProps) {
  return (
    <SelectPrimitive.ItemGroup {...rest}>
      {!heading && <SelectItemGroupLabel>{heading}</SelectItemGroupLabel>}

      {children}
    </SelectPrimitive.ItemGroup>
  );
}

export function SelectItemGroupLabel({ className, ...rest }: SelectItemGroupLabelProps) {
  const { slots = selectVariants() } = useSelectRoot() ?? {};

  return (
    <SelectPrimitive.ItemGroupLabel {...rest} className={slots.itemGroupLabel({ className })} />
  );
}

export function SelectItem({ children, className, ...rest }: SelectItemProps) {
  const { slots = selectVariants() } = useSelectRoot() ?? {};

  return (
    <SelectPrimitive.Item {...rest} className={slots.item({ className })}>
      <SelectPrimitive.ItemText className={slots.itemText()}>{children}</SelectPrimitive.ItemText>

      <span className={slots.itemIndicator()}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

export function SelectClearTrigger({ className, ...rest }: SelectClearTriggerProps) {
  const { slots = selectVariants() } = useSelectRoot() ?? {};

  return (
    <SelectPrimitive.ClearTrigger
      {...rest}
      aria-label="Clear selected value(s)"
      className={slots.clearTrigger({ className })}
    />
  );
}

export function SelectEmpty({ className, ...rest }: SelectEmptyProps) {
  const { empty } = useSelectContext();
  const { slots = selectVariants() } = useSelectRoot() ?? {};

  if (empty) {
    return <ark.div {...rest} className={slots.empty({ className })} role="presentation" />;
  }

  return null;
}
// #endregion

// #region Shorthand
export function SelectShorthand({
  clearable = false,
  items = [],
  placeholder,
  ...rest
}: SelectProps) {
  const normalized = items.map((item) =>
    typeof item === "string" ? { label: item, value: item } : item,
  );
  const collection = createListCollection({ items: normalized });

  return (
    <SelectRoot {...rest} collection={collection}>
      <SelectTrigger clearable={clearable}>
        <SelectValueText placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {normalized.map((item) => (
          <SelectItem item={item} key={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
// #endregion

// #region Display Names
SelectRoot.displayName = "Select.Root";
SelectTrigger.displayName = "Select.Trigger";
SelectSeparator.displayName = "Select.Separator";
SelectValueText.displayName = "Select.ValueText";
SelectContent.displayName = "Select.Content";
SelectItemGroup.displayName = "Select.ItemGroup";
SelectItemGroupLabel.displayName = "Select.ItemGroupLabel";
SelectItem.displayName = "Select.Item";
SelectClearTrigger.displayName = "Select.ClearTrigger";
SelectEmpty.displayName = "Select.Empty";
SelectShorthand.displayName = "Select";
// #endregion
