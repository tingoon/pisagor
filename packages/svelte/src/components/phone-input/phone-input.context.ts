import type { PhoneInputContract } from "@pisagor/contracts";
import type {
  PhoneInputRecipe,
  PhoneInputVariantProps,
} from "@pisagor/recipes";
import type { ComponentProps } from "svelte";
import type ComboboxContent from "../combobox/combobox-content.svelte";
import type Input from "../input/input.svelte";
import { createContext } from "../../utils/create-context";

type FormControlVariant = "primary" | "secondary";
type PhoneInputSize = NonNullable<PhoneInputVariantProps["size"]>;

export interface PhoneInputContextValue {
  classNames?: PhoneInputContract["classNames"];
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

const ctx = createContext("PhoneInput")<PhoneInputContextValue>();
export const setPhoneInputContext = ctx.setContext;
