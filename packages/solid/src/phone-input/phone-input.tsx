import { createListCollection } from "@ark-ui/solid/collection";
import {
  type PhoneInputRecipeSlot,
  type PhoneInputVariantProps,
  phoneInputRecipe,
} from "@pisagor/recipes/phone-input";
import { cn } from "@pisagor/utils";
import {
  AsYouType,
  type CountryCode,
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import type { ComponentProps, JSX } from "solid-js";
import {
  createEffect,
  createMemo,
  createSignal,
  For,
  Show,
  splitProps,
} from "solid-js";
import { Combobox, type ComboboxContentProps } from "../components/combobox";
import type { InputProps } from "../components/input";
import { InputGroup } from "../components/input-group";
import { CaretUpDownIcon, GlobeIcon } from "../internal/icons";
import type { VariantClassNames } from "../internal/types";
import { PhoneInputContext, usePhoneInput } from "./phone-input.context";
import { phoneInputFlags } from "./phone-input-flags";

type FormControlVariant = "primary" | "secondary";
type PhoneInputClassNames = VariantClassNames<PhoneInputRecipeSlot>;
export type Country = CountryCode;

interface CountrySelectOption {
  label: string;
  value: Country;
}

export interface PhoneInputProps extends PhoneInputVariantProps {
  variant?: FormControlVariant;
  defaultCountry?: Country;
  invalid?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  name?: string;
  id?: string;
  class?: string;
  recipe?: typeof phoneInputRecipe;
  classNames?: PhoneInputClassNames;
  inputProps?: Omit<
    InputProps,
    "class" | "onChange" | "onBlur" | "size" | "type" | "value"
  >;
  popupProps?: Omit<ComboboxContentProps, "class" | "children">;
}

type PhoneInputContainerProps = ComponentProps<"div">;

function countryLabel(code: Country): string {
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
}

function PhoneInputContainer(props: PhoneInputContainerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class", "children"]);
  const ctx = usePhoneInput();
  return (
    <InputGroup
      {...rest}
      class={cn(local.class)}
      data-part="root"
      data-scope="phone-input"
      data-size={ctx.size}
      size={ctx.size}
      variant={ctx.variant}
    >
      {local.children}
    </InputGroup>
  );
}

function PhoneInputFlag(props: {
  country?: Country;
  countryName?: string;
}): JSX.Element {
  const ctx = usePhoneInput();
  const flagClass = () => ctx.slots.flag({ class: ctx.classNames?.flag });
  const emoji = () =>
    props.country ? phoneInputFlags[props.country] : undefined;

  return (
    <Show
      fallback={
        <GlobeIcon aria-hidden class={cn(ctx.slots.flagIcon(), flagClass())} />
      }
      when={emoji()}
    >
      {(flag) => (
        <span
          aria-label={props.countryName}
          class={cn(ctx.slots.flagEmoji(), flagClass())}
          role="img"
        >
          {flag()}
        </span>
      )}
    </Show>
  );
}

function PhoneInputCountrySelect(props: {
  disabled?: boolean;
  readOnly?: boolean;
  value?: Country;
  options: CountrySelectOption[];
  onChange: (country?: Country) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}): JSX.Element {
  const ctx = usePhoneInput();
  const items = createMemo(() =>
    props.options.map((option) => ({
      label: option.label,
      value: option.value,
    })),
  );
  const collection = createMemo(() => createListCollection({ items: items() }));
  const callingCode = () =>
    props.value ? getCountryCallingCode(props.value) : "";
  const isDisabled = () => props.disabled || props.readOnly;

  return (
    <Combobox.Root
      class={ctx.slots.countryRoot()}
      collection={collection()}
      disabled={isDisabled()}
      onValueChange={(nextValue) => {
        props.onChange(nextValue[0] as Country | undefined);
      }}
      positioning={{ sameWidth: false }}
      value={props.value ? [props.value] : []}
    >
      <InputGroup.Addon
        align="inline-start"
        class={ctx.slots.countryTrigger({
          class: ctx.classNames?.countryTrigger,
        })}
        data-part="country-trigger"
        data-scope="phone-input"
      >
        <Combobox.Control class={ctx.slots.countryControl()}>
          <Combobox.Trigger
            aria-label="Select country"
            class={ctx.slots.countrySelect()}
            disabled={isDisabled()}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
          >
            <InputGroup.Button
              class={ctx.slots.countryButton()}
              disabled={isDisabled()}
              size="sm"
              type="button"
              variant="ghost"
            >
              <Show when={props.value}>
                {(c) => <PhoneInputFlag country={c()} countryName={c()} />}
              </Show>
              <Show when={callingCode()}>
                {(code) => <span>+{code()}</span>}
              </Show>
              <CaretUpDownIcon aria-hidden class={ctx.slots.countryCaret()} />
            </InputGroup.Button>
          </Combobox.Trigger>
        </Combobox.Control>
      </InputGroup.Addon>
      <Combobox.Content
        {...ctx.popupProps}
        class={ctx.slots.popup({ class: ctx.classNames?.popup })}
      >
        <div class={ctx.slots.searchGroup()}>
          <InputGroup size={ctx.size}>
            <Combobox.FieldInput
              asChild={(inputProps) => (
                <InputGroup.Input
                  {...inputProps()}
                  class={ctx.slots.search({ class: ctx.classNames?.search })}
                  placeholder="Search country..."
                />
              )}
            />
          </InputGroup>
        </div>
        <Combobox.List>
          <For each={items()}>
            {(item) => (
              <Combobox.Item item={item}>
                <PhoneInputFlag country={item.value} countryName={item.label} />
                <span class={ctx.slots.itemLabel()}>{item.label}</span>
                <span class={ctx.slots.itemCode()}>
                  +{getCountryCallingCode(item.value)}
                </span>
              </Combobox.Item>
            )}
          </For>
        </Combobox.List>
        <Combobox.Empty>
          No country found. Try a different search.
        </Combobox.Empty>
      </Combobox.Content>
    </Combobox.Root>
  );
}

function resolveCountry(value: string | undefined, fallback: Country): Country {
  if (!value) return fallback;
  const parsed = parsePhoneNumberFromString(value);
  return (parsed?.country as Country | undefined) ?? fallback;
}

function formatNational(value: string | undefined, country: Country): string {
  if (!value) return "";
  const parsed = parsePhoneNumberFromString(value);
  if (parsed) {
    try {
      return parsed.formatNational();
    } catch {
      return parsed.nationalNumber;
    }
  }
  return new AsYouType(country).input(value);
}

export function PhoneInput(props: PhoneInputProps): JSX.Element {
  const [local] = splitProps(props, [
    "size",
    "variant",
    "defaultCountry",
    "disabled",
    "invalid",
    "value",
    "inputProps",
    "popupProps",
    "onChange",
    "onBlur",
    "onFocus",
    "recipe",
    "class",
    "classNames",
    "readOnly",
    "placeholder",
    "name",
    "id",
  ]);

  const size = () => local.size ?? "md";
  const recipe = () => local.recipe ?? phoneInputRecipe;
  const slots = createMemo(() => recipe()({ size: size() }));
  const defaultCountry = () => local.defaultCountry ?? ("US" as Country);

  const [internalCountry, setInternalCountry] = createSignal<Country>(
    resolveCountry(local.value, defaultCountry()),
  );
  const [display, setDisplay] = createSignal(
    formatNational(local.value, internalCountry()),
  );

  const country = createMemo(() => {
    if (local.value !== undefined) {
      return resolveCountry(local.value, internalCountry());
    }
    return internalCountry();
  });

  createEffect(() => {
    if (local.value !== undefined) {
      const nextCountry = resolveCountry(local.value, defaultCountry());
      setInternalCountry(nextCountry);
      setDisplay(formatNational(local.value, nextCountry));
    }
  });

  const options = createMemo<CountrySelectOption[]>(() =>
    getCountries()
      .map((code) => ({ label: countryLabel(code), value: code }))
      .sort((a, b) => a.label.localeCompare(b.label)),
  );

  const emitValue = (nextDisplay: string, nextCountry: Country) => {
    const formatter = new AsYouType(nextCountry);
    const formatted = formatter.input(nextDisplay);
    setDisplay(formatted);
    const number = formatter.getNumber();
    const e164 =
      number?.number ??
      (formatted
        ? `+${getCountryCallingCode(nextCountry)}${formatted.replace(/\D/g, "")}`
        : "");
    local.onChange?.(
      number?.format("E.164") ?? (e164.startsWith("+") ? e164 : ""),
    );
  };

  const contextValue = createMemo(() => ({
    classNames: local.classNames,
    inputProps: local.inputProps,
    invalid: local.invalid,
    popupProps: local.popupProps,
    size: size() as NonNullable<PhoneInputVariantProps["size"]>,
    slots: slots(),
    variant: local.variant,
  }));

  return (
    <PhoneInputContext value={contextValue()}>
      <PhoneInputContainer
        class={cn(local.class)}
        data-disabled={local.disabled || undefined}
      >
        <PhoneInputCountrySelect
          disabled={local.disabled}
          onBlur={local.onBlur}
          onChange={(next) => {
            const code = next ?? defaultCountry();
            setInternalCountry(code);
            emitValue(display(), code);
          }}
          onFocus={local.onFocus}
          options={options()}
          readOnly={local.readOnly}
          value={country()}
        />
        <InputGroup.Input
          {...local.inputProps}
          aria-invalid={local.invalid || undefined}
          autocomplete={local.inputProps?.autocomplete ?? "tel"}
          class={slots().input({ class: local.classNames?.input })}
          disabled={local.disabled}
          id={local.id}
          name={local.name}
          onBlur={local.onBlur}
          onFocus={local.onFocus}
          onInput={(event) => {
            emitValue(event.currentTarget.value, country());
          }}
          placeholder={local.placeholder}
          readOnly={local.readOnly}
          size={size()}
          type="tel"
          value={display()}
        />
      </PhoneInputContainer>
    </PhoneInputContext>
  );
}
