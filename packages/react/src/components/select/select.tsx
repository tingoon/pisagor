import { Portal } from "@ark-ui/react";
import {
  type CollectionItem,
  createListCollection,
  type ListCollection,
} from "@ark-ui/react/collection";
import { ark } from "@ark-ui/react/factory";
import {
  Select as SelectPrimitive,
  type SelectRootProps as SelectRootPropsPrimitive,
  useSelectContext as useSelect,
} from "@ark-ui/react/select";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import type { InputRootVariantProps } from "@pisagor/styles/ui/input";
import {
  selectClearTriggerVariants,
  selectContentVariants,
  selectGroupLabelVariants,
  selectInline2Variants,
  selectInline3Variants,
  selectInlineVariants,
  selectItemVariants,
  selectSeparatorVariants,
  selectTriggerVariants,
} from "@pisagor/styles/ui/select";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import { FormControlVariantProvider } from "../../internal/form-control/form-control-variant-context";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import {
  formControlShellProps,
  formControlShellVariants,
  shellVariantArgs,
} from "../../internal/form-control/form-control-variants";
import { useFormControlVariant } from "../../internal/form-control/use-form-control-variant";
import type { WithTestId } from "../../internal/types";
import { Separator, type SeparatorProps } from "../separator";
import { SelectRootContext, useSelectRoot } from "./select.context";

// #region Types
interface SelectPresetItem {
  label: string;
  value: string;
}

export type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  SelectRootPropsPrimitive<T>,
  "collection" | "onValueChange"
> & {
  /**
   * Visual shell variant. When omitted, resolves from the nearest `Surface` context.
   */
  variant?: FormControlVariant;
  collection?: ListCollection<T>;
  onValueChange?: (value: string | string[]) => void;
} & WithTestId;

export interface SelectProps extends Omit<SelectRootProps, "children"> {
  items?: Array<SelectPresetItem | string>;
  /**
   * Whether to show a clear button when a value is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
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

export interface SelectGroupProps extends ComponentProps<typeof SelectPrimitive.ItemGroup> {
  /** The heading of the group */
  heading?: string | ReactNode;
}

export type SelectValueProps = ComponentProps<typeof SelectPrimitive.ValueText>;

export type SelectContentProps = ComponentProps<typeof SelectPrimitive.Content>;

export type SelectGroupLabelProps = ComponentProps<typeof SelectPrimitive.ItemGroupLabel>;

export type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>;

export type SelectClearTriggerProps = ComponentProps<typeof SelectPrimitive.ClearTrigger>;
// #endregion

// #region Parts
export const SelectContext = SelectPrimitive.Context;

export function SelectRoot<T extends CollectionItem = CollectionItem>({
  lazyMount = true,
  unmountOnExit = true,
  children,
  collection: collectionProp,
  onValueChange,
  variant,
  testId,
  ...rest
}: SelectRootProps<T>) {
  const { "data-testid": dataTestId, ...props } = rest as typeof rest & { "data-testid"?: string };
  const rootContext = { testId: dataTestId ?? testId };

  return (
    <SelectRootContext value={rootContext}>
      <FormControlVariantProvider value={variant}>
        <SelectPrimitive.Root
          lazyMount={lazyMount}
          onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
          unmountOnExit={unmountOnExit}
          {...props}
          collection={collectionProp as ListCollection<T>}
        >
          {children}

          <SelectPrimitive.HiddenSelect />
        </SelectPrimitive.Root>
      </FormControlVariantProvider>
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
  const { testId } = useSelectRoot() ?? {};
  const resolved = useFormControlVariant(variantProp);
  const shellArgs = shellVariantArgs(resolved);
  const controlProps = formControlShellProps(resolved);

  return (
    <SelectPrimitive.Control>
      <SelectPrimitive.Trigger
        {...rest}
        {...controlProps}
        className={cn(
          formControlShellVariants({ size, ...shellArgs }),
          selectTriggerVariants(),
          className,
        )}
        data-testid={testId}
      >
        {children}

        <div className={selectInline3Variants()}>
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
  return (
    <Separator
      {...rest}
      className={selectSeparatorVariants({ className })}
      dataPart="separator"
      dataScope="select"
    />
  );
}

export function SelectValue({ className, ...rest }: SelectValueProps) {
  return <SelectPrimitive.ValueText {...rest} className={selectInlineVariants({ className })} />;
}

export function SelectContent({ className, ...rest }: SelectContentProps) {
  return (
    <Portal>
      <SelectPrimitive.Positioner>
        <SelectPrimitive.Content {...rest} className={selectContentVariants({ className })} />
      </SelectPrimitive.Positioner>
    </Portal>
  );
}

export function SelectGroup({ heading, children, ...rest }: SelectGroupProps) {
  return (
    <SelectPrimitive.ItemGroup {...rest}>
      {!heading && <SelectGroupLabel>{heading}</SelectGroupLabel>}

      {children}
    </SelectPrimitive.ItemGroup>
  );
}

export function SelectGroupLabel({ className, ...rest }: SelectGroupLabelProps) {
  return (
    <SelectPrimitive.ItemGroupLabel {...rest} className={selectGroupLabelVariants({ className })} />
  );
}

export function SelectItem({ className, children, ...rest }: SelectItemProps) {
  const recipe = selectItemVariants();

  return (
    <SelectPrimitive.Item {...rest} className={recipe.base({ className })}>
      <SelectPrimitive.ItemText className={recipe.text()}>{children}</SelectPrimitive.ItemText>

      <span className={recipe.indicator()}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

export function SelectClearTrigger({ className, ...rest }: SelectClearTriggerProps) {
  return (
    <SelectPrimitive.ClearTrigger
      {...rest}
      aria-label="Clear selected value(s)"
      className={selectClearTriggerVariants({ className })}
    />
  );
}

export function SelectEmpty({ className, ...rest }: ComponentProps<typeof ark.div>) {
  const { empty } = useSelect();

  if (empty) {
    return (
      <ark.div {...rest} className={selectInline2Variants({ className })} role="presentation" />
    );
  }

  return null;
}
// #endregion

// #region Shorthand
export function SelectShorthand({
  items = [],
  clearable = false,
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
        <SelectValue placeholder={placeholder} />
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
SelectValue.displayName = "Select.Value";
SelectContent.displayName = "Select.Content";
SelectGroup.displayName = "Select.Group";
SelectGroupLabel.displayName = "Select.GroupLabel";
SelectItem.displayName = "Select.Item";
SelectClearTrigger.displayName = "Select.ClearTrigger";
SelectEmpty.displayName = "Select.Empty";
SelectShorthand.displayName = "Select";
// #endregion
