import { Portal } from "@ark-ui/react";
import {
  type CollectionItem,
  createListCollection,
} from "@ark-ui/react/collection";
import { ark } from "@ark-ui/react/factory";
import type {
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupLabelProps,
  SelectItemProps,
  SelectItemGroupProps as SelectPrimitiveItemGroupProps,
  SelectRootProps as SelectPrimitiveRootProps,
  SelectTriggerProps as SelectPrimitiveTriggerProps,
  SelectValueTextProps,
} from "@ark-ui/react/select";
import {
  Select as SelectPrimitive,
  useSelectContext,
} from "@ark-ui/react/select";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import type { SelectProps as BaseSelectRootProps } from "@pisagor/props";
import {
  type FormControlShellVariantProps,
  formControlShellRecipe,
  selectRecipe,
} from "@pisagor/recipes";

import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { use } from "react";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { Separator, type SeparatorProps } from "./separator";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: SelectStylesContext } = createSlotRecipeContext({
  name: "Select",
  recipe: selectRecipe,
});

function useSelectSlots() {
  const styles = use(SelectStylesContext);
  return styles?.slots ?? selectRecipe();
}
// #endregion

// #region Types
type FormControlVariant = "primary" | "secondary";

interface SelectPresetItem {
  label: string;
  value: string;
}

export type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  SelectPrimitiveRootProps<T>,
  "onValueChange"
> & {
  /**
   * Visual shell variant. Defaults to `primary`.
   */
  variant?: FormControlVariant;
  onValueChange?: (value: string | string[]) => void;
} & BaseSelectRootProps;

export interface SelectProps
  extends Omit<SelectRootProps, "children" | "collection"> {
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
  extends Omit<SelectPrimitiveTriggerProps, "size">,
    FormControlShellVariantProps {
  /**
   * Whether to show a clear button when a value is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
}

export interface SelectItemGroupProps extends SelectPrimitiveItemGroupProps {
  /** The heading of the group */
  heading?: string | ReactNode;
}

export type SelectEmptyProps = ComponentProps<typeof ark.div>;
// #endregion

// #region Parts
export const SelectContext = SelectPrimitive.Context;

export function SelectRoot<T extends CollectionItem = CollectionItem>({
  children,
  onValueChange,
  variant,
  recipe = selectRecipe,
  ...rest
}: SelectRootProps<T>) {
  const slots = recipe();

  return (
    <SelectStylesContext value={{ slots, variants: {} as never }}>
      <SelectPrimitive.Root
        {...rest}
        onValueChange={
          onValueChange ? (details) => onValueChange(details.value) : undefined
        }
      >
        {children}

        <SelectPrimitive.HiddenSelect />
      </SelectPrimitive.Root>
    </SelectStylesContext>
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
  const slots = useSelectSlots();
  const resolved = {
    surfaceVariant: useFormControlSurface(),
    variant: variantProp ?? ("primary" as FormControlVariant),
  };
  const shellArgs = {
    surfaceVariant: resolved.surfaceVariant,
    variant: resolved.variant,
  };
  const controlProps = { "data-variant": resolved.variant };

  return (
    <SelectPrimitive.Control>
      <SelectPrimitive.Trigger
        {...rest}
        {...controlProps}
        className={cn(
          formControlShellRecipe({ size, ...shellArgs }),
          slots.trigger(),
          className,
        )}
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
  const slots = useSelectSlots();

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
  const slots = useSelectSlots();

  return (
    <SelectPrimitive.ValueText
      {...rest}
      className={slots.valueText({ className })}
    />
  );
}

export function SelectContent({ className, ...rest }: SelectContentProps) {
  const slots = useSelectSlots();

  return (
    <Portal>
      <SelectPrimitive.Positioner>
        <SelectPrimitive.Content
          {...rest}
          className={slots.content({ className })}
        />
      </SelectPrimitive.Positioner>
    </Portal>
  );
}

export function SelectItemGroup({
  children,
  heading,
  ...rest
}: SelectItemGroupProps) {
  return (
    <SelectPrimitive.ItemGroup {...rest}>
      {!heading && <SelectItemGroupLabel>{heading}</SelectItemGroupLabel>}

      {children}
    </SelectPrimitive.ItemGroup>
  );
}

export function SelectItemGroupLabel({
  className,
  ...rest
}: SelectItemGroupLabelProps) {
  const slots = useSelectSlots();

  return (
    <SelectPrimitive.ItemGroupLabel
      {...rest}
      className={slots.itemGroupLabel({ className })}
    />
  );
}

export function SelectItem({ children, className, ...rest }: SelectItemProps) {
  const slots = useSelectSlots();

  return (
    <SelectPrimitive.Item {...rest} className={slots.item({ className })}>
      <SelectPrimitive.ItemText className={slots.itemText()}>
        {children}
      </SelectPrimitive.ItemText>

      <span className={slots.itemIndicator()}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

export function SelectClearTrigger({
  className,
  ...rest
}: SelectClearTriggerProps) {
  const slots = useSelectSlots();

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
  const slots = useSelectSlots();

  if (empty) {
    return (
      <ark.div
        {...rest}
        className={slots.empty({ className })}
        role="presentation"
      />
    );
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

export type {
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupLabelProps,
  SelectItemProps,
  SelectValueTextProps,
} from "@ark-ui/react/select";

export const Select = Object.assign(SelectShorthand, {
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Context: SelectContext,
  Empty: SelectEmpty,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  Root: SelectRoot,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
});
