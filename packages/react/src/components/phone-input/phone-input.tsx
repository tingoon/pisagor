import { createListCollection } from "@ark-ui/react/collection";
import { CaretUpDownIcon, GlobeIcon } from "@phosphor-icons/react";
import {
  type PhoneInputSlots,
  type PhoneInputVariantProps,
  phoneInputVariants,
} from "@pisagor/styles/ui/phone-input";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import type { DefaultInputComponentProps, FlagProps } from "react-phone-number-input";
import RPNPhoneInput, { type Country, getCountryCallingCode } from "react-phone-number-input";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { VariantClassNames } from "../../internal/types";
import { Combobox, type ComboboxContentProps } from "../combobox";
import type { InputProps } from "../input";
import { InputGroup } from "../input-group";
import { PhoneInputContext, usePhoneInput } from "./phone-input.context";
import { phoneInputFlags } from "./phone-input-flags";

// #region Types
type PhoneInputClassNames = VariantClassNames<PhoneInputSlots>;

type PhoneInputSize = NonNullable<PhoneInputVariantProps["size"]>;

interface CountrySelectOption {
  label: string;
  value?: Country;
}

interface PhoneInputCountrySelectProps {
  "aria-label"?: string;
  disabled?: boolean;
  name?: string;
  onBlur?: () => void;
  onChange: (country?: Country) => void;
  onFocus?: () => void;
  options: CountrySelectOption[];
  readOnly?: boolean;
  tabIndex?: number | string;
  value?: Country;
}

export interface PhoneInputProps
  extends Omit<
    ComponentProps<typeof RPNPhoneInput>,
    "onChange" | "value" | "flagComponent" | "countrySelectComponent" | "inputComponent"
  > {
  /** Vertical size of the input and country selector */
  size?: PhoneInputSize;
  /** Visual shell variant. When omitted, resolves from the nearest `Surface` context. */
  variant?: FormControlVariant;
  /** Whether the input is in an invalid state */
  invalid?: boolean;
  /** Current phone number in E.164 format */
  value?: string;
  /** Default country when no value is provided */
  defaultCountry?: Country;
  /** Called with the E.164 phone number when the value changes */
  onChange?: (value: string) => void;
  /** Slot class names */
  classNames?: PhoneInputClassNames;
  /** Tel input props (except `className`). */
  inputProps?: Omit<InputProps, "className" | "onChange" | "onBlur" | "size" | "type" | "value">;
  /** Country dropdown props (Combobox.Content, except `className` and `children`). */
  popupProps?: Omit<ComboboxContentProps, "className" | "children">;
}

interface PhoneInputContainerProps extends ComponentProps<"div"> {}
// #endregion

// #region Parts
function PhoneInputContainer({ className, children, ...rest }: PhoneInputContainerProps) {
  const { size, variant } = usePhoneInput();

  return (
    <InputGroup
      {...rest}
      className={cn(className)}
      data-part="root"
      data-scope="phone-input"
      data-size={size}
      size={size}
      variant={variant}
    >
      {children}
    </InputGroup>
  );
}

function PhoneInputFlag({ country, countryName }: FlagProps) {
  const { classNames, slots } = usePhoneInput();
  const flagClassName = slots.flag({ className: classNames?.flag });
  const emoji = country ? phoneInputFlags[country] : undefined;

  if (!emoji) {
    return <GlobeIcon aria-hidden className={cn(slots.flagIcon(), flagClassName)} />;
  }

  return (
    <span aria-label={countryName} className={cn(slots.flagEmoji(), flagClassName)} role="img">
      {emoji}
    </span>
  );
}

function PhoneInputField({
  className,
  onBlur,
  onChange,
  onFocus,
  ref,
  value,
  ...rest
}: DefaultInputComponentProps) {
  const { classNames, inputProps, invalid, size, slots } = usePhoneInput();

  return (
    <InputGroup.Input
      {...rest}
      {...inputProps}
      aria-invalid={invalid || undefined}
      autoComplete={inputProps?.autoComplete ?? rest.autoComplete ?? "tel"}
      className={slots.input({ className: cn(className, classNames?.input) })}
      classNames={inputProps?.classNames}
      onBlur={onBlur}
      onChange={(event) => onChange?.(event.target.value)}
      onFocus={onFocus}
      ref={ref}
      size={size}
      type="tel"
      value={value ?? ""}
    />
  );
}

function PhoneInputCountrySelect({
  disabled,
  onBlur,
  onChange,
  onFocus,
  options,
  readOnly,
  value,
}: PhoneInputCountrySelectProps) {
  const { classNames, popupProps, size, slots } = usePhoneInput();

  const items = useMemo(
    () =>
      options
        .filter((option): option is { label: string; value: Country } => Boolean(option.value))
        .map((option) => ({ label: option.label, value: option.value })),
    [options],
  );

  const collection = useMemo(() => createListCollection({ items }), [items]);

  const callingCode = value ? getCountryCallingCode(value) : "";
  const isDisabled = disabled || readOnly;

  return (
    <Combobox.Root
      className={slots.countryRoot()}
      collection={collection}
      disabled={isDisabled}
      onValueChange={(nextValue) => {
        onChange(nextValue[0] as Country | undefined);
      }}
      positioning={{ sameWidth: false }}
      value={value ? [value] : []}
    >
      <InputGroup.Addon
        align="inline-start"
        className={slots.countryTrigger({ className: classNames?.countryTrigger })}
        data-part="country-trigger"
        data-scope="phone-input"
      >
        <Combobox.Control className={slots.countryControl()}>
          <Combobox.Trigger
            aria-label="Select country"
            className={slots.countrySelect()}
            disabled={isDisabled}
            onBlur={onBlur}
            onFocus={onFocus}
          >
            <InputGroup.Button
              className={slots.countryButton()}
              disabled={isDisabled}
              size="sm"
              type="button"
              variant="ghost"
            >
              {value ? <PhoneInputFlag country={value} countryName={value} /> : null}
              {callingCode ? <span>+{callingCode}</span> : null}
              <CaretUpDownIcon aria-hidden className={slots.countryCaret()} />
            </InputGroup.Button>
          </Combobox.Trigger>
        </Combobox.Control>
      </InputGroup.Addon>
      <Combobox.Content {...popupProps} className={slots.popup({ className: classNames?.popup })}>
        <div className={slots.searchGroup()}>
          <InputGroup size={size}>
            <Combobox.FieldInput asChild>
              <InputGroup.Input
                className={slots.search({ className: classNames?.search })}
                placeholder="Search country..."
              />
            </Combobox.FieldInput>
          </InputGroup>
        </div>
        <Combobox.List>
          {items.map((item) => (
            <Combobox.Item item={item} key={item.value}>
              <PhoneInputFlag country={item.value} countryName={item.label} />
              <span className={slots.itemLabel()}>{item.label}</span>
              <span className={slots.itemCode()}>+{getCountryCallingCode(item.value)}</span>
            </Combobox.Item>
          ))}
        </Combobox.List>
        <Combobox.Empty>No country found. Try a different search.</Combobox.Empty>
      </Combobox.Content>
    </Combobox.Root>
  );
}
// #endregion

// #region Closed
export function PhoneInput({
  className,
  classNames,
  defaultCountry,
  disabled,
  inputProps,
  invalid,
  onChange,
  popupProps,
  size = "md",
  variant,
  value,
  ...rest
}: PhoneInputProps) {
  const slots = useMemo(() => phoneInputVariants({ size }), [size]);

  const contextValue = useMemo(
    () => ({
      classNames,
      inputProps,
      invalid,
      popupProps,
      size,
      slots,
      variant,
    }),
    [classNames, inputProps, invalid, popupProps, size, slots, variant],
  );

  return (
    <PhoneInputContext value={contextValue}>
      <RPNPhoneInput
        {...rest}
        className={cn(className)}
        containerComponent={PhoneInputContainer}
        countrySelectComponent={PhoneInputCountrySelect}
        data-disabled={disabled || undefined}
        defaultCountry={defaultCountry}
        disabled={disabled}
        flagComponent={PhoneInputFlag}
        inputComponent={PhoneInputField}
        onChange={(nextValue) => onChange?.(nextValue ?? "")}
        smartCaret={false}
        value={value || undefined}
      />
    </PhoneInputContext>
  );
}
// #endregion

// #region Display Names
PhoneInput.displayName = "PhoneInput";
// #endregion
