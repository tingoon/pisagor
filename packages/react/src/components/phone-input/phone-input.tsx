import { createListCollection, Portal } from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon, GlobeIcon } from "@phosphor-icons/react";
import type {
  PhoneInputContract,
  PhoneInputRootContract,
} from "@pisagor/contracts";
import { phoneInputRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import type {
  DefaultInputComponentProps,
  FlagProps,
} from "react-phone-number-input";
import RPNPhoneInput, {
  type Country,
  getCountryCallingCode,
} from "react-phone-number-input";
import { createSlotRecipeContext } from "../../internal";
import type { FormControlVariant } from "../../internal";
import { Combobox, type ComboboxContentProps } from "../combobox";
import type { InputProps } from "../input";
import { InputGroup } from "../input-group";
import { useLocale } from "../provider/context";
import { PhoneInputContext, usePhoneInput } from "./phone-input.context";
import { phoneInputFlags } from "./phone-input-flags";

// #region Context
const { Context } = createSlotRecipeContext({
  name: "PhoneInput",
  recipe: phoneInputRecipe,
});
// #endregion

// #region Types
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
  extends
    Omit<
      ComponentProps<typeof RPNPhoneInput>,
      | "onChange"
      | "value"
      | "flagComponent"
      | "countrySelectComponent"
      | "inputComponent"
    >,
    PhoneInputRootContract,
    PhoneInputContract {
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
  /** Default country when no value is provided */
  defaultCountry?: Country;
  /** Whether the input is in an invalid state */
  invalid?: boolean;
  /** Current phone number in E.164 format */
  value?: string;
  /** Called with the E.164 phone number when the value changes */
  onChange?: (value: string) => void;
  /** Tel input props (except `className`). */
  inputProps?: Omit<
    InputProps,
    "className" | "onChange" | "onBlur" | "size" | "type" | "value"
  >;
  /**
   * Country dropdown props (Combobox.Content, except `className` and
   * `children`).
   */
  popupProps?: Omit<ComboboxContentProps, "className" | "children">;
}

type PhoneInputContainerProps = ComponentProps<"div">;
// #endregion

// #region Parts
function Container({ children, className, ...rest }: PhoneInputContainerProps) {
  const { size, variant } = usePhoneInput();

  return (
    <InputGroup
      {...rest}
      className={className}
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

function Flag({ country, countryName }: FlagProps) {
  const { classNames, slots } = usePhoneInput();
  const flagClassName = slots.flag({ className: classNames?.flag });
  const emoji = country ? phoneInputFlags[country] : undefined;

  if (!emoji) {
    return (
      <GlobeIcon aria-hidden className={cn(slots.flagIcon(), flagClassName)} />
    );
  }

  return (
    <span
      aria-label={countryName}
      className={cn(slots.flagEmoji(), flagClassName)}
      data-part="flag"
      data-scope="phone-input"
      role="img"
    >
      {emoji}
    </span>
  );
}

function Field({
  value,
  ref,
  onBlur,
  onChange,
  onFocus,
  className,
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

function CountrySelect({
  disabled,
  readOnly,
  value,
  options,
  onBlur,
  onChange,
  onFocus,
}: PhoneInputCountrySelectProps) {
  const { m } = useLocale();
  const { classNames, popupProps, size, slots } = usePhoneInput();

  const items = useMemo(
    () =>
      options
        .filter((option): option is { label: string; value: Country } =>
          Boolean(option.value),
        )
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
      onValueChange={(details) => {
        onChange(details.value[0] as Country | undefined);
      }}
      positioning={{ sameWidth: false }}
      value={value ? [value] : []}
    >
      <InputGroup.Addon
        align="inline-start"
        className={slots.countryTrigger({
          className: classNames?.countryTrigger,
        })}
        data-part="country-trigger"
        data-scope="phone-input"
      >
        <Combobox.Control className={slots.countryControl()}>
          <Combobox.Trigger
            aria-label={m("phoneInput.selectCountry")}
            asChild
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
              {value ? (
                <Flag
                  country={value}
                  countryName={
                    items.find((item) => item.value === value)?.label ?? value
                  }
                />
              ) : null}
              {callingCode ? <span>+{callingCode}</span> : null}
              <CaretUpDownIcon aria-hidden className={slots.countryCaret()} />
            </InputGroup.Button>
          </Combobox.Trigger>
        </Combobox.Control>
      </InputGroup.Addon>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content
            {...popupProps}
            className={slots.popup({ className: classNames?.popup })}
          >
            <div className={slots.searchGroup()}>
              <InputGroup size={size}>
                <Combobox.Input asChild>
                  <InputGroup.Input
                    className={slots.search({ className: classNames?.search })}
                    placeholder={m("phoneInput.search")}
                  />
                </Combobox.Input>
              </InputGroup>
            </div>
            <Combobox.List>
              {items.map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  <Flag country={item.value} countryName={item.label} />
                  <span className={slots.itemLabel()}>{item.label}</span>
                  <span className={slots.itemCode()}>
                    +{getCountryCallingCode(item.value)}
                  </span>
                  <Combobox.ItemIndicator>
                    <CheckIcon />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.List>
            <Combobox.Empty>{m("phoneInput.empty")}</Combobox.Empty>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
}
// #endregion

// #region Closed
function PhoneInputShorthand({
  size = "md",
  variant,
  defaultCountry,
  disabled,
  invalid,
  value,
  inputProps,
  popupProps,
  onChange,
  recipe = phoneInputRecipe,
  className,
  classNames,
  ...rest
}: PhoneInputProps) {
  const slots = useMemo(() => recipe({ size }), [size, recipe]);

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
    <Context value={{ slots, variants: { size } as never }}>
      <PhoneInputContext value={contextValue}>
        <RPNPhoneInput
          {...rest}
          className={className}
          containerComponent={Container}
          countrySelectComponent={CountrySelect}
          data-disabled={disabled || undefined}
          defaultCountry={defaultCountry}
          disabled={disabled}
          flagComponent={Flag}
          inputComponent={Field}
          onChange={(nextValue) => onChange?.(nextValue ?? "")}
          smartCaret={false}
          value={value || undefined}
        />
      </PhoneInputContext>
    </Context>
  );
}
// #endregion

export const PhoneInput = Object.assign(PhoneInputShorthand, {
  Container,
  CountrySelect,
  Field,
  Flag,
});
