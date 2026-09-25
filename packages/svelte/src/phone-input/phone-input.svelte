<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
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
import CaretUpDownIcon from "phosphor-svelte/lib/CaretUpDownIcon";
import GlobeIcon from "phosphor-svelte/lib/GlobeIcon";
import type { ComponentProps } from "svelte";
import { Combobox } from "../components/combobox";
import type ComboboxContent from "../components/combobox/combobox-content.svelte";
import type Input from "../components/input/input.svelte";
import { InputGroup } from "../components/input-group";
import { setPhoneInputContext } from "./phone-input.context";
import { phoneInputFlags } from "./phone-input-flags";

type FormControlVariant = "primary" | "secondary";
type PhoneInputClassNames = Partial<Record<Exclude<PhoneInputRecipeSlot, "base">, string>>;
type Country = CountryCode;

type Props = PhoneInputVariantProps & {
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
  class?: string | undefined;
  recipe?: typeof phoneInputRecipe;
  classNames?: PhoneInputClassNames;
  inputProps?: Omit<
    ComponentProps<typeof Input>,
    "class" | "onChange" | "onBlur" | "size" | "type" | "value"
  >;
  popupProps?: Omit<ComponentProps<typeof ComboboxContent>, "class" | "children">;
};

let {
  size = "md",
  variant,
  defaultCountry = "US" as Country,
  disabled,
  invalid,
  value = undefined,
  inputProps,
  popupProps,
  onChange,
  onBlur,
  onFocus,
  recipe = phoneInputRecipe,
  class: className,
  classNames,
  readOnly,
  placeholder,
  name,
  id,
}: Props = $props();

const slots = $derived(recipe({ size }));

let internalCountry = $state<Country>("US" as Country);
let display = $state("");

// Initialize uncontrolled display/country once from props.
internalCountry = resolveCountry(value, defaultCountry);
display = formatNational(value, internalCountry);

const country = $derived(
  value !== undefined ? resolveCountry(value, internalCountry) : internalCountry,
);

$effect(() => {
  if (value !== undefined) {
    const nextCountry = resolveCountry(value, defaultCountry);
    internalCountry = nextCountry;
    display = formatNational(value, nextCountry);
  }
});

const options = $derived(
  getCountries()
    .map((code) => ({ label: countryLabel(code), value: code as Country }))
    .sort((a, b) => a.label.localeCompare(b.label)),
);

const collection = $derived(createListCollection({ items: options }));
const callingCode = $derived(country ? getCountryCallingCode(country) : "");
const isDisabled = $derived(Boolean(disabled || readOnly));

setPhoneInputContext({
  get classNames() {
    return classNames;
  },
  get inputProps() {
    return inputProps;
  },
  get invalid() {
    return invalid;
  },
  get popupProps() {
    return popupProps;
  },
  get size() {
    return size as NonNullable<PhoneInputVariantProps["size"]>;
  },
  get slots() {
    return slots;
  },
  get variant() {
    return variant;
  },
});

function countryLabel(code: Country): string {
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
}

function resolveCountry(val: string | undefined, fallback: Country): Country {
  if (!val) return fallback;
  const parsed = parsePhoneNumberFromString(val);
  return (parsed?.country as Country | undefined) ?? fallback;
}

function formatNational(val: string | undefined, nextCountry: Country): string {
  if (!val) return "";
  const parsed = parsePhoneNumberFromString(val);
  if (parsed) {
    try {
      return parsed.formatNational();
    } catch {
      return parsed.nationalNumber;
    }
  }
  return new AsYouType(nextCountry).input(val);
}

function emitValue(nextDisplay: string, nextCountry: Country) {
  const formatter = new AsYouType(nextCountry);
  const formatted = formatter.input(nextDisplay);
  display = formatted;
  const number = formatter.getNumber();
  const e164 =
    number?.number ??
    (formatted ? `+${getCountryCallingCode(nextCountry)}${formatted.replace(/\D/g, "")}` : "");
  onChange?.(number?.format("E.164") ?? (e164.startsWith("+") ? e164 : ""));
}

function handleCountryChange(nextValue: string[]) {
  const code = (nextValue[0] as Country | undefined) ?? defaultCountry;
  internalCountry = code;
  emitValue(display, code);
}
</script>

<InputGroup
  class={cn(className)}
  data-disabled={disabled || undefined}
  data-part="root"
  data-scope="phone-input"
  data-size={size}
  {size}
  {variant}
>
  <Combobox.Root
    class={slots.countryRoot()}
    {collection}
    disabled={isDisabled}
    onValueChange={handleCountryChange}
    positioning={{ sameWidth: false }}
    value={country ? [country] : []}
  >
    <InputGroup.Addon
      align="inline-start"
      class={slots.countryTrigger({ class: classNames?.countryTrigger })}
      data-part="country-trigger"
      data-scope="phone-input"
    >
      <Combobox.Control class={slots.countryControl()}>
        <Combobox.Trigger
          aria-label="Select country"
          class={slots.countrySelect()}
          disabled={isDisabled}
          onblur={onBlur}
          onfocus={onFocus}
        >
          <InputGroup.Button
            class={slots.countryButton()}
            disabled={isDisabled}
            size="sm"
            type="button"
            variant="ghost"
          >
            {#if country}
              {#if phoneInputFlags[country]}
                <span
                  aria-label={country}
                  class={cn(slots.flagEmoji(), slots.flag({ class: classNames?.flag }))}
                  role="img"
                >
                  {phoneInputFlags[country]}
                </span>
              {:else}
                <GlobeIcon
                  aria-hidden
                  class={cn(slots.flagIcon(), slots.flag({ class: classNames?.flag }))}
                />
              {/if}
            {/if}
            {#if callingCode}
              <span>+{callingCode}</span>
            {/if}
            <CaretUpDownIcon aria-hidden class={slots.countryCaret()} />
          </InputGroup.Button>
        </Combobox.Trigger>
      </Combobox.Control>
    </InputGroup.Addon>
    <Combobox.Content {...popupProps} class={slots.popup({ class: classNames?.popup })}>
      <div class={slots.searchGroup()}>
        <InputGroup {size}>
          <Combobox.Input
            class={slots.search({ class: classNames?.search })}
            placeholder="Search country..."
          />
        </InputGroup>
      </div>
      <Combobox.List>
        {#each options as item (item.value)}
          <Combobox.Item {item}>
            {#if phoneInputFlags[item.value]}
              <span aria-label={item.label} class={cn(slots.flagEmoji(), slots.flag())} role="img">
                {phoneInputFlags[item.value]}
              </span>
            {:else}
              <GlobeIcon aria-hidden class={cn(slots.flagIcon(), slots.flag())} />
            {/if}
            <span class={slots.itemLabel()}>{item.label}</span>
            <span class={slots.itemCode()}>+{getCountryCallingCode(item.value)}</span>
          </Combobox.Item>
        {/each}
      </Combobox.List>
      <Combobox.Empty>No country found. Try a different search.</Combobox.Empty>
    </Combobox.Content>
  </Combobox.Root>

  <InputGroup.Input
    {...inputProps}
    aria-invalid={invalid || undefined}
    autocomplete={inputProps?.autocomplete ?? "tel"}
    class={slots.input({ class: classNames?.input })}
    {disabled}
    {id}
    {name}
    onblur={onBlur}
    onfocus={onFocus}
    oninput={(event) => {
  emitValue(event.currentTarget.value, country);
}}
    {placeholder}
    readonly={readOnly}
    {size}
    type="tel"
    value={display}
  />
</InputGroup>
