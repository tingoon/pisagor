import { createListCollection } from "@ark-ui/react/collection";
import { CaretUpDownIcon, GlobeIcon } from "@phosphor-icons/react";
import {
  type PhoneInputVariantProps,
  phoneInputCountryTriggerVariants,
  phoneInputInline2Variants,
  phoneInputInline3Variants,
  phoneInputInline4Variants,
  phoneInputInline5Variants,
  phoneInputInline6Variants,
  phoneInputInline7Variants,
  phoneInputInline8Variants,
  phoneInputInline9Variants,
  phoneInputInline10Variants,
  phoneInputInlineVariants,
  phoneInputVariants,
} from "@pisagor/styles/ui/phone-input";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import type { DefaultInputComponentProps, FlagProps } from "react-phone-number-input";
import RPNPhoneInput, { type Country, getCountryCallingCode } from "react-phone-number-input";
import type { FormControlVariant } from "../../internal/form-control/form-control-variants";
import type { VariantClassNames, WithTestId } from "../../internal/types";
import { Combobox, type ComboboxContentProps } from "../combobox";
import type { InputProps } from "../input";
import { InputGroup } from "../input-group";
import { PhoneInputContextProvider, usePhoneInputContext } from "./phone-input.context";
import { phoneInputFlags } from "./phone-input-flags";

// #region Types
type PhoneInputClassNames = VariantClassNames<typeof phoneInputVariants>;

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
    >,
    WithTestId {
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
// #endregion

// #region Internal components
function PhoneInputContainer({ className, children, ...rest }: ComponentProps<"div">) {
  const { size, testId, variant } = usePhoneInputContext();

  return (
    <InputGroup
      {...rest}
      className={cn(className)}
      data-part="root"
      data-scope="phone-input"
      data-size={size}
      data-testid={testId}
      size={size}
      variant={variant}
    >
      {children}
    </InputGroup>
  );
}

function PhoneInputFlag({ country, countryName }: FlagProps) {
  const { classNames, slots } = usePhoneInputContext();
  const flagClassName = slots.flag({ className: classNames?.flag });
  const emoji = country ? phoneInputFlags[country] : undefined;

  if (!emoji) {
    return <GlobeIcon aria-hidden className={cn(phoneInputInlineVariants(), flagClassName)} />;
  }

  return (
    <span
      aria-label={countryName}
      className={cn(phoneInputInline2Variants(), flagClassName)}
      role="img"
    >
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
  const { classNames, inputProps, invalid, size, slots } = usePhoneInputContext();

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
  const { classNames, popupProps, size, slots } = usePhoneInputContext();

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
      className={phoneInputInline4Variants()}
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
        className={cn(
          phoneInputCountryTriggerVariants(),
          slots.countryTrigger({ className: classNames?.countryTrigger }),
        )}
        data-part="country-trigger"
        data-scope="phone-input"
      >
        <Combobox.Control className={phoneInputInline5Variants()}>
          <Combobox.Trigger
            aria-label="Select country"
            className={phoneInputInline6Variants()}
            disabled={isDisabled}
            onBlur={onBlur}
            onFocus={onFocus}
          >
            <InputGroup.Button
              className={cn(phoneInputInline3Variants())}
              disabled={isDisabled}
              size="sm"
              type="button"
              variant="ghost"
            >
              {value ? <PhoneInputFlag country={value} countryName={value} /> : null}
              {callingCode ? <span>+{callingCode}</span> : null}
              <CaretUpDownIcon aria-hidden className={phoneInputInline7Variants()} />
            </InputGroup.Button>
          </Combobox.Trigger>
        </Combobox.Control>
      </InputGroup.Addon>
      <Combobox.Content {...popupProps} className={slots.popup({ className: classNames?.popup })}>
        <div className={phoneInputInline8Variants()}>
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
              <span className={phoneInputInline9Variants()}>{item.label}</span>
              <span className={phoneInputInline10Variants()}>
                +{getCountryCallingCode(item.value)}
              </span>
            </Combobox.Item>
          ))}
        </Combobox.List>
        <Combobox.Empty>No country found. Try a different search.</Combobox.Empty>
      </Combobox.Content>
    </Combobox.Root>
  );
}
// #endregion

// #region Part
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
  testId,
  ...rest
}: PhoneInputProps) {
  const slots = phoneInputVariants({ size });

  const contextValue = useMemo(
    () => ({
      classNames,
      inputProps,
      invalid,
      popupProps,
      size,
      slots,
      testId,
      variant,
    }),
    [classNames, inputProps, invalid, popupProps, size, slots, testId, variant],
  );

  return (
    <PhoneInputContextProvider value={contextValue}>
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
    </PhoneInputContextProvider>
  );
}

PhoneInput.displayName = "PhoneInput";
// #endregion
