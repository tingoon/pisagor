import type {
  PhoneInputRecipe,
  PhoneInputRecipeSlot,
  PhoneInputVariantProps,
} from "@pisagor/recipes/phone-input";
import type { ComponentProps } from "svelte";
import type ComboboxContent from "../components/combobox/combobox-content.svelte";
import type Input from "../components/input/input.svelte";
import { createContext } from "../utils/create-context";

type FormControlVariant = "primary" | "secondary";
type PhoneInputClassNames = Partial<
  Record<Exclude<PhoneInputRecipeSlot, "base">, string>
>;
type PhoneInputSize = NonNullable<PhoneInputVariantProps["size"]>;

export interface PhoneInputContextValue {
  classNames?: PhoneInputClassNames;
  inputProps?: Omit<
    ComponentProps<typeof Input>,
    "class" | "onChange" | "onBlur" | "size" | "type" | "value"
  >;
  invalid?: boolean;
  popupProps?: Omit<
    ComponentProps<typeof ComboboxContent>,
    "class" | "children"
  >;
  size: PhoneInputSize;
  slots: PhoneInputRecipe;
  variant?: FormControlVariant;
}

const ctx = createContext<PhoneInputContextValue>({ name: "PhoneInput" });
export const setPhoneInputContext = ctx.setContext;
export const usePhoneInput = ctx.getContext;
