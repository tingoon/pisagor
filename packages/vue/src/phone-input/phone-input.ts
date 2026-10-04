import { createListCollection } from "@ark-ui/vue/collection";
import { PhCaretUpDown, PhGlobe } from "@phosphor-icons/vue";
import type { PhoneInputProps as BasePhoneInputProps } from "@pisagor/props";
import { type PhoneInputRecipeSlot, phoneInputRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import {
  AsYouType,
  type CountryCode,
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import { computed, defineComponent, h, type PropType, ref, watch } from "vue";
import { Combobox } from "../components/combobox";
import type { InputProps } from "../components/input";
import { InputGroup } from "../components/input-group";
import type { ClassValue, VariantClassNames } from "../internal/types";
import { phoneInputFlags } from "./phone-input-flags";

type FormControlVariant = "primary" | "secondary";
type ArkPart = Parameters<typeof h>[0];
type PhoneInputClassNames = VariantClassNames<PhoneInputRecipeSlot>;

// #region Types
export type Country = CountryCode;

interface CountrySelectOption {
  label: string;
  value: Country;
}

export interface PhoneInputProps extends BasePhoneInputProps {
  /**
   * Visual shell variant. Defaults to `primary`.
   */
  variant?: FormControlVariant;
  /**
   * Default country when no value is provided.
   *
   * @defaultValue "US"
   */
  defaultCountry?: Country;
  /** Whether the input is in an invalid state. */
  invalid?: boolean;
  /** Current phone number in E.164 format. */
  value?: string;
  /** Called with the E.164 phone number when the value changes. */
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  name?: string;
  id?: string;
  class?: ClassValue;
  classNames?: PhoneInputClassNames;
  /** Tel input props (except owned render/value props). */
  inputProps?: Omit<
    InputProps,
    | "class"
    | "onChange"
    | "onValueChange"
    | "onBlur"
    | "size"
    | "type"
    | "value"
    | "defaultValue"
  >;
  /** Country dropdown props (Combobox.Content, except `class` and children). */
  popupProps?: Record<string, unknown>;
}
// #endregion

function countryLabel(code: Country): string {
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
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

function renderFlag(
  slots: ReturnType<typeof phoneInputRecipe>,
  classNames: PhoneInputClassNames | undefined,
  country: Country | undefined,
  countryName?: string,
) {
  const flagClass = slots.flag({ class: classNames?.flag });
  const emoji = country ? phoneInputFlags[country] : undefined;

  if (!emoji) {
    return h(PhGlobe, {
      "aria-hidden": true,
      class: cn(slots.flagIcon(), flagClass),
    });
  }

  return h(
    "span",
    {
      "aria-label": countryName,
      class: cn(slots.flagEmoji(), flagClass),
      role: "img",
    },
    emoji,
  );
}

// #region Component
export const PhoneInput = defineComponent({
  inheritAttrs: false,
  name: "PhoneInput",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<PhoneInputClassNames | undefined>,
    },
    defaultCountry: {
      default: "US" as Country,
      type: String as PropType<Country | undefined>,
    },
    disabled: { default: undefined, type: Boolean },
    id: { default: undefined, type: String },
    inputProps: {
      default: undefined,
      type: Object as PropType<PhoneInputProps["inputProps"] | undefined>,
    },
    invalid: { default: undefined, type: Boolean },
    name: { default: undefined, type: String },
    onBlur: {
      default: undefined,
      type: Function as PropType<PhoneInputProps["onBlur"]>,
    },
    onChange: {
      default: undefined,
      type: Function as PropType<PhoneInputProps["onChange"]>,
    },
    onFocus: {
      default: undefined,
      type: Function as PropType<PhoneInputProps["onFocus"]>,
    },
    placeholder: { default: undefined, type: String },
    popupProps: {
      default: undefined,
      type: Object as PropType<PhoneInputProps["popupProps"] | undefined>,
    },
    readOnly: { default: undefined, type: Boolean },
    recipe: {
      default: phoneInputRecipe,
      type: Function as PropType<typeof phoneInputRecipe>,
    },
    size: {
      default: "md",
      type: String as PropType<PhoneInputProps["size"]>,
    },
    value: { default: undefined, type: String as PropType<string | undefined> },
    variant: {
      default: undefined,
      type: String as PropType<FormControlVariant | undefined>,
    },
  },
  setup(props, { attrs }) {
    const resolvedDefaultCountry = computed(
      () => props.defaultCountry ?? ("US" as Country),
    );

    const internalCountry = ref<Country>(
      resolveCountry(props.value, resolvedDefaultCountry.value),
    );
    const display = ref(formatNational(props.value, internalCountry.value));

    watch(
      () => props.value,
      (value) => {
        if (value !== undefined) {
          const nextCountry = resolveCountry(
            value,
            resolvedDefaultCountry.value,
          );
          internalCountry.value = nextCountry;
          display.value = formatNational(value, nextCountry);
        }
      },
    );

    const country = computed(() =>
      props.value !== undefined
        ? resolveCountry(props.value, internalCountry.value)
        : internalCountry.value,
    );

    const options = computed<CountrySelectOption[]>(() =>
      getCountries()
        .map((code) => ({
          label: countryLabel(code),
          value: code as Country,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    );

    const collection = computed(() =>
      createListCollection({ items: options.value }),
    );

    const emitValue = (nextDisplay: string, nextCountry: Country) => {
      const formatter = new AsYouType(nextCountry);
      const formatted = formatter.input(nextDisplay);
      display.value = formatted;
      const number = formatter.getNumber();
      const e164 =
        number?.number ??
        (formatted
          ? `+${getCountryCallingCode(nextCountry)}${formatted.replace(/\D/g, "")}`
          : "");
      props.onChange?.(
        number?.format("E.164") ?? (e164.startsWith("+") ? e164 : ""),
      );
    };

    return () => {
      const size = props.size ?? "md";
      const slots = props.recipe({ size });
      const isDisabled = Boolean(props.disabled || props.readOnly);
      const callingCode = country.value
        ? getCountryCallingCode(country.value)
        : "";
      const classNames = props.classNames;

      return h(
        InputGroup as ArkPart,
        {
          ...attrs,
          class: cn(props.class, (attrs as { class?: ClassValue }).class),
          "data-disabled": props.disabled || undefined,
          "data-part": "root",
          "data-scope": "phone-input",
          "data-size": size,
          size,
          variant: props.variant,
        },
        () => [
          h(
            Combobox.Root as ArkPart,
            {
              class: slots.countryRoot(),
              collection: collection.value,
              disabled: isDisabled,
              onValueChange: (nextValue: string[]) => {
                const code =
                  (nextValue[0] as Country | undefined) ??
                  resolvedDefaultCountry.value;
                internalCountry.value = code;
                emitValue(display.value, code);
              },
              positioning: { sameWidth: false },
              value: country.value ? [country.value] : [],
            },
            () => [
              h(
                InputGroup.Addon as ArkPart,
                {
                  align: "inline-start",
                  class: slots.countryTrigger({
                    class: classNames?.countryTrigger,
                  }),
                  "data-part": "country-trigger",
                  "data-scope": "phone-input",
                },
                () =>
                  h(
                    Combobox.Control as ArkPart,
                    { class: slots.countryControl() },
                    () =>
                      h(
                        Combobox.Trigger as ArkPart,
                        {
                          "aria-label": "Select country",
                          class: slots.countrySelect(),
                          disabled: isDisabled,
                          onBlur: props.onBlur,
                          onFocus: props.onFocus,
                        },
                        () =>
                          h(
                            InputGroup.Button as ArkPart,
                            {
                              class: slots.countryButton(),
                              disabled: isDisabled,
                              size: "sm",
                              type: "button",
                              variant: "ghost",
                            },
                            () => [
                              country.value
                                ? renderFlag(
                                    slots,
                                    classNames,
                                    country.value,
                                    country.value,
                                  )
                                : null,
                              callingCode
                                ? h("span", null, `+${callingCode}`)
                                : null,
                              h(PhCaretUpDown, {
                                "aria-hidden": true,
                                class: slots.countryCaret(),
                              }),
                            ],
                          ),
                      ),
                  ),
              ),
              h(
                Combobox.Content as ArkPart,
                {
                  ...props.popupProps,
                  class: slots.popup({ class: classNames?.popup }),
                },
                () => [
                  h("div", { class: slots.searchGroup() }, () =>
                    h(InputGroup as ArkPart, { size }, () =>
                      h(Combobox.FieldInput as ArkPart, { asChild: true }, () =>
                        h(InputGroup.Input as ArkPart, {
                          class: slots.search({
                            class: classNames?.search,
                          }),
                          placeholder: "Search country...",
                        }),
                      ),
                    ),
                  ),
                  h(Combobox.List as ArkPart, null, () =>
                    options.value.map((item) =>
                      h(
                        Combobox.Item as ArkPart,
                        { item, key: item.value },
                        () => [
                          renderFlag(slots, classNames, item.value, item.label),
                          h("span", { class: slots.itemLabel() }, item.label),
                          h(
                            "span",
                            { class: slots.itemCode() },
                            `+${getCountryCallingCode(item.value)}`,
                          ),
                        ],
                      ),
                    ),
                  ),
                  h(
                    Combobox.Empty as ArkPart,
                    null,
                    () => "No country found. Try a different search.",
                  ),
                ],
              ),
            ],
          ),
          h(
            InputGroup.Input as ArkPart,
            {
              ...props.inputProps,
              "aria-invalid": props.invalid || undefined,
              autocomplete:
                (props.inputProps as { autocomplete?: string } | undefined)
                  ?.autocomplete ?? "tel",
              class: slots.input({ class: classNames?.input }),
              disabled: props.disabled,
              id: props.id,
              name: props.name,
              onBlur: props.onBlur,
              onFocus: props.onFocus,
              onValueChange: (next: string) => {
                emitValue(next, country.value);
              },
              placeholder: props.placeholder,
              readOnly: props.readOnly,
              size,
              type: "tel",
              value: display.value,
            } as unknown as Parameters<typeof h>[1],
          ),
        ],
      );
    };
  },
});
// #endregion
